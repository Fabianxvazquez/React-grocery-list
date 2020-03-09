import React, { Component } from 'react';
import List from './List';

class App extends Component {
  state = {
    togets: [
      {id: 1, name: 'veggies', complete: true, },
      {id: 2, name: 'meats', complete: false, },
      {id: 3, name: 'breads', complete: false, },
    ]
  }

  


  render() {
    const {togets} = this.state
    return(
      <List name="Grocery List" items={togets}/>
    )
  }
}

export default App;
