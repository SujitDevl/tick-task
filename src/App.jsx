import "./style.css";

function App() {
  return (
    <>
      <h1>Tick Task</h1>
      <h3>This app helps users add, manage, and track tasks efficiently.</h3>

      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Add Task:</label>
          <input type="text" id="item" placeholder="Enter your task..." />
        </div>
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
