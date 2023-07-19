import { defineStore } from "pinia";

import { Currency } from "incremental-game-template";
import { CurrencyType } from "incremental-game-template/lib/ig-template/features/wallet/CurrencyType";

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