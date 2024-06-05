import React, { Component } from "react";

class GlobalErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Global Error Boundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

export default GlobalErrorBoundary;

// Usage
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import GlobalErrorBoundary from './GlobalErrorBoundary';

// ReactDOM.render(
//   <React.StrictMode>
//     <GlobalErrorBoundary>
//       <App />
//     </GlobalErrorBoundary>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
