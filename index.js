var customErrorFactory = function( name, statusCode, defaultMessage ) {
    var CustomError = function( message ) {
        this.name = name;
        this.statusCode = statusCode;
        this.message = message || defaultMessage;
        this.stack = ( new Error() ).stack;
    };

    CustomError.prototype = Object.create( Error.prototype );
    CustomError.prototype.constructor = CustomError;

    CustomError.prototype.toString = function() {
        return this.statusCode + ': ' + this.message;
    };

    return CustomError;
};

exports.BadRequest = customErrorFactory( 'BadRequest', '400', 'Bad Request' );
exports.Unauthorized = customErrorFactory( 'Unauthorized', '401', 'Unauthorized' );
exports.PaymentRequired = customErrorFactory( 'PaymentRequired', '402', 'Payment Required' );
exports.Forbidden = customErrorFactory( '403', '403', 'Forbidden' );
exports.NotFound = customErrorFactory( 'NotFound', '404', 'Not Found' );
exports.MethodNotAllowed = customErrorFactory( 'MethodNotAllowed', '405', 'Method Not Allowed' );
exports.NotAcceptable = customErrorFactory( 'NotAcceptable', '406', 'Not Acceptable' );
exports.ProxyAuthenticationRequired = customErrorFactory( 'ProxyAuthenticationRequired', '407', 'Proxy Authentication Required' );
exports.RequestTimeout = customErrorFactory( 'RequestTimeout', '408', 'Request Timeout' );
exports.Conflict = customErrorFactory( 'Conflict', '409', 'Conflict' );
exports.Gone = customErrorFactory( 'Gone', '410', 'Gone' );
exports.LengthRequired = customErrorFactory( 'LengthRequired', '411', 'Length Required' );
exports.PreconditionFailed = customErrorFactory( 'PreconditionFailed', '412', 'Precondition Failed' );
exports.RequestEntityTooLarge = customErrorFactory( 'RequestEntityTooLarge', '413', 'Request Entity Too Large' );
exports.RequestURITooLong = customErrorFactory( 'RequestURITooLong', '414', 'Request URI Too Long' );
exports.UnsupportedMediaType = customErrorFactory( 'UnsupportedMediaType', '415', 'Unsupported Media Type' );
exports.RequestedRangeNotSatisfiable = customErrorFactory( 'RequestRangeNotSatisfiable', '416', 'Request Range Not Satisfiable' );
exports.ExpectationFailed = customErrorFactory( 'ExpectationFailed', '417', 'Expectation Failed' );

exports.InternalServerError = customErrorFactory( 'InternalServerError', '500', 'Internal Server Error' );
exports.NotImplemented = customErrorFactory( 'NotImplemented', '501', 'Not Implemented' );
exports.BadGateway = customErrorFactory( 'BadGateway', '502', 'Bad Gateway' );
exports.ServiceUnavailable = customErrorFactory( 'ServiceUnavailable', '503', 'Service Unavailable' );
exports.GatewayTimeout = customErrorFactory( 'GatewayTimeout', '504', 'Gateway Timeout' );
exports.HTTPVersionNotSupported = customErrorFactory( 'HTTPVersoinNotSupported', '505', 'HTTP Version Not Supported' );