import {SettingId} from "@/igt-library/features/settings/SettingId";
import {BooleanSetting} from "@/igt-library/features/settings/BooleanSetting";


describe('Boolean Setting', () => {
    const id = 'example-setting' as SettingId

    test('valid default setting', () => {
        // Arrange
        const setting = new BooleanSetting(id, "Example setting", false);

        // Assert
        expect(setting.defaultValue).toBe(false);
    });

    test('toggle', () => {
        // Arrange
        const setting = new BooleanSetting(id, "Example setting", false);

        // Act
        setting.toggle();
        // Assert
        expect(setting.value).toBe(true);
    });


});
