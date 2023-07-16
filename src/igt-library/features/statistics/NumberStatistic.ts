import {AbstractStatistic} from "@/igt-library/features/statistics/AbstractStatistic";
import {StatisticId} from "@/igt-library/features/statistics/StatisticId";

export class NumberStatistic extends AbstractStatistic {
    value: number;

    constructor(id: StatisticId, description: string, value: number = 0) {
        super(id, description);
        this.value = value;
    }

}