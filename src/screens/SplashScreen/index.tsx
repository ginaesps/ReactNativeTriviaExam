/* eslint-disable prettier/prettier */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

const image = require('../../assets/images/leprechawn.jpg');

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const {navigation} = props;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.Container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.Image} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#284B63',
    flex: 1,
  },
  Image: {
    flex: 1,
  },
});

export default Component;
