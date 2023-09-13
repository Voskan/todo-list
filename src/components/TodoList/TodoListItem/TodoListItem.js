import { Component } from 'react';
import { FaTrash, FaInfo, FaCheck, FaPenToSquare, FaCircleCheck } from 'react-icons/fa6';
import { validateInput } from '../../../utils/validator'

import './todo-list-item.css';

class TodoListItem extends Component {
  state = {
    isEdit: false,
    text: this.props.text,
    isError: false,
  }

  onDone = () => {
    this.props.onDone(this.props.id)
  }

  onImportant = () => {
    this.props.onImportant(this.props.id)
  }

  onDelete = () => {
    this.props.deletItem(this.props.id)
  }

  onEdit = () => {
    this.setState(({ isEdit, text }) => {
      if (isEdit && !validateInput(text)) {
        return {
          isError: true
        }
      }

      return {
        isEdit: !isEdit,
        isError: false
      }
    })
  }

  onInputEdit = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    const { isEdit, isError, text } = this.state;
    const { important, done } = this.props;

    const textStyle = {
      textDecoration: done ? 'line-through' : 'none',
      color: done ? '#aaa' : (important ? 'red': 'black'),
      fontWeight: done ? "normal": (important ? "bold" : "normal"),
    }

    const inputStyle = {
      borderColor: isError ? 'red' : '#ccc'
    }
  
    return (
      <li className='list-item'>
        {
          isEdit ? (
            <div className='item-input-wrapper'>
              <input
                type='text'
                className='list-item-edit-input'
                style={inputStyle}
                onChange={this.onInputEdit}
                value={text}
              />
              
              {
                isError ? <span className='input-error-message'>Input text is required.</span> : null
              }
            </div>
          ) : (
            <span className='item-text' style={textStyle} onClick={ this.onDone }>
              {text}
            </span>
          )
        }
  
        <span className='item-btns'>
          <button onClick={this.onEdit}>
            { isEdit ? <FaCircleCheck /> : <FaPenToSquare /> }
          </button>
          <button className='item-btn-done' onClick={ this.onDone }><FaCheck /></button>
          <button className='item-btn-important' onClick={ this.onImportant }><FaInfo /></button>
          <button className='item-btn-remove' onClick={this.onDelete}><FaTrash /></button>
        </span>
      </li>
    );
  }
}
  
export default TodoListItem;