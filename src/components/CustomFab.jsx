import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '../utils/Constants';
import {useTheme} from '@react-navigation/native';
import {FAB} from 'react-native-paper';

const CustomFab = ({title, onPress, isFloatingShow}) => {
  const theme = useTheme();
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(-10, {duration: 1200, easing: Easing.inOut(Easing.sin)}),
        withTiming(20, {duration: 1200, easing: Easing.inOut(Easing.sin)}),
      ),
      -1,
      true,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));
  return (
    <>
      {isFloatingShow && (
        <Animated.View
          style={[
            styles.box,
            {backgroundColor: colors.success},
            animatedStyle,
          ]}>
          <Text style={{color: theme.colors.background}}>{title} </Text>
          <View
            style={{
              position: 'absolute',
              bottom: -8,
              right: 15,
              borderWidth: 10,
              transform: [{rotate: '45deg'}],
              borderColor: colors.success,
            }}
          />
        </Animated.View>
      )}

      <FAB
        icon="plus"
        style={[styles.fab, {backgroundColor: colors.success}]}
        mode="flat"
        onPress={onPress}
        color={theme.colors.background}
      />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 100,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
  box: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    position: 'absolute',
    bottom: 210,
    right: 30,
    borderRadius: 12,
  },
});

export default CustomFab;
