import { useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem.jsx';
import styles from './Todo.module.css';

const STORAGE_KEY = 'deskwork-todos';

function loadTodos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function Todo() {
  const [todos, setTodos] = useState(loadTodos);
  const [text, setText] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos([{ id: Date.now(), text: trimmed, done: false }, ...todos]);
    setText('');
  };

  const toggleTodo = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  const doneCount = todos.filter((t) => t.done).length;

  return (
    <section>
      <h1 className={styles.heading}>To-Do list</h1>

      <form className={styles.form} onSubmit={addTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs doing?"
          aria-label="New task"
        />
        <button type="submit">Add task</button>
      </form>

      {todos.length === 0 ? (
        <p className={styles.empty}>Nothing to do yet. Add your first task above.</p>
      ) : (
        <>
          <p className={styles.count}>
            {doneCount} of {todos.length} done
          </p>
          <ul className={styles.list}>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default Todo;
