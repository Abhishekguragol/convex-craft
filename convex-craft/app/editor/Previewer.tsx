"use client";

import React from "react";
import "./page.css";

import NavbarComponent from "@/components/custom/Navbar/NavbarComponent";
import TableComponent from "@/components/custom/Table/TableComponent";
import DividerComponent from "@/components/custom/Divider/DividerComponent";

const Previewer: React.FC<{
    config: any;
}> = (props) => {
    const getComponent = (componentName: string, props: object) => {
        switch (componentName) {
            case "Navbar":
                return <NavbarComponent {...props} />;
            case "Table":
                return <TableComponent {...props} />;
            case "Divider":
                return <DividerComponent {...props} />;
        }
    };

    return (
        <div id="editor_previewer">
            <div className="section-container">
                {props.config?.components.map(
                    (
                        component: {
                            type_class: string;
                            component_name: string;
                            props: object;
                        },
                        ind: number
                    ) => {
                        return (
                            <div className={component.type_class}>
                                {getComponent(
                                    component.component_name,
                                    component.props
                                )}
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Previewer;
