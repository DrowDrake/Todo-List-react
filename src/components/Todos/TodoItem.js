import Button from "../UI/Button";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const deleteHandler = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  };

  return (
    <li
      className={classes.todoItem}
      draggable="true"
      onDragStart={props.onDragStart}
      onDragLeave={props.onDragLeave}
      onDragEnd={props.onDragEnd}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
    >
      {props.message}
      <Button onClick={deleteHandler}>X</Button>
    </li>
  );
};

export default TodoItem;