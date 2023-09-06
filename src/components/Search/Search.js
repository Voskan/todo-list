import { Component } from 'react';

import './search.css';

export default class Search extends Component {

  render() {
    return (
      <div className='search'>
        <input type="text" placeholder="Type text for search..." />
        <button className='search-btn-all'>All</button>
        <button className='search-btn-done'>Done</button>
        <button className='search-btn-important'>Important</button>
      </div>
    );
  }
}