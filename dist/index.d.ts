import { Request, Response, NextFunction } from "express";
import { default as Merror } from "./merrorConstructor";
export declare function MerrorHandler(err: Merror, req: Request, res: Response, next: NextFunction): void;
export declare function MerrorMiddleware(): typeof MerrorHandler;
export { default as HttpErrorsList } from "./errorsList";
export { default as Merror } from "./merrorConstructor";
export { HttpErrorItem, ErrorNumber } from "./types";
