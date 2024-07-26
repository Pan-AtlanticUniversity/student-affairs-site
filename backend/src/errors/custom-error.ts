import { StatusCodes } from 'http-status-codes';

class CustomAPIError extends Error {

    statusCode: StatusCodes;

    constructor(message: string, statusCode: StatusCodes) {
        super(message)
        this.statusCode = statusCode
    }

}

export default CustomAPIError;