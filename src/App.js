import React, { Component } from 'react';
import ItemList from '../components/ItemList';

class App extends Component {
  render() {
    return (
       <div className="container">
        <h1>Get Configuration Data</h1>
          <ItemList />
      </div>
       
    );
  }
}

export default App;
