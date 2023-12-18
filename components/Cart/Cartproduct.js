/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  // Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Delete from '../../assets/images/detele.svg';
import Deleteconfirm from '../../assets/images/deletem.svg';
import Colors from '../../utils/Colors';
import {useCart} from '../../store/loginContext';
import {useNavigation} from '@react-navigation/native';
import { Text } from '../../utils/fontfamily';

const Cartproduct = () => {
  const navigation = useNavigation();
  const {cart, dispatch} = useCart();
  const [count, setCount] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const increaseCount = productId => {
    setCount(prevCounts => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 1) + 1,
    }));
  };
  const decreaseCount = productId => {
    if (count[productId] > 0) {
      setCount(prevCounts => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  };

  const openModal = itemId => {
    setModalVisible(true);
    setSelectedItem(itemId);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const handleDelete = () => {
    if (selectedItem) {
      console.log('Deleting item with id:', selectedItem);
      dispatch({type: 'REMOVE_FROM_CART', payload: selectedItem});
      closeModal();
    }
  };
  const handlePlaceOrder = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += (count[item.id] || 1) * item.charge;
    }
    const orderData = {
      cart,
      count,
      totalPrice,
    };

    dispatch({type: 'PLACE_ORDER', payload: orderData});
    dispatch({type: 'ADD_TO_ORDER_HISTORY', payload: orderData});
    navigation.navigate('placeorder', orderData);
  };
  useEffect(() => {
    let newTotalPrice = 0;
    for (const item of cart) {
      newTotalPrice += (count[item.id] || 1) * item.charge;
    }
    setTotalPrice(newTotalPrice);
  }, [cart, count]);
  return (
    <>
      <ScrollView style={{height: 'auto'}}>
      <Text
        style={{
          margin: 10,
          fontSize: 16,
          fontWeight: '500',
          color: Colors.black,
          marginHorizontal: 15,
        }}>
        Your Card
      </Text>
        <FlatList
          data={cart}
          renderItem={({item}) => (
            <View
              style={{
                height: 120,
                width: '90%',
                backgroundColor: Colors.white,
                marginTop: 5,
                alignSelf: 'center',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.2,
                shadowRadius: 4,
                borderRadius: 10,
                flexDirection: 'row',
                marginBottom: 5,
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <Image
                style={{
                  height: '80%',
                  width: 90,
                  resizeMode: 'stretch',
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
                source={item.image}
              />
              <View style={{height: '80%', width: '60%', alignSelf: 'center'}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: '500',
                    fontSize: 12,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: Colors.greytext,
                    fontWeight: '500',
                    fontSize: 13,
                    marginTop: 5,
                  }}>
                  price
                </Text>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 12,
                    fontWeight: '500',
                    marginTop: '2%',
                  }}>
                  {count[item.id] * item.charge || item.charge}.0 SAR
                </Text>
                <View
                  style={{
                    height: 30,
                    width: '112%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 12,
                      fontWeight: '500',
                      marginTop: '2%',
                    }}>
                    Qty :{count[item.id] || 1}
                  </Text>
                  <View
                    style={{
                      height: '90%',
                      width: '30%',
                      borderWidth: 1,
                      borderColor: '#EAEAEA',
                      borderRadius: 8,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <TouchableOpacity
                      style={{
                        height: '100%',
                        width: '30%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => decreaseCount(item.id)}>
                      <Text style={{color: Colors.greytext2, fontSize: 20}}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        height: '100%',
                        width: '30%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: Colors.black, fontSize: 15}}>
                        {count[item.id] || 1}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        height: '100%',
                        width: '30%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => increaseCount(item.id)}>
                      <Text style={{color: Colors.greytext2, fontSize: 20}}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Delete
                height={22}
                width={18}
                top={14}
                right={10}
                onPress={() => openModal(item.id)}
              />
              {/* </TouchableOpacity> */}
            </View>
          )}
        />
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('home')}>
          <Text
            style={{
              color: Colors.violet,
              fontSize: 14,
              fontWeight: '500',
              marginTop: 5,
              marginBottom:'5%',
            }}>
            + Add more cards
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          bottom: 0,
          height: 65,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          paddingHorizontal: 10,
        }}>
        <View style={{height: '100%', width: '40%', margin: 10}}>
          <Text style={{color: Colors.greytext, fontSize: 10}}>
            Price incl. VAT
          </Text>
          <Text style={{color: Colors.black, fontSize: 16, fontWeight: '500'}}>
            {totalPrice.toFixed(2)} SAR
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: '65%',
            width: '45%',
            backgroundColor: Colors.green,
            margin: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handlePlaceOrder}>
          <Text
            style={{
              color: Colors.white,
              marginHorizontal: 10,
              fontSize: 13,
              fontWeight: '500',
            }}>
            Place Order
          </Text>
        </TouchableOpacity>
      </View>

      {modalVisible ? (
        <>
          <Modal
            // animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Deleteconfirm height={70} width={70} marginTop={30} />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Are you sure ?
                </Text>
                <Text style={{color: 'black', fontSize: 12, marginTop: 6}}>
                  Are you sure you wanted to Delete?
                </Text>
                <View
                  style={{
                    height: '20%',
                    width: '90%',
                    marginVertical: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 15,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      height: '80%',
                      width: '45%',
                      backgroundColor: '#E8E8E8',
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={closeModal}>
                    <Text
                      style={{
                        color: '#A0A0A0',
                        fontWeight: '500',
                        fontSize: 13,
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      height: '80%',
                      width: '45%',
                      backgroundColor: '#FF0025',
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={handleDelete}>
                    <Text
                      style={{color: 'white', fontWeight: '500', fontSize: 13}}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default Cartproduct;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: '30%',
    width: '70%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 16,
    color: 'red',
  },
});
