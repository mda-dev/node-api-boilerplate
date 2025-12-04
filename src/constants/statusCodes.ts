export const CONTINUE = { code: 100, message: 'Continue' } as const
export const SWITCHING_PROTOCOLS = {
  code: 101,
  message: 'Switching Protocols',
} as const
export const PROCESSING = { code: 102, message: 'Processing' } as const
export const EARLY_HINTS = { code: 103, message: 'Early Hints' } as const
export const OK = { code: 200, message: 'OK' } as const
export const CREATED = { code: 201, message: 'Created' } as const
export const ACCEPTED = { code: 202, message: 'Accepted' } as const
export const NON_AUTHORITATIVE_INFORMATION = {
  code: 203,
  message: 'Non Authoritative Information',
} as const
export const NO_CONTENT = { code: 204, message: 'No Content' } as const
export const RESET_CONTENT = { code: 205, message: 'Reset Content' } as const
export const PARTIAL_CONTENT = {
  code: 206,
  message: 'Partial Content',
} as const
export const MULTI_STATUS = { code: 207, message: 'Multi-Status' } as const
export const MULTIPLE_CHOICES = {
  code: 300,
  message: 'Multiple Choices',
} as const
export const MOVED_PERMANENTLY = {
  code: 301,
  message: 'Moved Permanently',
} as const
export const MOVED_TEMPORARILY = {
  code: 302,
  message: 'Moved Temporarily',
} as const
export const SEE_OTHER = { code: 303, message: 'See Other' } as const
export const NOT_MODIFIED = { code: 304, message: 'Not Modified' } as const
export const USE_PROXY = { code: 305, message: 'Use Proxy' } as const
export const TEMPORARY_REDIRECT = {
  code: 307,
  message: 'Temporary Redirect',
} as const
export const PERMANENT_REDIRECT = {
  code: 308,
  message: 'Permanent Redirect',
} as const
export const BAD_REQUEST = { code: 400, message: 'Bad Request' } as const
export const UNAUTHORIZED = { code: 401, message: 'Unauthorized' } as const
export const PAYMENT_REQUIRED = {
  code: 402,
  message: 'Payment Required',
} as const
export const FORBIDDEN = { code: 403, message: 'Forbidden' } as const
export const NOT_FOUND = { code: 404, message: 'Not Found' } as const
export const METHOD_NOT_ALLOWED = {
  code: 405,
  message: 'Method Not Allowed',
} as const
export const NOT_ACCEPTABLE = { code: 406, message: 'Not Acceptable' } as const
export const PROXY_AUTHENTICATION_REQUIRED = {
  code: 407,
  message: 'Proxy Authentication Required',
} as const
export const REQUEST_TIMEOUT = {
  code: 408,
  message: 'Request Timeout',
} as const
export const CONFLICT = { code: 409, message: 'Conflict' } as const
export const GONE = { code: 410, message: 'Gone' } as const
export const LENGTH_REQUIRED = {
  code: 411,
  message: 'Length Required',
} as const
export const PRECONDITION_FAILED = {
  code: 412,
  message: 'Precondition Failed',
} as const
export const REQUEST_TOO_LONG = {
  code: 413,
  message: 'Request Entity Too Large',
} as const
export const REQUEST_URI_TOO_LONG = {
  code: 414,
  message: 'Request-URI Too Long',
} as const
export const UNSUPPORTED_MEDIA_TYPE = {
  code: 415,
  message: 'Unsupported Media Type',
} as const
export const REQUESTED_RANGE_NOT_SATISFIABLE = {
  code: 416,
  message: 'Requested Range Not Satisfiable',
} as const
export const EXPECTATION_FAILED = {
  code: 417,
  message: 'Expectation Failed',
} as const
export const IM_A_TEAPOT = { code: 418, message: "I'm a teapot" } as const
export const INSUFFICIENT_SPACE_ON_RESOURCE = {
  code: 419,
  message: 'Insufficient Space on Resource',
} as const
export const METHOD_FAILURE = { code: 420, message: 'Method Failure' } as const
export const MISDIRECTED_REQUEST = {
  code: 421,
  message: 'Misdirected Request',
} as const
export const UNPROCESSABLE_ENTITY = {
  code: 422,
  message: 'Unprocessable Entity',
} as const
export const LOCKED = { code: 423, message: 'Locked' } as const
export const FAILED_DEPENDENCY = {
  code: 424,
  message: 'Failed Dependency',
} as const
export const UPGRADE_REQUIRED = {
  code: 426,
  message: 'Upgrade Required',
} as const
export const PRECONDITION_REQUIRED = {
  code: 428,
  message: 'Precondition Required',
} as const
export const TOO_MANY_REQUESTS = {
  code: 429,
  message: 'Too Many Requests',
} as const
export const REQUEST_HEADER_FIELDS_TOO_LARGE = {
  code: 431,
  message: 'Request Header Fields Too Large',
} as const
export const UNAVAILABLE_FOR_LEGAL_REASONS = {
  code: 451,
  message: 'Unavailable For Legal Reasons',
} as const
export const INTERNAL_SERVER_ERROR = {
  code: 500,
  message: 'Internal Server Error',
} as const
export const NOT_IMPLEMENTED = {
  code: 501,
  message: 'Not Implemented',
} as const
export const BAD_GATEWAY = { code: 502, message: 'Bad Gateway' } as const
export const SERVICE_UNAVAILABLE = {
  code: 503,
  message: 'Service Unavailable',
} as const
export const GATEWAY_TIMEOUT = {
  code: 504,
  message: 'Gateway Timeout',
} as const
export const HTTP_VERSION_NOT_SUPPORTED = {
  code: 505,
  message: 'HTTP Version Not Supported',
} as const
export const INSUFFICIENT_STORAGE = {
  code: 507,
  message: 'Insufficient Storage',
} as const
export const NETWORK_AUTHENTICATION_REQUIRED = {
  code: 511,
  message: 'Network Authentication Required',
} as const
