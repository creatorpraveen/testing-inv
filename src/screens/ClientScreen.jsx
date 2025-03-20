import {View, Text, StyleSheet, FlatList, Image, Platform} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import ProductItem from '../components/ProductItem';
import CustomFab from '../components/CustomFab';
import EmptyComponent from '../components/EmptyComponent';

const ClientScreen = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);

  const renderItem = useCallback(({item}) => {
    return <ProductItem item={item} />;
  }, []);

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{backgroundColor: theme.colors.background}}>
        <Appbar.Content
          title="Clients"
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
            title="No Clients yet!"
            subtitle="Tap '+' to create new client"
            image={require('../assets/images/user.png')}
          />
        )}
      />
      <CustomFab
        title="Create your first client"
        onPress={() => {}}
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

export default ClientScreen;
