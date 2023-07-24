import { IgtSettings } from "incremental-game-template";
import { useSettingsStore } from "./settings-store";

export class IgtSettingStore extends IgtSettings {
    
    public get list() {
        return useSettingsStore().list
    }

    
    public set list(v) {
        useSettingsStore().list = v;
    }
    
    
}