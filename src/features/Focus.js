import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="Ką veikti ?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 0.2, not having flex set the container will be set to auto and will take space as needed
  },
  button: {
    justifyContent: 'center',
  },

  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },

  inputContainer: {
    padding: spacing.lg,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
