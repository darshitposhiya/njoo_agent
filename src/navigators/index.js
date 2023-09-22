import React, { Component, useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from './Auth';

const AppContainer = ({ }) => {

    const RootStack = createNativeStackNavigator();

    return (
        <RootStack.Navigator screenOptions={{ headerShown: false, animation: 'none' }} >
            <RootStack.Screen
                name="AuthStack"
                component={AuthStack}
            />
        </RootStack.Navigator>
    );
};

export default AppContainer;
