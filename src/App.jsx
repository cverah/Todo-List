import { useRef, useState } from "react";
import "./styles.css";
function App() {
  //para el focus del input text
  const inputRef = useRef(null);
  //estado para los items del input text a agregar
  const [newItem, setNewItem] = useState("");
  //estado para los Todo List
  const [todos, setTodos] = useState([]);
  function handleChangeItem(event) {
    setNewItem(event.target.value);
  }
  function handleAddTodo(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false,
      },
    ]);
    setNewItem("");
    inputRef.current.focus();
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
      <form className="new-item-form" onSubmit={handleAddTodo}>
        <div className="form-row">
          <label htmlFor="txt_task">Name Task</label>
          <input
            type="text"
            name=""
            id="txt_task"
            value={newItem}
            onChange={handleChangeItem}
            ref={inputRef}
            required
          />
        </div>

        <button className="btn">Add Task</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={(event) =>
                    toggleTodo(todo.id, event.target.checked)
                  }
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
