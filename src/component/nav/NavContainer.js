import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import SmallSearchBar from "./SmallSearchBar";
import { Link, withRouter } from "react-router-dom";

/* eslint-disable */

export class NavContainer extends Component {
  render() {
    const currentUser = this.props.currentUser;
    const loggedIn = !!this.props.currentUser.id;

    const options = [
      { key: 1, text: "Account", value: 1 },
      { key: 2, text: "Sign Out", value: 2 },
    ];
    const options2 = [
      { key: 1, text: "Choice 1", value: 1 },
      { key: 2, text: "Choice 2", value: 2 },
      { key: 3, text: "Choice 3", value: 3 },
    ];

    return (
      <div className="ui secondary menu">
        <a className="item">LOGO</a>
        <a className="item">Browse</a>
        <a className="item">Top Breweries</a>
        <div className="right menu">
          <SmallSearchBar onSearch={this.props.onSearch} />

          {loggedIn ? (
            <Menu id="dd">
              <Dropdown id="dd" text={`Welcome ${currentUser.username}`} simple item>
                <Dropdown.Menu id="dd">
                  <Dropdown.Item id="dd">
                    <Link to="/" className="item">
                      Account
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/" className="item" onClick={this.props.logout}>
                      Sign Out
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          ) : (
            <Menu>
              <Dropdown text={`Sign In`} simple item>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/login" className="item">
                      Log In
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/signup" className="item" onClick={this.props.logout}>
                      Sign Up
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          )}
        </div>
      </div>
    );
  }
}

export default NavContainer;

{
  /* <div className="nav-area">
<div className="nav-wrapper">
    <ul>
        <li><a href="#">LOGO</a></li>
        <li><a href="#">Browse</a></li>
        <li><a href="#">Top Breweries</a></li>
        <li><SmallSearchBar  onSearch={this.props.onSearch}/></li>
        <li><a href="#">Account</a>
            <ul className="line-1">
                <li><a href="#">Account</a></li>
                <li><a href="#">Account</a></li>
            </ul>
        </li>
    </ul>
</div>
</div> */
}
