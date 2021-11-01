import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
export default function MenuItem(props) {
    const { name, subMenus, icon, to, cName, icon_up, icon_down, toggle } = props;

    const [toggleSubMenu, setToggleSubMenu] = useState(false);

    const handleToggleSubMenu = () => {
        if(!toggle) {
            setToggleSubMenu(!toggleSubMenu);
        }
    }

    useEffect(() => {
        if(toggle) {
            setToggleSubMenu(false)
        }
    }, [toggle])
    return (
        <li className={cName}>
            <Link
                to={to}
                className={`menu-item`}
                onClick={handleToggleSubMenu}
            >
                <div className="menu-icon">
                    {icon}
                </div>
                <span>{name}</span>
                <div className="menu-item-chevron">
                    {toggleSubMenu ? icon_up : icon_down}
                </div>
            </Link>
            {subMenus && subMenus.length  > 0 ? (
                <ul className={`sub-menu ${toggleSubMenu ? '' : 'hide-sub-menu'}`}>
                    {subMenus.map((menu, index) => (
                        <li key={index}>
                            <Link to={menu.path} className="sub-menu-item" >{menu.name}</Link>
                        </li>
                    ))}
                </ul>
            ) : null}
        </li>
    )
}
