import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddTodo.module.css";
import { useState } from "react";

const Todo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [error, setError] = useState(null);
  const [jokeData, setJokeData] = useState(null);
  const [jokeError, setJokeError] = useState(null);

  const inputTodoHandler = (event) => {
    setEnteredTodo(event.target.value.trim());
  };

  const addTodoHandler = (event) => {
    event.preventDefault();

    if (enteredTodo.length === 0) {
      setError({
        title: "Incorrect input",
        message: "Your todo can't be empty",
      });
      return;
    }

    props.onAddTodo(enteredTodo);
    setEnteredTodo("");
  };

  const errorHandler = () => {
    setError(null);
  };

  const fetchJoke = () => {
    fetch("https://geek-jokes.sameerkumar.website/api?format=json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setJokeData(data.joke);
      })
      .catch((error) => {
        console.log("Error fenching data: ", error);
        setJokeError(error);
      });
  };

  return (
    <div className={classes["add-todo-container"]}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          jokeData={jokeData}
          jokeError={jokeError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addTodoHandler}>
          <label htmlFor="">TODO List</label>
          <input
            id="usersTodo"
            value={enteredTodo}
            onChange={inputTodoHandler}
            type="text"
            autoComplete="off"
          />
          <Button
            className={classes.inputButton}
            type="submit"
            onClick={fetchJoke}
          >
            add
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Todo;
