import React from 'react';
import {Card, Text, Icon, FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HistoryItem from '../components/HistoryItem';
import CategoryItem from '../components/CategoryItem';
import AppHeader from '../components/AppHeader';
import {EXPENSE} from '../data/expense';
import {CATEGORIES} from '../data/category';
import BottomNavigationBar from '../components/BottomNavigation';

const Home = () => {
  const navigation = useNavigation();
  const {height} = Dimensions.get('window');
  const dynamicHeight = height * 0.4;

  return (
    <>
      <AppHeader />

      <View style={[styles.bottomMargin]}>
        <View style={[styles.horizontalPadding, styles.topMargin]}>
          <Card style={styles.cardPadding}>
            <Text variant="titleLarge">Feb</Text>
            <Text variant="displaySmall">$ 500</Text>
          </Card>
        </View>
        <View style={[styles.horizontalPadding, styles.topMargin]}>
          <Card style={[styles.cardPadding]}>
            <View style={styles.historyContainer}>
              <Text variant="bodySmall">
                Category <Icon source="clipboard-list" />
              </Text>
              <Text variant="bodySmall">
                View All <Icon source="arrow-right-drop-circle" />
              </Text>
            </View>
            <ScrollView style={styles.categoryItemContainer} horizontal={true}>
              {CATEGORIES.map(item => (
                <CategoryItem key={item.id} data={item} />
              ))}
            </ScrollView>
          </Card>
        </View>

        <View style={[styles.horizontalPadding, styles.topMargin]}>
          <Card style={[styles.cardPadding]}>
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
            <ScrollView
              style={[styles.historyItemContainer, {maxHeight: dynamicHeight}]}>
              {EXPENSE.slice(0, 8).map(item => (
                <HistoryItem key={item.id} data={item} />
              ))}
            </ScrollView>
          </Card>
        </View>
      </View>

      <BottomNavigationBar />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.push('AddExpense')}
      />
    </>
  );
};
const styles = StyleSheet.create({
  horizontalPadding: {
    paddingHorizontal: 5,
  },
  topMargin: {
    marginTop: 10,
  },
  bottomMargin: {
    marginBottom: 50,
  },
  cardPadding: {
    padding: 15,
  },
  historyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 60,
    padding: 5,
  },

  categoryItemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  historyItemContainer: {
    // maxHeight: 400,
  },
});

export default Home;
