import { AbstractItem, InventorySlot } from "incremental-game-template";
import { ItemId } from "@/igt-library/features/items/ItemId";
import { defineStore } from "pinia";

export const useInventoryStore = defineStore('inventory', {
    state: () => ({
        slots: [] as InventorySlot[],
        slotCount: 10
    }),
    actions: {
        _gainItem(item: AbstractItem, amount: number = 1): number {

            // Find stack and add to it or create a new one
            const nonFullStackIndex = this.getIndexOfNonFullStack(item.id);
            if (nonFullStackIndex === -1) {
                // Create a new stack
                const emptyIndex = this.getIndexOfFirstEmptySlot;
                if (emptyIndex === -1) {
                    console.log(`Cannot add ${amount} of ${item.id}, no empty slots left`);
                    return amount;
                }
                const amountToAdd = Math.min(amount, item.maxStack);
                this.slots.splice(emptyIndex, 1, new InventorySlot(item, amountToAdd));
    
                const amountLeft = amount - amountToAdd;
                if (amountLeft <= 0) {
                    return 0;
                }
                return this._gainItem(item, amountLeft);
            } else {
                // Add to existing stack
                const amountToAdd = Math.min(amount, this.slots[nonFullStackIndex].spaceLeft());
    
                this.slots[nonFullStackIndex].gainItems(amountToAdd);
                const amountLeft = amount - amountToAdd;
                if (amountLeft <= 0) {
                    return 0;
                }
                return this._gainItem(item, amountLeft);
            }
        },
        getIndexOfNonFullStack(id: ItemId): number {
            for (let i = 0; i < this.slots.length; i++) {
                if (this.slots[i].item.id === id && !this.slots[i].isFull()) {
                    return i;
                }
            }
            return -1;
        }
    },
    getters: {
        getIndexOfFirstEmptySlot: (state) => {
            for (let i = 0; i < state.slots.length; i++) {
                if (state.slots[i].isEmpty()) {
                    return i;
                }
            }
            return -1;
        }
    },
})