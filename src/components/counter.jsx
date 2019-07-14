import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      // div를 사용하고 싶지 않으면 React.Fragment를 사용하자.
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        {/* this.handleIncrement vs this.handleIncrement ()? */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
