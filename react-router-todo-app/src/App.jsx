import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Todo from './pages/Todo.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.shell}>
      <Navbar />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
