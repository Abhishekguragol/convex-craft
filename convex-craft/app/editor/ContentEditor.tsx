"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    Select,
    SelectItem,
    Button,
} from "@nextui-org/react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
const componentConfigs = require("./component-configs.json");

const supportedComponents = [
    { label: "Navbar", value: "Navbar" },
    { label: "Divider", value: "Divider" },
    { label: "Table", value: "Table" },
];

const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const ContentEditor: React.FC<{
    config: any;
}> = (props) => {
    const [componentToAdd, setComponentToAdd] = useState("");

    // Mutations
    const updateConfigComponents: any = useMutation(
        api.configs.updateConfigComponents
    );

    const handleAddComponent = () => {
        let updatedComponents = [
            ...props.config?.components,
            componentConfigs[componentToAdd],
        ];
        updateConfigComponents({
            configId: props.config._id,
            updatedComponents: updatedComponents,
        });
    };
    return (
        <div id="editor_sidebar">
            <div>
                <Accordion variant="shadow">
                    {props.config?.components.map(
                        (component: any, ind: number) => (
                            <AccordionItem
                                key={ind}
                                aria-label={component["component_name"]}
                                title={component["component_name"]}
                            >
                                {defaultContent}
                            </AccordionItem>
                        )
                    )}
                </Accordion>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "20px",
                }}
            >
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                        label="Select a component to add"
                        className="max-w-xs"
                        color="primary"
                        onChange={(e) => setComponentToAdd(e.target.value)}
                    >
                        {supportedComponents.map((component) => (
                            <SelectItem
                                key={component.value}
                                value={component.value}
                            >
                                {component.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div id="add-component-button">
                    <Button
                        color="primary"
                        variant="flat"
                        onPress={handleAddComponent}
                    >
                        +
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ContentEditor;
