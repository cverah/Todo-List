const TodoItem = ({ id, title, checked, toggleTodo, deleteTodo }) => {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          name=""
          id=""
          checked={checked}
          onChange={(event) => toggleTodo(id, event.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
