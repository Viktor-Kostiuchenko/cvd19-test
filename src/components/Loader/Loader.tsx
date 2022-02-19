import { Grid } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Grid
      ariaLabel="loading-indicator"
      color="#2451B7"
      height={100}
      width={100}
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
