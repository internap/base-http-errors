# Base HTTP Errors

A set of basic HTTP errors that can be used in Express.js

## Usage

```javascript
const {
    NotFound,
    BadRequest
} = require('base-http-errors');

app.use((req, res, next) => {
    if (routeDoesntExist()) {
        next(new NotFound());
    }
    
    if (somethingWrongWithRequest()) {
        next(new BadRequest('A Custom Message'));
    }
});


// error handler
app.use((err, req, res, next) => {
    res.status(err.status);
    res.json({
        message: err.message,
        type: err.constructor.name,
    });
});

```

## Available Errors

| Error Class       | Default Message    | Status Code  |
| ----------------- | ------------------ | ------------ |
| BaseError         | Base Error         | 500          |
| TooManyRequests   | Too Many Requests  | 429          |
| NotFound          | Not Found          | 404          |
| Unauthorized      | Unauthorized       | 401          |
| BadRequest        | Bad Request        | 400          |
| InvalidInput      | Invalid Input      | 400          |


## Custom Errors

You may subclass any of the above listed errors to create your own error.

E.g.

```javascript
class CustomError extends BaseError {
    constructor(message) {
        super(message || 'Custom Error');
        this.status = 400;
    }
}
```