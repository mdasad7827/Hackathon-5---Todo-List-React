import React, { useState } from "react";
import "./../styles/App.css";

function ListItem(props) {
  const [editMode, setEditMode] = useState(false);

  const [editedItem, setEditedItem] = useState(props.item);

  const saveEditedItem = () => {
    props.editHandler(editedItem, props.idx);
    setEditMode(false);
  };

  return (
    <div className="list">
      {editMode ? (
        <>
          <textarea
            className="editTask"
            onChange={(evt) => setEditedItem(evt.target.value)}
            placeholder="Edit Task"
            value={editedItem}
          ></textarea>
          <button
            className="saveTask"
            onClick={saveEditedItem}
            disabled={editedItem.trim().length === 0}
          >
            Save
          </button>
        </>
      ) : (
        <>
          {props.item}
          <button className="edit" onClick={() => setEditMode(true)}>
            Edit
          </button>
          <button
            className="delete"
            onClick={() => props.deleteHandler(props.idx)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default ListItem;
