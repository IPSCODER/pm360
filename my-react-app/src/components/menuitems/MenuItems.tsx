import React from "react";
import { useState, useEffect, useRef } from "react";
import Dropdown from "../dropdown/Dropdown";
import styles from "./menuitems.module.css"; // Import CSS module
import { Link } from "react-router-dom";

interface MenuItem {
    title: string;
    submenu?: MenuItem[];
}

interface MenuItemsProps {
    items: MenuItem;
    depthLevel: number;
}

const MenuItems: React.FC<MenuItemsProps> = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
                setDropdown(false);
            }
        };

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
    };

    const onMouseEnter = () => {
        if (window.innerWidth > 960) {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth > 960) {
            setDropdown(false);
        }
    };

    return (
        <li
            className={styles["menu-items"]}
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={toggleDropdown}
                        className={styles["menu-button"]}
                    >
                        {items.title} {" "}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className={styles.arrow} />}
                    </button>
                    <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <Link to={`/${items.title == "Home" ? "" : items.title.split(" ").join("-")}`} className={styles["menu-link"]}>{items.title}</Link>
            )}
        </li>
    );
};

export default MenuItems;
