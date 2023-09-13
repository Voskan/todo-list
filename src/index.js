import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import "./index.css";

class App extends Component {

  state = {
    items: [
      { text: "Learn JS", important: true, done: false, id: 1 },
      { text: "Drink Coffee", important: false, done: false, id: 2 },
      { text: "Learn React", important: false, done: false, id: 3 },
      { text: "Learn TypeScript", important: true, done: false, id: 4 },
      { text: "Learn Node.js", important: false, done: false, id: 5 },
    ],
    term: '',
    filter: 'all', // all, done, important
  }

  onSearch = (term) => {
    this.setState({ term })
  }

  handleSearch = (items, term) => {
    if (term.trim().length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.text.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  deletItem = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id)
  
      return {
        items: [
          ...items.slice(0, idx),
          ...items.slice(idx + 1)
        ]
      }
    })
  }

  onAddItem = (text) => {
    const id = this.state.items.length ? this.state.items[this.state.items.length - 1].id + 1 : 1

    const newItem = {
      text,
      important: false,
      id
    };

    this.setState((prevState) => {
      return {
        items: [...prevState.items, newItem]
      }
    })
  }

  onImportant = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id)

      const newItem = {
        ...items[idx],
        important: !items[idx].important
      }

      return {
        items: [
          ...items.slice(0, idx),
          newItem,
          ...items.slice(idx + 1)
        ]
      }
      
    })
  }

  onDone = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id)

      const newItem = {
        ...items[idx],
        done: !items[idx].done
      }

      return {
        items: [
          ...items.slice(0, idx),
          newItem,
          ...items.slice(idx + 1)
        ]
      }
      
    })
  }

  onFilter = (items, filterBtn) => {
    switch(filterBtn) {
      case 'all':
        return items;
      case 'done':
        return items.filter((el) => el.done)
      case 'important':
        return items.filter((el) => el.important && !el.done)
      default:
        return items
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  render () {
    const { items, term, filter } = this.state;
    const visibleItems = this.onFilter(this.handleSearch(items, term), filter)

    const doneCount = items.filter((el) => el.done).length
    const importantCount = items.filter((el) => el.important && !el.done).length

    return (
      <div className="app">
        <Header done={doneCount} important={importantCount} />
        <Search onSearch={this.onSearch} onFilterChange={this.onFilterChange} />
        <TodoList
          items={visibleItems}
          deletItem={this.deletItem}
          onImportant={this.onImportant}
          onDone={this.onDone}
        />
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
