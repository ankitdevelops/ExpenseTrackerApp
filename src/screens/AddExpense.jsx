import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {PaperSelect} from 'react-native-paper-select';

import AppHeader from '../components/AppHeader';

const AddExpense = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState({
    value: '',
    list: [
      {_id: 1, value: 'Food & Dining'},
      {_id: 2, value: 'Groceries'},
      {_id: 3, value: 'Transportation'},
      {_id: 4, value: 'Utilities'},
      {_id: 5, value: 'Rent/Mortgage'},
      {_id: 6, value: 'Insurance'},
      {_id: 7, value: 'Entertainment'},
      {_id: 8, value: 'Shopping'},
      {_id: 9, value: 'Health & Fitness'},
      {_id: 10, value: 'Education'},
      {_id: 11, value: 'Travel'},
      {_id: 12, value: 'Gifts & Donations'},
      {_id: 13, value: 'Personal Care'},
      {_id: 14, value: 'Pet Expenses'},
      {_id: 15, value: 'Taxes'},
      {_id: 16, value: 'Subscriptions'},
      {_id: 17, value: 'Home Maintenance'},
      {_id: 18, value: 'Miscellaneous'},
    ],
    selectedList: [],
    error: '',
  });

  console.log([...category.list]);

  return (
    <View>
      <AppHeader title="Add Expense" />
      <View>
        <TextInput
          label="Expense Name"
          value={name}
          onChangeText={name => setName(name)}
          mode="outlined"
        />
      </View>
      <View style={styles.colMargin}>
        <TextInput
          label="Amount"
          value={amount}
          onChangeText={amount => setAmount(amount)}
          mode="outlined"
        />
      </View>
      <PaperSelect
        label="Select Category"
        value={category.value}
        onSelection={value => {
          setCategory({
            ...category,
            value: value.text,
            selectedList: value.selectedList,
            error: '',
          });
        }}
        arrayList={[...category.list]}
        selectedArrayList={category.selectedList}
        errorText={category.error}
        multiEnable={false}
        hideSearchBox={true}
        textInputMode="outlined"
        textInputOutlineStyle={{borderColor: theme.colors.outline}}
      />
      <View>
        <Button
          mode="contained"
          onPress={() => navigation.push('Home')}
          textColor="#DAE0E2"
          buttonColor="#2F363F"
          theme={{roundness: 1}}
          compact={false}>
          <Text variant="titleMedium" style={styles.buttonText}>
            SignUp Now
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddExpense;

1647646746;
