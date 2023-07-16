import {IgtAbstractUpgrade} from "@/igt-library/tools/upgrades/IgtAbstractUpgrade";
import {Currency} from "@/igt-library/features/wallet/Currency";
import {UpgradeId} from "@/igt-library/tools/upgrades/UpgradeId";
import {UpgradeType} from "@/igt-library/tools/upgrades/UpgradeType";

export class ContinuousUpgrade extends IgtAbstractUpgrade {
    bonusFunc: (level: number) => number;
    costFunc: (level: number) => Currency;


    constructor(id: UpgradeId, type: UpgradeType, displayName: string, maxLevel: number, bonusFunc: (level: number) => number, costFunc: (level: number) => Currency) {
        super(id, type, displayName, maxLevel);
        this.bonusFunc = bonusFunc;
        this.costFunc = costFunc;
    }

    getBonusForLevel(level: number): number {
        return this.bonusFunc(level);
    }

    getCost(): Currency {
        return this.costFunc(this.level);
    }

}
