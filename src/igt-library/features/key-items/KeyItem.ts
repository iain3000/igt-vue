import {KeyItemId} from "@/igt-library/features/key-items/KeyItemId";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";
import {Requirement} from "@/igt-library/tools/requirements/Requirement";

export class KeyItem {
    id: KeyItemId;
    name: string;
    description: string;
    unlockHint: string;
    image: string
    isUnlocked: boolean = false;
    requirement: Requirement;

    constructor(id: KeyItemId, name: string, description: string, unlockHint: string = "", image: string = "", requirement: Requirement = new NoRequirement()) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.unlockHint = unlockHint;
        this.image = image;
        this.requirement = requirement;
    }

    unlock(): boolean {
        if (this.requirement.isCompleted && !this.isUnlocked) {
            this.isUnlocked = true;
            return true;
        }
        return false;
    }
}
