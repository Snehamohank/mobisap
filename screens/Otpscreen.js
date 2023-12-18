/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Backgrnd1 from '../assets/images/backgnd1.svg';
import Backgrnd2 from '../assets/images/backgnd2.svg';
import Hello from '../assets/images/Hello.svg';
import Mask from '../assets/images/mask.svg';
import Otp from '../components/Otp';

const Otpscreen = ({navigation}) => {
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <Backgrnd1 width={330} height={100} />
      <View style={{alignSelf: 'center', alignItems: 'center', paddingTop: 10}}>
        <Hello width={130} height={100} />
        <Text style={{color: 'black', fontSize: 17}}>
          Sign in to your account
        </Text>
      </View>
      <View
        style={{
          height: 55,
          width: '80%',
          backgroundColor: 'white',
          marginTop: '30%',
          alignSelf: 'center',
          borderRadius: 40,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 4,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Mask margin={15} />
        <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
          +996
        </Text>
        <TextInput placeholder="  998 765 4321" placeholderTextColor="grey" />
      </View>
      <Otp />
      <View style={{width: '100%', marginTop: '15%', flexDirection: 'row'}}>
        <Backgrnd2 width={140} height={350} />
        <View
          style={{
            width: '100%',
            height: 100,
            position: 'absolute',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 55,
              width: '80%',
              backgroundColor: '#4F008C',
              borderRadius: 40,
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('home')}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 15,
                fontWeight: '500',
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Otpscreen;

const styles = StyleSheet.create({});
