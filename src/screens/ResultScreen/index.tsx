/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Component = () => {
  return (
    <View style={styles.background}>
      <ImageBackground
        source={require('../../assets/images/fondoTrebol.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Hola` `</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Tuviste` ` aciertos</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>TRY AGAIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Component;

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    height: '70%',
    width: '80%',
    backgroundColor: '#ffffff80',
    borderRadius: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#353535',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 35,
    backgroundColor: '#fffff',
  },
  textContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    alignItems: 'center',
    alignContent: 'center',
    height: 70,
    justifyContent: 'center',
    width: '90%',
    position: 'absolute',
    top: 190,
  },
  text: {
    paddingStart: 30,
    paddingEnd: 30,
    fontSize: 20,
    color: 'black',
  },
  button: {
    width: '60%',
    backgroundColor: '#3C6E71',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    alignContent: 'center',
    position: 'absolute',
    bottom: 40,
    left: 80,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
