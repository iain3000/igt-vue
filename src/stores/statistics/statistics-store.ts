import { AbstractStatistic } from "incremental-game-template";
import { StatisticId } from "incremental-game-template/lib/ig-template/features/statistics/StatisticId";
import { defineStore } from "pinia";

export const useStatisticsStore = defineStore("statistics", {
    state: () => ({
        list: {} as Record<StatisticId, AbstractStatistic>
    })
})