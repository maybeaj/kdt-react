import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    return (
        <TodoList todos={todos} />
    );
}

export default TodoListPanel;