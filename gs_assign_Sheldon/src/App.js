import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Enter from './Containers/Enter';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Enter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
