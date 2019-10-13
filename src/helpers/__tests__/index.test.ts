import toCamelCase from "../toCamelCase";

describe("toCamelCase", () => {
  test.each([["Unauthorized", "unauthorized"], ["Bad Request", "badRequest"], ["Not Found", "notFound"]])(
    "toCamelCase(%d)",
    (input, expected) => {
      expect(toCamelCase(input)).toBe(expected);
    }
  );
});