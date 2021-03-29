import React, { Component } from "react";
import { Dropdown, Menu} from "semantic-ui-react";
import SmallSearchBar from "./SmallSearchBar";

/* eslint-disable */

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

export class NavContainer extends Component {
  render() {
    return (
      <div className="ui secondary menu">
        <a className="item">LOGO</a>
        <a className="item">Browse</a>
        <a className="item">Top Breweries</a>
        <div className="right menu">
            <SmallSearchBar onSearch={this.props.onSearch} />
            <Menu>
            <Dropdown text="Dropdown" 
                options={options} simple item /> 
            </Menu>
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
