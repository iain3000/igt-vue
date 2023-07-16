import {Achievement} from "@/igt-library/features/achievements/Achievement";
import {AchievementId} from "@/igt-library/features/achievements/AchievementId";
import {ManualRequirement} from "@/igt-library/tools/requirements/ManualRequirement";

export class CustomAchievement extends Achievement {

    constructor(key: AchievementId, title: string, description: string, image: string = '', isHidden: boolean = false) {
        super(key, title, description, new ManualRequirement(), image, isHidden);
    }

    forceComplete(): void {
        (this.requirement as ManualRequirement).forceCompletion();
    }
}
