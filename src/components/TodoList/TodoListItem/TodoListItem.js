import { Component } from 'react';
import { FaTrash, FaInfo, FaCheck, FaPenToSquare, FaCircleCheck } from 'react-icons/fa6';
import { validateInput } from '../../../utils/validator'

import './todo-list-item.css';

class TodoListItem extends Component {
  state = {
    isDone: false,
    isImportant: this.props.important,
    isEdit: false,
    text: this.props.text,
    isError: false,
  }

  onDone = () => {
    this.setState(({ isDone }) => {
      return {
        isDone: !isDone
      }
    });
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
    const { isDone, isImportant, isEdit, isError, text } = this.state;

    const textStyle = {
      textDecoration: isDone ? 'line-through' : 'none',
      color: isDone ? '#aaa' : (isImportant ? 'red': 'black'),
      fontWeight: isDone ? "normal": (isImportant ? "bold" : "normal"),
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