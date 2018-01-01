import { ErrorNumber } from "./types";

/**
 * Merror Constructor extending JS Error object
 */
class Merror extends Error {
  isHttpError: boolean;
  statusCode: ErrorNumber;
  message: string;
  properties: object;

  /**
   * Constructs a new HttpResponse
   *
   * Example:
   * new Merror(401, `Unauthorized access to requested entity`, errorsObject, ...params)
   *
   * @param {ErrorNumber} statusCode - Given HTTP status code
   * @param {string} message - Express Request Object
   * @param {object} properties - Express Response Object
   * @param {Array<any>} params - Next Function to pass request to the next middleware
   * @extends Error
   */
  constructor(statusCode: ErrorNumber, message: string = "", properties: object = {}, ...params: Array<any>) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Merror);
    }

    // Custom debugging information
    this.isHttpError = true;
    this.statusCode = statusCode || 500;
    this.message = message;
    this.properties = properties;
  }
}

export default Merror;