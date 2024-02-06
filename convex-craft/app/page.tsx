"use client";

import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Code } from "@/components/typography/code";
import { Link } from "@/components/typography/link";

export default function Home() {
    return (
        <main className="container max-w-2xl flex flex-col gap-8">
            <h2>ConvexCraft</h2>
        </main>
    );
}
