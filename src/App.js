
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();
    this.state = {items: []}
  }

  componentWillMount = () => {
    fetch('https://swapi.co/api/people/?format=json')
    .then ( res => res.json())
    .then (({results: items})  => this.setState({items}))
  }
  
  
  render() {
    let items = this.state.items;
    return (
      <div>
        {items.map(item => 
        <Person  key={item.name} person={item} />
        )}

      </div>
    )
  }
}

const Person = (props) => <h4>{ props.person.name}</h4>
export default App;
