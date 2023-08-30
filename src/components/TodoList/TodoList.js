import TodoListItem from "./TodoListItem/TodoListItem";
import "./todo-list.css";

const TodoList = () => {
  const items = [
    { text: "Learn JS", important: true, id: 1 },
    { text: "Drink Coffee", important: false, id: 2 },
    { text: "Learn React", important: false, id: 3 },
    { text: "Learn TypeScript", important: true, id: 4 },
    { text: "Learn Node.js", important: false, id: 5 },
  ];

  const data = items.map(({ text, important, id }) => {
    return (<TodoListItem text={text} important={important} key={id} />);
  });

  return (
    <ul className="todolist">{data}</ul>
  );
}

export default TodoList;
