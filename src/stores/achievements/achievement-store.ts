import { Achievement } from "@/ig-template";
import { AchievementId } from "@/ig-template/features/achievements/AchievementId";
import { defineStore } from "pinia";

export const useAchievementStore = defineStore('achievement', {
    state: () => ({
        achievements: {} as Record<AchievementId, Achievement>,
    }),
    actions: {
        popAchivement(achievement: Achievement) {
            return achievement;
        }
    },
    getters: {},
})