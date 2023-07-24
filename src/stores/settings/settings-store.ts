import { Setting } from "incremental-game-template";
import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
    state: () => ({
        list: [] as Setting[]
    })
})