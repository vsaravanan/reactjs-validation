import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { a: "" };
  }
  update = () => {
    this.setState({ a: this.a.value });
    this.setState({ b: this.refs.b.value });
  };
  render() {
    return (
      <div>
        <input
          ref={node => (this.a = node)}
          type="text"
          onChange={this.update}
        />
        {this.state.a}

        <hr />
        <input ref="b" type="text" onChange={this.update} />
        {this.state.b}
      </div>
    );
  }
}
