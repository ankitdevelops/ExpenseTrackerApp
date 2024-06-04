import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {Searchbar, Card} from 'react-native-paper';
import CategoryItem from '../components/CategoryItem';
import {CATEGORIES} from '../data/category';
import AppWrapper from '../components/AppWrapper';
const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth / 3;
const Category = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <CategoryItem data={item} />
    </View>
  );

  return (
    <AppWrapper>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          theme={{roundness: 1}}
        />
      </View>
      <View style={styles.categoryContainer}>
        <Card>
          <FlatList
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
          />
        </Card>
      </View>
    </AppWrapper>
  );
};

export default Category;

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
    flex: 1,
    marginBottom: 5,
  },
  itemContainer: {
    flex: 1,
    width: itemWidth,
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    alignContent: 'center',
    marginVertical: 15,
  },
});
