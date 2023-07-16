import {LootTableId} from "@/igt-library/tools/loot-tables/LootTableId";
import {LootTables} from "@/igt-library/features/loot-tables/LootTables";
import {IgtLootEntry} from "@/igt-library/tools/loot-tables/entries/IgtLootEntry";
import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";
import {IntRange} from "@/igt-library/tools/probability/IntRange";
import {IgtLoot} from "@/igt-library/tools/loot-tables/rewards/IgtLoot";

export class TableEntry extends IgtLootEntry {
    _lootTables: LootTables;
    table: LootTableId;

    constructor(table: LootTableId, lootTables: LootTables, weight: number = 1, amount: IntRange = new IntRange(1, 1), requirement: Requirement = new NoRequirement()) {
        super(weight, amount, requirement);
        this.table = table;
        this._lootTables = lootTables;
    }

    getLoot(): IgtLoot[] {
        return this._lootTables.getTable(this.table).getLoot();
    }

}
