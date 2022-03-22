import { useAppSelector } from '../../hooks';

function ErrorMessage(): JSX.Element | null {
  const {error} = useAppSelector((state) => state);

  if(error) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '30%',
          right: '50%',
          padding: '10px',
          backgroundColor: '#d96666',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        {error}
      </div>
    );
  }

  return null;
}


export default ErrorMessage;
