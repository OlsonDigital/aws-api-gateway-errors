# AWS API Gateway Errors

A set of Error objects mapping directly to error level HTTP status codes.  
Built for usage within the AWS API Gateway.

The `toString` method of each object produces a String which starts with 
the numeric HTTP status code.  These Strings, when sent to a Lambda context's 
`fail` method, can be mapped to HTTP status codes within the Gateway.  For instance, 
`404*` would map to status code 404.

## Usage

`npm install --save aws-api-gateway-errors`

```
const errors = require( 'aws-api-gateway-errors' );

function processEvent( event ) {

    ... do something ...
    
    ... user requested a non-existant resource ...
    throw new errors.NotFound();

}

exports.handler = ( event, context ) => {
    
    try {
        context.succeed( processEvent( event ) );
    }
    catch( e ) {
        context.fail( e.toString() );
    }

};
```

There are Error types for all 4xx and 5xx HTTP status codes.
