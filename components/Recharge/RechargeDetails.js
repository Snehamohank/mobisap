/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {
  // StyleSheet,
  // Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Heart from '../../assets/images/heart.svg';
import Heartatv from '../../assets/images/heartred.svg';
import Download from '../../assets/images/download.svg';
import MobilyNet from './MobilyNet';
import Mobily from './Mobily';
import {useCart} from '../../store/loginContext';
import Cart from '../../assets/images/whitecart.svg';
import Mobilyimg from '../../assets/images/mob.png';
import Mobiltynetimg from '../../assets/images/mobnet.png';
import Colors from '../../utils/Colors';
import { Text } from '../../utils/fontfamily';

const RechargeDetails = () => {
  const [active, setActive] = useState(0);
  const [like, setlike] = useState(false);
  const route = useRoute();
  const {product} = route.params;
  const {dispatch} = useCart();

  const addToCart = () => {
    console.log('Adding to cart:', product);
    dispatch({type: 'ADD_TO_CART', payload: product});
  };
  const addToWishlist = () => {
    console.log('Adding', product);
    dispatch({type: 'WISH_LIST', payload: product});
    setlike(true);
  };

  return (
    <View
      style={{width: '100%', height: '100%', backgroundColor: Colors.white}}>
      <ScrollView style={{paddingHorizontal: 15}}>
        <View
          style={{
            height: 40,
            width: '96%',
            alignSelf: 'center',
            paddingTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 17}}>
            {product.name} Recharge
          </Text>
          <View
            style={{
              height: 35,
              width: 48,
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <Download height={18} width={18} marginRight={6} />
            </TouchableOpacity>
            <TouchableOpacity onPress={addToWishlist}>
              {like ? (
                <Heartatv height={25} width={25} />
              ) : (
                <Heart height={20} width={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={{
            height: 150,
            width: '94%',
            resizeMode: 'stretch',
            alignSelf: 'center',
            marginTop: 8,
            borderRadius: 10,
          }}
          source={product.image1}
        />
        <View
          style={{
            height: 10,
            width: '96%',
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: '10%',
            elevation: 2,
            // shadowColor: 'black',
            shadowOffset: {width: 3, height: -13},
            shadowOpacity: 1.0,
          }}>
          {active == 0 ? (
            <ImageBackground
              source={Mobilyimg}
              style={{
                height: 45,
                width: '100%',
                alignSelf: 'center',
                resizeMode: 'cover',
                justifyContent: 'center',
                borderRadius: 20,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  height: 35,
                  width: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setActive(1)}>
                <Text
                  style={{
                    color: active === 0 ? '#4F008C' : '#D1CECE',
                    marginTop: 8,
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  {product.name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 35,
                  width: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setActive(1)}>
                <Text
                  style={{
                    color: active === 1 ? '#4F008C' : '#D1CECE',
                    marginTop: 8,
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  {product.name} Net
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          ) : (
            ''
          )}
          {active == 1 ? (
            <ImageBackground
              source={Mobiltynetimg}
              style={{
                height: 45,
                width: '100%',
                alignSelf: 'center',
                resizeMode: 'cover',
                flexDirection: 'row',
                borderRadius: 20,
              }}>
              <TouchableOpacity
                style={{
                  height: 35,
                  width: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setActive(0)}>
                <Text
                  style={{
                    color: active === 0 ? '#4F008C' : '#D1CECE',
                    marginTop: 8,
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  {product.name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 35,
                  width: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setActive(1)}>
                <Text
                  style={{
                    color: active === 1 ? '#4F008C' : '#D1CECE',
                    marginTop: 8,
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  {product.name} Net
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          ) : (
            ''
          )}
        </View>
        <View
          style={{
            height: 'auto',
            width: '96%',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            elevation: 5,
            shadowColor: '#AAAAAA',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0,
            shadowRadius: 4,
            marginTop: '5%',
            marginBottom: 10,
          }}>
          {active === 0 ? <Mobily /> : ''}
          {active === 1 ? <MobilyNet /> : ''}
        </View>
      </ScrollView>
      <View
        style={{
          bottom: 0,
          height: '14%',
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          elevation: 6,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.4,
          paddingHorizontal: 10,
        }}>
        <View style={{height: '100%', width: '40%', margin: 10}}>
          <Text style={{color: 'grey', fontSize: 10}}>Price incl. VAT</Text>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
            {product.charge}.00 SAR
          </Text>
        </View>
        <TouchableOpacity
          onPress={addToCart}
          style={{
            height: 45,
            width: '45%',
            bottom: 5,
            backgroundColor: '#4F008C',
            margin: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Cart height={18} width={20} />
          <Text
            style={{
              color: 'white',
              marginHorizontal: 5,
              fontSize: 13,
              fontWeight: '500',
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RechargeDetails;
