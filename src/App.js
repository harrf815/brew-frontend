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

class App extends React.Component {

  state = {
    breweries: [],
    searchTerm: "",
    currentIndex: 0,
    auth: {
      user: {},
    },
  };

  handleLogin = () => <LoginPage onLogin={this.login} />;


  componentDidMount() {
//initial api call
    api.breweries.getWashington().then((brew) => {
        this.setState({
          breweries: brew,
        });
    });
    
//get current user api call
const token = localStorage.token
      if (token !== 'undefined') {
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

//this is to set state after login is called on the login page

  login = (data) => {
    localStorage.setItem("token", data.jwt);
    this.setState({
      auth: {
        ...this.state.auth,
        user: { user_id: data.user.id, username: data.user.username },
      },
    });
    
  };
  
// log out
  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

  // randFourBrews = () => {
  //   this.state.breweries.sort(() => Math.random() - Math.random())
  // }
  renderFourIndex = () => {
      this.setState({
      currentIndex: this.state.currentIndex + 4
    })
  }

  handleOnClickBrewCard = () => {
    // console.log('mama i made it')
  }

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
    // const filterBrew = this.state.breweries.filter(brew => {
    //   brew.name.toLowerCase().includes(this.state.searchTerm)
    // })
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
                breweries={this.state.breweries.slice(this.state.currentIndex, this.state.currentIndex + 4)}
                renderFourIndex={this.renderFourIndex}
                handleOnClickBrewCard={this.handleOnClickBrewCard}
                // randFourBrews={this.randFourBrews}
                />
                <Map />
              </>
            )}
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
