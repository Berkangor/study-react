import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.homeContainer}>
<h1><span className={styles.fly}>🐛</span> Bug Hunter</h1>
<p>Find and fix the bugs in code snippets!</p>
      <Link to="/game">
        <button className={styles.startButton}>Start Game</button>
      </Link>
    <p className={styles.desc}>bu oyun sadece React-router çalışması için yapılmıştır.</p>
    </div>
  );
}

export default Home;