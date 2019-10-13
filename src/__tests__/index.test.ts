import { MerrorHandler } from "../index";
import Merror from "../handler/merrorConstructor";
import * as sinon from "sinon";
import mockResponse from "../mocks/response";

describe("MerrorHandler", () => {
  let mw: Function;
  let spy: sinon.SinonSpy;

  beforeEach(() => {
   mw = MerrorHandler;
    spy = sinon.spy();
  });

  test("Middleware callback should be triggered", () => {
    mw({}, {}, mockResponse(), spy);
    expect(spy.calledOnce).toBe(true);
  });
  test("Middleware should respond with the correct error messages", () => {
    const merror = new Merror(401, "Test", {test: true});
    mw(merror, {}, mockResponse(), (err: Merror) => {
      expect(err.isHttpError).toBe(true);
      expect(err.statusCode).toBe(401);
      expect(err.message).toBe("Test");
      expect(err.properties).toMatchObject({test: true});
    });
  });
  test("Middleware should respond with the correct error messages", () => {
    const merror = new Error("Something");
    mw(merror, {}, mockResponse(), (err: Merror) => {
      expect(err.isHttpError).toBeFalsy();
    });
  });
});