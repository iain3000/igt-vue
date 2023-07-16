import {SpecialEventId} from "@/igt-library/features/special-events/SpecialEventId";
import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";
import {SpecialEventDateState} from "@/igt-library/features/special-events/SpecialEventDateState";
import {AbstractSpecialEvent} from "@/igt-library/features/special-events/AbstractSpecialEvent";

/**
 * A special event with a set start and end date.
 */
export class SpecialEvent extends AbstractSpecialEvent {
    startTime: Date;
    endTime: Date;


    constructor(id: SpecialEventId, title: string, description: string, startTime: Date, endTime: Date, startFunction: () => void, endFunction: () => void, requirement: Requirement = new NoRequirement()) {
        super(id, title, description, startFunction, endFunction, requirement);
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public getTimeUntilStart(date: Date): Date {
        return new Date(+this.startTime - +date);
    }

    public getTimeUntilEnd(date: Date): Date {
        return new Date(+this.endTime - +date);
    }

    public getDateState(date: Date): SpecialEventDateState {
        if (date < this.startTime) {
            return SpecialEventDateState.Before;
        } else if (date > this.endTime) {
            return SpecialEventDateState.After;
        }
        return SpecialEventDateState.During;
    }
}
