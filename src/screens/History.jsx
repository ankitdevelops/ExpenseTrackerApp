import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  SectionList,
} from 'react-native';
import React from 'react';
import AppHeader from '../components/AppHeader';
import {
  Card,
  Divider,
  Searchbar,
  Text,
  Chip,
  Portal,
  useTheme,
  Modal,
  TextInput,
  RadioButton,
} from 'react-native-paper';
import HistoryItem from '../components/HistoryItem';
import {DatePickerModal} from 'react-native-paper-dates';
import {format} from 'date-fns';
import {EXPENSE} from '../data/expense';
import BottomNavigationBar from '../components/BottomNavigation';
import {CATEGORIES} from '../data/category';

const {height} = Dimensions.get('window');
const History = ({}) => {
  const dynamicHeight = height;

  const theme = useTheme();

  const [visible, setVisible] = React.useState(false);
  const [visibleCategory, setVisibleCategory] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [openStart, setOpenStart] = React.useState(false);
  const [openEnd, setOpenEnd] = React.useState(false);
  const [startDate, setStartDate] = React.useState(undefined);
  const [endDate, setEndDate] = React.useState(undefined);
  const [formattedStartDate, setFormattedStartDate] = React.useState('');
  const [formattedEndDate, setFormattedEndDate] = React.useState('');
  const [category, setCategory] = React.useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onDismissStart = React.useCallback(() => {
    setOpenStart(false);
  }, [setOpenStart]);

  const onConfirmStart = React.useCallback(
    params => {
      setOpenStart(false);
      setStartDate(params.date);
      setFormattedStartDate(format(params.date, 'MM/dd/yyyy'));
    },
    [setOpenStart, setStartDate, setFormattedStartDate],
  );

  const onDismissEnd = React.useCallback(() => {
    setOpenEnd(false);
  }, [setOpenEnd]);

  const onConfirmEnd = React.useCallback(
    params => {
      setOpenEnd(false);
      setEndDate(params.date);
      setFormattedEndDate(format(params.date, 'MM/dd/yyyy'));
    },
    [setOpenEnd, setEndDate, setFormattedEndDate],
  );

  const renderItem = ({item}) => (
    <View>
      <HistoryItem data={item} />
    </View>
  );

  const renderHeader = () => (
    <Card>
      <View style={styles.historyContainer}>
        <Chip icon="progress-download" onPress={() => console.log('Pressed')}>
          Download
        </Chip>
        <Chip icon="filter-variant" onPress={() => showModal()}>
          Filters
        </Chip>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <AppHeader title="History" />
      <View style={styles.content}>
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            theme={{roundness: 1}}
          />
        </View>
        <View style={[styles.categoryContainer]}>
          <Card style={styles.card}>
            <SectionList
              sections={[{title: 'History', data: EXPENSE}]}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              renderSectionHeader={renderHeader}
              stickySectionHeadersEnabled={true}
            />
          </Card>
        </View>
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
              <View>
                <Text variant="bodyLarge">Filters</Text>
              </View>
            </View>
            <Divider style={styles.topMargin} />
            <View style={styles.topMargin}>
              <TouchableOpacity onPress={() => setOpenStart(true)}>
                <TextInput
                  label="Start Date"
                  value={formattedStartDate}
                  mode="outlined"
                  editable={false}
                />
              </TouchableOpacity>
              <DatePickerModal
                locale="en"
                mode="single"
                visible={openStart}
                onDismiss={onDismissStart}
                date={startDate}
                onConfirm={onConfirmStart}
              />
            </View>
            <View style={styles.topMargin}>
              <TouchableOpacity onPress={() => setOpenEnd(true)}>
                <TextInput
                  label="End Date"
                  value={formattedEndDate}
                  mode="outlined"
                  editable={false}
                />
              </TouchableOpacity>
              <DatePickerModal
                locale="en"
                mode="single"
                visible={openEnd}
                onDismiss={onDismissEnd}
                date={endDate}
                onConfirm={onConfirmEnd}
              />
            </View>
            <View style={styles.topMargin}>
              <TouchableOpacity
                onPress={() => setVisibleCategory(!visibleCategory)}>
                <TextInput
                  label="Choose Category"
                  value={category}
                  mode="outlined"
                  editable={false}
                />
              </TouchableOpacity>

              <Portal>
                <Modal
                  visible={visibleCategory}
                  onDismiss={() => setVisibleCategory(!visibleCategory)}
                  // eslint-disable-next-line react-native/no-inline-styles
                  contentContainerStyle={{
                    backgroundColor: theme.colors.onSecondary,
                    padding: 20,
                    marginHorizontal: 20,
                    borderRadius: 5,
                  }}
                  dismissable={false}>
                  <ScrollView style={{height: dynamicHeight * 0.5}}>
                    <View>
                      <Text variant="bodyLarge">Choose Category</Text>
                    </View>
                    <Divider style={styles.topMargin} />
                    <RadioButton.Group
                      onValueChange={value => setCategory(value)}
                      value={category}>
                      {CATEGORIES.map(item => (
                        <View key={item.id}>
                          <RadioButton.Item
                            label={item.name}
                            value={item.name}
                          />
                          <Divider />
                        </View>
                      ))}
                      <RadioButton.Item label="Second item" value="second" />
                    </RadioButton.Group>
                  </ScrollView>
                  <Divider />
                  <View style={styles.modalFooterBtn}>
                    <TouchableOpacity
                      onPress={() => setVisibleCategory(!visibleCategory)}>
                      <Text
                        variant="bodyLarge"
                        style={styles.modalFooterBtnText}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setVisibleCategory(!visibleCategory)}>
                      <Text
                        variant="bodyLarge"
                        style={styles.modalFooterBtnText}>
                        Done
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </Portal>
            </View>
            <View style={styles.modalFooterBtn}>
              <TouchableOpacity onPress={hideModal}>
                <Text variant="bodyLarge">Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={hideModal}>
                <Text variant="bodyLarge" style={styles.modalFooterBtnText}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>
      </View>
      <BottomNavigationBar />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 5,
    gap: 5,
  },
  topMargin: {
    marginBottom: 10,
  },
  categoryContainer: {
    flex: 0.85,
  },
  card: {
    flex: 1,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },

  historyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  modalFooterBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  modalFooterBtnText: {marginLeft: 10},
});
