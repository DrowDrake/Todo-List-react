import { useState } from "react";
import AddTodo from "./components/Todos/AddTodo";
import TodoList from "./components/Todos/TodoList";
import classes from "./App.module.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [id, setID] = useState(0);

  const addTodoHandler = (todoMessage) => {
    if (todoList.length === id) {
      setID((prevId) => ++prevId);
    }
    setTodoList((prevTodoList) => {
      return [...prevTodoList, { id: `${id}`, message: todoMessage }];
    });
  };

  const deleteItemHandler = (itemId) => {
    setTodoList((prevTodoList) => {
      const updateItems = prevTodoList.filter((item) => item.id !== itemId);
      return updateItems;
    });
  };

  const changeOrederHandler = (newList) => {
    setTodoList(newList);
  };

  return (
    <div className={classes["root-div"]}>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList
        todoList={todoList}
        onDeleteItem={deleteItemHandler}
        onChangeOrder={changeOrederHandler}
      />
    </div>
  );
};

export default App;
