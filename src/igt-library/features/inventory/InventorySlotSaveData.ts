import {ItemId} from "@/igt-library/features/items/ItemId";

export interface InventorySlotSaveData {
    id: ItemId;
    amount: number;
    data: Record<string, unknown>;
}
