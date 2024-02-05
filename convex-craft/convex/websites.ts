import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createWebsite = mutation({
    args: {
        title: v.string(),
        components: v.array(v.string()),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("websites", {
            title: args.title,
            components: ["Text", "Image"],
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

export const updateWebsite = mutation({
    args: {
        id: v.id("websites"),
        components: v.array(v.string()),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            components: args.components,
        });
    },
});
