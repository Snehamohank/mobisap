/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  // StyleSheet,
  // Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import Applied from '../../assets/images/applied.svg';
import Cross from '../../assets/images/cross.svg';
import Offer from '../../assets/images/offericon.svg';
import Arrow from '../../assets/images/right.svg';
import {useNavigation, useRoute} from '@react-navigation/native';
import Colors from '../../utils/Colors';
import {useCart} from '../../store/loginContext';
import { Text } from '../../utils/fontfamily';

const PlaceorderCard = () => {
  const {orderedItems} = useCart();
  const navigation = useNavigation();
  const route = useRoute();
  const {count, totalPrice} = route.params;
  return (
    <>
      <Text
        style={{
          margin: 10,
          fontSize: 16,
          fontWeight: '500',
          color: Colors.black,
          paddingHorizontal: 18,
        }}>
        Selected Cards
      </Text>
      {/* <FlatList
                data={orderedItems}
                renderItem={({ item }) => ( */}
      <ScrollView>
        {orderedItems.map(item => (
          <View
            style={{
              height: 100,
              width: '90%',
              backgroundColor: Colors.white,
              marginTop: 5,
              alignSelf: 'center',
              elevation: 5,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.2,
              shadowRadius: 4,
              borderRadius: 10,
              flexDirection: 'row',
              marginBottom: 6,
              paddingHorizontal: 10,
            }}>
            <Image
              style={{
                height: 75,
                width: 75,
                resizeMode: 'stretch',
                alignSelf: 'center',
                borderRadius: 10,
              }}
              source={item.image}
            />
            <View
              style={{
                height: '80%',
                width: '60%',
                alignSelf: 'center',
                marginHorizontal: 10,
              }}>
              <Text
                style={{color: Colors.black, fontWeight: '500', fontSize: 13}}>
                {item.name2} Card SR 20
              </Text>
              <Text
                style={{
                  color: '#AFA9A9',
                  fontWeight: '500',
                  fontSize: 10,
                  marginTop: 5,
                }}>
                price
              </Text>
              <View
                style={{
                  height: 30,
                  width: '112%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 13,
                    fontWeight: '500',
                  }}>
                  {count[item.id] * item.charge || item.charge}.0 SAR
                </Text>
                <View
                  style={{
                    height: '90%',
                    width: '30%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 13,
                      fontWeight: '500',
                      marginTop: '2%',
                    }}>
                    Qty: {count[item.id] || 1}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
        {/* )}
            /> */}
        <Text
          style={{
            color: Colors.black,
            margin: 5,
            fontSize: 16,
            fontWeight: '500',
            paddingHorizontal: 20,
          }}>
          Promo Code
        </Text>
        <View
          style={{
            height: 110,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
            marginBottom: 6,
            marginTop: 5,
          }}>
          <View
            style={{
              height: 45,
              width: '95%',
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: Colors.green,
              borderRadius: 10,
              marginTop: '5%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Applied height={20} width={20} margin={10} />
              {/* <Text style={{ color: Colors.black, marginTop: 10,fontSize:12}}>NEWFTCRT50</Text> */}
              <TextInput placeholder='NEWFTCRT50' placeholderTextColor={Colors.greytext2} style={{color:'black'}}/>
            </View>
            <Cross height={20} width={20} margin={10} />
          </View>
          <Text
            style={{
              color: Colors.green,
              marginTop: 10,
              fontSize: 12,
              fontWeight: '500',
              marginLeft: 15,
            }}>
            Promo code applied successfully
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: Colors.white,
            borderRadius: 10,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
            marginBottom: 6,
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Offer height={25} width={25} margin={10} />
            <Text
              style={{
                color: Colors.green,
                marginTop: 15,
                fontSize: 12,
                fontWeight: '500',
              }}>
              View Coupons and offers available
            </Text>
          </View>
          <Arrow height={10} width={10} marginTop={18} marginRight={10} />
        </TouchableOpacity>
        <View
          style={{
            height: 150,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: Colors.white,
            borderRadius: 10,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
            marginBottom: 16,
            marginTop: 5,
          }}>
          <Text
            style={{
              color: Colors.black,
              margin: 10,
              fontSize: 16,
              fontWeight: '500',
            }}>
            Order Summary
          </Text>
          <View
            style={{
              height: '18%',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <Text
              style={{color: Colors.black, fontSize: 12, fontWeight: '500'}}>
              Subtotal
            </Text>
            <Text
              style={{color: Colors.black, fontSize: 14, fontWeight: '500'}}>
              {totalPrice}.0 SAR
            </Text>
          </View>
          <View
            style={{
              height: '18%',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <Text
              style={{color: Colors.green, fontSize: 12, fontWeight: '500'}}>
              Coupon Discount
            </Text>
            <Text
              style={{color: Colors.green, fontSize: 14, fontWeight: '500'}}>
              10.0 SAR
            </Text>
          </View>
          <View
            style={{
              height: '18%',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <Text
              style={{color: Colors.black, fontSize: 12, fontWeight: '500'}}>
              Total
            </Text>
            <Text
              style={{color: Colors.black, fontSize: 14, fontWeight: '500'}}>
              {totalPrice - 10.0}.0 SAR
            </Text>
          </View>
          <Text
            style={{
              color: '#AFA9A9',
              marginTop: 2,
              fontSize: 12,
              fontWeight: '500',
              paddingHorizontal: 15,
            }}>
            Prices include 15% VAT
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          bottom: 0,
          height: 65,
          width: '100%',
          backgroundColor: Colors.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          elevation: 5,
          shadowColor: Colors.white,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          paddingHorizontal: 10,
        }}>
        <View style={{height: '100%', width: '40%', margin: 10}}>
          <Text style={{color: 'grey', fontSize: 10}}>Price incl. VAT</Text>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
            {totalPrice - 10.0}.0 SAR
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: '65%',
            width: '45%',
            backgroundColor: Colors.orange,
            margin: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() =>
            navigation.navigate('payment', {price: totalPrice - 10.0})
          }>
          <Text
            style={{
              color: Colors.white,
              marginHorizontal: 10,
              fontSize: 13,
              fontWeight: '500',
            }}>
            Continue to payment
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PlaceorderCard;

// const styles = StyleSheet.create({});
