
import React from "react";
import LandingBreweries from "./component/brewery/LandingBreweries";
import Map from "./component/map/Map";
import NavContainer from "./component/nav/NavContainer";
import "semantic-ui-css/semantic.min.css";
import { api } from "./services/Api";
import LoginPage from "./component/LoginPage";
import SignUpPage from "./component/SignUpPage";
import { Route, Switch, withRouter } from "react-router-dom";
import PageList from "./component/brewery/PageList";
import BreweryPage from "./component/brewery/BreweryPage";
import LocationSearch from "./component/brewery/LocationSearch";
import BrowseStates from "./component/browsing/BrowseStates";
import LargeSearchBar from "./component/brewery/LargeSearchBar";
import SmallSearchBar from "./component/nav/SmallSearchBar";
import MainHeader from "./component/brewery/MainHeader";
import Home from "./Home.js";

class App extends React.Component {
  state = {
    searchTerm: "",
    auth: {
      user: {},
    },
  };

  // render components
  handleLogin = () => (
    <LoginPage history={this.props.history} onLogin={this.login} />
  );
  handleBrewState = () => <BrowseStates />;
  handlePageList = () => <PageList />;
  handleLocation = () => <LocationSearch />;
  handleLarge = () => <LargeSearchBar />;
  handleSmall = () => <SmallSearchBar />;
  handleMain = () => <MainHeader />;
  handleSignUp = () => <SignUpPage onLogin={this.login} />;
  handleHome = () => <Home props={this.state} />;

  componentDidMount() {
    //! get current user api call
    const token = localStorage.token;
    if (token && token !== "undefined") {
      api.auth.getCurrentUser().then((data) => {
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
    const token = localStorage.token;
    if (token && token !== "undefined") {
      this.props.history.push("/");
      this.setState({
        auth: {
          ...this.state.auth,
          user: { user_id: data.user.id, username: data.user.username },
        },
      });
    }
  };

  //? log out
  logout = () => {
    localStorage.clear();
    this.setState({ auth: { user: {} } }, () => {
      this.props.history.push("/login");
    });
  };

  render() {
    // render components

    return (
      <div className="App">
        <NavContainer
          onSearch={this.onSearch}
          currentUser={this.state.auth.user}
          logout={this.logout}
        />
        <Switch>
          <Route path="/" exact component={this.handleHome} />
          <Route path="/login" exact component={this.handleLogin} />
          <Route path="/signup" exact component={this.handleSignUp} />
          <Route path={`/breweries/:id`} render={ routerProps => <BreweryPage {...routerProps} />} /> 
          <Route path='/browse' exact component={this.handleBrewState} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);



//       //! --------- browse / state list ------------ !//
//       <Route
//         path="/browse"
//         render={() => (
//           <>
//             <LocationSearch />
//             <BrowseStates />
//           </>
//         )}
//       />
//     </Switch>
//   </div>
// );
