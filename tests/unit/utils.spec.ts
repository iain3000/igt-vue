import { getImageUrl } from "@/utils";

describe("get image url", () => {
    test("returns the correct string", () => {
        expect(getImageUrl("funky.png")).toBe("file:///src/assets/funky.png")
    })

    test("throws on empty string", () => {
        expect(() => getImageUrl("")).toThrow()
    })
})