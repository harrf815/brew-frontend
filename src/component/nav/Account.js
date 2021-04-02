import React from "react";

class Account extends React.Component {
  render() {
    return (
      <div className="account-container">
        <h2 class="ui header">
          <i class="settings icon"></i>
          <div class="content">
            Account Settings
            <div class="sub header">Manage your preferences</div>
          </div>
        </h2>
        <div class="account-dropdown ui secondary vertical menu">
          <a class="item">Profile</a>
          <a class="item">Settings</a>
          <div class="ui dropdown item">
            <i class="dropdown icon"></i>
            Display Options
            <div class="menu">
              <div class="header">Text Size</div>
              <a class="item">Small</a>
              <a class="item">Medium</a>
              <a class="item">Large</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
