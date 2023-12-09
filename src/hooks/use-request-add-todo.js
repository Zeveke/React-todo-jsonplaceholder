import { useState } from 'react';

export const useRequestAddTodo = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');

	const newId = todos.length + 1;
	const newTodoObj = {
		id: newId,
		title: newTodo,
		completed: false,
	};
	setTodos([...todos, newTodoObj]);
	setNewTodo('');

	return {
		setNewTodo,
		newTodo,
	};
};
