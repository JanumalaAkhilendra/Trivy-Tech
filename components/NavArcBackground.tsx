// components/NavArcBackground.tsx
import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const NavArcBackground = () => {
  return (
    <Svg
      width={width}
      height={180}
      viewBox={`0 0 ${width} 80`}
      style={{
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#fff',
        borderTopWidth: 10,
        left: 0,
        right: 0,
        zIndex: 1, // Ensures it's behind the icons
      }}
    >
      <Path
        d={`
          M0,0 
          H0 
          Q${width / 2},-90 ${width - 1},0
          H${width} 
          V80 
        `}
        stroke="#fff"
        strokeWidth={1}
        strokeOpacity={0.5}
      />
      <Path
        d={`
          M50,0
          Q${width / 2},-50 ${width - 40},4   
        `}
        stroke="#fff"
        strokeWidth={1}
        strokeOpacity={0.5}
        translateY={-20}
      />
    </Svg>
  );
};

export default NavArcBackground;
