import { pgTable, text, serial, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const accessCodes = pgTable("access_codes", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  role: text("role").notNull(),
  description: text("description"),
  isActive: text("is_active").default("true"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const familyMembers = pgTable("family_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  accessCode: text("access_code").references(() => accessCodes.code),
  status: text("status").default("Actif"),
  bankAccountPro: text("bank_account_pro"),
  bankAccountPerso: text("bank_account_perso"),
  takafulPolicyNumber: text("takaful_policy_number"),
  takafulCoverage: decimal("takaful_coverage", { precision: 10, scale: 2 }),
  takafulMonthly: decimal("takaful_monthly", { precision: 10, scale: 2 }),
  contractType: text("contract_type"),
  contractStart: timestamp("contract_start"),
  email: text("email"),
  phone: text("phone"),
  bankLimitPro: decimal("bank_limit_pro", { precision: 10, scale: 2 }),
  bankLimitPerso: decimal("bank_limit_perso", { precision: 10, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const modules = pgTable("modules", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  status: text("status").default("Production"),
  category: text("category"),
  responsable: text("responsable"),
  audit: text("audit"),
  cert: text("cert"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertAccessCodeSchema = createInsertSchema(accessCodes);
export const selectAccessCodeSchema = createSelectSchema(accessCodes);
export const insertFamilyMemberSchema = createInsertSchema(familyMembers);
export const selectFamilyMemberSchema = createSelectSchema(familyMembers);
export const insertModuleSchema = createInsertSchema(modules);
export const selectModuleSchema = createSelectSchema(modules);

export type InsertAccessCode = typeof accessCodes.$inferInsert;
export type SelectAccessCode = typeof accessCodes.$inferSelect;
export type InsertFamilyMember = typeof familyMembers.$inferInsert;
export type SelectFamilyMember = typeof familyMembers.$inferSelect;
export type InsertModule = typeof modules.$inferInsert;
export type SelectModule = typeof modules.$inferSelect;
