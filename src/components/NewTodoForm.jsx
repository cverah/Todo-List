import { useRef, useState } from "react";
import PropTypes from "prop-types";

const NewTodoForm = ({ onSubmit }) => {
  //para el focus del input text
  const inputRef = useRef(null);
  //estado para los items del input text a agregar
  const [newItem, setNewItem] = useState("");

  function handleAddTodo(event) {
    event.preventDefault();
    onSubmit(newItem);
    setNewItem("");
    inputRef.current.focus();
  }

  function handleChangeItem(event) {
    setNewItem(event.target.value);
  }
  return (
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
  );
};

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default NewTodoForm;
