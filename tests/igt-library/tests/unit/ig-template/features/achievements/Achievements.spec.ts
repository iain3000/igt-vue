// import { IgtAchievementStore as IgtAchievements } from "@/stores/igt-achievement-store";

import {Achievement} from "@/igt-library/features/achievements/Achievement";
import {AchievementId} from "@/igt-library/features/achievements/AchievementId";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";
import {ImpossibleRequirement} from "@/igt-library/tools/requirements/ImpossibleRequirement";
import {CustomAchievement} from "@/igt-library/features/achievements/CustomAchievement";
import {Progress} from "@/igt-library/tools/requirements/Progress";
import {ArrayStatistic} from "@/igt-library/features/statistics/ArrayStatistic";
import {StatisticId} from "@/igt-library/features/statistics/StatisticId";
import {ArrayStatisticRequirement} from "@/igt-library/features/statistics/requirements/ArrayStatisticRequirement";

import { IgtAchievementStore as IgtAchievements } from "@/stores/achievements/igt-achievement-store";
import { createPinia, setActivePinia } from "pinia";


describe('Achievements', () => {
    const id = "dummy" as AchievementId;
    const array = new ArrayStatistic("array" as StatisticId, 'array stat', [0, 0, 0]);

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test('array stat achievement', () => {
        const achievements = new IgtAchievements();
        const achievement = achievements.registerAchievement(
            new Achievement(
                id, 'title', '',
                new ArrayStatisticRequirement(array, 1, 3),
            )
        );

        array.value[1] = 3;
        achievements.update(3);
        expect(achievement.unlocked).toBeTruthy();
        expect(achievement.getProgress()).toStrictEqual(new Progress(3, 3));
    });

    test('test unlock', () => {
        expect.assertions(2);

        const achievements = new IgtAchievements();
        const achievement = achievements.registerAchievement(
            new Achievement(
                id, 'title', '',
                new NoRequirement(),
            )
        );

        achievements.store.$subscribe((mutation, state) => {
            expect(state.achievements[id].unlocked).toBeTruthy();
        })
        
        // Simulate 3 seconds twice to check for completion once
        achievements.update(3)
        achievements.update(3)

        expect(achievement.unlock()).toBeFalsy()
    });

    test('custom achievements', () => {
        const achievements = new IgtAchievements();
        const achievement = achievements.registerAchievement(
            new CustomAchievement(id, 'title', '')
        );

        achievements.checkForAchievementsCompleted();
        expect(achievement.unlocked).toBeFalsy();

        achievement.forceComplete();
        achievements.checkForAchievementsCompleted();
        expect(achievement.unlocked).toBeTruthy();

    });

    test('incorrect achievement id', () => {
        const achievements = new IgtAchievements();
        const achievement = achievements.getAchievement(id);
        expect(achievement).toBeNull();
    });

    test('get progress', () => {
        const achievements = new IgtAchievements();
        const achievement = achievements.registerAchievement(
            new Achievement(
                id, 'title', '',
                new ImpossibleRequirement(),
            )
        );
        expect(achievement.getProgress()).toStrictEqual(new Progress(0, 1))
    });

    test('dont unlock impossible', () => {
        const achievements = new IgtAchievements();
        const achievement = achievements.registerAchievement(
            new Achievement(
                id, 'title', '',
                new ImpossibleRequirement(),
            )
        );

        achievements.checkForAchievementsCompleted();

        expect(achievement.unlocked).toBeFalsy();

    });


    test('save and load', () => {
        // Arrange
        const achievements = new IgtAchievements();
        const achievement = achievements.registerAchievement(
            new Achievement(
                id, '', '',
                new NoRequirement(),
            )
        );

        achievements.checkForAchievementsCompleted();

        expect(achievement.unlocked).toBeTruthy()

        const saveData = achievements.save();
        achievement.unlocked = false;

        expect(achievement.unlocked).toBeFalsy()

        achievements.load(saveData);

        expect(achievement.unlocked).toBeTruthy()


    });

});
