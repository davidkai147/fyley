import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/Auth/LoginValidator'
import ApiResponseBodyBuilder from 'App/Helpers/ApiResponseBodyBuilder'

export default class AuthController {
  public async login ({ request, auth, response }: HttpContextContract) {
    // Validator
    const data = await request.validate(LoginValidator)

    try {
      const token = await auth.use('api').attempt(data.email, data.password)
      return response.ok(ApiResponseBodyBuilder.success('ok', 200, token.toJSON()))
    } catch (error) {
      return response.unauthorized(ApiResponseBodyBuilder.error('message', 401))
    }
  }
}
