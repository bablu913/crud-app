import React, { Component } from "react";
class ErrorBoundaryClass extends Component {
    constructor() {
      super();
      this.state = {
        hasError: false,
      };
    }
    //Error During Rendering
    static getDerivedStateFromError(error) {
      console.log("Error in getDerivedStateFromError: ", error);
      return { hasError: true };
    }
    //Error During Commit Phase that is after Render phase
    componentDidCatch(error, info) {
      this.state.hasError = true;
      console.log("Error in componentDidCatch : ", error);
      console.log("Error Info : ", info);
    }
    render() {
      return this.state.hasError ? (
        <h2>Ooops!!! Something went wrong</h2>
      ) : (
        this.props.children
      );
    }
  }
  
  export default ErrorBoundaryClass;