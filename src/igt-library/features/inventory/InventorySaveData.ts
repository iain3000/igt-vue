import {SaveData} from "@/igt-library/tools/saving/SaveData";
import {InventorySlotSaveData} from "@/igt-library/features/inventory/InventorySlotSaveData";

export interface InventorySaveData extends SaveData {
    slots: InventorySlotSaveData[];
}
