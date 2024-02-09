"use client";

import React, { useState, useEffect } from "react";
import "./page.css";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import Previewer from "./Previewer";
import EditorNavbar from "./EditorNavbar";
import VersionModal from "./VersionModal";
import ContentEditor from "./ContentEditor";

export default function Page() {
    const [userId, setUserId] = useState("js7e6h69hye37ev3v176qtppt16jzvfr");
    const [websiteId, setWebsiteId] = useState(
        "jh7e0adwhwxajc4fk42ys0rrps6jybxq"
    );
    const [configId, setConfigId] = useState("");

    // Queries
    const website = useQuery(api.websites.readWebsite, {
        websiteId: websiteId as Id<"websites">,
    });
    const websiteConfigs = useQuery(api.configs.readConfigsForWebsite, {
        websiteId: websiteId as Id<"websites">,
    });
    const config = useQuery(
        api.configs.readConfig,
        configId !== "" ? { configId: configId as Id<"configs"> } : "skip"
    );

    // Mutations
    const updateConfigCurrentlyEditing: any = useMutation(
        api.configs.updateConfigCurrentlyEditing
    );

    // const handleCurrentlyEditingUpdate = () => {
    //     const currentlyEditing = [...config?.currently_editing, userId as Id<"users">]
    //     updateConfigCurrentlyEditing({
    //         configId: config?._id as Id<"configs">,
    //         currentlyEditing: currentlyEditing,
    //     });
    // }

    return (
        <>
            <VersionModal
                websiteConfigs={websiteConfigs}
                setConfigId={setConfigId}
            />
            <EditorNavbar
                websiteTitle={website?.title || ""}
                websiteVersion={config?.version || ""}
                config={config}
            />
            <div className="editor_container">
                <Previewer config={config} />
                <ContentEditor config={config} />
            </div>
        </>
    );
}
