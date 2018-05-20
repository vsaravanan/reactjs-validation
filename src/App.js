import React from "react";
import ReactDOM from "react-dom";

var styles = {
  width: '150px',
  height: '50px',
  margin: '10px',
  border: 'solid 2px black',
  fontFamily: 'Lato',
  fontSize: '30px',
  color: 'black',
  backgroundColor: 'white'
}

var h1styles = {
  margin: '10px',
  fontFamily: 'Lato',
  fontSize: '30px',
  color: '#FF3333'
}


// Counter component
class Counter extends React.Component {
  constructor(){
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1 })
  }
  componentWillMount(){
    console.log('mounting')
    this.setState({m : 2})
  }
  render(){
    console.log('rendering!')
    return <button style={styles} onClick={this.update}>{this.state.val * this.state.m }</button>
  }
  componentDidMount(){
    console.log('mounted');
    this.inc = setInterval(this.update, 500)
  }
  componentWillUnmount(){
    console.log('bye!');
    clearInterval(this.inc)
  }
}

// Wrapper component
export default class Wrapper extends React.Component {

  mount(){
    ReactDOM.render(<Counter />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
        <div>
          <h1 style={h1styles}>How to Mount/Unmount a Component in React.js</h1>
          <hr />
          <button style={styles} onClick={this.mount.bind(this)}>Mount</button>
          <button style={styles} onClick={this.unmount.bind(this)}>Unmount</button>
          <div id="a"></div>
        </div>
    )
  }
}

// Render Wrapper
ReactDOM.render(<Wrapper />, document.getElementById('root'))
