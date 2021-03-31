import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import SmallSearchBar from "./SmallSearchBar";
import { Link, withRouter } from "react-router-dom";
import logo from "./logo.jpg";

/* eslint-disable */

export class NavContainer extends Component {
  render() {
    const currentUser = this.props.currentUser;
    const loggedIn = !!this.props.currentUser.user_id;

    return (
      <div className="ui secondary menu">
        <a href="/" className="item" id="logo">
          <img id="logo" src={logo} />
        </a>

        <Link to="/browse" className="item">
          Browse
        </Link>
        <a className="item">Top Breweries</a>
        <div className="right menu">
          <SmallSearchBar onSearch={this.props.onSearch} />

          {loggedIn ? (
            <Menu secondary>
              <Dropdown text={`Welcome ${currentUser.username}`} simple item>
                <Dropdown.Menu>
                  <Dropdown.Item>
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
            <Menu secondary>
              <Dropdown text={`Account`} simple item>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/login" className="item">
                      Log In
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/signup" className="item">
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
