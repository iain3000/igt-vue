import {IgtFeature} from "@/igt-library/features/IgtFeature";
import {SaveData} from "@/igt-library/tools/saving/SaveData";
import {LootTable} from "@/igt-library/tools/loot-tables/LootTable";
import {LootTableId} from "@/igt-library/tools/loot-tables/LootTableId";

export abstract class LootTables extends IgtFeature {

    protected constructor(saveKey: string = 'loot-tables') {
        super(saveKey);
    }

    abstract getTable(id: LootTableId): LootTable;

    load(): void {
        // Empty
    }

    save(): SaveData {
        return {};
    }

}
