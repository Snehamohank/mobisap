/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import { View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header/Header';
import Wishlistbody from '../components/Wishlist/Wishlist';

const Wishlist = () => {
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <Header notification={false} rightitems={true} />
      <ScrollView>
        <Wishlistbody />
      </ScrollView>
    </View>
  );
};

export default Wishlist;

// const styles = StyleSheet.create({});
