/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  // Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import PaymentCard from './PaymentCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import { Text } from '../../utils/fontfamily';

const Payment = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {price} = route.params;
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <Header cartname={true} />
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: '500',
          padding: 10,
          paddingHorizontal: 15,
        }}>
        Payment Method
      </Text>
      <ScrollView>
        <PaymentCard />
      </ScrollView>
      <View
        style={{
          bottom: 0,
          height: 65,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          paddingHorizontal: 10,
        }}>
        <View style={{height: '100%', width: '40%', margin: 10}}>
          <Text style={{color: 'grey', fontSize: 10}}>Price incl. VAT</Text>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
            {price} SAR{' '}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: '65%',
            width: '45%',
            backgroundColor: '#15AF70',
            margin: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('success', {price})}>
          <Text
            style={{
              color: 'white',
              marginHorizontal: 10,
              fontSize: 13,
              fontWeight: '500',
            }}>
            Confirm payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

// const styles = StyleSheet.create({});
