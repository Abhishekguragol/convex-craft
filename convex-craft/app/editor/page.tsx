"use client";

import { useState, useEffect } from "react";
import "./page.css";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    Table,
} from "@nextui-org/react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

import TableComponent from "@/components/custom/Table/TableComponent";

export default function Page() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const [user, setUser] = useState("js7e6h69hye37ev3v176qtppt16jzvfr");
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const configs =
        useQuery(api.configs.readConfigsForWebsite, {
            websiteId: "jh7e0adwhwxajc4fk42ys0rrps6jybxq" as Id<"websites">,
        }) || [];
    const website = useQuery(api.websites.readWebsite, {
        websiteId: "jh7e0adwhwxajc4fk42ys0rrps6jybxq" as Id<"websites">,
    });
    const [config, setConfig] = useState({});
    const [websiteTitle, setWebsiteTitle] = useState("");
    const [websiteVersion, setWebsiteVersion] = useState("");
    const updateConfig: any = useMutation(
        api.configs.updateConfigCurrentlyEditing
    );

    const componentMapper = {
        Table: TableComponent,
    };
    const [components, setComponents] = useState([
        {
            component_name: "Table",
            props: {
                label: "",
                columns: 3,
                rows: 4,
                headers: ["NAME", "ROLE", "STATUS"],
                data: [
                    ["Tony Reichert", "CEO", "Active"],
                    ["Zoey Lang", "Technical Lead", "Paused"],
                    ["Jane Fisher", "Senior Developer", "Active"],
                    ["William Howard", "Community Manager", "Vacation"],
                ],
            },
        },
        {
            component_name: "Table",
            props: {
                label: "",
                columns: 3,
                rows: 4,
                headers: ["NAME", "ROLE", "STATUS"],
                data: [
                    ["Tony Reichert", "CEO", "Active"],
                    ["Zoey Lang", "Technical Lead", "Paused"],
                    ["Jane Fisher", "Senior Developer", "Active"],
                    ["William Howard", "Community Manager", "Vacation"],
                ],
            },
        },
        {
            component_name: "Table",
            props: {
                label: "",
                columns: 3,
                rows: 4,
                headers: ["NAME", "ROLE", "STATUS"],
                data: [
                    ["Tony Reichert", "CEO", "Active"],
                    ["Zoey Lang", "Technical Lead", "Paused"],
                    ["Jane Fisher", "Senior Developer", "Active"],
                    ["William Howard", "Community Manager", "Vacation"],
                ],
            },
        },
        {
            component_name: "Table",
            props: {
                label: "",
                columns: 3,
                rows: 4,
                headers: ["NAME", "ROLE", "STATUS"],
                data: [
                    ["Tony Reichert", "CEO", "Active"],
                    ["Zoey Lang", "Technical Lead", "Paused"],
                    ["Jane Fisher", "Senior Developer", "Active"],
                    ["William Howard", "Community Manager", "Vacation"],
                ],
            },
        },
    ]);

    useEffect(() => {
        if (website) {
            setWebsiteTitle(website.title);
        }
        if (configs && configs.length > 0) {
            onOpen();
        }
    }, [configs]);

    const handleVersionSelection = (id: string) => {
        if (id) {
            let selectedConfig = configs.filter(
                (config) => config._id === id
            )[0];
            setConfig(selectedConfig);
            let currently_editing = new Set([
                ...selectedConfig.currently_editing,
                user as Id<"users">,
            ]);
            setWebsiteVersion(selectedConfig.version);
            updateConfig({
                configId: id as Id<"configs">,
                currentlyEditing: Array.from(currently_editing),
            });
            onClose();
        }
    };

    return (
        <>
            <Modal
                size={"sm"}
                backdrop={"blur"}
                hideCloseButton={true}
                isDismissable={false}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Website versions
                            </ModalHeader>
                            <ModalBody>
                                <Listbox
                                    aria-label="Actions"
                                    onAction={(key) =>
                                        handleVersionSelection(key.toString())
                                    }
                                >
                                    {configs?.map((config) => {
                                        return (
                                            <ListboxItem key={config._id}>
                                                {config.version}
                                            </ListboxItem>
                                        );
                                    })}
                                </Listbox>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Navbar isBordered height={"70px"}>
                <NavbarBrand>
                    <p className="font-bold text-inherit">ConvexCraft</p>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem>
                        {websiteTitle && websiteVersion ? (
                            <p className="text-inherit">
                                {websiteTitle} ({websiteVersion})
                            </p>
                        ) : null}
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
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
            <div className="editor_container">
                <div id="editor_preview">
                    <div className="section-container">
                        {components.map((component, ind) => {
                            return (
                                <div className="spaced-component">
                                    {component.component_name === "Table" ? (
                                        <TableComponent
                                            label={component.props?.label || ""}
                                            headers={
                                                component.props?.headers || []
                                            }
                                            data={component.props?.data || []}
                                        />
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div id="editor_sidebar">
                    <div>
                        <Accordion variant="splitted">
                            {components.map((component, ind) => (
                                <AccordionItem
                                    key={ind}
                                    aria-label={component["component_name"]}
                                    title={component["component_name"]}
                                >
                                    {defaultContent}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                    <div id="add-component-button">
                        <Button color="primary" variant="flat" fullWidth={true}>
                            +
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
