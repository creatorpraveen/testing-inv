import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';

const CustomButton = ({title, onPress, icon, loading, style}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={[
        styles.container,
        {backgroundColor: theme.colors.primary},
        style,
      ]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={'white'} />
      ) : (
        <>
          <Text style={styles.title}>{title}</Text>
          {icon && <Icon name={icon} size={24} color="white" />}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});

export default CustomButton;
