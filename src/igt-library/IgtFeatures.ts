import {IgtWalletStore as IgtWallet} from "@/stores/wallet/igt-wallet-store";
import {IgtSettings} from "@/igt-library/features/settings/IgtSettings";
import {IgtStatistics} from "@/igt-library/features/statistics/IgtStatistics";
import { IgtAchievementStore as IgtAchievements } from "@/stores/achievements/igt-achievement-store";

import {IgtRedeemableCodes} from "@/igt-library/features/codes/IgtRedeemableCodes";
import {IgtSpecialEvents} from "@/igt-library/features/special-events/IgtSpecialEvents";
import { IgtInventoryStore as IgtInventory } from "@/stores/inventory/igt-inventory-store";
import { IgtKeyItemsStore as IgtKeyItems } from "@/stores/key-items/igt-key-items-store";

import {LootTables} from "@/igt-library/features/loot-tables/LootTables";
import {IgtItemList} from "@/igt-library/features/items/IgtItemList";

export interface IgtFeatures {
    wallet?: IgtWallet;
    settings?: IgtSettings;
    codes?: IgtRedeemableCodes;
    inventory?: IgtInventory;
    itemList?: IgtItemList;
    keyItems?: IgtKeyItems;
    lootTables?: LootTables;
    specialEvents?: IgtSpecialEvents;
    statistics?: IgtStatistics;
    achievements?: IgtAchievements;
}
