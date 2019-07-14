import React, { Component } from "react";

// Stateless Functional Component

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
          <span className="m-3">Donghyeon React Example</span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
