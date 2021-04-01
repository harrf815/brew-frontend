import React from "react";
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
import Breweries from "./component/browsing/Breweries";
import LargeSearchBar from "./component/brewery/LargeSearchBar";
import SmallSearchBar from "./component/nav/SmallSearchBar";
import MainHeader from "./component/brewery/MainHeader";
import Home from "./Home.js";

class App extends React.Component {
  state = {
    currentState: "",
    searchTerm: "",
    auth: {
      user: {},
    },
  };

  // render components
  handleLogin = () => (
    <LoginPage history={this.props.history} onLogin={this.login} />
  );
  handleBrewState = () => <BrowseStates targetState={this.targetState} />;
  handleBreweries = () => <Breweries />;
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

  targetState = (st) => {
    this.setState({ currentState: st });
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
          <Route path="/browse" exact component={this.handleBrewState} />
          {/* <Route path='/breweries'  exact component={this.handleBreweries} />  */}
          <Route
            path={`/breweries/state/:state`}
            render={(routerProps) => (
              <Breweries {...routerProps} user={this.state.auth.user} />
            )}
          />
          <Route
            path={`/breweries/brewery/:id`}
            render={(routerProps) => (
              <BreweryPage {...routerProps} user={this.state.auth.user} />
            )}
          />
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
