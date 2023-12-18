/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Logo from '../../assets/images/blklogo.svg';
import Notification from '../../assets/images/notification.svg';
import Cart from '../../assets/images/cart.svg';
import Arrow from '../../assets/images/arrback.svg';
import {useNavigation} from '@react-navigation/native';
import { Text } from '../../utils/fontfamily';

const Header = ({logo, cartname, cart, rightitems, notification}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 55,
        width: '105%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        alignSelf: 'center',
      }}>
      {logo ? (
        <Logo height={40} width={100} margin={5} />
      ) : (
        <TouchableOpacity
          style={{
            height: 30,
            width: 55,
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Arrow height={15} width={15} />
          {cartname ? (
            <Text color={'black'} size={'xl'} family={'h1'}
            >
              {' '}
              Cart
            </Text>
          ) : (
            <Text  color={'black'} size={'xl'} family={'h1'}>
              {' '}
              Back
            </Text>
          )}
        </TouchableOpacity>
      )}
      {rightitems ? (
        <View
          style={{
            height: 45,
            width: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            margin: 10,
          }}>
          {notification ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('coupons')}
              style={{
                height: 45,
                width: 45,
                borderRadius: 25,
                backgroundColor: '#FFFFFF',
              }}>
              <Notification height={40} width={40} />
            </TouchableOpacity>
          ) : (
            ''
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('cart')}
            style={{
              height: 45,
              width: 45,
              borderRadius: 25,
              backgroundColor: '#FFFFFF',
              paddingLeft: notification === false ? 10 : null,
            }}>
            <Cart height={25} width={25} marginTop={5} />
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
