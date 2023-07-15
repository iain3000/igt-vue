import {SaveData} from "@/ig-template/tools/saving";
import {Currency} from "@/ig-template/features/wallet";
import {IgtWalletStore as IgtWallet} from "@/stores/wallet/igt-wallet-store";
import {IgtFeatures} from "@/ig-template/IgtFeatures";
import {DiscreteUpgrade} from "@/ig-template/tools/upgrades";
import {AddWallet} from "@/ig-template/mixins/AddWallet";
import {IgtFeature} from "@/ig-template";
import { createPinia, setActivePinia } from "pinia";

class TestFeature extends AddWallet(IgtFeature) {

    constructor() {
        super('save-key');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    load(data: SaveData): void {
        throw new Error("Method not implemented.");
    }

    save(): SaveData {
        throw new Error("Method not implemented.");
    }

    initialize(features: IgtFeatures) {
        this._wallet = features.wallet as IgtWallet;
    }

}

describe('Wallet mixin', () => {
    const currency = 'dummy';

    setActivePinia(createPinia())
    const wallet = new IgtWallet([currency]);
    wallet.gainCurrency(new Currency(10, currency));

    const upgrade = new DiscreteUpgrade('', '', '', 1, [new Currency(5, currency)], [1, 2])

    test('Wallet mixin', () => {
        const feature = new TestFeature();
        feature.initialize({wallet})

        expect(feature.canAfford(upgrade)).toBeTruthy();
        expect(feature.buyUpgrade(upgrade)).toBeTruthy();
        expect(feature.canAfford(upgrade)).toBeFalsy();
    });
});
