import Svg, { Path } from 'react-native-svg';

const ArcBackground = () => {
  return (
    <Svg
      width="100%"
      height="100"
      viewBox="0 0 100 100"
      style={{ position: 'absolute', bottom: 80 }}
    >
      <Path
        d="M0,100 C50,0 50,0 100,100 Z"
        fill="#000"
      />
    </Svg>
  );
};

export default ArcBackground;
