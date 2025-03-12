import React from "react";
import { useState } from "react";
import { menuItems } from "../../constant/menuItems";
import MenuItems from "../menuitems/MenuItems";
import classes from "./navbar.module.css"; // Import CSS module

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <React.Fragment>
            <nav className={classes.navbar}>
            {/* Hamburger Menu Button for Mobile */}
            <button 
                className={classes.hamburger} 
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle Menu"
            >
                ☰
            </button>

            {/* Menu List */}
            <ul className={`${classes.menus} ${isMobileMenuOpen ? classes.show : ""}`}>
                {menuItems.map((menu, index) => (
                    <MenuItems items={menu} key={index} depthLevel={0} />
                ))}
            </ul>
        </nav>
        </React.Fragment>
    );
};

export default Navbar;
