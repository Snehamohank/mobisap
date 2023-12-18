/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../assets/images/logo.svg';

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('login');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <StatusBar translucent backgroundColor={"transparent"}/> */}
      <Logo height={70} width={145} />
    </View>
  );
};

export default Splashscreen;

// const styles = StyleSheet.create({});
