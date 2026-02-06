function App() {
  return (
     <div className="container">
      <h1>Expense Tracker</h1>

      <form>
        <input placeholder="Title" />
        <input placeholder="Amount" type="number" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
