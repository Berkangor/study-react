import styles from './Editor.module.css';

function Editor({ value, onChange }) {
  return (
    <textarea
      className={styles.editor}
      rows={10}
      cols={50}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
export default Editor;
