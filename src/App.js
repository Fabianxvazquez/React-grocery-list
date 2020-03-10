import React, { Component } from 'react';
import List from './List';
import TogetForm from './TogetForm'

class App extends Component {
  state = {
    togets: [
      {id: 1, name: 'veggies', complete: true, },
      {id: 2, name: 'meats', complete: false, },
      {id: 3, name: 'breads', complete: false, },
    ]
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addItem = (name) => {
    const {togets} = this.state
    const toget = {name, id: this.getUniqId(), complete: false}
    this.setState({togets: [toget,...togets]})
  }

  


  render() {
    const {togets} = this.state
    return(
      
      <div>
        <TogetForm addItem={this.addItem} />
        <List name="Grocery List" items={togets}/>
      </div>
    )
  }
}

export default App;
