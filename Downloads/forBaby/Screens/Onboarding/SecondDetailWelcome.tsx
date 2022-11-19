import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function SecondDetailWelcome() {
  return (
    <View style={styles.container}>
      <Text>SecondDetailWelcome</Text>
    </View>
  );
}
