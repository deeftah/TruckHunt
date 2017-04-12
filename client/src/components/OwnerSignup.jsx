// Signup page for truck owners
import React from 'react';

class OwnerSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      verify: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleVerifyChange = this.handleVerifyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleVerifyChange(event) {
    this.setState({
      verify: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const user = this.state.username;
    const pass = this.state.password;
    const verify = this.state.verify;

    // check db to see if username is available
    // constant ajax call saved inside redux store

    // if available check passwords match
    // TODO: add logic for password integrity
    if (pass === verify) {
      console.log('inside handleSubmit, passwords match');
      // dispatch fetch function saved in redux
      // truckSignup(user, pass)
      this.setState({
        username: '',
        password: ''
      });
    } else {
      // TODO: conditional render passwords don't match
      console.log('inside handleSubmit, passwords do not match');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="signupInput">
            <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange} />
          </div>
          <div className="signupInput">
            <input type="text" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </div>
          <div className="signupInput">
            <input type="text" placeholder="verify" value={this.state.verify} onChange={this.handleVerifyChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default OwnerSignup;
