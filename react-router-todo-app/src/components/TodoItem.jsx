import styles from './TodoItem.module.css';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={styles.item}>
      <label className={styles.check}>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        <span className={todo.done ? styles.done : ''}>{todo.text}</span>
      </label>
      <button
        type="button"
        className={styles.delete}
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
