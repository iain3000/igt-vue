import {dateFormat, humanizeString, numberFormat} from "@/VueFilters";

describe("dateformat", () => {
    test("returns empty string on undefined", () => {
        expect(dateFormat(undefined)).toBe("");
    })

    test("formats date correctly", () => {
        expect(dateFormat(new Date(2023, 3, 3))).toBe("03 April 2023 00:00");
    })
})

describe("numberformat", () => {
    test("returns empty string on undefined", () => {
        expect(numberFormat(undefined)).toBe("");
    })

    test("formats number correctly", () => {
        expect(numberFormat(Math.PI)).toBe("3.14");
        expect(numberFormat(5000000)).toBe("5,000,000.00");
    })
})

describe("humanizestring", () => {
    test("returns empty string on undefined", () => {
        expect(humanizeString(undefined)).toBe("");
    })

    test("formats string correctly", () => {
        expect(humanizeString("lol_omg-random")).toBe("Lol omg random");
    })
})