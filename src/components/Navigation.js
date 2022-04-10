import { Menu } from "./";
import { Skeleton, Box, Flex, Spacer, Image, IconButton, useMediaQuery, useBreakpointValue, background, color } from "@chakra-ui/react"
import { FaUsers } from "react-icons/fa"
import { Link } from "react-router-dom";
import {
    IoEarth
} from "react-icons/io5";
import './Navbar.css';
import { useState } from "react";

const Navigation = () => {
    const [phoneSize] = useMediaQuery("(max-width: 950px)")
    const btnDisplay = useBreakpointValue({ base: "none", md: "inline-flex" })
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation"> 
            <a href="/" className="brand-name">
                <Image src="/img/logo.png" alt="" width={phoneSize ? "60px" : "60px"} marginLeft={phoneSize ? "45vw" : "10vw"}/>
            </a>
            <button className="hamburger" onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            }}>
                {/* icon from heroicons.com */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
                >
                    <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }>
                <ul>
                    <li><a href='/'>Beranda</a></li>
                    <li><a href='/comingsoon'>Kepengurusan</a></li>
                    <li><a href='/infomhs'>Layanan Mahasiswa</a></li>
                    <li><a href='/news'>Berita</a></li>
                    <li><a href='/activity'>Kegiatan</a></li>
                    <li><a href='/agenda'>Agenda</a></li>
                    <li><a href='/bumibudaya'>Campaign</a></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navigation
