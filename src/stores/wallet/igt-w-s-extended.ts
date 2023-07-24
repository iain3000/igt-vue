import { IgtWallet } from "incremental-game-template";
import { useWalletStore } from "./wallet-store";
import { CurrencyType } from "incremental-game-template/lib/ig-template/features/wallet/CurrencyType";

export class IgtWalletStore extends IgtWallet {
  get _currencies() {
    return useWalletStore().currencies;
  }

  set _currencies(v) {
    useWalletStore().currencies = v;
  }

  constructor(supportedCurrencies: CurrencyType[]) {
    super(supportedCurrencies);
  }
}