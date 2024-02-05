// NOTE: You can remove this file. Declaring the shape
// of the database is entirely optional in Convex.
// See https://docs.convex.dev/database/schemas.

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema(
    {
        users: defineTable({
            name: v.string(),
        }),

        websites: defineTable({
            title: v.string(),
            collaborators: v.array(v.id("users")),
        }),

        configs: defineTable({
            version: v.string(),
            website: v.id("websites"),
            components: v.array(v.string()),
            currently_editing: v.array(v.id("users")),
        }),
    },
    // If you ever get an error about schema mismatch
    // between your data and your schema, and you cannot
    // change the schema to match the current data in your database,
    // you can:
    //  1. Use the dashboard to delete tables or individual documents
    //     that are causing the error.
    //  2. Change this option to `false` and make changes to the data
    //     freely, ignoring the schema. Don't forget to change back to `true`!
    { schemaValidation: true }
);
