import React, { Component } from "react";
import BreweryCard from "./BreweryCard";


export default class LandingBreweries extends Component {

  render() {
    return (
      <div
        id="landing-breweries"
        className="ui four column doubling stackable grid container">
        {this.props.breweries.map((brew, index) => {
          return (
            <div key={index} className="column">
              <BreweryCard
                brew={brew}
                key={index}
                renderFourIndex={this.props.renderFourIndex}
                handleOnClickBrewCard={this.props.handleOnClickBrewCard}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
