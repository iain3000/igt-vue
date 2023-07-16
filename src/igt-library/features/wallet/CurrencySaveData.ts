import {SaveData} from "@/igt-library/tools/saving/SaveData";
import {CurrencyType} from "@/igt-library/features/wallet/CurrencyType";

export interface CurrencySaveData extends SaveData {
    type: CurrencyType;
    amount: number;
}
