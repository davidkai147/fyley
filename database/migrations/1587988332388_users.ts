import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('first_name', 255).nullable()
      table.string('last_name', 255).nullable()
      table.date('dob').nullable()
      table.string('phone_number').nullable()
      table.integer('gender').nullable()
      table.string('status', 180).defaultTo('active').notNullable()
      table.string('remember_me_token').nullable()
      table.timestamp('verified_at').nullable()
      table.timestamp('deleted_at').nullable()
      table.timestamps(true)

      table.unique(['email'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
