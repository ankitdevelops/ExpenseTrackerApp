/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card, Text, Icon, FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SectionList,
} from 'react-native';
import HistoryItem from '../components/HistoryItem';
import CategoryItem from '../components/CategoryItem';
import {EXPENSE} from '../data/expense';
import {CATEGORIES} from '../data/category';
import AppWrapper from '../components/AppWrapper';

const Home = () => {
  const navigation = useNavigation();
  const renderCategoryItem = ({item}) => (
    <CategoryItem key={item.id} data={item} />
  );
  const renderHistoryItem = ({item}) => (
    <HistoryItem key={item.id} data={item} />
  );

  const renderHeader = () => (
    <Card>
      <View style={styles.historyContainer}>
        <Text variant="bodySmall">
          History <Icon source="history" />
        </Text>
        <TouchableOpacity onPress={() => navigation.push('History')}>
          <Text variant="bodySmall">
            View All <Icon source="arrow-right-drop-circle" />
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );

  return (
    <>
      <AppWrapper>
        <View style={styles.content}>
          <View>
            <Card style={styles.cardPadding}>
              <Text variant="titleLarge">Feb</Text>
              <Text variant="displaySmall">$ 500</Text>
            </Card>
          </View>

          <View>
            <Card>
              <View style={styles.historyContainer}>
                <Text variant="bodySmall">
                  Category <Icon source="clipboard-list" />
                </Text>

                <TouchableOpacity onPress={() => navigation.push('Category')}>
                  <Text variant="bodySmall">
                    View All <Icon source="arrow-right-drop-circle" />
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={CATEGORIES}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                contentContainerStyle={styles.categoryItemContainer}
              />
            </Card>
          </View>

          <View style={{flex: 1}}>
            <Card style={{flex: 0.8}}>
              <SectionList
                sections={[{title: 'History', data: EXPENSE}]}
                renderItem={renderHistoryItem}
                keyExtractor={item => item.id}
                renderSectionHeader={renderHeader}
                stickySectionHeadersEnabled={true}
                contentContainerStyle={{marginBottom: 10}}
              />
            </Card>
          </View>
        </View>
      </AppWrapper>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.push('AddExpense')}
      />
    </>
  );
};
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
  cardPadding: {
    padding: 15,
  },

  categoryItemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },

  historyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 60,
    padding: 5,
  },
});

export default Home;
