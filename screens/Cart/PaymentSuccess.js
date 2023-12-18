/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Applied from '../../assets/images/applied.svg';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../utils/Colors';
import { Text } from '../../utils/fontfamily';

const PaymentSuccess = () => {
  const navigation = useNavigation();
  // const route =useRoute();
  // const {price} = route.params;

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Applied height={112} width={112} />
      <Text
        style={{
          color: Colors.black,
          marginVertical: 15,
          fontSize: 20,
          fontWeight: '500',
        }}>
        Payment Successful!
      </Text>
      <Text style={{color: '#AAAAAA', fontSize: 13, fontWeight: '500'}}>
        Thank you for your purchase.
      </Text>
      <View style={{marginTop: 60, top: 150, alignItems: 'center'}}>
        <TouchableOpacity 
        style={{
            height: 45,
            width: '40%',
            backgroundColor: Colors.white,
            alignSelf: 'center',
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            alignItems: 'center',
            marginVertical:10,
          }}
        onPress={() => navigation.navigate('History')}>
          <Text
            style={{
              color: Colors.green,
              fontSize: 13,
              fontWeight: '500',
              // marginVertical: 15,
            }}>
            View order.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{padding:10}}>
          <Text style={{color: Colors.black, fontSize: 13, fontWeight: '500'}}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({});
