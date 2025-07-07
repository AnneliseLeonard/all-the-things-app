import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

import { hobbies } from './hobbies'

export const hobbyLog = sqliteTable('hobbyLog', {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	description: text(),
	startedAt: int().notNull(),
	endedAt: int().notNull(),
	hobbyId: int().notNull().references(() => hobbies.id),
	createdAt: int().notNull().$default(() => Date.now()),
	updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
})
