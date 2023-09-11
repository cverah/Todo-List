import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodosList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            checked={todo.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export default TodosList;
