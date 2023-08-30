import TodoListItem from "./TodoListItem/TodoListItem";
import "./todo-list.css";

const TodoList = ({ items }) => {
  const data = items.map(({ text, important, id }) => {
    return (<TodoListItem text={text} important={important} key={id} />);
  });

  return (
    <ul className="todolist">{data}</ul>
  );
}

export default TodoList;
