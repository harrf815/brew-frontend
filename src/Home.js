import React, { Component } from "react";
import MainHeader from "./component/brewery/MainHeader";
import LandingBreweries from "./component/brewery/LandingBreweries";
import SmallSearchBar from "./component/nav/SmallSearchBar";
import PageList from "./component/brewery/PageList";
import Map from "./component/map/Map";
import { api } from "./services/Api";

class Home extends Component {
  state = {
    breweries: [],
    searchTerm: "",
    currentIndex: 0,
    selectedBrew: {},
    auth: {
      user: {},
    },
  };

  componentDidMount() {
    //! initial api call
    api.breweries.getWashington().then((brew) => {
      this.setState({
        breweries: brew,
      });
    });
  }

  //!------------for home page brew cards---
  renderFourIndex = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 4,
    });
  };

  handleOnClickBrewCard = (brew) => {
    this.setState({
      selectedBrew: brew,
    });
  };
  //!-------------------------------------------

  //! setState searchTerm based on user input
  onSearch = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value.toLowerCase() });
  };

  render() {
    //! creates a new array with the filter searchTerm
    const filterBrew = this.state.breweries.filter((brew) =>
      brew.name.toLowerCase().includes(this.state.searchTerm)
    );

    return (
      <>
        <MainHeader onSearch={this.onSearch} />
        <div className="landing-container">
        <h1 id="landing-title"> find some {this.props.currentState} gems</h1>
        <LandingBreweries
          breweries={this.state.breweries.slice(
            this.state.currentIndex,
            this.state.currentIndex + 4
          )}
          renderFourIndex={this.renderFourIndex}
          currentState={this.props.currentState}
        />
        </div>
        <div className="contianer">
          <div className="ui four column doubling stackable grid container">
            <div className="ui row">
              <div id="small-search-map" className="five wide column">
                <SmallSearchBar onSearch={this.onSearch} />
                <div className="five wide column">
                  <PageList filterBrew={filterBrew} />
                </div>
              </div>
              <div className="eleven wide column">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
