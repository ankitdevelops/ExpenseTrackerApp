import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Text} from 'react-native-paper';

const HistoryItem = ({data}) => {
  return (
    <View style={styles.historyItemContainer}>
      <View style={styles.historyItemInfoContainer}>
        <Icon source="arrow-right-drop-circle" size={32} />
        <View style={styles.historyItemInfo}>
          <Text variant="bodyLarge">{data.title}</Text>
          <Text variant="bodyMedium">{data.category}</Text>
        </View>
      </View>
      <View>
        <Text variant="titleLarge">$ {data.amount}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  historyItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  historyItemInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyItemInfo: {
    marginLeft: 5,
  },
});
export default HistoryItem;
