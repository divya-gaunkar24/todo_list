import React from 'react'

function Todo({text, todo, todos, setTodos}) {
    //Event 
    const deleteHandler = () => {
        console.log(todo);
       setTodos(todos.filter((el) => el.id !== todo.id)) 
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
                
            }
            return item;
        }))
    };
  return (
    <div className='todo'>
      <li className= {`todo-items ${todo.completed ? "completed" :'' }`}>{text}</li>
      <button className='complete-btn' onClick={completeHandler}>
        Complete
        </button>
      <button className='trash-btn' onClick={deleteHandler}>
            Trash
        </button>
    </div>
  )
}

export default Todo
