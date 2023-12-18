/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import PlaceorderCard from '../../components/Cart/PlaceorderCard';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../utils/Colors';

const Placeorder = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{height: '100%', width: '100%', backgroundColor: Colors.white}}>
      <Header cartname={true} />
      {/* <ScrollView style={{ height: 'auto', width: '100%' }}> */}
      <PlaceorderCard />
      {/* </ScrollView> */}
      {/* <View style={{
        bottom: 0, height: 65, width: '100%', backgroundColor:Colors.white, flexDirection: 'row', justifyContent: 'space-between', elevation: 5, shadowColor:Colors.white,
        shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2,paddingHorizontal:10
      }}>
        <View style={{ height: '100%', width: '40%', margin: 10 }}>
          <Text style={{ color: 'grey',fontSize:10 }}>Price incl. VAT</Text>
          <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>25.00 SAR </Text>
        </View>
        <TouchableOpacity style={{ height: '65%', width: '45%', backgroundColor:Colors.orange, margin: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
         onPress={() => navigation.navigate('payment')}>
          <Text style={{ color:Colors.white, marginHorizontal: 10, fontSize: 13, fontWeight: '500' }}>Continue to payment</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Placeorder;

const styles = StyleSheet.create({});
