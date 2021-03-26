import React, { Component } from 'react'
import SmallSearchBar from './SmallSearchBar'

export class NavContainer extends Component {
 

    render() {
        return (
            <div className="nav-area">
                <div className="nav-wrapper">
                    <ul>
                        <li><a href="#">LOGO</a></li>
                        <li><a href="#">Browse</a></li>
                        <li><a href="#">Top Breweries</a></li>
                        <li><SmallSearchBar  onSearch={this.props.onSeacrh}/></li>
                        <li><a href="#">Account</a>
                            <ul className="line-1">
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Account</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavContainer
