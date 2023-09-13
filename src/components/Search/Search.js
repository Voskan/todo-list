import { Component } from 'react';

import './search.css';

export default class Search extends Component {

  state = {
    term: ''
  }

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
        <button className='search-btn-all'>All</button>
        <button className='search-btn-done'>Done</button>
        <button className='search-btn-important'>Important</button>
      </div>
    );
  }
}