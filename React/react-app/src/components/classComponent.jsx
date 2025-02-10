import React, { Component } from 'react';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
      },
    };
  }

  handleNameChange = (event) => {
    this.setState({
      user: {
        ...this.state.user, // Copy the current user state
        name: event.target.value, // Update the name
      },
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      user: {
        ...this.state.user, // Copy the current user state
        email: event.target.value, // Update the email
      },
    });
  };

  setUser = () => {
    this.setState({
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    });
  };

  render() {
    const { name, email } = this.state.user; // Destructure the user state

    return (
      <div>
        <h1>User Info</h1>
        
        {/* Display user name and email */}
        <p>Name: {name}</p>
        <p>Email: {email}</p>

        {/* Input fields to change user info */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={this.handleNameChange}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleEmailChange}
        />

        {/* Button to set a predefined user */}
        <button onClick={this.setUser}>Set User</button>
      </div>
    );
  }
}

export default UserComponent;
