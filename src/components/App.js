import React from 'react';
import axios from 'axios';

import Nav from './Nav';

class App extends React.Component {
  state = {
    tasks: [],
    errorMessage: '',
	head: ["todo","in-progress","review","done"]
  }

  componentDidMount() {
    this.getData();
  }

	getData() {
    axios.get('https://my-json-server.typicode.com/eo65/jsonServer/tasks')
      .then(response => {
        this.setState({ tasks: response.data });
      }).catch(error => {
        this.setState({ errorMessage: error.message });
      });
	}

	onUpdateTaskList = (newTaskList) => {
		this.setState({ tasks: newTaskList });
	}
	
  render() {
    return (
      <div className="container">
        <Nav tasks={this.state.tasks} header={this.state.head} onUpdateTaskList={this.onUpdateTaskList}/>
      </div>
    );
  }
}

export default App;

