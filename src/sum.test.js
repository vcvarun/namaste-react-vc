import { sum } from "./sum";

test("", () => {
    const result = sum(2, 3);

    expect(result).toBe(5);
});
