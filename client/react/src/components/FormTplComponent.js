import React from 'react'
import { Component } from 'react'
import PropTypes from "prop-types";

class FormTplComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authReason: null,
            user: {email: null, password: null},
            authError: null
        };
    }

    componentDidMount() {
        if (this.props.security.getLoginReason()) {
            let authReason = ( security.isAuthenticated() ) ?
                this.props.localizedMessages.get('login.reason.notAuthorized') :
                this.props.localizedMessages.get('login.reason.notAuthenticated');
            this.setState({authReason: authReason});
        }
    }
    render() {
        return (
          <form name="form" noValidate className="login-form">
            <div className="modal-header">
              <h4>Sign in</h4>
            </div>
            <div className="modal-body">
                {
                    this.state.authReason && (
                        <div className="alert alert-warning">
                            {this.state.authReason}
                        </div>
                    )
                }
                {
                    this.state.authError && (
                        <div className="alert alert-error">
                            {this.state.authError}
                        </div>
                    )
                }
              <div className="alert alert-info">Please enter your login details</div>
              <label>E-mail</label>
              <input name="login" type="email" value={this.state.user.email} onChange={(evt) => this.updateEmail(evt)} required autofocus />
              <label>Password</label>
              <input name="pass" type="password"  value={this.state.user.password} onChange={(evt) => this.updatePassword(evt)} required />
            </div>
            <div className="modal-footer">
              <button type='button' className="btn btn-primary login" onClick={() => this.login()} disabled={!this.isFormValid()}>Sign in</button>
              <button type='button' className="btn clear" onClick={() => this.clearForm()}>Clear</button>
              <button type='button' className="btn btn-warning cancel" onClick={() => this.cancelLogin()}>Cancel</button>
            </div>
          </form>

        );
    }

    isFormValid() {
        return !(
            this.state.user.email === null || this.state.user.password === null
            || this.state.user.email === '' || this.state.user.password === '');
    }

    updateEmail(evt) {
        this.setState({
            user: {email: evt.target.value, password: this.state.user.password}
        });
    }

    updatePassword(evt) {
        this.setState({
            user: {email: this.state.user.email, password: evt.target.value}
        });
    }

    login() {
        // Clear any previous security errors
        this.setState({authError: null});

        // Try to login
        this.props.security.login(this.state.user.email, this.state.user.password).then(function(loggedIn) {
            if ( !loggedIn ) {
                // If we get here then the login failed due to bad credentials
                this.setState({authError: this.props.localizedMessages.get('login.error.invalidCredentials')});
            }
        }.bind(this), function(x) {
            // If we get here then there was a problem with the login request to the server
            this.setState({authError: this.props.localizedMessages.get('login.error.serverError', { exception: x })});
        }.bind(this));
    };

    clearForm() {
        this.setState({user: {email: null, password: null}});
    };

    cancelLogin() {
        this.props.security.cancelLogin();
    };
}

FormTplComponent.propTypes = {
    security: PropTypes.object,
    localizedMessages: PropTypes.object
};

export default FormTplComponent;