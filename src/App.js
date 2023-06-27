import React, { useState, useEffect} from 'react'
import './App.css';
import Form from './compoents/Form';
import TodoLists from './compoents/TodoLists';

function App() {
  const [loading, setLoading] = useState(true); // New loading state
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //function of event
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
    setLoading(false); // Set loading to false after data retrieval
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    if (!loading) {
      saveLocalTodos();
      filterHandler();
    }
  }, [todos, status, loading]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being retrieved
  }

  return (
    <div className="App">
      <header>Divya's to do Lists</header>
      {<Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        // status={status} 
        setStatus={setStatus}
      // setFilteredTodos={setFilteredTodos} 
      />
      }
      <TodoLists filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
