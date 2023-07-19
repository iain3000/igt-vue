import { KeyItem } from "incremental-game-template";
import { KeyItemId } from "incremental-game-template/lib/ig-template/features/key-items/KeyItemId";
import { defineStore } from "pinia";

export const useKeyItemStore = defineStore('key-items', {
    state: () => ({
        list: {} as Record<KeyItemId, KeyItem>,
    }),
    actions: {
        keyItemGain(item: KeyItem) {
            return item;
        }
    },
    getters: {},
})