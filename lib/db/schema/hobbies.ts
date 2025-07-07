import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const hobbies = sqliteTable('hobbies', {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	slug: text().notNull().unique(),
	icon: text(),
	description: text(),
})
