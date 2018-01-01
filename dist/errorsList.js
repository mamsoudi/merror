"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpErrorsList = [
    {
        "code": "400",
        "phrase": "Bad Request",
        "description": "\"indicates that the server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\""
    },
    {
        "code": "401",
        "phrase": "Unauthorized",
        "description": "\"indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.\""
    },
    {
        "code": "402",
        "phrase": "Payment Required",
        "description": "*reserved*"
    },
    {
        "code": "403",
        "phrase": "Forbidden",
        "description": "\"indicates that the server understood the request but refuses to authorize it.\""
    },
    {
        "code": "404",
        "phrase": "Not Found",
        "description": "\"indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\""
    },
    {
        "code": "405",
        "phrase": "Method Not Allowed",
        "description": "\"indicates that the method specified in the request-line is known by the origin server but not supported by the target resource.\""
    },
    {
        "code": "406",
        "phrase": "Not Acceptable",
        "description": "\"indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\""
    },
    {
        "code": "407",
        "phrase": "Proxy Authentication Required",
        "description": "\"is similar to 401 (Unauthorized), but indicates that the client needs to authenticate itself in order to use a proxy.\""
    },
    {
        "code": "408",
        "phrase": "Request Timeout",
        "description": "\"indicates that the server did not receive a complete request message within the time that it was prepared to wait.\""
    },
    {
        "code": "409",
        "phrase": "Conflict",
        "description": "\"indicates that the request could not be completed due to a conflict with the current state of the resource.\""
    },
    {
        "code": "410",
        "phrase": "Gone",
        "description": "\"indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\""
    },
    {
        "code": "411",
        "phrase": "Length Required",
        "description": ""
    },
    {
        "code": "412",
        "phrase": "Precondition Failed",
        "description": "\"indicates that one or more preconditions given in the request header fields evaluated to false when tested on the server.\""
    },
    {
        "code": "413",
        "phrase": "Payload Too Large",
        "description": "\"indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.\""
    },
    {
        "code": "414",
        "phrase": "URI Too Long",
        "description": "\"indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret.\""
    },
    {
        "code": "415",
        "phrase": "Unsupported Media Type",
        "description": "\"indicates that the origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\""
    },
    {
        "code": "416",
        "phrase": "Range Not Satisfiable",
        "description": "\"indicates that none of the ranges in the request's Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\""
    },
    {
        "code": "417",
        "phrase": "Expectation Failed",
        "description": "\"indicates that the expectation given in the request's Expect header field could not be met by at least one of the inbound servers.\""
    },
    {
        "code": "418",
        "phrase": "I'm a teapot",
        "description": "\"Any attempt to brew coffee with a teapot should result in the error code 418 I'm a teapot.\""
    },
    {
        "code": "422",
        "phrase": "Unprocessable Entity",
        "description": "\"means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\""
    },
    {
        "code": "423",
        "phrase": "Locked",
        "description": "\"means the source or destination resource of a method is locked.\""
    },
    {
        "code": "424",
        "phrase": "Failed Dependency",
        "description": "\"means that the method could not be performed on the resource because the requested action depended on another action and that action failed.\""
    },
    {
        "code": "426",
        "phrase": "Upgrade Required",
        "description": "\"indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\""
    },
    {
        "code": "428",
        "phrase": "Precondition Required",
        "description": "\"indicates that the origin server requires the request to be conditional.\""
    },
    {
        "code": "429",
        "phrase": "Too Many Requests",
        "description": "\"indicates that the user has sent too many requests in a given amount of time (\"rate limiting\").\""
    },
    {
        "code": "431",
        "phrase": "Request Header Fields Too Large",
        "description": "\"indicates that the server is unwilling to process the request because its header fields are too large.\""
    },
    {
        "code": "451",
        "phrase": "Unavailable For Legal Reasons",
        "description": "\"This status code indicates that the server is denying access to the resource in response to a legal demand.\""
    },
    {
        "code": "500",
        "phrase": "Internal Server Error",
        "description": "\"indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.\""
    },
    {
        "code": "501",
        "phrase": "Not Implemented",
        "description": "\"indicates that the server does not support the functionality required to fulfill the request.\""
    },
    {
        "code": "502",
        "phrase": "Bad Gateway",
        "description": "\"indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\""
    },
    {
        "code": "503",
        "phrase": "Service Unavailable",
        "description": "\"indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\""
    },
    {
        "code": "504",
        "phrase": "Gateway Time-out",
        "description": "\"indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\""
    },
    {
        "code": "505",
        "phrase": "HTTP Version Not Supported",
        "description": "\"indicates that the server does not support, or refuses to support, the protocol version that was used in the request message.\""
    },
    {
        "code": "506",
        "phrase": "Variant Also Negotiates",
        "description": "\"indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\""
    },
    {
        "code": "507",
        "phrase": "Insufficient Storage",
        "description": "\"means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\""
    },
    {
        "code": "511",
        "phrase": "Network Authentication Required",
        "description": "\"indicates that the client needs to authenticate to gain network access.\""
    }
];
exports.default = HttpErrorsList;
//# sourceMappingURL=errorsList.js.map