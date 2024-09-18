import { useState } from "react";
import Todo from "./todo";

import "./todoApp.css"

export default function TodoApp() {
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    function handleChange(event) {
        const value = event.target.value;
        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };

        const temp = [...todos];
        temp.unshift(newTodo);
        setTodos(temp);
        setTitle('');
    }

    function handleUpdate(id, value) {
        const temp = [...todos];
        const index = temp.findIndex((item) => item.id === id);
        if (index !== -1) {
            temp[index].title = value; // Acceder al objeto por el índice
            setTodos(temp);
        }
    }

    function handleDelete(id) {
        const temp = [...todos];
        const index = temp.findIndex((item) => item.id === id);
        if (index !== -1) {
            temp.splice(index, 1);
            setTodos(temp);
        }
    }

    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" value={title} />
                <input type="submit" value="Create Todo" className="buttonCreate" />
            </form>
            <div className="todosContainer">
                {todos.map((item) => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
}
