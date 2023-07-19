import { IgtFeature, KeyItem, KeyItemSaveData } from "@/igt-library";
import { KeyItemId } from "@/igt-library/features/key-items/KeyItemId";
import { useKeyItemStore } from "./key-items-store";

export class IgtKeyItemsStore extends IgtFeature {
    store = useKeyItemStore();

    hasKeyItem(id: KeyItemId): boolean {
        return this.getKeyItem(id)?.isUnlocked;
    }
    gainKeyItem(id: KeyItemId) {
        const item = this.getKeyItem(id);
        if (!item) {
            console.warn(`Key Item with id ${id} could not be found`);
            return;
        }
        const didUnlock = item.unlock();
        if (didUnlock) {
            // this._onKeyItemGain.dispatch(item);
            this.store.keyItemGain(item);
        }
    }
    getKeyItem(id: KeyItemId): KeyItem {
        return this.store.list[id];
    }
    public registerKeyItem<T extends KeyItem>(keyItem: T): T {
        this.store.list[keyItem.id] = keyItem;
        return keyItem
    }
    load(data: KeyItemSaveData): void {
        data.list?.forEach(id => {
            const item = this.getKeyItem(id);
            if (item) {
                item.isUnlocked = true;
            }
        })
    }
    save(): KeyItemSaveData {
        const list = [];
        for (const key in this.store.list) {
            if (this.store.list[key].isUnlocked) {
                list.push(key)
            }
        }
        return {
            list: list,
        };    }

    constructor(saveKey: string = "key-items") {
        super(saveKey);
    }
}