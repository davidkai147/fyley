import Factory from '@ioc:Adonis/Lucid/Factory'
import Users from 'App/Models/Users'

export const UserFactory = Factory
  .define(Users, ({ faker }) => {
    return {
      email: `${faker.internet.userName()} ${faker.name.firstName()}`,
      password: '123456',
    }
  })
  .build()
