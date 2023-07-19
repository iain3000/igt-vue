import { CurrencyType } from "@/igt-library/features/wallet/CurrencyType";
import { useWalletStore } from "./wallet-store";
import { Currency, IgtFeature, WalletSaveData } from "incremental-game-template";

export class IgtWalletStore extends IgtFeature {
    payMultipleIfPossible(currencies: Currency[]): boolean {
        if (this.hasCurrencies(currencies)) {
            this.loseMultipleCurrencies(currencies);
            return true;
        }
        return false;
    }
    loseMultipleCurrencies(currencies: Currency[]) {
        for (const currency of currencies) {
            this.loseCurrency(currency);
        }
    }
    hasCurrencies(costs: Currency[]): boolean {
        for (const cost of costs) {
            if (!this.hasCurrency(cost)) {
                return false;
            }
        }
        return true;
    }
    load(saveData: WalletSaveData) {
        saveData.currencies?.forEach(currencyData => {
            this.store.currencies[currencyData.type] = currencyData.amount ?? this.store.currencies[currencyData.type];
        })
    }
    save(): WalletSaveData {
        const currencies = [];
        for (const key in this.store.currencies) {
            currencies.push({
                type: key,
                amount: this.store.currencies[key]
            })
        }
        return {
            currencies: currencies
        }
    }
    canAccess(): boolean {
        return true;
    }
    loseCurrency(currency: Currency) {
        if (!currency.isValid() || !this.supportsCurrencyType(currency.type)) {
            console.warn(`Could not lose currency ${currency.toString()}`);
            return;
        }
        this.store.currencies[currency.type] -= currency.amount;
    }
    hasCurrency(currency: Currency): boolean {
        if (!this.supportsCurrencyType(currency.type)) {
            return false;
        }
        return this.store.currencies[currency.type] >= currency.amount;
    }
    supportsCurrencyType(type: CurrencyType): boolean {
        return this.store.supportedCurrencies.includes(type);
    }
    getCurrencyMultiplier(type: CurrencyType): number {
        return this.store.multipliers[type] ?? 1;
    }
    payIfPossible(currency: Currency): boolean {
        if (this.hasCurrency(currency)) {
            this.loseCurrency(currency);
            return true;
        }
        return false;
    }
    setCurrencyMultiplier(multiplier: number, type: CurrencyType) {
        if (multiplier <= 0 || isNaN(multiplier) || !this.supportsCurrencyType(type)) {
            return;
        }
        this.store.multipliers[type] = multiplier;
    }
    getAmount(type: CurrencyType): number {
        if (!this.supportsCurrencyType(type)) {
            return 0;
        }
        return this.store.currencies[type];
    }
    gainCurrency(currency: Currency) {
        currency.amount *= this.getCurrencyMultiplier(currency.type);

        if (!currency.isValid() || !this.supportsCurrencyType(currency.type)) {
            console.warn(`Could not add currency ${currency.toString()}`);
            return;
        }

        this.store.gainCurrency(currency);
    }

    store = useWalletStore();
    saveKey = "";

    constructor(supportedCurrencies: CurrencyType[], saveKey: string = "igt-wallet-store") {
        super(saveKey)
        this.store.supportedCurrencies = supportedCurrencies;

        for (const type of this.store.supportedCurrencies) {
            this.store.currencies[type] = 0;
            this.store.multipliers[type] = 1;
        }
    }
}