import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class LoginValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    email: schema.string({}, [
      rules.email(),
    ]),
    password: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {
    'email.required': 'Email phai duoc nhap',
    'email.email': 'Email phai dung dinh dang',
    'password.required': 'Mat hkhau phai duoc nhap',
  }
}
