/**
 * @jest-environment jsdom
 */
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition", () => {
        test("should return 42 for 22 + 20", () => {
            expect(addition(20,22)).toBe(42);
        });
        test("should return 30 for 16 + 14", () => {
            expect(addition(16,14)).toBe(30);
        });
    });

})
