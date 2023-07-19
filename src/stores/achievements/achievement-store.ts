import { Achievement } from "incremental-game-template";
import { AchievementId } from "@/igt-library/features/achievements/AchievementId";
import { defineStore } from "pinia";

export const useAchievementStore = defineStore('achievement', {
    state: () => ({
        achievements: {} as Record<AchievementId, Achievement>,
    }),
    actions: {
        popAchievement(achievement: Achievement) {
            return achievement;
        }
    },
    getters: {},
})