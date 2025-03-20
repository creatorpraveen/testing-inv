import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ActionSheet, {registerSheet} from 'react-native-actions-sheet';

const BasicSheet = () => {
  return (
    <ActionSheet id="customSheet">
      <View style={styles.sheetContent}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log('Option 1 clicked')}>
          <Text style={styles.optionText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log('Option 2 clicked')}>
          <Text style={styles.optionText}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancel}
          onPress={() => console.log('Cancelled')}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

// Register the Action Sheet globally
registerSheet('customSheet', BasicSheet);

const styles = StyleSheet.create({
  sheetContent: {
    padding: 20,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  cancel: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  cancelText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  },
});

export default BasicSheet;
