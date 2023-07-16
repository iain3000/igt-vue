import {IgtLoot} from "@/igt-library/tools/loot-tables/rewards/IgtLoot";
import {Currency} from "@/igt-library/features/wallet/Currency";
import {IgtWalletStore as IgtWallet} from "@/stores/wallet/igt-wallet-store";
import {CurrencyType} from "@/igt-library/features/wallet/CurrencyType";

export class CurrencyLoot extends IgtLoot {

    loot: CurrencyType;
    _wallet: IgtWallet;


    constructor(amount: number, type: CurrencyType, wallet: IgtWallet) {
        super(amount);
        this.loot = type;
        this._wallet = wallet;
    }

    apply(): void {
        this._wallet.gainCurrency(this.currency);
    }

    get currency(): Currency {
        return new Currency(this.amount, this.loot)
    }

    equals(other: IgtLoot): boolean {
        return other instanceof CurrencyLoot && other.loot === this.loot;
    }

}
