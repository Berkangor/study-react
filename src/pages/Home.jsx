import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { FaGithub } from 'react-icons/fa';


function Home() {
  return (
    <div className={styles.homeContainer}>
<h1><span className={styles.fly}>🐛</span> Bug Hunter</h1>
<p>Find and fix the bugs in code snippets!</p>
      <Link to="/game">
        <button className={styles.startButton}>Start Game</button>
      </Link>
<p className={styles.desc}>bu oyun sadece React-router çalışması için yapılmıştır.</p>
 <a
  href="https://github.com/Berkangor/study-react"
  target="_blank"
  rel="noreferrer"
  style={{ fontSize: '24px', color: '#333', textDecoration: 'none' }} >
  <FaGithub /> GitHub
</a>
    </div>
  );
}

export default Home;