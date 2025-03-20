import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const ProductItem = ({item, onPress}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {borderColor: theme.colors.placeholder}]}>
      <View>
        <Text
          style={[styles.title, {color: theme.colors.text}]}
          numberOfLines={1}>
          Item 1
        </Text>
        <Text
          style={[styles.description, {color: theme.colors.placeholder}]}
          numberOfLines={1}>
          something new
        </Text>
      </View>
      <Text style={[styles.amount, {color: theme.colors.text}]}>$1200.00</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 0.5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    fontSize: 16,
    fontWeight: 600,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  description: {
    fontSize: 12,
  },
});

export default ProductItem;
