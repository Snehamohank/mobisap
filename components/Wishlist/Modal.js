/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Deleteconfirm from '../../assets/images/deletem.svg';

const ModalView = ({closeModal, handleDelete}) => {
  const [modalVisible, setModalVisible] = useState(false);

  // const openModal = () => {
  //     setModalVisible(true);
  // };

  // const closeModal = () => {
  //     setModalVisible(false);
  // };
  return (
    <View style={styles.container}>
      <Modal
        // animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Deleteconfirm height={70} width={70} marginTop={20} />
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '500',
                marginTop: 5,
              }}>
              Are you sure ?
            </Text>
            <Text style={{color: 'black', fontSize: 14}}>
              are you sure you wanted to Delete?
            </Text>
            <View
              style={{
                height: '20%',
                width: '100%',
                marginVertical: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  height: '90%',
                  width: '45%',
                  backgroundColor: '#E8E8E8',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={closeModal}>
                <Text
                  style={{color: '#A0A0A0', fontWeight: '500', fontSize: 15}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: '90%',
                  width: '45%',
                  backgroundColor: '#FF0025',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={handleDelete}>
                <Text style={{color: 'white', fontWeight: '500', fontSize: 15}}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
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
    padding: 20,
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
