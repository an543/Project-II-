import React from 'react';

const TaskItem = props => {
  return (
    <li className="list-group-item">
      { props.task.title }
      <button type="button"
              onClick={() => props.markDone(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Done
        </button>


        <button type="button"
                         onClick={() => props.markInProcess(props.task)}
                         className="btn btn-primary" style={{ float: 'right' }}>
      In Process
    </button>



      <button type="button"
              onClick={() => props.markToDo(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
        To Do
      </button>
    </li>
  )
};

export default TaskItem;