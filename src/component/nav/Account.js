import React from "react";

//liked brews could potential be a list of breweries user liked, airbnb sort of
class Account extends React.Component {
  render() {
    return (
      <div className="account-container">
        <h2 class="account-head ui header">
          Account Settings
          <div class="sub header"></div>
        </h2>
        <div class="account-grid ui grid">
          <div class="four wide column">
            <div class="ui vertical fluid tabular menu">
              <a class="item">Profile</a>
              <a class="item">Preferences</a>
              <a class="item">Liked Brews</a>
            </div>
          </div>
          <div class="eight wide stretched column">
            <div class="ui segment">
              brew project will soon be released in your app store! <br></br>
              update your number to receive the latest info <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
