import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {ArrayStatistic} from "@/igt-library/features/statistics/ArrayStatistic";

export class ArrayStatisticRequirement extends Requirement {
    statistic: ArrayStatistic;
    index: number
    targetValue: number;


    constructor(statistic: ArrayStatistic, index: number, targetValue: number) {
        super();
        this.statistic = statistic;
        this.index = index;
        this.targetValue = targetValue;
    }

    get actualValue(): number {
        return this.statistic.value[this.index];
    }

    get hint(): string {
        return `The statistic ${this.statistic.description} needs to be at least ${this.targetValue}`;
    }
}
