/* eslint-disable prettier/prettier */
import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Nav from './navigation/Nav';
import { ApiProvider, CartProvider } from './store/loginContext';


const App = () => {
    return (
        // <ApiProvider>
        <CartProvider>
            <NavigationContainer>
                <SafeAreaProvider>
                    <SafeAreaView style={{ flex: 1 }}>
                        <Nav />
                    </SafeAreaView>
                </SafeAreaProvider>
            </NavigationContainer>
            </CartProvider>
        // </ApiProvider>
    )
}

export default App

const styles = StyleSheet.create({})