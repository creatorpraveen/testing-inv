import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, Tooltip} from 'react-native-paper';
import {wp} from '../../utils/Constants';

const CustomInput = ({
  label,
  placeholder,
  error,
  value,
  setValue,
  defaultValue,
  limit,
  ...props
}) => {
  const theme = useTheme();

  return (
    <View>
      <TextInput
        mode="outlined"
        label={label}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChangeText={setValue}
        textColor={theme.colors.text}
        activeOutlineColor={theme.colors.text}
        outlineColor={theme.colors.placeholder}
        right={error && <TextInput.Icon icon="alert-circle" color="red" />}
        {...props}
      />
      {limit && (
        <Text style={[styles.limit, {color: theme.colors.placeholder}]}>
          {0}/{limit}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  limit: {
    alignSelf: 'flex-end',
    fontSize: 12,
    marginRight: 10,
    marginTop: 8,
  },
});

export default CustomInput;
