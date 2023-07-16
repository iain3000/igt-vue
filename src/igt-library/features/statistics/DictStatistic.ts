import {AbstractStatistic} from "@/igt-library/features/statistics/AbstractStatistic";
import {StatisticId} from "@/igt-library/features/statistics/StatisticId";

export class DictStatistic extends AbstractStatistic {
    value: {[key: string]: number};

    constructor(id: StatisticId, description: string, value: {[key: string]: number}) {
        super(id, description);
        this.value = value;
    }

}