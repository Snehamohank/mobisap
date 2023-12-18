/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import {
  // StyleSheet,
  // Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../../utils/Dummydata';
import { Text } from '../../utils/fontfamily';

const Maincategory = () => {
  const navigation = useNavigation();
  const [numColumns, setNumColumns] = useState(3);


  return (
    <ScrollView
        style={{
          height: 'auto',
          width: '100%',
          backgroundColor: 'white',
          marginTop: '3%',
          borderRadius: 10,
          alignSelf: 'center',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 4,
        }}>
     <View
      style={{
        height: '100%',
        width: '90%',
        backgroundColor: 'white',
        marginTop: '2%',
        borderRadius: 10,
        flexDirection:'coloumn',
        alignSelf: 'center',
        paddingHorizontal:5,
        marginBottom:12,
        // alignItems:'center',

      }}>
      <FlatList
        data={Product}
        // keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        numColumns={numColumns}
        key={numColumns.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{height:'auto', width:'30%',marginTop:10,margin:6}}
            onPress={() => navigation.navigate('recharge', {product:item})}>
            <Image
              style={{
                height: 65,
                width: '100%',
                borderRadius: 8,
                resizeMode: 'stretch',
                alignSelf:'center',
              }}
              source={item.image}
            />
            <Text
              style={{
                color: 'rgba(109, 109, 109, 1)',
                alignSelf: 'center',
                fontSize: 12,
                fontWeight: '500',
                marginTop: 5,
              }}>
              {item.name}
            </Text>
            <Text style={{ alignSelf: 'center'}} size={'sm'} color={'greytext'}>
              Starts: {item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={{height: 50}}></View>
    </View>
    </ScrollView>
  );
};

export default Maincategory;

// const styles = StyleSheet.create({
//   productContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     height: 50,
//   },
//   productName: {
//     textAlign: 'center',
//   },
// });
