import React, { Component } from "react";

class Clock extends Component {
  state = {
    time: null
  };
  updateClock = () => {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  };
  componentDidMount() {
    this.updateClock();
  }
  render() {
    return <h1>Relógio : {this.state.time}</h1>;
  }
}

export default Clock;
