import {SaveData} from "@/igt-library/tools/saving/SaveData";
import {RedeemableCodeId} from "@/igt-library/features/codes/RedeemableCodeId";

/**
 * Redeemed codes are saved as a list of keys
 */
export class RedeemableCodesSaveData implements SaveData {
    list: RedeemableCodeId[];

    constructor(list: RedeemableCodeId[]) {
        this.list = list;
    }
}
