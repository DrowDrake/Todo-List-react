import { useState } from "react";
import Card from "../UI/Card";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const [currentItem, setCurrentItem] = useState(null);
  let emptyList = true;
  if (props.todoList.length !== 0) {
    emptyList = false;
  }

  const dragStartHandler = (event, todo) => {
    setCurrentItem(todo);
  };
  const dragLeaveHandler = (event) => {
    event.target.style.background = "initial";
  };
  const dragEndHandler = (event) => {
    event.target.style.background = "initial";
  };
  const dragOverHandler = (event) => {
    event.preventDefault();
    event.target.style.background = "#655967";
  };
  const dropHandler = (event, todo) => {
    event.preventDefault();
    props.onChangeOrder(
      props.todoList.map((item) => {
        if (item.id === todo.id) return { ...item, id: currentItem.id };
        if (item.id === currentItem.id) return { ...item, id: todo.id };
        return item;
      })
    );
    event.target.style.background = "initial";
  };

  const sortListItems = (firstItem, secondItem) => {
    if (firstItem.id > secondItem.id) return 1;
    return -1;
  };

  return (
    <Card className={classes.todoList}>
      {emptyList && <p>TODO list is empty</p>}
      {!emptyList && (
        <ul>
          {props.todoList.sort(sortListItems).map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              message={todo.message}
              onDelete={props.onDeleteItem}
              onDragStart={(event) => dragStartHandler(event, todo)}
              onDragLeave={(event) => dragLeaveHandler(event)}
              onDragEnd={(event) => dragEndHandler(event)}
              onDragOver={(event) => dragOverHandler(event)}
              onDrop={(event) => dropHandler(event, todo)}
            />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default TodoList;
