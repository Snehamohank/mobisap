/* eslint-disable react-native/no-inline-styles */ /* eslint-disable prettier/prettier */
import {
  StyleSheet,
  // Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import Categories from '../../components/Home/Categories';
import Wishlistbody from '../../components/Wishlist/Wishlist';
import Cartproduct from '../../components/Cart/Cartproduct';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../utils/Colors';
import {useCart} from '../../store/loginContext';
import { Text } from '../../utils/fontfamily';

const Cartscreen = () => {
  const {cart, dispatch} = useCart();

  const handlePlaceOrder = () => {
    dispatch({type: 'PLACE_ORDER'});
    navigation.navigate('placeorder');
  };
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: Colors.white,
      }}>
      <Header
      // cartname={true}
      />
      {cart && cart.length > 0 ? (
        <>
          {/* <ScrollView style={{}}> */}
          <Cartproduct />
          {/* <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>navigation.navigate('home')}>
              <Text
                style={{
                  color: Colors.violet,
                  fontSize: 14,
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                + Add more cards
              </Text>
            </TouchableOpacity> */}
          {/* </ScrollView> */}
          {/* <View
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
              <Text style={{color: Colors.greytext, fontSize: 10}}>
                Price incl. VAT
              </Text>
              <Text
                style={{color: Colors.black, fontSize: 16, fontWeight: '500'}}>
                25.00 SAR
              </Text>
            </View>
            <TouchableOpacity
              style={{
                height: '65%',
                width: '45%',
                backgroundColor: Colors.green,
                margin: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={handlePlaceOrder}>
              <Text
                style={{
                  color: Colors.white,
                  marginHorizontal: 10,
                  fontSize: 13,
                  fontWeight: '500',
                }}>
                Place Order
              </Text>
            </TouchableOpacity>
          </View> */}
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: Colors.greytext2, fontSize: 12}}>
            No Product in Cart
          </Text>
        </View>
      )}
    </View>
  );
};

export default Cartscreen;

// const styles = StyleSheet.create({});
