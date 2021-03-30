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
import BreweryPage from "./component/brewery/BreweryPage";

class App extends React.Component {
  // _isMounted = false;

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
    // this._isMounted = true;
    api.breweries.getWashington().then((brew) => {
      // if (this._isMounted) {
      this.setState({
        breweries: brew,
      });
      // }
    });
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        this.setState({
          auth: {
            ...this.state.auth,
            user: { id: user.id, username: user.username },
          },
        });
      });
    }
  }

  login = (data) => {
    console.log(data);
    localStorage.setItem("token", data.jwt);
    this.setState({
      auth: {
        ...this.state.auth,
        user: { id: data.id, username: data.username },
      },
    });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

  // randFourBrews = () => {
  //   this.state.breweries.sort(() => Math.random() - Math.random())
  // }
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

  // onSearch = (e) => {
  //   // console.log(e.target.value)
  //   e.preventDefault();
  //   this.setState({ searchTerm: e.target.value });
  // };

  // onSearchSubmit() {}
  onSearch = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value.toLowerCase() });
  };

  render() {
    const filterBrew = this.state.breweries.filter((brew) => {
      brew.name.toLowerCase().includes(this.state.searchTerm);
    });
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
            Route
            path={`/breweries/:breweryId`}
            //test with breweries/:id
            render={(routerProps) => <BreweryPage {...routerProps} />}
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
      </div>
    );
  }
}

export default withRouter(App);
