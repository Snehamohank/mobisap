/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {
  TextInput,
  View,
  // Text,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import Header from '../components/Header/Header';
import Banner from '../assets/images/banner.svg';
import Search from '../assets/images/search.svg';
import Categories from '../components/Home/Categories';
import Maincategory from '../components/Home/Maincategory';
import All from '../assets/images/all.png';
import Allatv from '../assets/images/allatv.png';
import Offers from '../assets/images/offer.png';
import Offeratv from '../assets/images/offeratv.png';
import Data from '../assets/images/store.png';
import Dataatv from '../assets/images/storeatv.png';
import Voice from '../assets/images/call.png';
import Voiceatv from '../assets/images/callatv.png';
import Store from '../assets/images/home.png';
import Storeatv from '../assets/images/homeatv.png';
import Offer from '../components/Home/Offer';
import { Text } from '../utils/fontfamily';

const Homescreen = () => {
  const [select, setSelect] = useState(1);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleButtonPress = buttonId => {
    setSelect(buttonId);
  };

  useEffect(() => {}, [scrollX]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header logo={true} cart={true} rightitems={true} notification={true} />
      <View style={{paddingHorizontal: 5}}>
        <View
          style={{
            height: 130,
            width: '100%',
            alignItems: 'center',
            marginTop: 15,
            paddingHorizontal: 10,
          }}>
          <Banner width={'100%'} height={125} />
        </View>
        <View
          style={{
            height: 50,
            width: '94%',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: '3%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}>
          <TextInput
            placeholder="Search for a card..."
            placeholderTextColor="grey"
            style={{marginHorizontal: 10,color:'black',fontFamily:'AirbnbCereal_W_Bk'}}
          />
          <Search width={20} height={20} margin={15} />
        </View>
        {/* <Categories/> */}
        <View
          style={{
            height: 100,
            width: '94%',
            backgroundColor: 'white',
            marginTop: '4%',
            alignSelf: 'center',
            borderRadius: 10,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}>
          <Text>{}</Text>
          <ScrollView horizontal>
            <Categories
              image={select === 1 ? Allatv : All}
              text={'All'}
              borderColor={select === 1 ? '#4F008C' : 'white'}
              onPress={() => handleButtonPress(1)}
            />
            <Categories
              image={select === 2 ? Offeratv : Offers}
              text={'Offer'}
              borderColor={select === 2 ? '#4F008C' : 'white'}
              onPress={() => handleButtonPress(2)}
            />
             <Categories
              image={select === 3 ? Dataatv : Data}
              text={'Data'}
              borderColor={select === 3 ? '#4F008C' : 'white'}
              onPress={() => handleButtonPress(3)}
            />
             <Categories
              image={select === 4 ? Voiceatv : Voice}
              text={'Voice'}
              borderColor={select === 4 ? '#4F008C' : 'white'}
              onPress={() => handleButtonPress(4)}
            />
             <Categories
              image={select === 5 ? Storeatv : Store}
              text={'Store'}
              borderColor={select === 5 ? '#4F008C' : 'white'}
              onPress={() => handleButtonPress(5)}
            />
          </ScrollView>
        </View>
      </View>
      <View style={{height: 10}}></View>
      {select == 1 ? <Maincategory /> : null}
      {select == 2 ? <Offer /> : null}
      {select == 3 ? <Maincategory /> : null}
      {select == 4 ? <Maincategory /> : null}
      {/* </ScrollView> */}
    </View>
  );
};

export default Homescreen;

// const styles = StyleSheet.create({});
