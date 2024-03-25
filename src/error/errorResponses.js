class ErrorResponses extends Error {
    constructor(statusCode, message) {
      super(message);
      this.statusCode = statusCode;
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);// this method returs the location of the particular error
    }
  
    // Define static methods for different types of errors
    static unauthorized(invalidData) {
      return new ErrorResponses(401, invalidData);
    }
  
    static noDataFound(data) {
      return new ErrorResponses(404, `No ${data} found.`);
    }
  
    static badRequest() {
      return new ErrorResponses(400, "Bad Request");
    }
  
    static mongoError() {
      return new ErrorResponses(500, "Internal server error");
    }
    static serverError() {
      return new ErrorResponses(500, "Internal server error");
    }
  
    static endPointNotFound(url) {
      return new ErrorResponses(404, `Cannot find ${url} on this server.`);
    }
  
    static customError(message) {
      return new ErrorResponses(400, message);
    }
  }
  
  module.exports = ErrorResponses;
  
/* 
401- unauthorised
402- payment required
403- insufficient permissions or authentication failure
404- couldn't find the requested resource
500- internal server error

*/
