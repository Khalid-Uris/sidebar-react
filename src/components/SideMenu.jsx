import React, { useState } from "react";
import logo from "../assets/logo/webscript.png";
import user from "../assets/user.jpg";

const SideMenu = () => {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`side-menu ${inactive && "inactive"}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <div className="search-btn">
          <i class="bi bi-search"></i>
        </div>
        <input type="text" placeholder="Search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          <li>
            <a href="" className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="" className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-newspaper"></i>
              </div>
              <span>Content</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a>
                  {/* <span>Courses</span> */}
                  Courses
                </a>
              </li>
              <li>
                <a>
                  {/* <span>Videos</span> */}
                  Videos
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="" className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Imran Khan</h5>
          <p>imrankhan@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
