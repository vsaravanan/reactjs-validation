import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { a: "" };
  }
  update = () => {
    this.setState({ a: ReactDOM.findDOMNode(this.a).value });
    this.setState({ b: this.refs.b.value });
  };
  render() {
    return (
      <div>
        <Input ref={node => (this.a = node)} update={this.update} />
        {this.state.a}

        <hr />
        <input ref="b" type="text" onChange={this.update} />
        {this.state.b}
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return <input type="text" onChange={this.props.update} />;
  }
}
