/* eslint-disable prettier/prettier */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../components/title';
import useInput from '../../hooks/useInput';
import {LoginInterface} from '../../interfaces/interface';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const {navigation} = props;
  const {name, onChange} = useInput<LoginInterface>({
    name: '',
  });

  useEffect(() => {
    console.log(`Name -> ${name}`);
  });

  const onLogin = () => {
    if (name==='') {
      ToastAndroid.show('Ingresa tu nombre', 1000);
      return;
    }
    navigation.navigate('Question', name);
  };
  console.log('loginscrenn');
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Title />
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/images/LuckyCoin.png')}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <View style={styles.NameContainer}>
          <TextInput
            style={styles.NameInput}
            placeholder="Enter your name"
            placeholderTextColor="#808080"
            value={name as string}
            onChangeText={value => onChange('name', value)}
          />
        </View>
        <TouchableOpacity
          // onPress={() => navigation.navigate('Results')}
          style={styles.button}
          onPress={onLogin}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
        <View style={styles.CreatorContainer}>
          <View style={styles.CreatorPlace}>
            <Image
              style={styles.CreatorImg}
              source={require('../../assets/images/Regina.jpeg')}
              resizeMode="contain"
            />
            <Text style={styles.CreatorText}>Regina Espinosa Gonzalez</Text>
            <Text style={styles.CreatorText}>20197791</Text>
          </View>
          <View style={styles.CreatorPlace}>
            <Image
              style={styles.CreatorImg}
              source={require('../../assets/images/Joshua.jpeg')}
              resizeMode="contain"
            />
            <Text style={styles.CreatorText}>Joshua Craig Montiel</Text>
            <Text style={styles.CreatorText}>20154378</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Component;

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
  },
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#808080',
    alignItems: 'center',
    alignContent: 'center',
  },
  banner: {
    height: 280,
    width: 280,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 40,
  },
  NameContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 15,
    marginTop: 15,
    width: '100%',
  },
  NameInput: {
    paddingStart: 30,
    paddingEnd: 30,
    fontSize: 20,
    color: 'black',
  },
  button: {
    width: '100%',
    backgroundColor: '#284B63',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  CreatorContainer: {
    flexDirection: 'row',
    backgroundColor: '#284B63',
    borderRadius: 16,
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 15,
  },
  CreatorPlace: {
    alignItems: 'center',
    alignContent: 'center',
    margin: 15,
  },
  CreatorImg: {
    height: 100,
    width: 100,
    borderRadius: 59,
    marginBottom: 10,
  },
  CreatorText: {
    color: '#D9D9D9',
    fontSize: 15,
  },
});
