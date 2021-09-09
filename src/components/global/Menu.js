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

import {
    IoEarth
} from "react-icons/io5";

import {
    IoEarthOutline
} from "react-icons/io5";

const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <IconButton aria-label="Menu" icon={<FaBars />} onClick={onOpen} />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg="#E4E1Dff6">
                <DrawerHeader borderBottomWidth="1px" display="flex" justifyContent="center">
                    <Image src="/img/logo.png" alt="" width="200px" />
                </DrawerHeader>
                <DrawerBody>
                    <Link to="/">
                        <MenuButton name="&nbsp;Home&nbsp;" icon={<FaHome />} />
                    </Link>
                    <Link to="/family">
                        <MenuButton name="&nbsp;&nbsp;Family&nbsp;&nbsp;" icon={<FaUsers />} />
                    </Link>
                    <Link to="/bumibudaya">
                        <MenuButton name="&nbsp;&nbsp;Bumi Budaya&nbsp;&nbsp;" icon={<IoEarth />} />
                    </Link>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default Menu
