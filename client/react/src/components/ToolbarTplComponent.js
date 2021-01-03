import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

class ToolbarTplComponent extends Component {
  render() {
    return (
      <ul className="nav pull-right">
        <li className="divider-vertical" />
          {
            this.props.security.isAuthenticated() && (
                <li>
                    <a href="#">{this.props.security.currentUser.firstName + ' ' + this.props.security.currentUser.lastName}</a>
                </li>
            )
          }

          {
              this.props.security.isAuthenticated() && (
                  <li className="logout">
                      <form className="navbar-form">
                          <button type="button" className="btn logout" onClick={() => this.props.security.logout()}>Log out</button>
                      </form>
                  </li>
              )
          }
          {
              !this.props.security.isAuthenticated() && (
                  <li className="login">
                      <form className="navbar-form">
                          <button type="button" className="btn login" onClick={() => this.props.security.showLogin()}>Log in</button>
                      </form>
                  </li>
              )
          }
      </ul>

    );
  }
}

ToolbarTplComponent.propTypes = {
    security: PropTypes.object
};

export default ToolbarTplComponent;