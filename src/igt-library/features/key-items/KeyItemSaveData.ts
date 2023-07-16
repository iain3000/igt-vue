import {SaveData} from "@/igt-library/tools/saving/SaveData";
import {KeyItemId} from "@/igt-library/features/key-items/KeyItemId";

export interface KeyItemSaveData extends SaveData {
    list: KeyItemId[];
}
