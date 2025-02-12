import { useState } from "react";
import "./style.css";

function App() {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <h1>Tick Task</h1>
      <h3>Effortlessly add, manage, and track tasks your productivity</h3>

      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Add Task:</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            placeholder="Enter your task..."
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todos:</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-primary">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-primary">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 3
          </label>
          <button className="btn btn-primary">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
