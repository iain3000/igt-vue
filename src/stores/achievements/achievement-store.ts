import { Achievement } from "@/igt-library";
import { AchievementId } from "@/igt-library/features/achievements/AchievementId";
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