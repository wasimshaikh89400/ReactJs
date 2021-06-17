import React, { Component } from "react";

class HOCComponent extends Component {
  state = {
    marks: 0,
  };
  incremarks = () => {
    this.setState({
      marks: this.state.marks + 1,
    });
  };

  render() {
    const { marks } = this.state;
    return (
      <div>
        <h1 onMouseOver={this.incremarks}>{marks}</h1>
        <Hello Cpm={Simple}></Hello>
      </div>
    );
  }
}
function Hello(p) {
  return (
    <h1>
      Hello <p.Cpm hd={20}></p.Cpm>
    </h1>
  );
}

function Simple(s) {
  return <h1>Simple{s.hd}</h1>;
}
export default HOCComponent;
