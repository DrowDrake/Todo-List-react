import classes from "./ErrorItem.module.css";

const ErrorItem = (props) => {
  return (
    <div className={classes.errorItem}>
      <h3>Joke for U</h3>
      <p>
        {props.error && `"Error fenching data: ${props.error}"`}
        {props.data}
      </p>
    </div>
  );
};

export default ErrorItem;
