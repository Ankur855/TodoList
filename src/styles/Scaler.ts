// src/styles/scaler.js

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Platform } from 'react-native';

const Scaler = {
  // Font Sizes
  fontSizes: {
    small: moderateScale(12),
    medium: moderateScale(16),
    large: moderateScale(20),
    xLarge: moderateScale(24),
  },
  // Font Weights
  fontWeights: {
    light: '200',
    normal: '400',
    bold: '700',
  },
  // Font Families
  fontFamily: Platform.select({
    ios: 'Helvetica',
    android: 'Roboto',
    default: 'System',
  }),
  // General Sizes
  sizes: {
    small: scale(10),
    medium: scale(20),
    large: scale(30),
    xLarge: scale(40),
  },
  // Heights and Widths
  dimensions: {
    smallHeight: verticalScale(50),
    mediumHeight: verticalScale(100),
    largeHeight: verticalScale(150),
    xLargeHeight: verticalScale(200),
    smallWidth: scale(50),
    mediumWidth: scale(100),
    largeWidth: scale(150),
    xLargeWidth: scale(200),
  },
  // Paddings and Margins
  paddings: {
    small: scale(10),
    medium: scale(20),
    large: scale(30),
  },
  margins: {
    small: scale(10),
    medium: scale(20),
    large: scale(30),
  },
};

export default Scaler;
