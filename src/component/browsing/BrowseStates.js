import React, { Component } from "react";
import { api } from "../../services/Api";
import StateSearchBar from "./StateSearchBar";
import StateCard from "./StateCard";

export default class BrowseStates extends Component {
  state = {
    searchTerm: "",
    states: [],
  };


  componentDidMount() {
    api.breweries.getStates().then((data) => this.setState({ states: data }));
  }

  //filters the states from search input
  filterState = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value.toLowerCase() });
  };

  //retrieves state flag photos
  getPic = (name) => {
    let morphedName = name.split(" ").join("").toLowerCase();
    let pic = require(`../../photo/states/${morphedName}.jpg`);
    return pic;
  };

  render() {
    //filter
    const filteredStates = this.state.states.filter((st) =>
      st.toLowerCase().includes(this.state.searchTerm)
    );
    const allstates = this.state.states;
    let displayedStates;
    filteredStates.length
      ? (displayedStates = filteredStates)
      : (displayedStates = allstates);
    //endfilter
    return (
      <>
        <StateSearchBar filterState={this.filterState} />
        <div className="ui five column doubling stackable grid" id="states-div">
          {displayedStates.map((state, index) => (
            <StateCard pic={this.getPic(state)} key={index} state={state} />
          ))}
        </div>
      </>
    );
  }
}
