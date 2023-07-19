import { defineStore } from "pinia";

import { Currency } from "@/igt-library";
import { CurrencyType } from "@/igt-library/features/wallet/CurrencyType";

export const useWalletStore = defineStore('wallet', {
    state: () => ({
        currencies: {} as Record<CurrencyType, number>,
        multipliers: {} as Record<CurrencyType, number>,
        supportedCurrencies: [] as CurrencyType[]
    }),
    actions: {
        gainCurrency(currency: Currency) {
            this.$state.currencies[currency.type] += currency.amount;
        }
    },
    getters: {},
})