import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CustomHeader = ({title, children}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle} numberOfLines={1}>
        {title}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 600,
    flex: 1,
  },
});

export default CustomHeader;
