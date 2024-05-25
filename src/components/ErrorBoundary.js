import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalErrorBoundary from "./GlobalErrorBoundary";

ReactDOM.render(
  <GlobalErrorBoundary>
    <App />
  </GlobalErrorBoundary>,
  document.getElementById("root")
);

// import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
