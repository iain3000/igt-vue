import { IgtRedeemableCodes, RedeemableCode } from "incremental-game-template";
import { useCodeStore } from "./code-store";

export class IgtCodeStore extends IgtRedeemableCodes {
  public get list(): RedeemableCode[] {
    return useCodeStore().list as RedeemableCode[];
  }

  public set list(v) {
    useCodeStore().list = v;
  }
}
