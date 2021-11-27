/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#252c4a',
  secondary: '#D9D9D9',
  accent: '#3C6E71',

  success: '#00C851',
  error: '#ff4444',

  black: '#171717',
  white: '#FFFFFF',
  background: '#284B63',
};

export const SIZES = {
  base: 10,
  width,
  height,
};
