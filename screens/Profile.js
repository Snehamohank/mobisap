/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header/Header';
import Profile1 from '../assets/images/profile2.svg';
import Profile2 from '../assets/images/profile1.svg';
import Arrow from '../assets/images/right.svg';
import {useNavigation} from '@react-navigation/native';
import Colors from '../utils/Colors';
import {Text} from '../utils/fontfamily';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{height: '100%', width: '100%', backgroundColor: Colors.white}}>
      <Header />
      <View
        style={{
          height: '15%',
          width: '94%',
          backgroundColor: Colors.violet,
          alignSelf: 'center',
          marginTop: '5%',
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Profile1 height={57} width={57} marginLeft={25} />
        <View style={{height: '50%', width: '50%', marginLeft: 15}}>
          <Text style={{color: Colors.white, fontSize: 16}}>
            Muhammed Rashid
          </Text>
          <Text style={{color: Colors.greyborder, fontSize: 12, marginTop: 5}}>
            Lorem ipsum 1021
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
          marginTop: '5%',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            height: 50,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '5%',
          }}>
          <TouchableOpacity
            style={{
              height: '90%',
              width: '60%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Profile2 height={45} width={45} />
            <Text
              style={{
                color: Colors.black,
                fontSize: 13,
                alignSelf: 'center',
                marginLeft: 20,
                fontWeight: '500',
              }}>
              My Account{' '}
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ height: '90%', width: 35, alignItems: 'center', justifyContent: 'center' }}> */}
          <Arrow height={12} width={12} />
          {/* </TouchableOpacity> */}
        </View>
        <View
          style={{
            height: 50,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '5%',
          }}>
          <TouchableOpacity
            style={{
              height: '90%',
              width: '60%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Profile2 height={45} width={45} />
            <Text
              style={{
                color: Colors.black,
                fontSize: 13,
                alignSelf: 'center',
                marginLeft: 20,
                fontWeight: '500',
              }}>
              Payment Method
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ height: '90%', width: 35, alignItems: 'center', justifyContent: 'center' }}> */}
          <Arrow height={12} width={12} />
          {/* </TouchableOpacity> */}
        </View>
        <View
          style={{
            height: 50,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '5%',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('History')}
            style={{
              height: '90%',
              width: '60%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Profile2 height={45} width={45} />
            <Text
              style={{
                color: Colors.black,
                fontSize: 13,
                alignSelf: 'center',
                marginLeft: 20,
                fontWeight: '500',
              }}>
              My Order
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ height: '90%', width: 35, alignItems: 'center', justifyContent: 'center' }} onPress={()=>navigation.navigate('History')}> */}
          <Arrow height={12} width={12} />
          {/* </TouchableOpacity> */}
        </View>
        <View
          style={{
            height: 50,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '5%',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('offers')}
            style={{
              height: '90%',
              width: '60%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Profile2 height={45} width={45} />
            <Text
              style={{
                color: Colors.black,
                fontSize: 13,
                alignSelf: 'center',
                marginLeft: 20,
                fontWeight: '500',
              }}>
              My Coupons
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ height: '90%', width: 35, alignItems: 'center', justifyContent: 'center' }} onPress={()=>navigation.navigate('offers')}> */}
          <Arrow height={12} width={12} />
          {/* </TouchableOpacity> */}
        </View>
        <View
          style={{
            height: 50,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '5%',
          }}>
          <TouchableOpacity
            style={{
              height: '90%',
              width: '60%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Profile2 height={45} width={45} />
            <Text
              style={{
                color: Colors.black,
                fontSize: 13,
                alignSelf: 'center',
                marginLeft: 20,
                fontWeight: '500',
              }}>
              Payment Method
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ height: '90%', width: 35, alignItems: 'center', justifyContent: 'center' }}> */}
          <Arrow height={12} width={12} />
          {/* </TouchableOpacity> */}
        </View>
        <View
          style={{
            height: 50,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '5%',
          }}>
          <TouchableOpacity
            style={{
              height: '90%',
              width: '60%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Profile2 height={45} width={45} />
            <Text
              style={{
                color: Colors.black,
                fontSize: 13,
                alignSelf: 'center',
                marginLeft: 20,
                fontWeight: '500',
              }}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ height: '90%', width: 35, alignItems: 'center', justifyContent: 'center' }}> */}
          <Arrow height={12} width={12} />
          {/* </TouchableOpacity> */}
        </View>
        <View
          style={{
            height: 50,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '5%',
          }}>
          <TouchableOpacity
            style={{
              height: '90%',
              width: '60%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Profile2 height={45} width={45} />
            <Text
              style={{
                color: Colors.black,
                fontSize: 13,
                alignSelf: 'center',
                marginLeft: 20,
                fontWeight: '500',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ height: '90%', width: 35, alignItems: 'center', justifyContent: 'center' }}> */}
          <Arrow height={12} width={12} />
          {/* </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
