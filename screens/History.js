/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header/Header';
import {useCart} from '../store/loginContext';
import Colors from '../utils/Colors';

const History = () => {
  const {orderHistory} = useCart();

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <Header notification={false} rightitems={true} />
      {orderHistory && orderHistory.length > 0 ? (
        <FlatList
          data={orderHistory}
          renderItem={({item}) => (
            <View
              style={{
                height: 120,
                width: '90%',
                backgroundColor: 'white',
                marginTop: 10,
                alignSelf: 'center',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.2,
                shadowRadius: 4,
                borderRadius: 10,
                flexDirection: 'row',
                marginBottom: 5,
                paddingHorizontal: 10,
              }}>
              <Image
                style={{
                  height: '80%',
                  width: 90,
                  resizeMode: 'stretch',
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
                source={item.image}
              />
              <View
                style={{
                  height: '80%',
                  width: '65%',
                  alignSelf: 'center',
                  marginHorizontal: 10,
                }}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 12}}>
                  {item.name} Recharge Card SR
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontWeight: '500',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  price
                </Text>
                <View style={{flexDirection: 'row',width:'50%',justifyContent:'space-between'}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      fontWeight: '500',
                      marginTop: 2,
                    }}>
                    {item.total}.0
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      fontWeight: '500',
                      marginTop: 2,
                    }}>
                      QTY:{item.quantity}
                  </Text>
                </View>
                <View
                  style={{
                    height: '27%',
                    width: '100%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'rgba(109, 109, 109, 1)',
                      fontWeight: '500',
                    }}>
                    15/10/2023 12:37pm
                  </Text>
                  <TouchableOpacity
                    style={{
                      height: '100%',
                      width: 80,
                      backgroundColor: '#15AF70',
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{color: 'white', fontSize: 10, fontWeight: '500'}}>
                      Completed
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: Colors.greytext2, fontSize: 12}}>
            No Product Ordering
          </Text>
        </View>
      )}
    </View>
  );
};

export default History;

// const styles = StyleSheet.create({});
