/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const images = [
  {
    uri: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200',
  },
  {
    uri: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200',
  },
  {
    uri: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200',
  },
];

const {width: screenWidth} = Dimensions.get('window');

const Banner = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.carouselItem}>
        {/* <Image source={{ uri: item.uri }} style={styles.image} /> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        // autoplay
        loop
        layout="default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItem: {
    width: '80%',
    height: 150,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'cover',
  },
});

export default Banner;
