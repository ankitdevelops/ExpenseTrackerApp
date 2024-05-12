import React from 'react';
import {
  Appbar,
  Card,
  Text,
  List,
  Icon,
  FAB,
  IconButton,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, ScrollView} from 'react-native';
import HistoryItem from '../components/HistoryItem';
import CategoryItem from '../components/CategoryItem';
import AppHeader from '../components/AppHeader';

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <AppHeader />
      <ScrollView>
        <View>
          <View style={[styles.horizontalPadding, styles.topMargin]}>
            <Card style={styles.cardPadding}>
              <Text variant="titleLarge">Feb</Text>
              <Text variant="displaySmall">$ 500</Text>
            </Card>
          </View>

          {/* category container */}
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
              <ScrollView
                style={styles.categoryItemContainer}
                horizontal={true}>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
              </ScrollView>
            </Card>
          </View>
          {/* history container */}
          <View
            style={[
              styles.horizontalPadding,
              styles.topMargin,
              styles.bottomMargin,
            ]}>
            <Card style={[styles.cardPadding]}>
              <View style={styles.historyContainer}>
                <Text variant="bodySmall">
                  History <Icon source="history" />
                </Text>
                <Text variant="bodySmall">
                  View All <Icon source="arrow-right-drop-circle" />
                </Text>
              </View>
              <View>
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
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
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

  categoryItemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});

export default Home;
