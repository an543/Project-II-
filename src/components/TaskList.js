import React from 'react';

import TaskItem from './TaskItem';
import TaskItem2 from './TaskItem2';
import TaskItem3 from './TaskItem3';

class TaskList extends React.Component {

  markDone = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;
    task.column="done"
    console.log(this.props);
    this.props.onUpdateTaskList(taskList);
  }
  markInProcess = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;
    task.column="in-process"
    console.log(this.props);
    this.props.onUpdateTaskList(taskList);
  }
  markToDo = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;
    task.column="todo"
    console.log(this.props);
    this.props.onUpdateTaskList(taskList);
  }

  render() {
    const taskItems = this.props.tasks.map(task => {
      if (task.column=="done")
      return <TaskItem task={task} key={task.id} markDone={this.markDone} />
    });


    const taskItems2 = this.props.tasks.map(task => {
      if (task.column=="in-process")
        return <TaskItem2 task={task} key={task.id} markDone={this.markInProcess} />
    });

    const taskItems3 = this.props.tasks.map(task => {
      if (task.column=="todo")
        return <TaskItem3 task={task} key={task.id} markDone={this.markToDo} />
    });




    return (
      <ul className="task-list list-group">

        { taskItems }

        { taskItems2 }

        { taskItems3 }
      </ul>
    )
  }
}

export default TaskList;