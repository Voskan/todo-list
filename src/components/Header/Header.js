import { Component } from 'react';

import './header.css';

class Header extends Component {

  render() {
    const { done, important } = this.props;

    return (
      <div className='header'>
        <h1>
          My Todo List
          <span className='header-info'>
            <span className='header-done'>Done: {done}</span>
            <span className='header-done'>Important: {important}</span>
          </span>
        </h1>
      </div>
    );
  }
}
export default Header;