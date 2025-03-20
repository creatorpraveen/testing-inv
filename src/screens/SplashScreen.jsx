import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import {resetAndNavigate} from '../utils/NavigationUtil';

const SplashScreen = () => {
  const theme = useTheme();

  useEffect(() => {
    const timeroutid = setTimeout(() => resetAndNavigate('Onboarding'), 1200);
    return () => clearTimeout(timeroutid);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color: theme.colors.text}}>SplashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
