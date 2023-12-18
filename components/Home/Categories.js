/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  // StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import All from '../../assets/images/all.png';
import Allatv from '../../assets/images/allatv.png';
import Offer from '../../assets/images/offer.png';
import Offeratv from '../../assets/images/offeratv.png';
import Data from '../../assets/images/store.png';
import Dataatv from '../../assets/images/storeatv.png';
import Voice from '../../assets/images/call.png';
import Voiceatv from '../../assets/images/callatv.png';
import Store from '../../assets/images/home.png';
import Storeatv from '../../assets/images/homeatv.png';

const Categories = ({onPress,borderColor,image,text}) => {
  const [select, setSelect] = useState('1');
  const scrollX = useRef(new Animated.Value(0)).current;

  const data = [
    {id: '1', image: All, image1: Allatv, name: 'All'},
    {id: '2', image: Offer, image1: Offeratv, name: 'Offer'},
    {id: '3', image: Data, image1: Dataatv, name: 'Data'},
    {id: '4', image: Voice, image1: Voiceatv, name: 'Voice'},
    {id: '5', image: Store, image1: Storeatv, name: 'Store'},
    {id: '6', image: All, image1: Allatv, name: 'All'},
    {id: '7', image: Offer, image1: Offeratv, name: 'Offer'},
    {id: '8', image: Data, image1: Dataatv, name: 'Data'},
    {id: '9', image: Voice, image1: Voiceatv, name: 'Voice'},
    {id: '10', image: Store, image1: Storeatv, name: 'Store'},
  ];

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  useEffect(() => {
  }, [scrollX]);

  return (
    // <View
    //   style={{
    //     height: 100,
    //     width: '94%',
    //     backgroundColor: 'white',
    //     marginTop: '3%',
    //     alignSelf: 'center',
    //     borderRadius: 10,
    //     elevation: 5,
    //     shadowColor: '#000',
    //     shadowOffset: {width: 0, height: 2},
    //     shadowOpacity: 0.2,
    //     shadowRadius: 4,
    //   }}>
    //   <Text>{}</Text>
    //   <FlatList
    //     horizontal
    //     showsHorizontalScrollIndicator={false}
    //     scrollEnabled={false}
    //     data={data}
    //     keyExtractor={item => item.id}
    //     renderItem={({item, index}) => (
    //       <TouchableOpacity
    //         style={{
    //           height: '100%',
    //           width: 65,
    //           marginHorizontal: 5,
    //           borderBottomWidth: 3,
    //           borderBottomColor: select === item.id ? '#4F008C' : 'transparent',
    //         }}
    //         onPress={() => setSelect(item.id)}>
    //         <Image
    //           style={{
    //             height: 55,
    //             width: 55,
    //             resizeMode: 'stretch',
    //             alignSelf: 'center',
    //           }}
    //           source={select === item.id ? item.image1 : item.image}
    //         />
    //         <Text
    //           style={{
    //             color: 'black',
    //             textAlign: 'center',
    //             marginTop: 2,
    //             fontSize: 12,
    //           }}>
    //           {item.name}
    //         </Text>
    //       </TouchableOpacity>
    //     )}
    //     onScroll={handleScroll}
    //     scrollEventThrottle={16}
    //     snapToInterval={65}
    //     decelerationRate="fast"
    //   />
    // </View>
    <TouchableOpacity
            style={{
              height: '100%',
              width: 65,
              marginHorizontal: 5,
              borderBottomWidth: 3,
              borderBottomColor:borderColor,
            }}
            onPress={onPress}
            >
            <Image
              style={{
                height: 55,
                width: 55,
                resizeMode: 'stretch',
                alignSelf: 'center',
              }}
              source={image}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                marginTop: 2,
                fontSize: 12,
              }}>
              {text}
            </Text>
          </TouchableOpacity>
  );
};

export default Categories;

// const styles = StyleSheet.create({});
