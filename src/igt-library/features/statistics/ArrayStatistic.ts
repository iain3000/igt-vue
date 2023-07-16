import {AbstractStatistic} from "@/igt-library/features/statistics/AbstractStatistic";
import {StatisticId} from "@/igt-library/features/statistics/StatisticId";

export class ArrayStatistic extends AbstractStatistic {
    value: number[];

    constructor(id: StatisticId, description: string, value: number[]) {
        super(id, description);
        this.value = value;
    }


}