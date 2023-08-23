import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Search from './components/Search'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <TodoList />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);