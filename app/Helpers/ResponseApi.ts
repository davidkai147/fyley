/**
 * @desc    This file contain Success and Error response for sending to client / user
 * @author  Kai David
 * @since   2020
 */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class ResponseApi {
  public success ({ response }: HttpContextContract, message: string, statusCode: number, results?: any): any {
    response.unauthorized()
    return {
      message,
      error: false,
      code: statusCode,
      results,
    }
  }
  public error (message: string, statusCode: number): any {
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

export default new ResponseApi()

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
