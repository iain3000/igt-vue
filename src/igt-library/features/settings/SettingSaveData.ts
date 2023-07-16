import {SaveData} from "@/igt-library/tools/saving/SaveData";
import {SettingId} from "@/igt-library/features/settings/SettingId";
import {SettingsValue} from "@/igt-library/features/settings/SettingsValueType";

export interface SettingSaveData extends SaveData {
    id: SettingId;
    value: SettingsValue;
}
