import { RedeemableCode } from "incremental-game-template";
import { defineStore } from "pinia";

interface State {
    list: RedeemableCode[]
}

export const useCodeStore = defineStore("codes", {
    state: (): State => ({
        list: []
    })
})