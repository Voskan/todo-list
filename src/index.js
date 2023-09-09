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
      { text: "Learn JS", important: true, id: 1 },
      { text: "Drink Coffee", important: false, id: 2 },
      { text: "Learn React", important: false, id: 3 },
      { text: "Learn TypeScript", important: true, id: 4 },
      { text: "Learn Node.js", important: false, id: 5 },
    ],
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

  render () {
    return (
      <div className="app">
        <Header done={8} important={23} />
        <Search />
        <TodoList items={this.state.items} deletItem={this.deletItem} />
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
