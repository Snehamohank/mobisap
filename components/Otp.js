/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import Colors from '../utils/Colors';
import {Text} from '../utils/fontfamily';

const Otp = ({length}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const refs = useRef([...Array(6)].map(() => React.createRef()));

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    // Move to the next TextInput if the current one is filled
    if (value && index < 5) {
      refs.current[index + 1].focus();
    }
    setOtp(newOtp);
  };

  const handleFocus = index => {
    if (otp[index]) {
      refs.current[index].setNativeProps({
        selection: {start: 0, end: 0},
      });
    }
  };
  return (
    <View
      style={{
        height: 80,
        width: '100%',
        marginTop: '7%',
        justifyContent: 'center',
      }}>
        <Text family={'h1'} size={'md'} color={'purple'} style={{marginLeft: '10%'}}>
          Enter OTP
        </Text>
      <View
        style={{
          height: 80,
          width: '75%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={input => (refs.current[index] = input)}
            style={{
              textAlign: 'center',
              fontSize: 15,
              width: '12%',
              height: 40,
              color: '#4E4E4E',
              fontWeight: '500',
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: '#EAEAEA',
              marginHorizontal: 10,
            }}
            value={digit}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={value => handleInputChange(index, value)}
            onFocus={() => handleFocus(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({});
