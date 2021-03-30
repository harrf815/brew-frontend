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
    
    api.breweries.getWashington().then((brew) => {
    
        this.setState({
          breweries: brew,
        });
   
    });
  //   const token = localStorage.getItem("token");
  //   console.log(token)
  //   if (token) {
  //     api.auth.getCurrentUser().then((user) => {
  //       this.setState({
  //         auth: {
  //           ...this.state.auth,
  //           user: { id: user.id, username: user.username },
  //         },
  //       });
  //     });
  //   }
  // }

    // this is to handle a case where the user reloads the page but didn't mean to logout.  Re-fetches the user just using the token.
    
      if (localStorage.getItem('token')) {
        console.log(localStorage.token  )
        fetch('http://localhost:3000/api/v1/getuser', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.token}`
          }
        })
        .then(res => res.json())
        .then((user) => {
                this.setState({
                  auth: {
                    ...this.state.auth,
                    user: { user_id: user.id, username: user.username },
                  },
                });
              });
      }
    }

  login = (data) => {
    console.log(data);
    localStorage.setItem("token", data.token);
    this.setState({
      auth: {
        ...this.state.auth,
        user: { user_id: data.id, username: data.username },
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
      currentIndex: this.state.currentIndex + 4
    })
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
