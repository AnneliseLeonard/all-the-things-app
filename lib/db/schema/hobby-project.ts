import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { user } from './auth';
import { hobby } from './hobby';
import { hobbyLog } from './hobby-log';

export const hobbyProject = sqliteTable('hobbyProject', {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	description: text(),
	startedAt: int(),
	endedAt: int(),
	hobbyId: int().notNull().references(() => hobby.id),
	hobbyLogId: int().notNull().references(() => hobbyLog.id),
	userId: int().notNull().references(() => user.id),
	createdAt: int().notNull().$default(() => Date.now()),
	updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
