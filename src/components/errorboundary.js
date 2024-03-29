import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      return <h3 className="er">Ooops..Something went wrong!</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
