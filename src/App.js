/* eslint-disable */
import React from "react";
import LandingBreweries from "./component/brewery/LandingBreweries";
import Map from "./component/map/Map";
import NavContainer from "./component/nav/NavContainer";
import "semantic-ui-css/semantic.min.css";
import { api } from "./services/Api";
import LoginPage from "./component/LoginPage";
import SignUpPage from "./component/SignUpPage";
import { Route, Switch, withRouter } from "react-router-dom";
import PageList from './component/brewery/PageList'
import BreweryPage from "./component/brewery/BreweryPage";
import LocationSearch from "./component/brewery/LocationSearch";
import BrowseStates from "./component/brewery/BrowseStates";

class App extends React.Component {

  state = {
    breweries: [],
    searchTerm: "",
    currentIndex: 0,
    selectedBrew: {},
    auth: {
      user: {},
    },
  };

  handleLogin = () => <LoginPage onLogin={this.login} />;


  componentDidMount() {
//! initial api call
    api.breweries.getWashington().then((brew) => {
      this.setState({
        breweries: brew,
      })
    });
    
//! get current user api call
const token = localStorage.token
      if (token && token !== 'undefined') {
        api.auth.getCurrentUser()
        .then((data) => {
          this.setState({
            auth: {
              ...this.state.auth,
              user: { user_id: data.user.id, username: data.user.username },
            },
          });
        });
      }
      
    }

//! this is to set state after login is called on the login page
  login = (data) => {
    localStorage.setItem("token", data.jwt);
    this.setState({
      auth: {
        ...this.state.auth,
        user: { user_id: data.user.id, username: data.user.username },
      },
    });
    
  };
  
//! log out
  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

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

  //! setState searchTerm based on user input
  onSearch = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value.toLowerCase() });
  };

  render() {
    //! creates a new array with the filter searchTerm
    const filterBrew = this.state.breweries.filter(brew => brew.name.toLowerCase().includes(this.state.searchTerm))
    

    return (
      <div className="App">
        <header className="App-header"></header>
        <NavContainer
          onSearch={this.onSearch}
          currentUser={this.state.auth.user}
          logout={this.logout}
        />
        <Switch>
          <Route path="/login" exact component={this.handleLogin} />
          <Route
            path="/signup"
            render={() => <SignUpPage onLogin={this.login} />}
          />
          <Route
            path="/"
            render={() => (
              <>
                <LandingBreweries
                  breweries={this.state.breweries.slice(
                    this.state.currentIndex,
                    this.state.currentIndex + 4
                  )}
                  renderFourIndex={this.renderFourIndex}
                  // handleOnClickBrewCard={this.handleOnClickBrewCard}
                  // randFourBrews={this.randFourBrews}
                />
                <Map />
              </>
            )}
            />
            <Route
              path={`/breweries/:breweryId`}
              //test with breweries/:id
              render={(routerProps) => <BreweryPage {...routerProps} selectedBrew={this.state.selectedBrew} />}            
            />
          <Route
            path="/browse"
            render={() => (
              <>
                <LocationSearch /> 
                <BrowseStates />
              </>
            )}
          />
        </Switch>
        {/* <PageList filterBrew={filterBrew}/> */}
      </div>
    );
  }
}

export default withRouter(App);
