import { useState } from 'react';

export const useRequestUpdateTodo = () => {
	const [todos, setTodos] = useState([]);

	let id = 1;

	const updatedTodos = todos.map((todo) => {
		if (todo.id === id) {
			return {
				...todo,
				completed: !todo.completed,
			};
		}
		return todo;
	});
	setTodos(updatedTodos);

	return {
		setTodos,
		todos,
		updatedTodos,
	};
};
