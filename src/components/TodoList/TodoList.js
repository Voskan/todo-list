import { Component } from "react";

import TodoListItem from "./TodoListItem";
import "./todo-list.css";

class TodoList extends Component {

  render() {
    const { items, deletItem, onImportant } = this.props;

    const data = items.map(({ text, important, id }) => {
      return (
        <TodoListItem
          text={text}
          important={important}
          key={id}
          id={id}
          deletItem={deletItem}
          onImportant={onImportant}
        />
      );
    });
  
    return (
      <ul className="todolist">{data}</ul>
    );
  }
}

export default TodoList;
