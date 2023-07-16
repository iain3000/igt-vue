import {SaveData} from "@/igt-library/tools/saving/SaveData";
import {CurrencySaveData} from "@/igt-library/features/wallet/CurrencySaveData";

export interface WalletSaveData extends SaveData {
    currencies: CurrencySaveData[]
}
