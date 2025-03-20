import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {wp} from '../utils/Constants';
import {useTheme} from '@react-navigation/native';

const EmptyComponent = ({title, subtitle, image, style}) => {
  const theme = useTheme();
  return (
    <View style={[styles.emptyContainer, style]}>
      <Image source={image} style={styles.invoiceImage} />
      <Text style={[styles.emptyText, {color: theme.colors.text}]}>
        {title}
      </Text>
      <Text
        style={[styles.emptySublineText, {color: theme.colors.placeholder}]}>
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  invoiceImage: {
    width: wp(25),
    height: wp(25),
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 10,
  },
  emptySublineText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default EmptyComponent;
