/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import Offer from '../../assets/images/offericon.svg';
import Colors from '../../utils/Colors';
import { Text } from '../../utils/fontfamily';


const MobilyNet = () => {
  const [select, setSelect] = useState(0);

  const data = [
    {id: '1', name: 'mobily'},
    {id: '2', name: 'zain'},
    {id: '3', name: 'friendi'},
    {id: '4', name: 'vigin'},
    {id: '5', name: 'mtn'},
  ];

  return (
    <View style={{height: 'auto', width: '100%'}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              height: 70,
              width: '92%',
              borderWidth: 1,
              borderColor: Colors.greyborder,
              borderRadius: 10,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop:10,
              backgroundColor: select === item.id ? Colors.violet : null,
            }}
            onPress={() => setSelect(item.id)}>
            <View
              style={{
                height: '90%',
                width: '60%',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: select === item.id ? Colors.white : Colors.greytext,
                  fontWeight: '500',
                  fontSize: 13,
                }}>
                Mobily Recharge Card
              </Text>
              <Text
                style={{
                  color: select === item.id ? Colors.white : Colors.greytext2,
                  fontWeight: '500',
                  fontSize: 13,
                }}>
                SR 20
              </Text>
            </View>
            <View
              style={{
                height: '90%',
                width: '40%',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingRight: 10,
              }}>
              <Text
                style={{
                  color: select === item.id ? Colors.white : Colors.greytext2,
                  fontSize: 10,
                }}>
                Price
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: select === item.id ? Colors.white : Colors.greytext2,
                    fontWeight: '500',
                    fontSize: 13,
                    textDecorationLine: 'line-through',
                  }}>
                  20.0 SAR
                </Text>
                <Text
                  style={{
                    color: select === item.id ? Colors.white : Colors.black,
                    fontWeight: '500',
                    fontSize: 13,
                  }}>
                  {' '}
                  20.0 SAR
                </Text>
              </View>
            </View>

            {item?.id === '1' || item?.id === '2' ? (
              <View
                style={{
                  height: 18,
                  width: 24,
                  borderRadius: 15,
                  bottom: 10,
                  right: 16,
                  backgroundColor: Colors.white,
                }}>
                <Offer height={25} width={25} right={2} />
              </View>
            ) : null}
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        disabled
        style={{
          height: 70,
          width: '92%',
          borderWidth: 1,
          borderColor: Colors.greyborder,
          borderRadius: 10,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
          backgroundColor: Colors.greybackground,
        }}>
        <View
          style={{
            height: '90%',
            width: '60%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Text style={{color: Colors.black, fontWeight: '500', fontSize: 13}}>
            Mobily Recharge Card
          </Text>
          <Text style={{color: Colors.black, fontWeight: '500', fontSize: 13}}>
            SR 20
          </Text>
        </View>
        <View
          style={{
            height: '90%',
            width: '40%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingRight: 10,
          }}>
          <Text style={{color: Colors.black, fontSize: 10}}>Price</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: Colors.black, fontWeight: '500', fontSize: 13}}>
              20.0 SAR{' '}
            </Text>
            <Text
              style={{
                color: Colors.black,
                textDecorationLine: 'line-through',
                fontWeight: '500',
                fontSize: 13,
              }}>n
              20.0 SAR
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 30,
            width: '80%',
            position: 'absolute',
            alignSelf: 'center',
            left: 35,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', color: Colors.white}}>
            OUT OFF STOCK
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: '100%',
              width: '34%',
              borderRadius: 8,
              backgroundColor: Colors.orange,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{fontSize: 10, fontWeight: '500', color: Colors.white}}>
              Notify me
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={{height: 10}}></View>
    </View>
  );
};

export default MobilyNet;

// const styles = StyleSheet.create({});
