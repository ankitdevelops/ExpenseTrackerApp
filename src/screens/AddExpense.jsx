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
    selectedList: [],
    error: '',
  });
  const categories = [
    {_id: 1, value: 'Food & Dining'},
    {_id: 2, value: 'Groceries'},
    {_id: 3, value: 'Transportation'},
    {_id: 4, value: 'Utilities'},
    {_id: 5, value: 'Rent/Mortgage'},
  ];
  return (
    <View>
      <AppHeader title="Add Expense" />
      <View style={styles.container}>
        <View style={styles.inputFieldMargin}>
          <TextInput
            label="Expense Name"
            value={name}
            onChangeText={name => setName(name)}
            mode="outlined"
          />
        </View>
        <View style={styles.inputFieldMargin}>
          <TextInput
            label="Amount"
            value={amount}
            onChangeText={amount => setAmount(amount)}
            mode="outlined"
          />
        </View>
        <View style={styles.inputFieldMargin}>
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
            arrayList={[...categories]}
            selectedArrayList={category.selectedList}
            errorText={category.error}
            multiEnable={false}
            hideSearchBox={true}
            textInputMode="outlined"
            textInputOutlineStyle={{borderColor: theme.colors.outline}}
          />
        </View>
        <View style={styles.inputFieldMargin}>
          <Button
            mode="contained"
            onPress={() => navigation.push('Home')}
            textColor="#DAE0E2"
            buttonColor="#2F363F"
            theme={{roundness: 1}}
            compact={false}>
            <Text variant="titleLarge" style={styles.buttonText}>
              Add Now
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  inputFieldMargin: {
    marginTop: 10,
  },
});

export default AddExpense;

1647646746;
