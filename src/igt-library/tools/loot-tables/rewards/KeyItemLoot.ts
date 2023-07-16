import {IgtLoot} from "@/igt-library/tools/loot-tables/rewards/IgtLoot";
import {IgtKeyItems} from "@/igt-library/features/key-items/IgtKeyItems";
import {KeyItem} from "@/igt-library/features/key-items/KeyItem";

export class KeyItemLoot extends IgtLoot {
    loot: KeyItem;
    _keyItems: IgtKeyItems;


    constructor(loot: KeyItem, keyItems: IgtKeyItems) {
        super(1);
        this.loot = loot;
        this._keyItems = keyItems;
    }

    apply(): void {
        this._keyItems.gainKeyItem(this.loot.id);
    }

    equals(other: IgtLoot): boolean {
        return other instanceof KeyItemLoot && other.loot.id === this.loot.id;
    }

}
