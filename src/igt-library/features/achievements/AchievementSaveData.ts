import {SaveData} from "@/igt-library/tools/saving/SaveData";
import {AchievementId} from "@/igt-library/features/achievements/AchievementId";

/**
 * Unlocked achievements are saved as a list of keys
 */
export class AchievementsSaveData implements SaveData {
    list: AchievementId[];

    constructor() {
        this.list = [];
    }

    addAchievement(key: AchievementId): void {
        this.list.push(key);
    }

}