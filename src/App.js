import React, {useState, useRef, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'

import TodoList from './TodoList'

const LOCAL_STORAGE_KEY = 'todoApp.tasks'

function App() {
	const [tasks, setTasks] = useState([])
	const taskNameRef = useRef()
	
	// save and load list
	useEffect(() => {
		console.log("hi im running")
		const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if (stored) {
			console.log(stored)
			setTasks(stored)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
	}, [tasks])

	// toggle tasks
	function toggleTask(id) {
		const newTasks = [...tasks]
		// testing case, not a function
		const task = newTasks.find(task => task.id === id)
		task.complete = !task.complete
		setTasks(newTasks)
	}

	// task addition/subtraction
	function handleTaskAddition(e) {
		const name = taskNameRef.current.value
		if (name === "") return
		
		setTasks(prevTasks => {
			return [...prevTasks, {id: uuidv4(), name: name, complete: false}]
		})

		taskNameRef.current.value = null
	}

	function handleTaskSubtraction() {
		const newTasks = tasks.filter(task => !task.complete)
		setTasks(newTasks)
	}

	return (
		<>
			<TodoList tasks={tasks} toggleTask={toggleTask} />
			<input ref={taskNameRef} type="text" />
			<button onClick={handleTaskAddition}>Add Tasks</button>
			<button onClick={handleTaskSubtraction}>Removed Checked</button>
			<div>{tasks.filter(task => !task.complete).length} Tasks Left</div>
		</>
	)
}

export default App;