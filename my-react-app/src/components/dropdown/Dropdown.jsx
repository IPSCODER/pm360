import React from "react";
import MenuItems from "../menuitems/MenuItems";
import styles from "./dropdown.module.css"; // Import CSS module

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel += 1;
    const dropdownClass = depthLevel > 1 ? styles["dropdown-submenu"] : "";

    return (
        <React.Fragment>
        <ul className={`${styles.dropdown} ${dropdownClass} ${dropdown ? styles.show : ""}`}>
            {submenus.map((submenu, index) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
            </React.Fragment>
    );
};

export default Dropdown;
