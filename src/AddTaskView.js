import React from 'react';

class AddTaskView extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { newTask: "", type:  "task"};
    }

    handleChange (event) {
        this.setState({type: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.newTask, this.state.type);
        this.setState({ newTask: "", type: ""})
    };

    render() {
        return (
            <form className="task-input form-group" onSubmit={this.onFormSubmit}>
                <h3>Add Task</h3>
                <p>--------------------------------------------------------------</p>
                <label htmlFor="newTask"><h4>Title</h4></label>
                <input type="text" className="form-control" name="newTask" value={this.state.newTask} onChange={(e) => this.setState({ newTask: e.target.value })} />
                <br></br>
                <label><h4>Type</h4></label>
                    <select onChange={this.handleChange} className="form-control">
                        <option value="task">Task</option>
                        <option value="bug">Bug</option>
                        <option value="feature">Feature</option>

                    </select>
                <br></br>
                <input type="submit" value="Add Task" className="btn btn-success mt-1"/>
            </form>
        );
    };
}

export default AddTaskView;