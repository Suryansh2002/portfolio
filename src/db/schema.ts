import { pgTable, index, pgEnum, text, timestamp, serial } from "drizzle-orm/pg-core"

export const fromEnum = pgEnum("fromEnum", ['suryansh', 'me'])
export const status = pgEnum("status", ["read", "unread"])


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

export type Message = typeof messages.$inferSelect;