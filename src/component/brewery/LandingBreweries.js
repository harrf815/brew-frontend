import React, { Component } from "react";
import BreweryCard from "./BreweryCard";


export default class LandingBreweries extends Component {

  
  render() {

    const assignPic = (name) => {
      let picName = name + `${Math.floor(Math.random() * 23) + 1}`
      let pic = require(`../../photo/brewerycard/${picName}.jpg`)
      return pic
    }


    return (
      <>
     
      <div
        id="landing-breweries"
        className="ui four column doubling stackable grid container">
        {this.props.breweries.map((brew, index) => {
          return (
            <div key={index} className="column">
              <BreweryCard
                pic={assignPic("beer")}
                brew={brew}
                key={index}
                renderFourIndex={this.props.renderFourIndex}
                handleOnClickBrewCard={this.props.handleOnClickBrewCard}
              />
            </div>
          );
        })}
      </div>
      </>
    );
  }
}
