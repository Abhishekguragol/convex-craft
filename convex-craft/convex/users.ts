import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
    args: {
        name: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("users", {
            name: args.name,
        });
    },
});
