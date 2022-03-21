import styles from './loading-screen.module.css';

function LoadingScreen(): JSX.Element {
  return (
    <p id={styles.preloader} className={styles.visible}></p>
  );
}

export default LoadingScreen;
