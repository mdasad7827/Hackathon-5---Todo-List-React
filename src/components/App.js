import React, { useState } from "react";
import "./../styles/App.css";
import ListItem from "./ListItem";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    items.push(newItem);
    setItems([...items]);
    setNewItem("");
  };

  const newItemChanged = (evt) => {
    setNewItem(evt.target.value);
  };

  const editHandler = (editedVal, itemIdx) => {
    items[itemIdx] = editedVal;
    setItems([...items]);
  };

  const deleteHandler = (itemIdx) => {
    items.splice(itemIdx, 1);
    setItems([...items]);
  };

  return (
    <div id="main">
      <textarea
        id="task"
        onChange={newItemChanged}
        placeholder="New Task"
        value={newItem}
      ></textarea>
      <button id="btn" onClick={addItem} disabled={newItem.trim().length === 0}>
        Add Task
      </button>
      {items.map((item, idx) => (
        <ListItem
          item={item}
          idx={idx}
          key={`${item}_${idx}`}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
}

export default App;
