import { IgtKeyItemsStore as IgtKeyItems } from "@/stores/key-items/igt-key-items-store";

import {KeyItem} from "@/igt-library/features/key-items/KeyItem";
import {KeyItemRequirement} from "@/igt-library/features/key-items/KeyItemRequirement";
import {KeyItemId} from "@/igt-library/features/key-items/KeyItemId";
import { createPinia, setActivePinia } from "pinia";

describe('Key Item Requirement', () => {
    const id = "dummy" as KeyItemId;

    beforeEach(() => {
        setActivePinia(createPinia());
    })

    test('normal usage', () => {
        const keyItems = new IgtKeyItems();
        const keyItem = keyItems.registerKeyItem(new KeyItem(id, 'test', ''));
        const requirement = new KeyItemRequirement(keyItems, id);

        expect(requirement.isCompleted).toBe(false);
        keyItem.unlock();

        expect(requirement.isCompleted).toBe(true);
    });

});
