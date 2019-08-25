import React, { Component } from "react";
import Counter from "./counter";
class counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          //Key는 props 속성이 아니고, value랑 selected는 props 속성임.
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default counters;
