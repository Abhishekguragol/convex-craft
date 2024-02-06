import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createConfig = mutation({
    args: {
        version: v.string(),
        website: v.id("websites"),
        userId: v.id("users"),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("configs", {
            version: args.version,
            website: args.website,
            components: [],
            currently_editing: [args.userId],
        });
    },
});

export const createVersion = mutation({
    args: {
        baseConfigId: v.id("configs"),
        version: v.string(),
        userId: v.id("users"),
    },
    handler: async (ctx, args) => {
        let baseConfig = await ctx.db.get(args.baseConfigId);
        if (baseConfig) {
            await ctx.db.insert("configs", {
                version: args.version,
                website: baseConfig.website,
                components: baseConfig.components,
                currently_editing: [args.userId],
            });
        }
    },
});

export const readConfigsForWebsite = query({
    args: {
        websiteId: v.id("websites"),
    },
    handler: async (ctx, args) => {
        return ctx.db
            .query("configs")
            .filter((q) => q.eq(q.field("website"), args.websiteId))
            .collect();
    },
});

export const readConfig = query({
    args: {
        configId: v.id("configs"),
    },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.configId);
    },
});

export const updateConfig = mutation({
    args: {
        configId: v.id("configs"),
        updatedConfig: v.object({
            version: v.string(),
            website: v.id("websites"),
            components: v.array(v.string()),
            currently_editing: v.array(v.id("users")),
        }),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.configId, { ...args.updatedConfig });
    },
});

export const updateConfigComponents = mutation({
    args: {
        configId: v.id("configs"),
        updatedComponents: v.array(v.string()),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.configId, {
            components: args.updatedComponents,
        });
    },
});

export const updateConfigCurrentlyEditing = mutation({
    args: {
        configId: v.id("configs"),
        currentlyEditing: v.array(v.id("users")),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.configId, {
            currently_editing: args.currentlyEditing,
        });
    },
});
