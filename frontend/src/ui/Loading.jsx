import { RotatingLines } from 'react-loader-spinner';

function Loading({ width = '28', height = '28', disabled }) {
  return (
    <RotatingLines
      disabled={disabled}
      visible={true}
      height={width}
      width={height}
      color="white"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Loading;
