import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createWebsite = mutation({
    args: {
        title: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("websites", {
            title: args.title,
            collaborators: [],
        });
    },
});

export const readWebsite = query({
    args: {
        websiteId: v.id("websites"),
    },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.websiteId);
    },
});
