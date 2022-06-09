import React from 'react';

import Task from "./Task"

export default function TodoList({tasks, toggleTask}) {
	return (
		tasks.map(task => {
			// not entirely sure what this key thing is ykyk
			return <Task key={task.id} task={task} toggleTask={toggleTask} />
		})
	)
}