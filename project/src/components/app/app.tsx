import Main from '../../pages/main/main';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <Main count = {offersCount} />
  );
}

export default App;
