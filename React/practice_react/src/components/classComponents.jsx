import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      name: 'kannan',
    };
  }

  componentDidMount() {
    console.log('Component did mount!');
  }

  changeName = () => {
    this.setState({ name: 'kanna' });
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default MyComponent;
