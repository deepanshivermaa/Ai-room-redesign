import { integer, serial, varchar } from "drizzle-orm/pg-core"; 
import { pgTable } from "drizzle-orm/pg-core";
import RoomType from "../dashboard/create-new/_components/RoomType";

export const Users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),  // ✅ Added length
    email: varchar("email", { length: 255 }).notNull(),
    imageUrl: varchar("imageUrl", { length: 500 }).notNull(),  // ✅ Added length
    credits: integer("credits").default(3),
});

export const AiGeneratedImage = pgTable('aiGeneratedImage', {
    id: serial('id').primaryKey(),
    roomType: varchar('roomType').notNull(),
    designType: varchar('designType').notNull(),
    orgImage: varchar('orgImage').notNull(),
    aiImage: varchar('aiImage').notNull(),  // Fixed the syntax error
    userEmail: varchar('userEmail'),
});
