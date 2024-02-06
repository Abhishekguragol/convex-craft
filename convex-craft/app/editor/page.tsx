"use client";

import { useState, useEffect } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { set } from "date-fns/esm";

export default function Page() {
    const [user, setUser] = useState("js7e6h69hye37ev3v176qtppt16jzvfr");
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const configs =
        useQuery(api.configs.readConfigsForWebsite, {
            websiteId: "jh7e0adwhwxajc4fk42ys0rrps6jybxq" as Id<"websites">,
        }) || [];
    const [config, setConfig] = useState({});
    const updateConfig = useMutation(api.configs.updateConfigCurrentlyEditing);

    useEffect(() => {
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
        </>
    );
}
