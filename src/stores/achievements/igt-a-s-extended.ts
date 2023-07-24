import { IgtAchievements } from "incremental-game-template";
import { useAchievementStore } from "./achievement-store";

export class IgtAchievementStore extends IgtAchievements {
  public get list() {
    return useAchievementStore().achievements;
  }

  public set list(v) {
    useAchievementStore().achievements = v;
  }

  checkForAchievementsCompleted() {
    for (const key in useAchievementStore().achievements) {
      const achievement = useAchievementStore().achievements[key];
      if (achievement.requirementsCompleted()) {
        const isJustUnlocked = achievement.unlock();
        if (isJustUnlocked) {
          useAchievementStore().popAchievement(achievement);
        }
      }
    }
  }
}
