import {IgtGame} from "@/igt-library/IgtGame";
import {IgtWalletStore as IgtWallet} from "@/stores/wallet/igt-wallet-store";
import {IgtSettings} from "@/igt-library/features/settings/IgtSettings";
import {IgtRedeemableCodes} from "@/igt-library/features/codes/IgtRedeemableCodes";
import { IgtKeyItemsStore as IgtKeyItems } from "@/stores/key-items/igt-key-items-store";

import {IgtSpecialEvents} from "@/igt-library/features/special-events/IgtSpecialEvents";
import {IgtStatistics} from "@/igt-library/features/statistics/IgtStatistics";
import { IgtAchievementStore as IgtAchievements } from "@/stores/achievements/igt-achievement-store";

import {IgtFeatures} from "@/igt-library/IgtFeatures";
import { createPinia, setActivePinia } from "pinia";

class DummyGame extends IgtGame {
    features: IgtFeatures;

    constructor(features: IgtFeatures) {
        super();
        this.features = features;
    }

    protected readonly SAVE_KEY: string = 'dummy';
    protected readonly TICK_DURATION: number = 0.05;
}

setActivePinia(createPinia())

/**
 * This smoke test starts the game and runs 100 game ticks.
 * It fails if any exceptions are thrown.
 */
describe('Game launch smoke test', () => {

    const game = new DummyGame({
        wallet: new IgtWallet(['money']),
        settings: new IgtSettings(),
        codes: new IgtRedeemableCodes(),
        keyItems: new IgtKeyItems(),
        specialEvents: new IgtSpecialEvents(),
        statistics: new IgtStatistics(),
        achievements: new IgtAchievements(),
    })
    test('smoke test', () => {
        expect(() => {
            game.initialize();
            game.load();
            game.start();

            for (let i = 0; i < 100; i++) {
                game.forceUpdate(0.5);
            }
        }).not.toThrow();
    });
});
