import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fonts } from '../assets/fonts';
import AppIntro from '../screens/AuthModules/AppIntroduction/AppIntro';
import SignIn from '../screens/AuthModules/SignIn/SignIn';
import Tabs from './Tabs';
import Dashboard from '../screens/AppModules/Dashbord/Dashbord';
import TransactionDetail from '../screens/AppModules/TransactionDetail/TransactionDetail';
import CreateReceipt from '../screens/AppModules/CreateReceipt/CreateReceipt';
import Signature from '../screens/AppModules/CreateReceipt/Signature';

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            // initialRouteName={flag == false ? "SignIn" : "AppIntro"}
            screenOptions={{
                animation: 'slide_from_right',
                headerBackTitleVisible: false,
                headerShown: false,
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontFamily: fonts.Bold,
                },
                contentStyle: {
                    backgroundColor: 'white'
                },
            }}>

            <Stack.Screen
                name='AppIntro'
                component={AppIntro}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Tabs'
                component={Tabs}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Dashbord'
                component={Dashboard}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <Stack.Screen
                name="TransactionDetail"
                component={TransactionDetail}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <Stack.Screen
                name="CreateReceipt"
                component={CreateReceipt}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <Stack.Screen
                name="Signature"
                component={Signature}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
