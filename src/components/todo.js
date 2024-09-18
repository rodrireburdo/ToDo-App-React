import { useState } from "react";

export default function TodoApp({ item, onUpdate, onDelete}) {
    const [isEdit, setIsEdit] = useState(false);
    const [newValue, setNewValue] = useState(item.title); // Mover useState aquí

    function handleSubmit(e) {
        e.preventDefault();
        setIsEdit(false); // Esto cerrará el modo edición al hacer submit
    }

    function handleChange(e) {
        const value = e.target.value;
        setNewValue(value);
    }

    function handleClickUpdateTodo() {
        onUpdate(item.id, newValue);
        setIsEdit(false);
    }

    function formEdit() {
        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoInput" onChange={handleChange} value={newValue} />
                <button className="button" onClick={handleClickUpdateTodo}>Update</button>
            </form>
        );
    }

    function TodoElement() {
        return (
            <div className="todoInfo">
                <span className="todoTitle">{item.title}</span>
                <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
                <button className="buttonDelete" onClick={(e) => onDelete(item.id)}>Delete</button>
            </div>
        );
    }

    return (
        <div className="todo">
            {isEdit ? formEdit() : TodoElement()}
        </div>
    );
}
