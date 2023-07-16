import {Requirement} from "@/igt-library/tools/requirements/Requirement";

/**
 * A requirement that is always completed
 */
export class NoRequirement extends Requirement {

    get isCompleted(): boolean {
        return true;
    }

    get actualValue(): number {
        return 0;
    }

    get hint(): string {
        return "";
    }

    get targetValue(): number {
        return 0;
    }
}
