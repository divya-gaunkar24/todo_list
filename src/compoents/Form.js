import React from 'react'

function Form({ setInputText, setTodos, todos, inputText, setStatus }) {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        // console.log(e.target.value);
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
        setInputText("");
    };
    const statusHandler = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setStatus(e.target.value);
    };
    return (
        <form>
            <input value={inputText} type="text" onChange={inputTextHandler} className="todo-input" />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
                Add
            </button>
            <div className="select">
                <select name="todo" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
