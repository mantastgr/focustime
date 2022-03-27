import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>Dar nieko neįvyko</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Įvykusios veiklos: </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1, //takes up the whole place. this also makes the space scrollable
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.ceramic,
    paddingTop: spacing.sm,
  },

  title: {
    color: colors.ceramic,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
    //textAlign: 'center',
  },
});
