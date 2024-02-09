"use client";

import React, { useEffect } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    Listbox,
    ListboxItem,
} from "@nextui-org/react";

const VersionModal: React.FC<{
    websiteConfigs: any;
    setConfigId: Function;
}> = (props) => {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    const handleVersionSelection = async (id: string) => {
        if (id) {
            props.setConfigId(id);
            onClose();
        }
    };

    useEffect(() => {
        onOpen();
    }, []);

    return (
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
                                {props.websiteConfigs?.map((config: any) => {
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
    );
};

export default VersionModal;
