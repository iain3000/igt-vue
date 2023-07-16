import {IgtLootEntry} from "@/igt-library/tools/loot-tables/entries/IgtLootEntry";
import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";
import {IntRange} from "@/igt-library/tools/probability/IntRange";
import { IgtKeyItemsStore as IgtKeyItems } from "@/stores/key-items/igt-key-items-store";

import {KeyItemLoot} from "@/igt-library/tools/loot-tables/rewards/KeyItemLoot";
import {KeyItem} from "@/igt-library/features/key-items/KeyItem";

export class KeyItemEntry extends IgtLootEntry {
    _keyItems: IgtKeyItems;
    item: KeyItem;

    constructor(item: KeyItem, KeyItems: IgtKeyItems, weight: number = 1, requirement: Requirement = new NoRequirement()) {
        super(weight, new IntRange(1, 1), requirement);
        this.item = item;
        this._keyItems = KeyItems;
    }

    getLoot(): KeyItemLoot[] {
        if (!this.canGet() || this._keyItems.hasKeyItem(this.item.id)) {
            return [];
        }
        return [new KeyItemLoot(this.item, this._keyItems)];
    }

}
