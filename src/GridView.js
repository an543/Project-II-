import React from 'react';
import './styles/GridView.css';

import TaskItem from './TaskItem';
import TaskItem2 from './Taskitem2';
import TaskItem3 from './Tastitem3';
import TaskItem4 from './TaskItem4';


class GridView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            FilteredTasks:props.tasks
        };
    }

    markToDo = (task) => {
        let taskList = this.props.tasks;
        task.column="todo";
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    };

    markInProgress = (task) => {
        let taskList = this.props.tasks;
        task.column="in-progress";
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    };

    markReview = (task) => {
        let taskList = this.props.tasks;
        task.column="review";
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    };

    markDone = (task) => {
        let taskList = this.props.tasks;
        task.column="done";
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    };

    render() {
        const taskItems3 = this.props.tasks.map(task => {
            if(task.column === "todo")
                return <TaskItem3 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone}/>
        });

        const taskItems2 = this.props.tasks.map(task => {
            if(task.column === "in-progress")
                return <TaskItem2 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone}/>
        });

        const taskItems4 = this.props.tasks.map(task => {
            if(task.column === "review")
                return <TaskItem4 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone}/>
        });

        const taskItems = this.props.tasks.map(task => {
            if(task.column === "done")
                return <TaskItem task={task} key={task.id} markToDo={this.markToDo}  markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone}/>
        });

        return (
            <div className="row">
                <div className="col p-0">
                    <div className="card oddCard fullHeight">
                        <div className="card-body">
                            <div className="card-title"><h3>To Do</h3></div>
                                {taskItems3}
                        </div>
                    </div>
                </div>

                <div className="col p-0">
                    <div className="card evenCard fullHeight">
                        <div className="card-body">
                            <div className="card-title"><h3>In Progress</h3></div>
                            {taskItems2}
                        </div>
                    </div>
                </div>

                <div className="col p-0">
                    <div className="card oddCard fullHeight">
                        <div className="card-body">
                            <div className="card-title"><h3>Review</h3></div>
                            {taskItems4}
                        </div>
                    </div>
                </div>

                <div className="col p-0">
                    <div className="card evenCard fullHeight">
                        <div className="card-body">
                            <div className="card-title"><h3>Done</h3></div>
                            {taskItems}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GridView;
