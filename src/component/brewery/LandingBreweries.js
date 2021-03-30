import React, { Component } from "react";
import BreweryCard from "./BreweryCard";
import BreweryPage from "./BreweryPage";

//landing page should load 4 breweries for display, these can be random

export default class LandingBreweries extends Component {
  state = {}

  render() {
    return (
      <div
        id="landing-breweries"
        className="ui four column doubling stackable grid container">
          {this.props.breweries.map((brew) => {
            return (
              <div className="column">
                <BreweryCard
                  brew={brew}
                  renderFourIndex={this.props.renderFourIndex}
                //   handleOnClickBrewCard={this.props.handleOnClickBrewCard}
                /> 
                <BreweryPage 
                brew={brew}
                // handleOnClickBrewCard={this.props.handleOnClickBrewCard}
                />
                </div>
            );
          })}
        
      </div>
    );
  }
}
