import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
