import { IgtKeyItems } from "incremental-game-template";
import { useKeyItemStore } from "./key-items-store";

export class IgtKeyItemStore extends IgtKeyItems {
    get list() {
        return useKeyItemStore().list;
    }

    set list(v) {
        useKeyItemStore().list = v;
    }
}