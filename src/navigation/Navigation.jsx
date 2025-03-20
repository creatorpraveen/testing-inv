import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {useCustomTheme} from '../utils/Constants';
import {navigationRef} from '../utils/NavigationUtil';
import BottomTab from './BottomTab';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import TemplateSlideScreen from '../screens/TemplateSlideScreen';
import {SheetProvider} from 'react-native-actions-sheet';
import AddProduct from '../screens/forms/AddProduct';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const theme = useCustomTheme();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.background,
      text: theme.text,
      border: theme.border,
      active: theme.active,
      inactive: theme.inactive,
      placeholder: theme.placeholder,
    },
  };

  return (
    <SheetProvider>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{headerShown: false, unmountOnBlur: false}}>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="TemplateSlide" component={TemplateSlideScreen} />
          <Stack.Screen name="AddProduct" component={AddProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    </SheetProvider>
  );
};

export default Navigation;
