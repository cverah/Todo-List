import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./components/NewTodoForm";
import TodosList from "./components/TodosList";
function App() {
  //localstorage
  //si hay un local storage que lo tome si no lo hay q sea una array []
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

  //estado para los Todo List
  const [todos, setTodos] = useState(initialTodos);

  //use effect
  //cuando suceda algun cambio en la variable de estado todos que realice el disparado de localStorage
  //,[todos] en corchetes por q es un arreglo
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
