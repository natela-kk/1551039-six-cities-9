import * as Loader from 'react-loader-spinner';

function LoadingScreen(): JSX.Element {
  return (
    <Loader.BallTriangle
      position='fixed'
      left='0'
      top='0'
      z-index='999'
      margin='auto'
      heigth="100"
      // width="100"
      color="grey"
      ariaLabel="loading-indicator"
      overflow='visible'
      visibility='visible'
      opacity='1'
      transition='opacity 2s linear'
    />
  );
}

export default LoadingScreen;
