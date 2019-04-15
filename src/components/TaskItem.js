import React from 'react';
import './PageTabs.css';


const TaskItem = props => {
	
	var ToDo = props.task;
	
	if (ToDo.column === "todo") {
		var title1 = ToDo.title;
		var id1 = ToDo.id;
		var type1 = ToDo.type;
		var column1 = ToDo.column;
	} else if (ToDo.column === "in-progress") {
		var title2 = ToDo.title;
		var id2 = ToDo.id;
		var type2 = ToDo.type;
		var column2 = ToDo.column;
	} else if (ToDo.column === "review") {
		var title3 = ToDo.title;
		var id3 = ToDo.id;
		var type3 = ToDo.type;
		var column3 = ToDo.column;
	} else {
		var title4 = ToDo.title;
		var id4 = ToDo.id;
		var type4 = ToDo.type;
		var column4 = ToDo.column;
	}
	
	/*var i;
	for (i = 0; i < ToDo.title.length; i++) {
		console.log(ToDo.title[i]);
	}*/
	
	//var rebels = ToDo.filter(task => props.task.column === "Done");
	
	return (
	<tbody>
		<tr>
			<td>
				<p>{ title1 }</p>
				<p>{ id1 }</p>
				<p>{ type1 }</p>
				<button type="button" onClick={() => props.markDone(props.task.column)}>{ column1 }</button>
			</td>		
			<td>
				<p>{ title2 }</p>
				<p>{ id2 }</p>
				<p>{ type2 }</p>
				<button type="button" onClick={() => props.markDone(props.task.column)}>{ column2 }</button>
			</td>
			<td>
				<p>{ title3 }</p>
				<p>{ id3 }</p>
				<p>{ type3 }</p>
				<button type="button" onClick={() => props.markDone(props.task.column)}>{ column3 }</button>
			</td>
			<td>
				<p>{ title4 }</p>
				<p>{ id4 }</p>
				<p>{ type4 }</p>
				<button type="button" onClick={() => props.markDone(props.task.column)}>{ column4 }</button>
			</td>
		</tr>
	</tbody>
  )
};

export default TaskItem;
