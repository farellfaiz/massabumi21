import React from 'react';
import { MenuButton } from './../';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    IconButton,
    useDisclosure,
    Image
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
    FaBars, FaHome, FaUsers, FaPhoneAlt
} from "react-icons/fa";

const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <IconButton aria-label="Menu" icon={<FaBars />} onClick={onOpen} />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg="#E4E1D6">
                <DrawerHeader borderBottomWidth="1px" display="flex" justifyContent="center">
                    <Image src="/img/logo-wobg.png" alt="FITB 2021" width="200px" />
                </DrawerHeader>
                <DrawerBody>
                    <Link to="/">
                        <MenuButton name="&nbsp;Home&nbsp;" icon={<FaHome />} />
                    </Link>
                    <Link to="/family">
                        <MenuButton name="&nbsp;&nbsp;Family&nbsp;&nbsp;" icon={<FaUsers />} />
                    </Link>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default Menu
