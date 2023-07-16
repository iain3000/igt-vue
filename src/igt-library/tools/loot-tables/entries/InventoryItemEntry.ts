import {IgtLootEntry} from "@/igt-library/tools/loot-tables/entries/IgtLootEntry";
import {InventoryItemLoot} from "@/igt-library/tools/loot-tables/rewards/InventoryItemLoot";
import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";
import {AbstractItem} from "@/igt-library/features/items/AbstractItem";
import {IntRange} from "@/igt-library/tools/probability/IntRange";
import { IgtInventoryStore as IgtInventory } from "@/stores/inventory/igt-inventory-store";

export class InventoryItemEntry extends IgtLootEntry {
    _inventory: IgtInventory;
    item: AbstractItem;

    constructor(item: AbstractItem, inventory: IgtInventory, weight: number = 1, amount: IntRange = new IntRange(1, 1), requirement: Requirement = new NoRequirement()) {
        super(weight, amount, requirement);
        this.item = item;
        this._inventory = inventory;
    }

    getLoot(): InventoryItemLoot[] {
        if (!this.canGet()) {
            console.warn(`Tried to get loot ${this.item}, but the requirements were not met`);
            return [];
        }
        return [new InventoryItemLoot(this.item, this.amount.getRandomBetween(), this._inventory)];
    }

}
