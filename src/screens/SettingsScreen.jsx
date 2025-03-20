import {View, Text, StyleSheet, FlatList, Image, Platform} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';

const ItemScreen = () => {
  const theme = useTheme();

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{backgroundColor: theme.colors.background}}>
        <Appbar.Content
          title="More"
          titleStyle={{
            alignSelf: 'left',
            fontWeight: 700,
            marginLeft: Platform.OS === 'ios' ? 10 : 0,
          }}
        />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ItemScreen;
