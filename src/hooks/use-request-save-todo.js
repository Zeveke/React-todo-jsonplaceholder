import { useState } from 'react';

export const useRequestSaveTodo = () => {
	const [editingId, setEditingId] = useState(null);
	const [editingText, setEditingText] = useState('');
	const [todos, setTodos] = useState([]);

	const updatedTodos = todos.map((todo) => {
		if (todo.id === editingId) {
			return {
				...todo,
				title: editingText,
			};
		}
		return todo;
	});
	setTodos(updatedTodos);
	setEditingId(null);
	setEditingText('');
	return {
		setTodos,
		setEditingText,
		setEditingId,
	};
};
