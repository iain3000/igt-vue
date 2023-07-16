import {KeyBind} from "@/igt-library/tools/hotkeys/KeyBind";
import {BooleanRequirement} from "@/igt-library/tools/requirements/BooleanRequirement";
import {KeyEventType} from "@/igt-library/tools/hotkeys/KeyEventType";


/**
 * A KeyBind helper class that allows you to pass any arbitrary condition you might have.
 * Your condition should return a boolean.
 */
export class CustomConditionKeyBind extends KeyBind {

    constructor(keys: string | string[], description: string, callback: () => void, condition: () => boolean, eventType: KeyEventType = KeyEventType.KeyDown) {
        super(keys, description, callback, new BooleanRequirement("", condition), eventType);
    }
}
