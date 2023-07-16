import {Setting} from "@/igt-library/features/settings/Setting";
import {SettingId} from "@/igt-library/features/settings/SettingId";
import {SettingOption} from "@/igt-library/features/settings/SettingOption";
import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {SettingsValue} from "@/igt-library/features/settings/SettingsValueType";

export class MultipleChoiceSetting extends Setting {

    constructor(id: SettingId, displayName: string, options: SettingOption[], defaultValue: SettingsValue, requirement?: Requirement) {
        super(id, displayName, options, defaultValue, requirement);

        if (!this.validValue(this.defaultValue)) {
            throw new RangeError(`${this.defaultValue} is not a valid value for setting ${this.id}.`);
        }
    }
}
