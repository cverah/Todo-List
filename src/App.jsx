import { useState } from "react";
import "./styles.css";
import NewTodoForm from "./components/NewTodoForm";
import TodosList from "./components/TodosList";
function App() {
  //estado para los Todo List
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      },
    ]);
  }

  function toggleTodo(id, checked) {
    // le currenTodos tendra actualmente todo el array de toods
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: checked };
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    //(currentTodos) =>{} ---> function (currentTodos){}
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  //console.log(todos);

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodosList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
}

export default App;
