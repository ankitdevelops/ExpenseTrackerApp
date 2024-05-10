import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, Text, withTheme} from 'react-native-paper';

const CategoryItem = ({theme}) => {
  return (
    <View style={styles.categoryItem}>
      <IconButton
        icon="plus"
        size={40}
        containerColor={theme.colors.onPrimary}
      />
      <Text variant="bodyMedium">Category 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    marginHorizontal: 10,
  },
});
export default withTheme(CategoryItem);
