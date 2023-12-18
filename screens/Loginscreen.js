/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  // StyleSheet,
  // Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
  // Image,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Backgrnd1 from '../assets/images/background.png';
import Backgrnd2 from '../assets/images/bg2.png';
import Mask from '../assets/images/mask.svg';
import Otp from '../components/Otp';
import Colors from '../utils/Colors';
import {Text} from '../utils/fontfamily';

const Loginscreen = ({navigation}) => {
  const animatedTextSize = useRef(new Animated.Value(90)).current;
  const [isReduced, setIsReduced] = useState(false);
  const animatedImageSize = useRef(new Animated.Value(400)).current;
  const animatedBackgroundSize = useRef(new Animated.Value(350)).current;

  const startAnimation = () => {
    Animated.timing(animatedTextSize, {
      toValue: isReduced ? 60 : 80,
      duration: 700,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedImageSize, {
      toValue: isReduced ? 60 : 0,
      duration: 700,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedBackgroundSize, {
      toValue: isReduced ? 30 : 0,
      duration: 700,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    setIsReduced(!isReduced);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View
      style={{height: '100%', width: '100%', backgroundColor: Colors.white}}>
      <Animated.Image
        source={Backgrnd1}
        style={{
          height: 100,
          width: 400,
          resizeMode: 'stretch',
          right: animatedImageSize,
        }}
      />
      <Animated.View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          paddingTop: 13,
          height: '16%',
        }}>
        <Animated.Text
          style={{
            color: Colors.black,
            fontSize: animatedTextSize,
            fontWeight: 'bold',
            fontFamily: 'AirbnbCereal_W_Bd',
          }}>
          Hello
        </Animated.Text>
      </Animated.View>
      <Text family={'h2'} style={{fontSize: 17, textAlign: 'center'}}>
        Sign in to your account
      </Text>
      <View
        style={{
          height: 55,
          width: '80%',
          backgroundColor: Colors.white,
          marginTop: '30%',
          alignSelf: 'center',
          borderRadius: 40,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 4,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Mask margin={15} />
        <Text color={'black'} size={'lg'}>
          +996
        </Text>
        <TextInput
          editable={isReduced ? true : false}
          placeholder="000 000 000"
          placeholderTextColor={Colors.greytext}
          keyboardType="numeric"
          style={{color: Colors.black}}
        />
      </View>

      {isReduced ? null : <Otp />}

      <View
        style={{
          width: '100%',
          marginTop: isReduced ? '36%' : '10%',
          flexDirection: 'row',
        }}>
        <Animated.Image
          source={Backgrnd2}
          style={{
            height: 400,
            width: 200,
            resizeMode: 'stretch',
            marginTop: animatedBackgroundSize,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 100,
            position: 'absolute',
            alignItems: 'center',
          }}>
          {isReduced ? (
            <TouchableOpacity
              style={{
                height: 55,
                width: '80%',
                backgroundColor: Colors.violet,
                borderRadius: 40,
                justifyContent: 'center',
              }}
              onPress={startAnimation}>
              <Text
                style={{
                  color: Colors.white,
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                Request OTP
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                height: 55,
                width: '80%',
                backgroundColor: Colors.violet,
                borderRadius: 40,
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('home')}>
              <Text
                size={'xl'}
                family={'h1'}
                color={'white'}
                style={{
                  textAlign: 'center',
                }}>
                Sign
              </Text>
            </TouchableOpacity>
          )}
          {isReduced ? (
            <TouchableOpacity>
              <Text
                color={'purple'}
                size={'lg'}
                family={'h2'}
                style={{
                  textAlign: 'center',
                  marginTop: '3%',
                }}>
                or login as guest
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default Loginscreen;

// const styles = StyleSheet.create({});
