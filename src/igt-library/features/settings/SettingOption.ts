import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";
import {SettingsValue} from "@/igt-library/features/settings/SettingsValueType";

export class SettingOption {
    displayText: string;
    value: SettingsValue;

    requirement: Requirement;

    constructor(displayText: string, value: SettingsValue, requirement: Requirement = new NoRequirement()) {
        this.displayText = displayText;
        this.value = value;
        this.requirement = requirement;
    }

    get canAccess(): boolean {
        return this.requirement.isCompleted;
    }
}
