import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconButton, Text, withTheme} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';

const CategoryItem = ({theme, data}) => {
  const route = useRoute();

  return (
    <TouchableOpacity style={styles.categoryItem}>
      <IconButton
        icon="plus"
        size={40}
        containerColor={theme.colors.onPrimary}
      />
      <Text variant="bodyMedium">
        {route.name === 'Home' ? `${data.name.slice(0, 10)}...` : data.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    marginHorizontal: 10,
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
export default withTheme(CategoryItem);
