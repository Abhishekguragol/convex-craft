"use client";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Avatar,
    AvatarGroup,
} from "@nextui-org/react";

const EditorNavbar: React.FC<{
    websiteTitle: string;
    websiteVersion: string;
    config: any;
}> = (props) => {
    return (
        <div>
            <Navbar isBordered height={"70px"} maxWidth="full">
                <NavbarBrand>
                    <p className="font-bold text-inherit">ConvexCraft</p>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem>
                        {props.websiteTitle && props.websiteVersion ? (
                            <p className="text-inherit">
                                {props.websiteTitle} ({props.websiteVersion})
                            </p>
                        ) : null}
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <AvatarGroup isBordered>
                            {props.config?.currently_editing.map(
                                (user: string, ind: number) => {
                                    return <Avatar key={ind} name={user} />;
                                }
                            )}
                        </AvatarGroup>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            href="#"
                            variant="flat"
                        >
                            Save
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
};

export default EditorNavbar;
