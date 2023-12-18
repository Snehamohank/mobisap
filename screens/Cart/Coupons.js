/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {  View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import Offer from '../../assets/images/offericon.svg';
import Arrow from '../../assets/images/right.svg';
import Colors from '../../utils/Colors';
import { Text } from '../../utils/fontfamily';

const Coupons = () => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <Header />
      <View style={{height: 'auto'}}>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={({item}) => (
            <View
              style={{
                height: 100,
                width: '96%',
                alignSelf: 'center',
                marginTop: 5,
                elevation: 4,
                shadowColor: '#AAAAAA',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 4,
                backgroundColor: Colors.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <Offer height={50} width={50} alignSelf={'center'} />
              <View style={{height: '100%', width: '70%'}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: '500',
                    marginTop: 5,
                    fontSize: 13,
                  }}>
                  New Offer Available
                </Text>
                <Text style={{color: '#6D6D6D', marginTop: 5, fontSize: 12}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
              </View>
              <Text
                style={{color: Colors.greyborder, marginTop: 10, fontSize: 10}}>
                4hr
              </Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: '96%',
          alignSelf: 'center',
          backgroundColor: Colors.white,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 4,
          marginBottom: 6,
          marginTop: 8,
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
            Your order placed succesfully
          </Text>
        </View>
        <Arrow height={10} width={10} marginTop={18} marginRight={10} />
      </TouchableOpacity>
    </View>
  );
};

export default Coupons;

// const styles = StyleSheet.create({});
