import { IgtInventory } from "incremental-game-template";
import { useInventoryStore } from "./inventory-store";

export class IgtInventoryStore extends IgtInventory {
  public get slots() {
    return useInventoryStore().slots;
  }

  public set slots(v) {
    useInventoryStore().slots = v;
  }
}
