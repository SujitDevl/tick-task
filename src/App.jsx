import "./style.css";

function App() {
  return (
    <>
      <h1>To do list App</h1>
      <h2>Users add, manage, and track tasks efficiently.</h2>

      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Add your todo:</label>
          <input type="text" id="item" placeholder="Add your items" />
        </div>
      </form>
      <h1 className="header">Todos:</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 3
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
