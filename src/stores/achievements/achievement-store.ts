import { Achievement } from "@/ig-template";
import { AchievementId } from "@/ig-template/features/achievements/AchievementId";
import { defineStore } from "pinia";

export const useAchievementStore = defineStore('achievement', {
    state: () => ({
        achievements: {} as Record<AchievementId, Achievement>,
    }),
    actions: {
        // gainCurrency(currency: Currency) {
        //     this.$state.currencies[currency.type] += currency.amount;
        // }
        popAchivement(achievement: Achievement) {
            return achievement;
        }
    },
    getters: {},
})