import { useState } from "react";
import Card from "../UI/Card";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const [currentItem, setCurrentItem] = useState(null);
  //1
  let emptyList = true;
  if (props.todoList.length !== 0) {
    emptyList = false;
  }

  // Which of these three approaches is better ?
  // If it first then is it ok to use it like this or better use "useState" for emptyList variable ?
  // IMHO I would prefer the third variant because everything is divided into smaller components.
  // Code is small, easy to read, and well structured. Please correct me if I am wrong.
  //2
  // const emptyList = () => {
  //   if (props.todoList.length === 0) {
  //     return <p>TODO list is empty</p>;
  //   }
  //2
  //   return (
  //     <ul>
  //       {props.todoList.map((todo) => (
  //         <li key={todo.id} draggable="true">
  //           {todo.message}
  //           <Button>X</Button>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  // 3
  // const todoList = (
  //   <ul>
  //     {props.todoList.map((todo) => (
  //       <TodoItem id={todo.id} message={todo.message} />
  //     ))}
  //   </ul>
  // );

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
    // 1
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
      {/* 3 */}
      {/* {!emptyList && todoList} */}
      {/* 2 */}
      {/* {emptyList()} */}
    </Card>
  );
};

export default TodoList;
