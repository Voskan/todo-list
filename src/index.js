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
    term: ''
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

  render () {
    const { items, term } = this.state;
    const visibleItems = this.handleSearch(items, term)

    return (
      <div className="app">
        <Header done={8} important={23} />
        <Search onSearch={this.onSearch} />
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
