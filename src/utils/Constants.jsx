import {Dimensions, useColorScheme} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const wp = percentage => {
  return (percentage * width) / 100;
};

export const hp = percentage => {
  return (percentage * height) / 100;
};

export const colors = {
  dark: {
    background: '#000000',
    text: '#ffffff',
    placeholder: '#959595',
    border: '#ffffff',
    active: '#2c2c2c',
    inactive: '#f5f5f5',
  },
  light: {
    background: '#ffffff',
    text: '#000000',
    placeholder: '#959595',
    border: '#000000',
    active: '#2c2c2c',
    inactive: '#f5f5f5',
  },
  success: '#30c7b4',
  primary: '#B53EE7',
  unpaid: '#F8D7DA',
  partially: '#FFF3CD',
  overdue: '#FDE2E2',
};

// Theme definitions
export const darkTheme = {
  ...colors.dark,
};

export const lightTheme = {
  ...colors.light,
};

// Custom hook to use theme
export const useCustomTheme = () => {
  const mode = useColorScheme();
  return mode === 'dark' ? darkTheme : lightTheme;
};
