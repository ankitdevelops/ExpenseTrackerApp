import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Text} from 'react-native-paper';

const HistoryItem = () => {
  return (
    <View style={styles.historyItemContainer}>
      <View style={styles.historyItemInfoContainer}>
        <Icon source="arrow-right-drop-circle" size={32} />
        <View style={styles.historyItemInfo}>
          <Text variant="bodyLarge">Rent</Text>
          <Text variant="bodyMedium">Bus Fare</Text>
        </View>
      </View>
      <View>
        <Text variant="titleLarge">$50</Text>
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
