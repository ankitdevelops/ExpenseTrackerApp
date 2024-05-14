import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  TextInput,
  Button,
  useTheme,
  Portal,
  Modal,
  RadioButton,
  Divider,
  Icon,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {PaperSelect} from 'react-native-paper-select';

import AppHeader from '../components/AppHeader';

const AddExpense = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const categories = [
    {_id: 1, value: 'Food & Dining'},
    {_id: 2, value: 'Groceries'},
    {_id: 3, value: 'Transportation'},
    {_id: 4, value: 'Utilities'},
    {_id: 5, value: 'Rent/Mortgage'},
  ];

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
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
          <TextInput
            label="Choose Category"
            value={category}
            mode="outlined"
            onFocus={showModal}
            onPress={showModal}
            onChangeText={showModal}
          />

          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              // eslint-disable-next-line react-native/no-inline-styles
              contentContainerStyle={{
                backgroundColor: theme.colors.onSecondary,
                padding: 20,
                marginHorizontal: 20,
                borderRadius: 5,
              }}
              dismissable={false}>
              <View>
                <View
                  style={{
                    marginBottom: 10,
                    marginLeft: 10,
                    fontSize: 15,
                    fontWeight: 40,
                  }}>
                  <Text variant="headlineLarge">Choose Category</Text>
                </View>

                <RadioButton.Group
                  onValueChange={value => setCategory(value)}
                  value={category}>
                  {categories.map(item => (
                    <View key={item._id}>
                      <RadioButton.Item label={item.value} value={item.value} />
                      <Divider />
                    </View>
                  ))}
                  <RadioButton.Item label="Second item" value="second" />
                </RadioButton.Group>
              </View>
              <Divider />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: 10,
                }}>
                <TouchableOpacity onPress={hideModal}>
                  <Text
                    variant="headlineLarge"
                    style={{marginLeft: 10, fontSize: 15, fontWeight: 50}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={hideModal}>
                  <Text
                    variant="headlineLarge"
                    style={{marginLeft: 20, fontSize: 15, fontWeight: 50}}>
                    Done
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </Portal>
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

  modalCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AddExpense;
