import React, { Component } from "react";
import BreweryCard from "./BreweryCard";
import BreweryPage from "./BreweryPage";

//landing page should load 4 breweries for display, these can be random

export default class LandingBreweries extends Component {
  state = {};

  render() {
    return (
      <div
        id="landing-breweries"
        className="ui four column doubling stackable grid container"
      >
        {this.props.breweries.map((brew, index) => {
          return (
            <div key={index} className="column">
              <BreweryCard
                brew={brew}
                key={index}
                renderFourIndex={this.props.renderFourIndex}
                currentBrews={this.props.currentBrews}
                handleOnClickBrewCard={this.props.handleOnClickBrewCard}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
