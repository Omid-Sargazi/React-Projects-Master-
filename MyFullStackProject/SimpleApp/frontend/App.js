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


const total = expenses.reduce(
  (sum, exp) => sum + Number(exp.amount),
  0
);



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

<h3>Total: ${total}</h3>
    </div>
  );
}

export default App;
