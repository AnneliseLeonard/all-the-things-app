import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

import { hobbyLog } from './hobby-log'

export const hobbyLogProject = sqliteTable('hobbyLogProject', {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	description: text(),
	key: text().notNull(),
	hobbyLogId: int().notNull().references(() => hobbyLog.id),
	createdAt: int().notNull().$default(() => Date.now()),
	updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
})
