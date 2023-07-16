import {SpecialEventId} from "@/igt-library/features/special-events/SpecialEventId";
import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";
import {SpecialEventDateState} from "@/igt-library/features/special-events/SpecialEventDateState";

/**
 * Abstract Special Event. Override if you need custom timing functions.
 */
export abstract class AbstractSpecialEvent {
    id: SpecialEventId;
    title: string;
    description: string;
    startFunction: () => void;
    endFunction: () => void;
    requirement: Requirement;
    isActive = false;

    protected constructor(id: SpecialEventId, title: string, description: string, startFunction: () => void, endFunction: () => void, requirement: Requirement = new NoRequirement()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startFunction = startFunction;
        this.endFunction = endFunction;
        this.requirement = requirement;
    }

    canStart(date: Date): boolean {
        if (this.isActive) {
            return false;
        }
        if (!this.requirement.isCompleted) {
            return false;
        }
        return this.getDateState(date) === SpecialEventDateState.During;
    }

    public abstract getTimeUntilStart(date: Date): Date;

    public abstract getTimeUntilEnd(date: Date): Date;


    public abstract getDateState(date: Date): SpecialEventDateState;

    canEnd(date: Date): boolean {
        if (!this.isActive) {
            return false;
        }
        return this.getDateState(date) === SpecialEventDateState.After;
    }


    start(): void {
        if (this.isActive) {
            console.warn(`Special Event ${this.title} already active`);
            return;
        }
        this.isActive = true;
        this.startFunction();
    }

    end(): void {
        if (!this.isActive) {
            console.warn(`Cannot end. Special Event ${this.title} is not active.`);
            return;
        }
        this.isActive = false;
        this.endFunction();
    }
}
