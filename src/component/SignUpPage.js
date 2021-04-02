import React from "react";
import { api } from "../services/Api";

class SignUpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    api.auth.signup(this.state.fields).then((res) => {
      this.props.onLogin(res);
    });
  };

  render() {
    const { fields } = this.state;
    return (
      <div className="container">
          <h2 class="ui header">welcome to BREW PROJECT</h2>
        {this.state.error ? <h1>Try again...</h1> : null}
        <div className="ui form container">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="ui basic black button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
