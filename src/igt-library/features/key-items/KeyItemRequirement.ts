import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {IgtKeyItems} from "@/igt-library/features/key-items/IgtKeyItems";
import {KeyItemId} from "@/igt-library/features/key-items/KeyItemId";

export class KeyItemRequirement extends Requirement {
    _keyItems: IgtKeyItems;
    itemId: KeyItemId;

    constructor(keyItems: IgtKeyItems, itemId: KeyItemId) {
        super();
        this._keyItems = keyItems;
        this.itemId = itemId;
    }

    get actualValue(): number {
        return this._keyItems.hasKeyItem(this.itemId) ? 1 : 0;
    }

    get hint(): string {
        return `Unlock the ${this._keyItems.getKeyItem(this.itemId).name}`;
    }

    get targetValue(): number {
        return 1;
    }


}
