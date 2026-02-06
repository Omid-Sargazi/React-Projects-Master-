function App() {

    const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { title, amount }]);
    setTitle("");
    setAmount("");
  };


  const removeExpense = (index) => {
  setExpenses(expenses.filter((_, i) => i !== index));
};


  return (
     <div className="container">
      <h1>Expense Tracker</h1>

      <form>
        <input placeholder="Title" />
        <input placeholder="Amount" type="number" />
        <button>Add</button>
      </form>

      <ul>
  {expenses.map((exp, index) => (
    <li key={index}>
      {exp.title} - ${exp.amount}
    </li>

    
  ))}

  <li key={index}>
  {exp.title} - ${exp.amount}
  <button onClick={() => removeExpense(index)}>❌</button>
</li>
</ul>
    </div>
  );
}

export default App;
