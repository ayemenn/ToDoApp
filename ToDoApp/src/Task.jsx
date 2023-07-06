import React, { useState } from "react";
import './Task.css';

const Task = ({ id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const [title, setTitle] = useState('Title');
  const [description, setDescription] = useState('Description');
  const colorsList = ["#F498C2", "#F6C7B3", "#ADF7B6", "#FFEE93"];
  const [color, setColor] = useState(colorsList[Math.floor(Math.random() * colorsList.length)]);
  const handleSaveAndMoveCursor = () => {
    // Save the input or perform any other action
    console.log("Note added",title,description);
    // Move the cursor to the start of the input
    const titleInput = document.getElementById(`title-input-${id}`);
    const descriptionInput = document.getElementById(`description-input-${id}`);

    if (titleInput) {
      titleInput.setSelectionRange(0, 0);
      titleInput.focus();
     
    }

    if (descriptionInput) {
      descriptionInput.setSelectionRange(0, 0);
      descriptionInput.focus();
     
    }
  };

  return (

    <div className="task" style={{ background: color }}>

      <button
        className="delete-button" onClick={handleDelete}>
        &#10006;
      </button>

      <textarea
        id={`title-input-${id}`}
        type="text"
        className="task-input"
        placeholder={title}
        onChange={(event) => setTitle(event.target.value)}
        
      />

      <textarea
        type="text"
        className="task-textarea"
        placeholder={description}
        onChange={(event) => setDescription(event.target.value)}
        id={`description-input-${id}`}
        
      />

      <button className="save-button" onClick={handleSaveAndMoveCursor}>
        <span className="tick-icon">&#10003;</span>
      </button>
     
    </div>
  );
};

export default Task;
