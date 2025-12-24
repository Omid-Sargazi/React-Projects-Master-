import React,{useState,useEffect} from "react";

function AddTodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('عنوان کار نمی‌تواند خالی باشد');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const newTodo = {
      title: title.trim(),
      completed: false,
      priority,
      createdAt: new Date().toISOString()
    };

    try {
      // 🎯 ارسال به API
      const response = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo)
      });

      const createdTodo = await response.json();
      onAddTodo(createdTodo); // به لیست اضافه کن
      setTitle(''); // ریست فرم
      setPriority('medium');
    } catch (err) {
      setError('خطا در ذخیره‌سازی');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-todo-form">
      <h3>➕ اضافه کردن کار جدید</h3>
      
      {error && (
        <div className="form-error">
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="کار جدیدی که می‌خواهید انجام دهید..."
            className="title-input"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label>اولویت:</label>
          <div className="priority-options">
            {['low', 'medium', 'high'].map((p) => (
              <label key={p} className="priority-option">
                <input
                  type="radio"
                  name="priority"
                  value={p}
                  checked={priority === p}
                  onChange={(e) => setPriority(e.target.value)}
                  disabled={isSubmitting}
                />
                <span className={`priority-dot priority-${p}`}></span>
                {p === 'low' && 'کم'}
                {p === 'medium' && 'متوسط'}
                {p === 'high' && 'بالا'}
              </label>
            ))}
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting || !title.trim()}
        >
          {isSubmitting ? 'در حال ذخیره...' : '➕ اضافه کردن'}
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;