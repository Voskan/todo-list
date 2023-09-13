import { Component } from 'react';

import './search.css';

export default class Search extends Component {

  state = {
    term: ''
  }

  buttons = [
    { name: 'all', text: 'All', className: 'search-btn-all' },
    { name: 'done', text: 'Done', className: 'search-btn-done' },
    { name: 'important', text: 'Important', className: 'search-btn-important' }
  ]

  onSearchChange = (e) => {
    this.setState({
      term: e.target.value
    })

    this.props.onSearch(e.target.value)
  }

  render() {
    return (
      <div className='search'>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onSearchChange}
          placeholder="Type text for search..."
        />
        {
          this.buttons.map(({ name, text, className }) => {
            return (
              <button
                className={className}
                key={name}
                onClick={() => { this.props.onFilterChange(name) } }
              >
                {text}
              </button>
            )
          })
        }
      </div>
    );
  }
}