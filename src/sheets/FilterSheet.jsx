import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

const FilterSheet = () => {
  return (
    <ActionSheet
      id="filter-sheet"
      headerAlwaysVisible
      isModal
      onClose={() => SheetManager.hide('filter-sheet')}
      springOffset={100}
      gestureEnabled
      enableGesturesInScrollView={Platform.OS === 'ios'}>
      <View style={styles.container}>
        <Text>FilterSheet</Text>
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default FilterSheet;
