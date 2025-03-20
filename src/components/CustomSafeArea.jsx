import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const CustomSafeArea = ({children}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomSafeArea;
