import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="ui inverted vertical footer segment">
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="three wide column">
                <h4 className="ui inverted header">About</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">
                    Sitemap
                  </a>
                  <a href="#" className="item">
                    Contact Us
                  </a>
                  <a href="#" className="item">
                    Project Repo
                  </a>
                </div>
              </div>
              <div className="three wide column">
                <h4 className="ui inverted header">Contributers</h4>
                <div className="ui inverted link list">
                  <a href="#" className="item">
                    link to Syd's GitHub
                  </a>
                  <a href="#" className="item">
                  link to Colin's GitHub
                  </a>
                  <a href="#" className="item">
                  link to Harrf's GitHub
                  </a>
                 
                </div>
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header">Thank you for checking out our site!</h4>
                <p> Special thank you to the contributors to the open brewery DB / API, and all those involved in this project.
                </p>
                <a href="https://www.openbrewerydb.org/" className="item" target="_blank">openbrewerydb.org</a> <br></br>
                <a href="https://github.com/openbrewerydb/openbrewerydb" className="item" target="_blank">OBDB github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
