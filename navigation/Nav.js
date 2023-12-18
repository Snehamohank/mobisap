/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splashscreen from '../screens/Splashscreen';
import Otpscreen from '../screens/Otpscreen';
import Bottom from './Bottom';
import Loginscreen from '../screens/Loginscreen';
import Rechangrescreen from '../screens/Recharge/Rechangrescreen';
import Cartscreen from '../screens/Cart/Cartscreen';
import Placeorder from '../screens/Cart/Placeorder';
import Payment from '../screens/Cart/Payment';
import PaymentSuccess from '../screens/Cart/PaymentSuccess';
import Coupons from '../screens/Cart/Coupons';
import Offers from '../screens/Cart/Offers';

const Stack = createNativeStackNavigator();
const Nav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="splash" component={Splashscreen}/> */}
      <Stack.Screen name="login" component={Loginscreen} />
      <Stack.Screen name="otp" component={Otpscreen} />
      <Stack.Screen name="home" component={Bottom} />
      <Stack.Screen name="recharge" component={Rechangrescreen} />
      <Stack.Screen name="cart" component={Cartscreen} />
      <Stack.Screen name="placeorder" component={Placeorder} />
      <Stack.Screen name="payment" component={Payment} />
      <Stack.Screen name="success" component={PaymentSuccess} />
      <Stack.Screen name="coupons" component={Coupons} />
      <Stack.Screen name="offers" component={Offers} />
    </Stack.Navigator>
  );
};

export default Nav;
