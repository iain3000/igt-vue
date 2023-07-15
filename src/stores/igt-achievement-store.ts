import { Achievement, AchievementsSaveData, IgtFeature } from "@/ig-template";
import { useAchievementStore } from "./achievement-store";
import { AchievementId } from "@/ig-template/features/achievements/AchievementId";

export class IgtAchievementStore extends IgtFeature{
       // Delay between checking for achievements
       protected readonly ACHIEVEMENT_CHECK_TIME: number = 2.0;
       protected _checkCounter: number = 0;   


    getAchievement(key: AchievementId): Achievement | null {
        if (!this.hasAchievement(key)) {
            console.warn(`Could not find achievement with key ${key}`)

            return null;
        } else {
            return this.store.achievements[key];
        }
    }
    hasAchievement(key: AchievementId): boolean {
        return key in this.store.achievements
    }
    checkForAchievementsCompleted() {
        for (const key in this.store.achievements) {
            const achievement = this.store.achievements[key];
            if (achievement.requirementsCompleted()) {
                const isJustUnlocked = achievement.unlock();
                if (isJustUnlocked) {
                    this.store.popAchivement(achievement)
                    // this._onUnlock.dispatch(achievement);
                }
            }
        }
    }
    registerAchievement<T extends Achievement>(achievement: T): T {
        this.store.achievements[achievement.key] = achievement;
        return achievement;
    }
    load(data: AchievementsSaveData): void {
        for (const key of data.list) {
            const achievement = this.getAchievement(key);
            if (achievement !== null) {
                achievement.unlocked = true
            }
        }
    }
    save(): AchievementsSaveData {
        const data = new AchievementsSaveData();
        for (const key in this.store.achievements) {
            if (this.store.achievements[key].unlocked) {
                data.addAchievement(key);
            }
        }
        return data;
    }

    update(delta: number): void {
        this._checkCounter += delta;
        if (this._checkCounter >= this.ACHIEVEMENT_CHECK_TIME) {
            this.checkForAchievementsCompleted();
            this._checkCounter = 0;
        }
    }

    store = useAchievementStore();

    constructor(saveKey: string = "achievement-store") {
        super(saveKey);
    }
}