import {Currency} from "@/igt-library/features/wallet/Currency";
import {CurrencyType} from "@/igt-library/features/wallet/CurrencyType";


describe('Currency', () => {

    const money: CurrencyType = 'money'

    test('constructor', () => {
        // Arrange
        const currency = new Currency(3, money);

        // Act

        // Assert
        expect(currency.amount).toBe(3);
        expect(currency.type).toBe(money);
    });

});
