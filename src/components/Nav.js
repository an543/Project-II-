import React from 'react';

import './App.css';
import PageTabs from './PageTabs';
import TaskItem from './TaskItem';
import Page2 from './Page2';

const LARGE_DESKTOP_BREAKPOINT = 1366;
const SMALL_DESKTOP_BREAKPOINT = 1024;
const TABLET_BREAKPOINT = 768;

class Nav extends React.Component {
  state = {
    browserWidth: 0,
    breakpoint: 'large-desktop',
	view: 'page1'
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

	
  handleResize = () => {
    const browserWidth = window.innerWidth;
    let breakpoint = 'large-desktop';

    if (browserWidth < LARGE_DESKTOP_BREAKPOINT && browserWidth >= SMALL_DESKTOP_BREAKPOINT) {
      breakpoint = 'small-desktop';
    } else if (browserWidth < SMALL_DESKTOP_BREAKPOINT && browserWidth >= TABLET_BREAKPOINT) {
      breakpoint = 'tablet';
    } else if (browserWidth < TABLET_BREAKPOINT) {
      breakpoint = 'mobile';
    }

    this.setState({ breakpoint, browserWidth });
  }
  
  onViewChange(view) {
    this.setState({ view });
  }

  wrapPage(jsx) {
    const { view } = this.state;
    return (
      <div className="container">
        <PageTabs currentView={view}
            onViewChange={this.onViewChange.bind(this)}/>
        {jsx}
      </div>
    );
  }
    
	markDone = (task) => {
		//const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
		let taskList = this.props.tasks;
		taskList.column = task;
		this.props.onUpdateTaskList(taskList);	
	}

  render() {
    const { view } = this.state;

    switch (view) {
      case 'page1':
		const taskItems = this.props.tasks.map(task => {
			return <TaskItem task={task} key={task.id} markDone={this.markDone} />
		});
        return (this.wrapPage(
			<table>
				<thead>
				<tr>
					<th>To Do</th>
					<th>In Progress</th>
					<th>Review</th>
					<th>Done</th>
				</tr>
				</thead>
				{ taskItems }
			</table>
		));
      case 'page2':
        return (this.wrapPage(
          <Page2 />
        ));
    }

  }
}

export default Nav;