/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suerte en tu camino</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#D9D9D9',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
});
