import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('drivers', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.decimal('phone').notNullable();
        table.date('birth_date').notNullable();
        table.decimal('license').notNullable();
        table.string('license_type').notNullable();
        table.decimal('cpf').notNullable();
        table.boolean('active').notNullable();
       
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('drivers');
}