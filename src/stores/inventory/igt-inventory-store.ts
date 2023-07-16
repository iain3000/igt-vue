import { AbstractConsumable, AbstractItem, EmptyItem, IgtFeature, InventorySaveData, InventorySlot, SaveData } from "@/igt-library";
import { useInventoryStore } from "./inventory-store";
import { ItemId } from "@/igt-library/features/items/ItemId";

export class IgtInventoryStore extends IgtFeature {
    store = useInventoryStore();

    loseItemAmount(id: string, amount: number) {
        // While we still need to remove and have items left
        while (amount > 0 && this.getTotalAmount(id) > 0) {
            const nonFullStackIndex = this.store.getIndexOfNonFullStack(id)
            const indexToUse = nonFullStackIndex !== -1 ? nonFullStackIndex : this.getIndexOfItem(id);
            if (indexToUse === -1) {
                throw Error(`Index of item ${id} to lose is -1. This suggests an error in inventory management`);
            }
            const amountToRemove = Math.min(amount, this.store.slots[indexToUse].amount);
            amount -= amountToRemove;
            this.loseItemAtIndex(indexToUse, amountToRemove);

        }

        return amount;    
    }

    canTakeItem(item: AbstractItem, amount: number): boolean {
        return this.getSpotsLeftForItem(item) >= amount;
    }
    getSpotsLeftForItem(item: AbstractItem): number {
        let total = 0;
        for (const inventoryItem of this.store.slots) {
            if (inventoryItem.isEmpty()) {
                total += item.maxStack;
            } else if (inventoryItem.item.id === item.id) {
                total += inventoryItem.spaceLeft();
            }
        }
        return total;    }
    getIndexOfItem(id: ItemId): number {
        for (let i = 0; i < this.store.slots.length; i++) {
            if (this.store.slots[i].item.id === id) {
                return i;
            }
        }
        return -1;    }
    consumeItem(index: number, amount: number = 1) {
        const inventoryItem = this.store.slots[index];
        const item = inventoryItem.item;

        if (!(item instanceof AbstractConsumable)) {
            console.warn(`Item ${item} is not a consumable`);
            return false;
        }
        if (inventoryItem.amount < amount) {
            console.warn(`Amount of ${inventoryItem} is not greater than ${amount}`);
            return false;
        }
        if (!item.canConsume()) {
            console.warn("Cannot consume item, check its restrictions for the reason");
            return false;
        }

        if (amount === 1) {
            item.consume();
        } else {
            item.consumeMultiple(amount);
        }
        this.loseItemAtIndex(index, amount);
        return true;
    }
    interactIndices(indexFrom: number, indexTo: number) {
        if (indexFrom === indexTo) {
            return;
        }

        const itemFrom: InventorySlot = this.store.slots[indexFrom];

        if (itemFrom.isEmpty()) {
            console.warn("Cannot interact with empty item");
            return;
        }
        const itemTo: InventorySlot = this.store.slots[indexTo];

        if (itemFrom.item.id === itemTo.item.id) {
            this.mergeItems(itemFrom, itemTo);
            return;
        }

        this.swapItems(indexFrom, indexTo);
        return;    
    }
    swapItems(indexFrom: number, indexTo: number) {
        const temp = this.store.slots[indexFrom];
        this.store.slots.splice(indexFrom, 1, this.store.slots[indexTo]);
        this.store.slots.splice(indexTo, 1, temp);
    }
    mergeItems(itemFrom: InventorySlot, itemTo: InventorySlot) {
        if (itemFrom.item.id !== itemTo.item.id) {
            throw new Error(`Cannot merge items of types ${itemFrom.item.id} and ${itemTo.item.id}`);
        }

        const amount = Math.min(itemFrom.amount, itemTo.spaceLeft());
        itemFrom.loseItems(amount);
        itemTo.gainItems(amount);
    }
    getAmount(index: number): number {
        return this.store.slots[index].amount;
    }
    dropStack(index: number) {
        this.loseItemAtIndex(index, this.store.slots[index].amount);
    }
    loseItemAtIndex(index: number, amount: number = 1) {
        this.store.slots[index].loseItems(amount);
        if (this.store.slots[index].amount <= 0) {
            this.store.slots.splice(index, 1, new InventorySlot(new EmptyItem(), 0));
        }
    }
    hasNonFullStack(id: ItemId): boolean {
        return this.store.getIndexOfNonFullStack(id) !== -1;
    }
    getTotalAmount(id: ItemId): number {
        let total = 0;
        for (const inventoryItem of this.store.slots) {
            if (inventoryItem.item.id === id) {
                total += inventoryItem.amount;
            }
        }
        return total;    }
    hasEmptySlot(): boolean {
        return this.store.getIndexOfFirstEmptySlot !== -1;
    }
    gainItem(item: AbstractItem, amount: number = 1): number {
        const amountLeft = this.store._gainItem(item, amount);
        // this._onItemGain.dispatch(item, amount);
        return amountLeft;
    }
    getEmptySlotCount(): number {
        let count = 0;
        for (const inventoryItem of this.store.slots) {
            if (inventoryItem.isEmpty()) {
                count++;
            }
        }
        return count;
    }
    isEmpty(): boolean {
        for (const item of this.store.slots) {
            if (item.amount != 0) {
                return false;
            }
        }
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load(data: InventorySaveData): void {
        throw new Error("Method not implemented.");
    }
    save(): SaveData {
        throw new Error("Method not implemented.");
    }
    
    constructor(slots: number = 10, saveKey: string = 'inventory') {
        super(saveKey);
        this.store.slotCount = slots;
        this.store.slots = new Array(this.store.slotCount).fill(new InventorySlot(new EmptyItem(), 0)) as InventorySlot[];
    }
}