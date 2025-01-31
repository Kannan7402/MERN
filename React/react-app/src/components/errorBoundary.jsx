import React,{component} from 'react'
 class ErrorBoundary extends component {
    constructor(props)
    {
        super(props);
        this.state ={hasError:false,errormessage:''};
    }
    static getDerivedStateFromError(error)
    {
        return{hasError:true};
    }
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by Error Boundary:', error, errorInfo);
        this.setState({ errorMessage: error.message });
      }
    
      render() {
        if (this.state.hasError) {
          return <h1>Something went wrong. {this.state.errorMessage}</h1>;
        }
        return this.props.children;
      }
    }
    
    export default ErrorBoundary;
