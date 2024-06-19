import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false }; // Initializing state to track if an error has occurred

  // This method is a lifecycle method that catches errors during rendering.
  // It returns an updated state object indicating that an error has occurred.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // This lifecycle method is called when an error is caught by the ErrorBoundary.
  // It logs the error and additional information (if available) to the console.
  componentDidCatch(error, info) {
    console.error("Error Boundary caught an error:", error, info);
  }

  render() {
    // If an error has occurred (as indicated by state), display a fallback UI.
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }
    // If no error has occurred, render the children components as usual.
    return this.props.children;
  }
}

export default ErrorBoundary; // Exporting the ErrorBoundary component for use in other parts of the application

//Usage
// <ErrorBoundary>
//   <MyComponent />
// </ErrorBoundary>
