/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Delete from '../../assets/images/detele.svg';
import Deleteconfirm from '../../assets/images/deletem.svg';
import { useCart } from '../../store/loginContext';
import Colors from '../../utils/Colors';

const Wishlistbody = () => {

  const {wishlist, dispatch} = useCart();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
      dispatch({ type: 'REMOVE_WISHLIST', payload: selectedItem });
      closeModal();
    }
  };

  return (
    <>
     {
      wishlist && wishlist.length > 0 ? (
        <FlatList
        data={wishlist}
        renderItem={({item}) => (
          <View
            style={{
              height: 120,
              width: '90%',
              backgroundColor: 'white',
              marginTop: 10,
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
              paddingHorizontal: 5,
            }}>
            <Image
              style={{
                height: '80%',
                width: 90,
                resizeMode: 'stretch',
                marginHorizontal: 5,
                alignSelf: 'center',
                borderRadius: 10,
              }}
              source={item.image}
            />
            <View style={{height: '80%', width: '60%', alignSelf: 'center'}}>
              <Text style={{color: 'black', fontWeight: '500'}}>
                {item.name2}
              </Text>
              <Text style={{color: 'black', fontWeight: '500', marginTop: 5}}>
                Card SR 20
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontWeight: '500',
                  marginTop: '10%',
                }}>
                Starts : {item.price}
              </Text>
            </View>
            <TouchableOpacity
              style={{paddingTop: 15, paddingRight: '5%'}}
              onPress={() => openModal(item.id)}
              activeOpacity={0.5}>
              <Delete height={22} width={18} />
            </TouchableOpacity>
          </View>
        )}
      />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:'80%'}}>
          <Text style={{color:Colors.greytext2,fontSize:12}}>No items in wishlist</Text>
        </View>
      )
     }

      {modalVisible ? (
        <>
          <Modal
            // animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Deleteconfirm height={70} width={70} marginTop={15} />
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

export default Wishlistbody;

const styles = StyleSheet.create({
  openButton: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: '28%',
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
