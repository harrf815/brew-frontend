import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import SmallSearchBar2 from "./SmallSearchBar2";
import { Link, withRouter } from "react-router-dom";
// import logo from "./logo.jpg";
import logo2 from "./logo2.jpg";

/* eslint-disable */

export class NavContainer extends Component {
  render() {
    const currentUser = this.props.currentUser;
    const loggedIn = !!this.props.currentUser.user_id;

    return (
      <div className="ui secondary menu">
        {/* <a href="/" className="item" id="logo">
         
        </a> */}

        <Link to="/" >
        <img id="logo" src={logo2} />
        </Link>
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/browse" className="item">
          Browse
        </Link>
        <a className="item">Top Breweries</a>
        <div className="right menu">
          <SmallSearchBar2 onSearch={this.props.onSearch} id="nav-search"/>

          {loggedIn ? (
            <Menu secondary>
              <Dropdown text={`Welcome ${currentUser.username}`} simple item>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/account" className="item">
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
