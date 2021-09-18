import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Actors extends BaseSchema {
  protected tableName = 'actors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.text('bio').notNullable()
      table.datetime('date_of_birth').notNullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
