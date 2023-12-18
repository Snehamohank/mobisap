/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  // StyleSheet,
  // Text,
  View,
  // Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Vigin from '../../assets/images/vigin.png';
import Mobily from '../../assets/images/mobily.png';
import Zain from '../../assets/images/zain.png';
import Friendi from '../../assets/images/friendi.png';
import Colors from '../../utils/Colors';
import { Text } from '../../utils/fontfamily';

const Offers = () => {
  const [select, setSelect] = useState([]);

  const data = [
    {id: '1', image: Mobily},
    {id: '2', image: Zain},
    {id: '3', image: Vigin},
    {id: '4', image: Friendi},
  ];

  const handleItemClick = id => {
    if (select.includes(id)) {
      setSelect(select.filter(item => item !== id));
    } else {
      setSelect([...select, id]);
    }
  };

  return (
    <View
      style={{height: '100%', width: '100%', backgroundColor: Colors.violet}}>
      <Header />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              height: select.includes(item.id) ? 'auto' : 110,
              width: '90%',
              backgroundColor: Colors.white,
              alignSelf: 'center',
              marginTop: item.id == 1 ? '3%' : 0,
              marginBottom:'3%',
              borderRadius: 8,
              // top:10
            }}>
            <View
              style={{
                backgroundColor: Colors.white,
                width: '100%',
                height: 100,
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
                borderRadius: 8,
              }}>
              <View
                style={{
                  left: -25,
                  backgroundColor: Colors.violet,
                  height: 40,
                  width: 40,
                  borderRadius: 90,
                }}
              />
              <View
                style={{
                  width: '75%',
                  height: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => handleItemClick(item.id)}
                  activeOpacity={0.7}
                  style={{
                    height: '90%',
                    width: '35%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    borderStyle: 'dashed',
                    borderRightColor: Colors.greyborder,
                    borderRightWidth: 1.5,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      borderRadius: 90,
                      width: 70,
                      height: 70,
                      resizeMode: 'stretch',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: '65%',
                    width: '70%',
                    paddingHorizontal: 14,
                    justifyContent: 'space-between',
                  }}
                  onPress={() => handleItemClick(item.id)}
                  activeOpacity={0.7}>
                  <Text style={{color: Colors.black, fontWeight: '500'}} size={'lg'}>
                    $ 10
                  </Text>
                  <Text style={{color: Colors.black, fontWeight: '500'}} size={'lg'}>
                    Virgin Recharge{' '}
                  </Text>
                  <Text
                    style={{
                      color: Colors.greytext,
                      fontWeight: '500',
                      fontSize: 12,
                    }} size={'lg'}>
                    Valid until 01 February 2022
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  right: -25,
                  backgroundColor: Colors.violet,
                  height: 40,
                  width: 40,
                  borderRadius: 90,
                }}
              />
            </View>

            {select.includes(item.id) ? (
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  height: 100,
                  marginBottom: 10,
                  marginTop: 5,
                  borderTopWidth: 1.5,
                  borderTopColor: Colors.greyborder,
                  borderStyle: 'dashed',
                }}>
                <Text style={{color: Colors.black, fontWeight: '500'}}>
                  Lorem ipsum dolor
                </Text>
                <View
                  style={{
                    height: 'auto',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                    paddingHorizontal: 5,
                  }}>
                  <View
                    style={{
                      height: 7,
                      width: 7,
                      borderRadius: 10,
                      backgroundColor: Colors.greytext,
                    }}></View>
                  <Text
                    style={{
                      color: Colors.greytext,
                      fontWeight: '500',
                      fontSize: 12,
                    }}>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </Text>
                </View>
                <View
                  style={{
                    height: 'auto',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                    paddingHorizontal: 5,
                  }}>
                  <View
                    style={{
                      height: 7,
                      width: 7,
                      borderRadius: 10,
                      backgroundColor: Colors.greytext,
                    }}></View>
                  <Text
                    style={{
                      color: Colors.greytext,
                      fontWeight: '500',
                      fontSize: 12,
                    }}>
                    {' '}
                    ncididunt ut labore et dolore magna aliqua Ut enim ad{' '}
                  </Text>
                </View>
                <View
                  style={{
                    height: 'auto',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                    paddingHorizontal: 5,
                  }}>
                  <View
                    style={{
                      height: 7,
                      width: 7,
                      borderRadius: 10,
                      backgroundColor: Colors.greytext,
                    }}></View>
                  <Text
                    style={{
                      color: Colors.greytext,
                      fontWeight: '500',
                      fontSize: 12,
                    }}>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </Text>
                </View>
              </View>
            ) : null}
          </View>
        )}

      />
      {/* <View style={{paddingTop:'3%'}}></View> */}

    </View>
  );
};

export default Offers;

// const styles = StyleSheet.create({});
