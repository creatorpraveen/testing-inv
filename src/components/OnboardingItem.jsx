import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/Constants';
import {useTheme} from '@react-navigation/native';

const OnboardingItem = ({item, index}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image source={{uri: item?.image}} style={styles.image} />
      <Text style={[styles.description, {color: theme.colors.text}]}>
        {item.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: wp(100),
    height: hp(78),
    resizeMode: 'cover',
  },
  description: {
    width: wp(100),
    textAlign: 'center',
    fontSize: 18,
    padding: 20,
  },
});

export default OnboardingItem;
