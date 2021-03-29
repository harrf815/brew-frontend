/* eslint-disable */
import React from "react";
import LandingBreweries from "./component/brewery/LandingBreweries";
import Map from "./component/map/Map";
import NavContainer from "./component/nav/NavContainer";
import "semantic-ui-css/semantic.min.css";
import { api } from "./services/Api";
import LoginPage from "./component/LoginPage";
import SignUpPage from "./component/SignUpPage";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    breweries: [],
    searchTerm: "",
    auth: {
      user: {},
    },
  };

  componentDidMount() {
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

  // onSearch = (e) => {
  //   // console.log(e.target.value)
  //   e.preventDefault();
  //   this.setState({ searchTerm: e.target.value });
  // };

  // onSearchSubmit() {}

  //! trying to get this console.log to produce the searhterm
  render() {
    // console.log(this.state.breweries.filter(brew => {
    //   brew.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    // }))
    return (
      <div className="App">
        <header className="App-header"></header>
        <NavContainer
          onSearch={this.onSearch}
          currentUser={this.state.auth.user}
          logout={this.logout}
        />
        <Switch>
          <Route
            path="/login"
            render={() => <LoginPage onLogin={this.login} />}
          />
          <Route
            path="/signup"
            render={() => <SignUpPage onLogin={this.login} />}
          />
        </Switch>
        {/* <LandingBreweries />
        <Map /> */}
      </div>
    );
  }
}

export default App;
