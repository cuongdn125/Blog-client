import React, { useState } from "react";
import { SidebarDataTop, SidebarDataBottom } from "./SidebarData";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import "../../media.scss";
import "boxicons";
import MenuItem from "../MenuItem/MenuItem";
import EditorMarkdown from "../EditorMarkdown/EditorMarkdown";

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const handleMenu = () => setToggle(!toggle);

  return (
    <>
      <nav className="sidebar">
        <div className="nav-menu" onClick={handleMenu}>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div
          className={`bg-open  ${toggle ? "bg-close" : ""}`}
          onClick={handleMenu}
        ></div>
        <div className={`${toggle ? "active-menu" : ""} main-menu`}>
          <ul className="main-menu-section">
            {SidebarDataTop.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  name={item.title}
                  exact={item.exact}
                  to={item.path}
                  subMenus={item.subMenus}
                  icon={item.icon}
                  cName={item.cName}
                  icon_up={item.icon_up}
                  icon_down={item.icon_down}
                  toggle={toggle}
                />
              );
            })}
          </ul>

          <ul className="main-menu-section menu-section-bottom">
            {SidebarDataBottom.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} className="menu-item">
                    <div className="menu-icon">{item.icon}</div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="menu-info ">
              <div className="menu-info-img">
                <img
                  className="info-img"
                  src="https://img1.kienthucvui.vn/uploads/2019/10/10/anh-chibi-naruto_110701874.jpg"
                  alt="img"
                />
              </div>
              <div className="menu-info-text">
                <h3>Ngọc Cường</h3>
                <p>ngoccuong061@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`${toggle ? "" : "active-nav-content"} content`}>
        <EditorMarkdown />
      </div>
    </>
  );
}
