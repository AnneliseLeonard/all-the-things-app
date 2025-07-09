import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const hobby = sqliteTable('hobby', {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	slug: text().notNull().unique(),
	description: text(),
	createdAt: int().notNull().$default(() => Date.now()),
	updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
