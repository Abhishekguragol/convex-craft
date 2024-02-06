"use client";
import React, { useState, useEffect } from "react";
import { Button, Image } from "@nextui-org/react";
import { FaPlus, FaEllipsisV, FaTrash, FaEdit } from "react-icons/fa";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

const Sidebar = () => {
    const uiComponents = [
        <span key="TextComponent">Hello, Next.js UI!</span>,
        <Image key="ImageComponent" src="/path/to/image.jpg" alt="Image" />,
        <Button key="ButtonComponent">Click me!</Button>,
    ];
    const uiCompNames = ["Text", "Image", "Button"];
    const uiCompMapper: { [Key: string]: React.ReactNode } = {
        Text: uiComponents[0],
        Image: uiComponents[1],
        Button: uiComponents[2],
    };

    const [selectedComponents, setSelectedComponents] = useState<
        React.ReactNode[]
    >([]);
    const [selectedOption, setSelectedOption] =
        useState<string>("Select a component");
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    // const updateWebsite = useMutation(api.websites.updateWebsite);
    const website = useQuery(api.websites.readWebsite, {
        websiteId: "jh779tnrmhbzrngd0zdqhptz9n6jxbh0" as Id<"websites">,
    });

    const handleComponentClick = (index: number) => {
        const selectedComponent = uiComponents[index];
        setSelectedComponents((prevSelectedComponents) => [
            ...prevSelectedComponents,
            selectedComponent,
        ]);
        setSelectedOption(`Component ${index + 1}`);
        // updateWebsite({
        //     components: [...(website?.components || []), uiCompNames[index]],
        //     id: "jh779tnrmhbzrngd0zdqhptz9n6jxbh0" as Id<"websites">,
        // });
    };

    const handleRemoveClick = (index: number) => {
        const updatedComponents = [...selectedComponents];
        updatedComponents.splice(index, 1);
        setSelectedComponents(updatedComponents);
        setActiveDropdown(null);
    };

    const handleEditClick = (index: number) => {
        // You can handle the editing logic here, such as opening a modal or navigating to an edit page.
        console.log(`Editing component ${index + 1}`);
        setActiveDropdown(null);
    };

    // useEffect(() => {
    //     const getRes: React.ReactNode[] =
    //         website?.components.map((comp) => uiCompMapper[comp]) || [];
    //     setSelectedComponents([...getRes]);
    // }, [website]);

    return (
        <div className="page-container">
            {
                <div
                    className="component-details"
                    style={{ width: "75%", float: "left" }}
                >
                    <h3>Page Preview</h3>
                    <div>
                        {selectedComponents.map((component, index) => (
                            <div
                                key={index}
                                style={{
                                    background: "white",
                                    height: "100%",
                                    width: "70%",
                                    padding: "15px",
                                    margin: "30px",
                                    alignItems: "center",
                                }}
                            >
                                {component}
                            </div>
                        ))}
                    </div>
                </div>
            }
            <div className="sidebar" style={{ width: "20%", float: "right" }}>
                <h2>UI Components</h2>
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    style={{ color: "black" }}
                >
                    <option>Select a component</option>
                    {uiComponents.map((_, index) => (
                        <option key={index} value={`Component ${index + 1}`}>
                            {uiCompNames[index]}
                        </option>
                    ))}
                </select>
                <Button
                    color="secondary"
                    onClick={() =>
                        handleComponentClick(
                            Number(selectedOption.split(" ")[1]) - 1
                        )
                    }
                >
                    <FaPlus className="plus-icon" />
                </Button>
                {selectedComponents.length > 0 && (
                    <div>
                        <h3>Selected Components</h3>
                        <ul>
                            {selectedComponents.map((component, index) => (
                                <li
                                    key={index}
                                    style={{ marginBottom: "10px" }}
                                >
                                    {uiCompNames[index]}
                                    <div
                                        className="dropdown"
                                        onClick={() =>
                                            setActiveDropdown(
                                                activeDropdown === index
                                                    ? null
                                                    : index
                                            )
                                        }
                                    >
                                        <FaEllipsisV />
                                        {activeDropdown === index && (
                                            <div className="dropdown-content">
                                                <button
                                                    onClick={() =>
                                                        handleEditClick(index)
                                                    }
                                                >
                                                    <FaEdit /> Edit
                                                </button>
                                                <br />
                                                <button
                                                    onClick={() =>
                                                        handleRemoveClick(index)
                                                    }
                                                >
                                                    <FaTrash /> Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
