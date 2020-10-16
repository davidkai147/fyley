import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/Auth/LoginValidator'

export default class AuthController {
  public async login ({ request, auth, response }: HttpContextContract) {
    // Validator
    const data = await request.validate(LoginValidator)

    try {
      const token = await auth.use('api').attempt(data.email, data.password)
      return token.toJSON()
    } catch (error) {
      return response.unauthorized({
        status: 'error',
        message: 'con cac',
      })
    }
  }
}
