import {SaveData} from "@/igt-library/tools/saving/SaveData";
import {SettingSaveData} from "@/igt-library/features/settings/SettingSaveData";

export interface SettingsSaveData extends SaveData {
    list: SettingSaveData[];
}
