import { useLocation, Link, useNavigate } from 'react-router-dom';
import styles from './Result.module.css';

function Result() {
  const { state } = useLocation();
  const success = state?.success;
  const score = state?.score || 0;
  const time = state?.time || 0;
  const nextLevel = state?.nextLevel;
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ? '✅ Correct Fix!' : '❌ Wrong Fix'}</h1>
      {success && <p className={styles.detail}>⏱️ Time Taken: {time} sec</p>}
      {success && <p className={styles.detail}>🏆 Score: {score} points</p>}
      {success && nextLevel !== null && (
        <button onClick={() => navigate('/game', { state: { level: nextLevel } })} className={styles.button}>
          Next Level
        </button>
      )}
      <br />
      <Link to="/">
        <button className={styles.button}>Home</button>
      </Link>
    </div>
  );
}

export default Result;