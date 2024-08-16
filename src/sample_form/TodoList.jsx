import React from "react";

function TodoList({ todos }) {
    return (
        <div className="container">
            {todos.map(todo => (
                <div className="card mt-2" key={todo.id}>
                    <div
                        className="card-body p-2 d-flex align-items-center"
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="form-check flex-grow-1">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">{todo.subject}</label>
                        </div>
                        <div>
                            <button className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
