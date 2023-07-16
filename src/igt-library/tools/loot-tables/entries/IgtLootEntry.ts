import {IntRange} from "@/igt-library/tools/probability/IntRange";
import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";
import {IgtLoot} from "@/igt-library/tools/loot-tables/rewards/IgtLoot";

export abstract class IgtLootEntry {
    public weight: number;
    public amount: IntRange;
    public requirement: Requirement;


    protected constructor(weight: number = 1, amount: IntRange = new IntRange(1, 1), requirement: Requirement = new NoRequirement()) {
        this.weight = weight;
        this.amount = amount;
        this.requirement = requirement;
    }

    public canGet(): boolean {
        return this.requirement.isCompleted
    }

    public abstract getLoot(): IgtLoot[];
}
