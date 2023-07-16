import {DiscreteUpgrade} from "@/igt-library/tools/upgrades/DiscreteUpgrade";
import {UpgradeId} from "@/igt-library/tools/upgrades/UpgradeId";
import {UpgradeType} from "@/igt-library/tools/upgrades/UpgradeType";
import {CurrencyBuilder} from "@/igt-library/features/wallet/CurrencyBuilder";
import {ArrayBuilder} from "@/igt-library/util/ArrayBuilder";
import {CurrencyType} from "@/igt-library/features/wallet/CurrencyType";
import {IgtWalletStore as IgtWallet} from "@/stores/wallet/igt-wallet-store";
import {Currency} from "@/igt-library/features/wallet/Currency";
import { createPinia, setActivePinia } from "pinia";


describe('Discrete Upgrade', () => {

    const id = "example-upgrade" as UpgradeId;
    const type = 'empty' as UpgradeType
    const currencyType = 'dummy' as CurrencyType;
    let discreteUpgrade: DiscreteUpgrade
    setActivePinia(createPinia())
    const wallet = new IgtWallet([currencyType]);

    beforeEach(() => {
        wallet.loseCurrency(new Currency(wallet.getAmount(currencyType), currencyType));
        wallet.gainCurrency(new Currency(1000, currencyType));
        discreteUpgrade = new DiscreteUpgrade(
            id,
            type,
            'Example upgrade',
            5,
            CurrencyBuilder.createArray(ArrayBuilder.fromStartAndStepAdditive(10, 10, 20), currencyType),
            ArrayBuilder.fromStartAndStepAdditive(1, 1, 21));
    });


    test('Normal usage', () => {
        expect(discreteUpgrade.getBonusForLevel(0)).toEqual(1);
        expect(discreteUpgrade.level).toEqual(0);

        const bought = discreteUpgrade.buy(wallet);
        expect(bought).toBe(true);

        expect(discreteUpgrade.getBonus()).toEqual(2);
        expect(discreteUpgrade.getCost()).toStrictEqual(new Currency(20, currencyType));
        expect(discreteUpgrade.getUpgradeBonus()).toStrictEqual(1);

    });


    test('save and load', () => {
        discreteUpgrade.buy(wallet);
        const saveData = discreteUpgrade.save();
        discreteUpgrade.buy(wallet);
        expect(discreteUpgrade.level).toBe(2);

        discreteUpgrade.load(saveData);
        expect(discreteUpgrade.level).toBe(1);


    });

});
