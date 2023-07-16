import {DiscreteUpgrade} from "@/igt-library/tools/upgrades/DiscreteUpgrade";
import {UpgradeType} from "@/igt-library/tools/upgrades/UpgradeType";
import {UpgradeId} from "@/igt-library/tools/upgrades/UpgradeId";
import {Currency} from "@/igt-library/features/wallet/Currency";

/**
 * An upgrade with a max level of 1
 */
export class SingleLevelUpgrade extends DiscreteUpgrade {

    constructor(id: UpgradeId, type: UpgradeType, displayName: string, cost: Currency, bonus: number) {
        super(id, type, displayName, 1, [cost], [0, bonus]);
    }

    isBought(): boolean {
        return this.isMaxLevel();
    }

}