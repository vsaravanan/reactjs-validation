import React from 'react'

export default class App extends React.Component {
  render() {
    return <Title text="12345678" />
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, Component) {
    if (! (propName in props)) {
      return new Error (`missing ${propName}`)
    }
    if (props[propName].length < 6) {
      return new Error (`${propName} was too short` )
    }
  }
}


