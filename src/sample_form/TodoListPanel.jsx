import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./TodoList";

function TodoListPanel() {
	const [todos, setTodos] = useState([]);

	// 마운트 및 업데이트 시 데이터 가져오기
	useEffect(() => {
		fetchTodos();
	}, []); // 빈 배열을 넣어 초기 마운트 시에만 실행되도록 설정
	const fetchTodos = async () => {
		try {
			const response = await axios.get("http://localhost:8000/todos");
			setTodos(response.data);
		} catch (error) {
			console.error("Error fetching todos:", error);
		}
	};

	const todoHandler = (id) => {
		console.log("debug >> todoHabdler click id, ", id);
	};
	return (
		<div>
			{todos.map((todo, idx) => {
				return (
					<TodoList
						key={todo.id}
						subject={todo.subject}
						content={todo.content}
						completed={todo.completed}
						onClick={()=>todoHandler(todo.id)}
					/>
				);
			})}
		</div>
	);
}

export default TodoListPanel;
