import {HotKeys} from "@/igt-library/tools/hotkeys/HotKeys";
import {KeyBind} from "@/igt-library/tools/hotkeys/KeyBind";
import {BooleanRequirement} from "@/igt-library/tools/requirements/BooleanRequirement";

describe('Keybind', () => {
    const keys = "ctrl+s";

    test('requirement completed triggers callback', () => {
        // Arrange
        expect.assertions(1);

        const keyBind = new KeyBind(keys,
            "For test purposes", () => {
                // Assert
                expect(true).toBeTruthy();
            });

        // Act
        HotKeys.addKeyBind(keyBind);
        HotKeys.trigger(keys);
    });

    test('requirement not completed does not trigger callback', () => {
        // Arrange
        expect.assertions(0);

        const keyBind = new KeyBind(keys,
            "For test purposes", () => {
                // Assert
                expect(true).toBeTruthy();
            }, new BooleanRequirement("Always false", () => false))

        // Act
        HotKeys.addKeyBind(keyBind);
        HotKeys.trigger(keys);
    });

});
