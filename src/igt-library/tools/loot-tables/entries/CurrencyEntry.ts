import {IgtLootEntry} from "@/igt-library/tools/loot-tables/entries/IgtLootEntry";
import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";
import {IntRange} from "@/igt-library/tools/probability/IntRange";
import {IgtWalletStore as IgtWallet} from "@/stores/wallet/igt-wallet-store";
import {CurrencyLoot} from "@/igt-library/tools/loot-tables/rewards/CurrencyLoot";
import {CurrencyType} from "@/igt-library/features/wallet/CurrencyType";

export class CurrencyEntry extends IgtLootEntry {
    _wallet: IgtWallet;
    type: CurrencyType;

    constructor(amount: IntRange, type: CurrencyType, wallet: IgtWallet, weight: number = 1, requirement: Requirement = new NoRequirement()) {
        super(weight, amount, requirement);
        this.type = type;
        this._wallet = wallet;
    }

    getLoot(): CurrencyLoot[] {
        if (!this.canGet()) {
            return [];
        }
        return [new CurrencyLoot(this.amount.getRandomBetween(), this.type, this._wallet)];
    }

}
