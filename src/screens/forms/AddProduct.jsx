import {View, Text, Platform, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/form/CustomInput';
import {Appbar} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {goBack} from '../../utils/NavigationUtil';

const AddProduct = () => {
  const theme = useTheme();
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [unit, setUnit] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (name.length === 0) {
      setError('Please enter item name!');
      return;
    }
  };

  const num = 10;
  return (
    <View>
      <Appbar.Header style={{backgroundColor: theme.colors.background}}>
        <Appbar.BackAction onPress={() => goBack()} />
        <Appbar.Content title="Add Product" titleStyle={styles.headerContent} />
        <Appbar.Action icon="check" onPress={handleSave} />
      </Appbar.Header>
      <View style={{gap: 10}}>
        <View
          style={[
            styles.formContainer,
            {borderColor: theme.colors.placeholder},
          ]}>
          <CustomInput
            label="Item Name *"
            error={error}
            value={name}
            setValue={setName}
          />
          <CustomInput
            label="Item Price"
            defaultValue={`${num.toLocaleString('en', {
              style: 'currency',
              currency: 'INR',
            })}`}
            value={price}
            setValue={setPrice}
          />
          <CustomInput
            label="Unit of Measure"
            value={unit}
            setValue={setUnit}
          />
        </View>
        <View
          style={[
            styles.formContainer,
            {borderColor: theme.colors.placeholder},
          ]}>
          <CustomInput
            label="Item Description"
            multiline
            numberOfLines={5}
            style={{minHeight: 150}}
            maxLength={500}
            limit={500}
            value={description}
            setValue={setDescription}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    alignSelf: 'left',
    fontWeight: 700,
    marginLeft: Platform.OS === 'ios' ? 10 : 0,
  },
  formContainer: {
    marginHorizontal: 10,
    padding: 12,
    borderRadius: 12,
    borderWidth: 0.5,
    gap: 5,
  },
});

export default AddProduct;
