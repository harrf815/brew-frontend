import React from "react";

export default function SideMenu() {
  return (
    <div className="ui secondary vertical menu">
      <a className="active item">Account</a>
      <a className="item">Settings</a>
      <div className="ui dropdown item">
        <i className="dropdown icon"></i>
        Display Options
        <div className="menu">
          <div className="header">Text Size</div>
          <a className="item">Small</a>
          <a className="item">Medium</a>
          <a className="item">Large</a>
        </div>
      </div>
    </div>
  );
}
