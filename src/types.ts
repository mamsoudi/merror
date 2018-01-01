/**
 * @typedef {number} ErrorNumber - HTTP Client and Server Errors
 */
type ErrorNumber = 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;

/**
 * @typedef {object} HttpErrorItem - HTTP Client and Server Error Object Definition
 */
type HttpErrorItem = {
  code: string;
  phrase: string;
  description: string;
};

export { HttpErrorItem, ErrorNumber };