import { ErrorNumber } from "./types";
declare class Merror extends Error {
    isHttpError: boolean;
    statusCode: ErrorNumber;
    message: string;
    properties: object;
    constructor(statusCode: ErrorNumber, message?: string, properties?: object, ...params: Array<any>);
}
export default Merror;
