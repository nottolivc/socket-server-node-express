import React from 'react';
import './App.css';
import ChatApp from './ChatApp';
// import Header from "./Header";


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return (
        <ChatApp username={this.state.username} />
      );
    }

    // Initial page load, show a simple login form
    return (
      <>
      <div>
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
      <br />
      <br />
      <br />
      <br />
      <h4>Welcome</h4>
      <h5>Enter Your Username</h5>
      <br />
        <div>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter username..."
            required />
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
      </>
    );
  }

}
App.defaultProps = {
};

export default App;
