/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Svg, {Polygon} from 'react-native-svg';
import Header from '../../components/Header/Header';
import RechargeDetails from '../../components/Recharge/RechargeDetails';
// import RechargeDetails from '../../components/Cart/Recharge/RechargeDetails';

const Rechangrescreen = () => {
  const [active, setActive] = useState(0);

  return (
    <View style={{height: '100%', width: '100%'}}>
      <Header notification={false} rightitems={true} />
      {/* <ScrollView> */}
      <RechargeDetails />
      {/* </ScrollView> */}
      {/* <View style={{bottom: 0, height: 65, width: '100%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', elevation: 5, shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, paddingHorizontal: 10}}>
                <View style={{ height: '100%', width: '40%', margin: 10 }}>
                    <Text style={{ color: 'grey', fontSize: 10 }}>Price incl. VAT</Text>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>25.00 SAR </Text>
                </View>
                <TouchableOpacity style={{ height: '65%', width: '45%', backgroundColor: '#4F008C', margin: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', marginHorizontal: 10, fontSize: 13, fontWeight: '500' }}>Add to Cart</Text>
                </TouchableOpacity>
            </View> */}
    </View>
  );
};

export default Rechangrescreen;

const styles = StyleSheet.create({});
