import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {colors} from '../utils/Constants';

const InvoiceItem = ({item, index, onPress, style}) => {
  const theme = useTheme();
  const currentDate = new Date();
  return (
    <TouchableOpacity
      style={[styles.container, {borderColor: theme.colors.placeholder}]}
      onPress={onPress}>
      <View style={styles.row}>
        <Text style={[styles.name, {color: theme.colors.text}]}>
          {item.name}
        </Text>
        <Text style={[styles.number, {color: theme.colors.text}]}>
          {item.number}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.price, {color: theme.colors.text}]}>
          ${item.amount.toFixed(2)}
        </Text>
        <Text style={[styles.date, {color: theme.colors.text}]}>
          {currentDate.toISOString().split('T')[0].replaceAll('-', '/')}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.due, {color: colors.success}]}>
          {item.overdue}
        </Text>
        <Text
          style={[
            styles.status,
            {color: colors.success, borderColor: colors.success},
          ]}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 6,
    padding: 10,
    borderRadius: 6,
    borderWidth: 0.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 600,
  },
  due: {
    fontSize: 12,
  },
  status: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    borderWidth: 0.5,
  },
});

export default InvoiceItem;
