import './todo-list-item.css';

const TodoListItem = ({ text, important }) => {
  const style = {
    color: important ? "red" : "black"
  }

  return (
    <li className='list-item' style={style}>
      {text}

      <span className='item-btns'>
        <button className='item-btn-done'>Done</button>
        <button className='item-btn-important'>Important</button>
        <button className='item-btn-remove'>
          Delete
        </button>
      </span>
    </li>
  );
}
  
export default TodoListItem;