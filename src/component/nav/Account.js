import React from "react";

class Account extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 class="ui icon header">
          <i class="settings icon"></i>
          <div class="content">
            Account Settings
            <div class="sub header">
              Manage your account settings and set e-mail preferences.
            </div>
          </div>
        </h2>
      </div>
    );
  }
}

export default Account;
