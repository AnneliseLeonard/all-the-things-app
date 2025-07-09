import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { hobby } from './hobby';

export const hobbyLog = sqliteTable('hobbyLog', {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	description: text(),
	startedAt: int(),
	endedAt: int(),
	hobbyId: int().notNull().references(() => hobby.id),
	createdAt: int().notNull().$default(() => Date.now()),
	updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
