// utils/renderDigitImages.tsx
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const renderDigitImages = (digitString) => {
  const digits = digitString.replace(/\s/g, '').split('');
  return (
    <View style={styles.row}>
      {digits.map((digit, index) => (
        <Image
          key={index}
          source={getDigitImage(digit)}
          style={styles.digitImage}
          resizeMode="contain"
        />
      ))}
    </View>
  );
};

const getDigitImage = (digit) => {
  switch (digit) {
    case '0':
      return require('../assets/images/digits/0.png');
    case '1':
      return require('../assets/images/digits/1.png');
    case '2':
      return require('../assets/images/digits/2.png');
    case '3':
      return require('../assets/images/digits/3.png');
    case '4':
      return require('../assets/images/digits/4.png');
    case '5':
      return require('../assets/images/digits/5.png');
    case '6':
      return require('../assets/images/digits/6.png');
    case '7':
      return require('../assets/images/digits/7.png');
    case '8':
      return require('../assets/images/digits/8.png');
    case '9':
      return require('../assets/images/digits/9.png');
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 4,
  },
  digitImage: {
    width: 10,
    height:15,
  },
});
