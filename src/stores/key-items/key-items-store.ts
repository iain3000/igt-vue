import { KeyItem } from "@/igt-library";
import { KeyItemId } from "@/igt-library/features/key-items/KeyItemId";
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