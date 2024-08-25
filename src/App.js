import "./App.css";
import ListItems from "./components/listItems";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import React from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItem(event) {
    event.preventDefault();
    setItems([...items, inputValue]);
    setInputValue("");
  }
  return (
    <div className="App">
      <TodoForm
        setInputValue={setInputValue}
        addItem={addItem}
        inputValue={inputValue}
      />
      <ListItems items={items} />
    </div>
  );
}

export default App;
