var errors = require( '../index' );
var should = require( 'should' );

describe( 'Errors', function() {

    it( 'Should expose all HTTP errors with appropriate status codes', function() {
        var badRequest = new errors.BadRequest(),
            unauthorized = new errors.Unauthorized(),
            paymentRequired = new errors.PaymentRequired(),
            forbidden = new errors.Forbidden(),
            notFound = new errors.NotFound(),
            methodNotAllowed = new errors.MethodNotAllowed(),
            notAcceptable = new errors.NotAcceptable(),
            proxyAuthenticationRequest = new errors.ProxyAuthenticationRequired(),
            requestTimeout = new errors.RequestTimeout(),
            conflict = new errors.Conflict(),
            gone = new errors.Gone(),
            lengthRequired = new errors.LengthRequired(),
            preconditionFailed = new errors.PreconditionFailed(),
            requestEntityTooLarge = new errors.RequestEntityTooLarge(),
            requestURITooLong = new errors.RequestURITooLong(),
            unsupportedMediaType = new errors.UnsupportedMediaType(),
            requestedRangeNotSatisfiable = new errors.RequestedRangeNotSatisfiable(),
            expectationFailed = new errors.ExpectationFailed(),

            internalServerError = new errors.InternalServerError(),
            notImplemented = new errors.NotImplemented(),
            badGateway = new errors.BadGateway(),
            serviceUnavailable = new errors.ServiceUnavailable(),
            gatewayTimeout = new errors.GatewayTimeout(),
            httpVersionNotSupported = new errors.HTTPVersionNotSupported();

        badRequest.toString().should.startWith( '400' );
        unauthorized.toString().should.startWith( '401' );
        paymentRequired.toString().should.startWith( '402' );
        forbidden.toString().should.startWith( '403' );
        notFound.toString().should.startWith( '404' );
        methodNotAllowed.toString().should.startWith( '405' );
        notAcceptable.toString().should.startWith( '406' );
        proxyAuthenticationRequest.toString().should.startWith( '407' );
        requestTimeout.toString().should.startWith( '408' );
        conflict.toString().should.startWith( '409' );
        gone.toString().should.startWith( '410' );
        lengthRequired.toString().should.startWith( '411' );
        preconditionFailed.toString().should.startWith( '412' );
        requestEntityTooLarge.toString().should.startWith( '413' );
        requestURITooLong.toString().should.startWith( '414' );
        unsupportedMediaType.toString().should.startWith( '415' );
        requestedRangeNotSatisfiable.toString().should.startWith( '416' );
        expectationFailed.toString().should.startWith( '417' );

        internalServerError.toString().should.startWith( '500' );
        notImplemented.toString().should.startWith( '501' );
        badGateway.toString().should.startWith( '502' );
        serviceUnavailable.toString().should.startWith( '503' );
        gatewayTimeout.toString().should.startWith( '504' );
        httpVersionNotSupported.toString().should.startWith( '505' );
    } );

} );