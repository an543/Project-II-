import React from 'react';



const Page1 = props => {
  return (
    <div className="page-one">
        <h3> Task Board </h3>

        <table>
            <thead>
            <tr>
                <th>To Do</th>

                <th>In Progress</th>

                <th>Review</th>

                <th>Done</th>
            </tr>
            </thead>

        </table>
    </div>

  )
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
                InProcess
            </button>
            <button type="button"
                    onClick={() => props.markToDo(props.task)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                To Do
            </button>
        </li>
    )
}

export default Page1;