import { useState, useEffect } from 'react';
import { levels } from '../data/levels';
import { useNavigate, useLocation } from 'react-router-dom';
import Editor from '../components/Editor';
import styles from './Game.module.css';

function Game() {
  const location = useLocation();
  const currentLevel = location.state?.level || 0;
  const [input, setInput] = useState(levels[currentLevel].code);
  const [startTime, setStartTime] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    setInput(levels[currentLevel].code);
    setStartTime(Date.now());
  }, [currentLevel]);

  const handleSubmit = () => {
    const endTime = Date.now();
    const elapsedSeconds = Math.floor((endTime - startTime) / 1000);


    let score = 0;
    const correct = input.trim() === levels[currentLevel].answer.trim();
    if (correct) {
        score = Math.max(100 - elapsedSeconds * 5, 10);
        
    }

    navigate('/result', {
      state: {
        success: correct,
        score,
        time: elapsedSeconds,
        nextLevel: currentLevel + 1 < levels.length ? currentLevel + 1 : null,
      },
    });
  };

  return (
      <div className={styles.container}>
      <div className={styles.content}>
      <h2 className={styles.level}>Level {currentLevel + 1}</h2>
      <pre className={styles.code}>{levels[currentLevel].code}</pre>
      <Editor value={input} onChange={setInput} />
        <button onClick={handleSubmit} className={styles.button}>Submit Fix</button>
        
      </div>
      </div>
  );
}

export default Game;
