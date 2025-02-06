import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor: The component is being created.');
        this.state = { count: 0 };
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('getDerivedStateFromProps: Called before every render.');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: Decides if the component should re-render.');
        return nextState.count % 2 === 0; // Update only if count is even
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate: Called right before the DOM is updated.');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount: Called once after the component is mounted.');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: Called after the component updates.');
        console.log('Previous state count:', prevState.count);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Called right before the component is removed.');
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError: Called when there is an error in a component.');
        // You can update state here based on the error
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log('componentDidCatch: Called after an error is thrown.');
        console.error('Error caught:', error);
        console.info('Error info:', info);
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        console.log('render: The component is being rendered.');
        if (this.state.hasError) {
            return <div>Error occurred in the component.</div>;
        }
        return (
            <div>
                <h1>Lifecycle Methods Example</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}

export default Lifecycle;
