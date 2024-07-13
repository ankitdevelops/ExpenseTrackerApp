import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {
  TextInput,
  Button,
  useTheme,
  Portal,
  Modal,
  RadioButton,
  Divider,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import AppHeader from '../components/AppHeader';
import {CATEGORIES} from '../data/category';
import useAuthContext from '../store/hooks/useAuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddExpense = () => {
  const screenHeight = Dimensions.get('window').height;
  const theme = useTheme();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [visible, setVisible] = React.useState(false);
  const {accessToken} = useAuthContext();
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('ACCESS_TOKEN');
      if (value !== null) {
        // We have data!!
        console.log('>>>', value);
      }
    } catch (error) {
      // Error retrieving data
      console.error('Error retrieving access token: ', error);
    }
  };
  _retrieveData();
  const showModal = () => {
    Keyboard.dismiss();
    setVisible(true);
  };
  const hideModal = () => setVisible(false);

  return (
    <View>
      <AppHeader title="Add Expense" />
      <View style={styles.container}>
        <View style={styles.inputFieldMargin}>
          <TextInput
            label="Expense Name"
            value={name}
            onChangeText={setName}
            mode="outlined"
          />
        </View>
        <View style={styles.inputFieldMargin}>
          <TextInput
            label="Amount"
            value={amount}
            onChangeText={setAmount}
            mode="outlined"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputFieldMargin}>
          <TouchableOpacity onPress={showModal}>
            <TextInput
              label="Choose Category"
              value={category}
              mode="outlined"
              editable={false}
            />
          </TouchableOpacity>

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
                <ScrollView style={{height: screenHeight * 0.5}}>
                  <View>
                    <Text variant="headlineLarge">Choose Category</Text>
                  </View>

                  <RadioButton.Group
                    onValueChange={value => setCategory(value)}
                    value={category}>
                    {CATEGORIES.map(item => (
                      <View key={item.id}>
                        <RadioButton.Item label={item.name} value={item.name} />
                        <Divider />
                      </View>
                    ))}
                  </RadioButton.Group>
                </ScrollView>
              </View>
              <Divider />
              <View style={styles.modalFooterBtn}>
                <TouchableOpacity onPress={hideModal}>
                  <Text style={styles.modalFooterBtnText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={hideModal}>
                  <Text
                    variant="headlineLarge"
                    style={styles.modalFooterBtnText}>
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
  modalFooterBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  modalFooterBtnText: {marginLeft: 10, fontSize: 15},
  scrollViewContent: {
    height: 400,
  },
});

export default AddExpense;
