import {IgtFeature} from "@/igt-library/features/IgtFeature";
import {SaveData} from "@/igt-library/tools/saving/SaveData";
import {IgtFeatures} from "@/igt-library/IgtFeatures";
import {EmptyItem} from "@/igt-library/features/items/EmptyItem";
import {ItemId} from "@/igt-library/features/items/ItemId";
import {AbstractItem} from "@/igt-library/features/items/AbstractItem";

export abstract class IgtItemList extends IgtFeature {

    protected constructor(saveKey: string = 'item-list') {
        super(saveKey);
    }

    initialize(features: IgtFeatures): void {
        super.initialize(features);
    }

    get empty(): EmptyItem {
        return new EmptyItem();
    }

    load(): void {
        // Empty
    }

    save(): SaveData {
        return {}
    }

    abstract getItem(id: ItemId): AbstractItem;
}
