import {SaveData} from "@/igt-library/tools/saving/SaveData";
import {UpgradeSaveData} from "@/igt-library/tools/upgrades/UpgradeSaveData";

export interface UpgradesFeatureSaveData extends SaveData {
    upgrades: UpgradeSaveData[];
}
