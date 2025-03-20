import {View, Text, StyleSheet, FlatList, Image, Platform} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import ProductItem from '../components/ProductItem';
import CustomFab from '../components/CustomFab';
import EmptyComponent from '../components/EmptyComponent';
import {navigate} from '../utils/NavigationUtil';

const ItemScreen = () => {
  const theme = useTheme();
  const [data, setData] = useState([1, 2, 3, 4]);

  const renderItem = useCallback(({item}) => {
    return <ProductItem item={item} />;
  }, []);

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{backgroundColor: theme.colors.background}}>
        <Appbar.Content
          title="Items"
          titleStyle={{
            alignSelf: 'left',
            fontWeight: 700,
            marginLeft: Platform.OS === 'ios' ? 10 : 0,
          }}
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="delete-outline" onPress={() => {}} />
        <Appbar.Action icon="professional-hexagon" onPress={() => {}} />
      </Appbar.Header>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{height: 110}} />}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        ListEmptyComponent={() => (
          <EmptyComponent
            title="No Items yet!"
            subtitle="Tap '+' to create new item"
            image={require('../assets/images/item.png')}
          />
        )}
      />
      <CustomFab
        title="Create your first item"
        onPress={() => navigate('AddProduct')}
        isFloatingShow={data.length === 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default ItemScreen;
