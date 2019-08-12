// Client Errors 4xx

export class ClientError extends Error {
  constructor(msg, code = 400) {
    super(msg);
    this.code = code;
  }
}

export class BadRequestError extends Error {
  constructor(msg) {
    super(msg);
    this.code = 400;
  }
}

export class UnauthorizedError extends Error {
  constructor(msg) {
    super(msg);
    this.code = 401;
  }
}

export class ForbiddenError extends Error {
  constructor(msg) {
    super(msg);
    this.code = 403;
  }
}

export class NotFoundError extends Error {
  constructor(msg) {
    super(msg);
    this.code = 404;
  }
}

export class TeapotError extends Error {
  constructor(msg = '') {
    super(`I'm a teapot - ${msg} RFC 2324`);
    this.code = 418;
  }
}

// Server Errors 5xx

export class InternalServerError extends Error {
  constructor(msg) {
    super(msg);
    this.code = 500;
  }
}

export class ServerError extends Error {
  constructor(msg, code = 500) {
    super(msg);
    this.code = code;
  }
}
