import { Request, Response, NextFunction } from "express";
import { default as HttpErrorsList } from "./errorsList";
import { default as Merror } from "./merrorConstructor";
import { HttpErrorItem } from "./types";

/**
 * Sends taken Merror constructed Error objects
 * using res.send() function to the clients
 *
 * @param {Merror} err - Merror object constructed using new Merror() function
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {NextFunction} next - Next Function to pass request to the next middleware
 * @returns {void}
 */
export function MerrorHandler(err: Merror, req: Request, res: Response, next: NextFunction): void {
  if (err.isHttpError) {
    const errorItem = HttpErrorsList.find((errorItem: HttpErrorItem) => parseInt(errorItem.code) === err.statusCode);
    if (errorItem) {
      res.status(err.statusCode)
        .send({
          "success": false,
          "statusCode": err.statusCode,
          "error": errorItem.phrase,
          "message": err.message,
          "properties": err.properties
        });
    } else {
      return next(new Error("There's no HTTP error with provided statusCode"));
    }
  }
  return next(err);
}

/**
 * Return MerrorHandler so that it can be used by app.use()
 *
 * Example:
 * app.use(MerrorMiddleware());
 * @returns {void}
 */
export function MerrorMiddleware() {
  return MerrorHandler;
}


export { default as HttpErrorsList } from "./errorsList";
export { default as Merror } from "./merrorConstructor";
export { HttpErrorItem, ErrorNumber } from "./types";