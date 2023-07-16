import {SpecialEventId} from "@/igt-library/features/special-events/SpecialEventId";
import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";
import {SpecialEvent} from "@/igt-library/features/special-events/SpecialEvent";
import {DateHelper} from "@/igt-library/util/DateHelper";

/**
 * A special event that happens weekly.
 */
export class WeeklySpecialEvent extends SpecialEvent {

    constructor(id: SpecialEventId, title: string, description: string, startTime: Date, endTime: Date, startFunction: () => void, endFunction: () => void, requirement: Requirement = new NoRequirement()) {
        super(id, title, description, startTime, endTime, startFunction, endFunction, requirement);
    }

    end(): void {
        this.increaseWeek();
        super.end();
    }

    increaseWeek(): void {
        this.startTime = DateHelper.addWeeks(this.startTime, 1);
        this.endTime = DateHelper.addWeeks(this.endTime, 1);
    }
}
