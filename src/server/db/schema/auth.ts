import { InferSelectModel } from "drizzle-orm";
import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";

export const users = pgTable("user", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  hashedPassword: text("hashed_password"),
  name: text("name"),
  isAuthor: boolean("is_author").notNull().default(true),
  isAdmin: boolean("is_admin").notNull().default(false),
  avatarUrl: text("avatar_url"),
  authMethods: text("auth_methods").array(),
  socialLinks: text("social_links").array(),
  bio: text("bio"),
})

export const sessions = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
})

export const authenticationSchema = z.object({
  email: z.string().email().min(5).max(31),
  password: z
    .string()
    .min(4, { message: "must be at least 4 characters long" })
    .max(15, { message: "cannot be more than 15 characters long" }),
});

export const signUpSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(5).max(62),
  password: z
    .string()
    .min(4, { message: "must be at least 4 characters long" })
    .max(15, { message: "cannot be more than 15 characters long" }),
})

export const updateUserSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.string().min(4).optional(),
});

export type NameAndUsernameAndPassword = z.infer<typeof signUpSchema>;
export type UsernameAndPassword = z.infer<typeof authenticationSchema>;

export type SelectUsers = typeof users.$inferSelect
export type InsertUsers = typeof users.$inferInsert

export type Session = InferSelectModel<typeof sessions>
export type User = InferSelectModel<typeof users>
