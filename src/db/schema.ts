import { pgTable, index, pgEnum, text, timestamp, serial, uuid } from "drizzle-orm/pg-core"

export const fromEnum = pgEnum("fromEnum", ['suryansh', 'me'])
export const status = pgEnum("status", ["read", "unread"])
export const editor = pgEnum("editor", ["jodit", "markdown"])

export const messages = pgTable("messages", {
	from: fromEnum("from").notNull(),
	status: status("status").notNull(),
	email: text("email").notNull(),
	name: text("name"),
	message: text("message").notNull(),
	timestamp: timestamp("timestamp").defaultNow().notNull(),
	id: serial("id").primaryKey().notNull(),
},
(table) => {
	return {
		emailIndex: index("emailIndex").using("btree", table.email, table.id),
		statusIndex: index("underIndex").using("btree", table.email, table.status),
	}
});

export const blogs = pgTable("blogs", {
	title: text("title").notNull(),
	content: text("content").notNull(),
	editor: editor("editor").notNull(),
	timestamp: timestamp("timestamp").defaultNow().notNull(),
	id: uuid("id").defaultRandom().primaryKey().notNull(),
});

export type Message = typeof messages.$inferSelect;
export type Blog = typeof blogs.$inferSelect;