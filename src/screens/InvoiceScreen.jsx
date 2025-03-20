import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
  Platform,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {colors, height, hp, wp} from '../utils/Constants';
import {Appbar, FAB} from 'react-native-paper';
import InvoiceItem from '../components/InvoiceItem';
import CustomFab from '../components/CustomFab';
import EmptyComponent from '../components/EmptyComponent';
import {SheetProvider, SheetManager} from 'react-native-actions-sheet';

const filters = ['All', 'Over Due', 'Paid', 'Partially Paid', 'Unpaid'];
const invoices = [
  {
    id: 1,
    name: 'Parveen Prajapati',
    status: 'Paid',
    overdue: 'none',
    number: 'INV0001',
    amount: 1200,
  },
  {
    id: 2,
    name: 'Heena Gupta',
    status: 'Partially Paid',
    overdue: 'Due in 2 Days',
    number: 'INV0002',
    amount: 149,
  },
  {
    id: 3,
    name: 'Lalit Sharma',
    status: 'Overdue',
    overdue: '1Due in 2 Days',
    number: 'INV0003',
    amount: 799,
  },
  {
    id: 4,
    name: 'Rahul Yadav',
    status: 'Unpaid',
    overdue: 'Due in 7 Days',
    number: 'INV0004',
    amount: 80,
  },
  {
    id: 5,
    name: 'Rahul Yadav',
    status: 'Unpaid',
    overdue: 'Due in 7 Days',
    number: 'INV0004',
    amount: 80,
  },
  {
    id: 6,
    name: 'Rahul Yadav',
    status: 'Partially Paid',
    overdue: 'Due in 7 Days',
    number: 'INV0004',
    amount: 80,
  },
  {
    id: 7,
    name: 'Rahul Yadav',
    status: 'Over Due',
    overdue: 'Due in 7 Days',
    number: 'INV0004',
    amount: 80,
  },
  {
    id: 8,
    name: 'Rahul Yadav',
    status: 'Over Due',
    overdue: 'Due in 7 Days',
    number: 'INV0004',
    amount: 80,
  },
  {
    id: 9,
    name: 'Rahul Yadav',
    status: 'Paid',
    overdue: 'Due in 7 Days',
    number: 'INV0004',
    amount: 80,
  },
];

const InvoiceScreen = () => {
  const theme = useTheme();
  const [filterSelected, setFilterSelected] = useState('All');
  const [data, setData] = useState(invoices.reverse());

  const renderItem = ({item}) => {
    return <InvoiceItem item={item} onPress={() => {}} style={{}} index={{}} />;
  };

  const handleFilter = status => {
    const filteredData = invoices.filter(i => i.status === status);
    status === 'All'
      ? setData(invoices.reverse())
      : setData(filteredData.reverse());
    setFilterSelected(status);
  };

  const RenderFilter = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          style={[
            styles.filterItem,
            {
              borderColor:
                filterSelected === item
                  ? theme.colors.text
                  : theme.colors.placeholder,
              backgroundColor:
                filterSelected === item
                  ? theme.colors.text
                  : theme.colors.background,
            },
          ]}
          onPress={() => handleFilter(item)}>
          <Text
            style={[
              styles.filterText,
              {
                color:
                  filterSelected === item
                    ? theme.colors.background
                    : theme.colors.text,
              },
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    },
    [handleFilter, filterSelected],
  );

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{backgroundColor: theme.colors.background}}>
        <Appbar.Content
          title="Invoices"
          titleStyle={{
            alignSelf: 'left',
            fontWeight: 700,
            marginLeft: Platform.OS === 'ios' ? 10 : 0,
          }}
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action
          icon="filter-outline"
          onPress={() => SheetManager.show('filter-sheet')}
        />
        <Appbar.Action icon="professional-hexagon" onPress={() => {}} />
      </Appbar.Header>
      <View>
        <FlatList
          data={filters}
          renderItem={({item}) => <RenderFilter item={item} />}
          horizontal
          contentContainerStyle={{
            gap: 6,
            marginHorizontal: 10,
            paddingBottom: 5,
          }}
          bounces={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{height: 110}} />}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        ListEmptyComponent={() => (
          <EmptyComponent
            title="No Invoices yet!"
            subtitle="Tap '+' to create new invoice"
            image={require('../assets/images/invoice.png')}
            style={{marginTop: -30}}
          />
        )}
      />
      <CustomFab
        title="Create your first invoice"
        onPress={() => {}}
        isFloatingShow={data.length === 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterItem: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  filterText: {
    fontSize: 14,
  },
  listContainer: {
    flex: 1,
    margin: 10,
  },
});

export default InvoiceScreen;
