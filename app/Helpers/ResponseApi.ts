/**
 * @desc    This file contain Success and Error response for sending to client / user
 * @author  Kai David
 * @since   2020
 */
declare module 'ResponseApi' {
  export function success (message: string, statusCode: number, results?: any) {
    return {
      message,
      error: false,
      code: statusCode,
      results,
    }
  }
  export function error (message: string, statusCode: number) {
    // List of common HTTP request code
    let codes: number[]
    codes = [200, 201, 400, 401, 404, 403, 422, 500]

    // Get matched code
    let findCode: number | undefined
    findCode = codes.find((code) => code === statusCode)

    statusCode = findCode || 500

    return {
      message,
      code: statusCode,
      error: true,
    }
  }
}

/**
 * @desc    Send any validation response
 *
 * @param   {object | array} errors
 */
// exports.validation = (errors) => {
//   return {
//     message: 'Validation errors',
//     error: true,
//     code: 422,
//     errors,
//   }
// }
