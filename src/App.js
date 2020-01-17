import React, { Component } from 'react';
import CreateForm from './components/CreateForm';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <CreateForm
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default App;