import { defineStore } from "pinia";

import { Currency } from "@/ig-template";
import { CurrencyType } from "@/ig-template/features/wallet/CurrencyType";

export const useWalletStore = defineStore('wallet', {
    state: () => ({
        currencies: {} as Record<CurrencyType, number>,
        multipliers: {} as Record<CurrencyType, number>,
        supportedCurrencies: [] as CurrencyType[]
    }),
    actions: {},
    getters: {},
})