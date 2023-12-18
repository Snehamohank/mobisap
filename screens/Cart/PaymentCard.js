/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Paypal from '../../assets/images/paypal.svg';
import Gpay from '../../assets/images/gpay.svg';
import Visa from '../../assets/images/Text.svg';
import Master from '../../assets/images/MasterCard.svg';
import Applied from '../../assets/images/applied.svg';
import Colors from '../../utils/Colors';

const paymentMethods = [
  {id: 0, icon: <Paypal height={30} width={50} />},
  {id: 1, icon: <Gpay height={30} width={40} />},
  {id: 2, icon: <Visa height={30} width={30} />},
  {id: 3, icon: <Master height={30} width={30} />},
];

const PaymentCard = () => {
  const [select, setSelect] = useState(null);

  return (
    <View style={{paddingHorizontal:15}}>
      {paymentMethods.map(method => (
        <TouchableOpacity
          key={method.id}
          style={{
            height: 60,
            width: '100%',
            backgroundColor: Colors.white,
            alignSelf: 'center',
            elevation: select === method.id ? 5 : 0,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            alignItems: 'center',
            marginVertical:10,
          }}
          onPress={() => setSelect(method.id)}>
          {method.icon}
          {select === method.id ? <Applied height={25} width={25} /> : ''}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PaymentCard;

// const styles = StyleSheet.create({});
