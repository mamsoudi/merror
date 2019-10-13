import Merror from "../merrorConstructor";

describe("Merror Constructor", () => {
  test("should set class properties correctly", () => {
    const error = new Merror(401, "Test", {test: true}, {test2: false});

    expect(error.isHttpError).toBe(true);
    expect(error.message).toBe("Test");
    expect(error.properties).toMatchObject({test: true});
  });
});