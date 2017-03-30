'use strict';

class BaseError extends Error {
    constructor(message) {
        super(message || 'Base Error');

        this.name = this.constructor.name;

        Error.captureStackTrace &&
        Error.captureStackTrace(this, this.constructor);
        this.status = 500;
    }
}

class BadRequest extends BaseError {
    constructor(message) {
        super(message || 'Bad Request');
        this.status = 400;
    }
}

class InvalidInput extends BadRequest {
    constructor(message) {
        super(message  || 'Invalid Input');
    }
}

class Unauthorized extends BaseError {
    constructor(message) {
        super(message || 'Unauthorized');
        this.status = 401;
    }
}

class NotFound extends BaseError {
    constructor(message) {
        super(message || 'Not Found');
        this.status = 404;
    }
}

class TooManyRequests extends BaseError {
    constructor(message) {
        super(message || 'Too Many Requests');
        this.status = 429;
    }
}

module.exports = {
    BaseError: BaseError,
    BadRequest: BadRequest,
    InvalidInput: InvalidInput,
    Unauthorized: Unauthorized,
    NotFound: NotFound,
    TooManyRequests: TooManyRequests
};
