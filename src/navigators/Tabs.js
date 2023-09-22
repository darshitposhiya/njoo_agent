import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../assets/colors/Colors';
import { fonts } from '../assets/fonts';
import {Alert, Image} from 'react-native';
import { images } from '../assets/images';
import { vs,hs,fs } from '../utility/ResponsiveStyle';
import Dashboard from '../screens/AppModules/Dashbord/Dashbord';
import History from '../screens/AppModules/History/History';
import Alerts from '../screens/AppModules/Alerts/Alerts';
import Account from '../screens/AppModules/Account/Account';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: colors.Lightblue,
            tabBarInactiveTintColor: colors.Graytab_footer,
            headerShadowVisible: false,
            tabBarShowLabel: true,
            headerTitleStyle: {
                color: colors.Black,
                fontSize: fs(26),
                fontFamily: fonts.Regular,
                fontWeight: '700'
            },
            headerTintColor: colors.Black,
            tabBarLabelStyle: {
                bottom: 5,
                fontSize: 10,
                fontFamily:fonts.Bold
            },
            tabBarStyle: {
                height: 60,
                paddingHorizontal: 10
            }
        }}>

            <Tab.Screen
                name="Dashbord"
                component={Dashboard}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Image
                                source={images.footer.home_active}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: color.Lightblue
                                }}
                            />
                        } else {
                            return <Image
                                source={images.footer.home_deactive}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: color.Lightblue
                                }}
                            />
                        }
                    },
                    headerShown: true,
                    headerTitle: 'Transfer requests',
                    headerStyle: {
                        backgroundColor: colors.white
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'Home',
                })}
            />

            <Tab.Screen
                name="History"
                component={History}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Image
                                source={images.footer.history_active}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: color.Lightblue
                                }}
                            />
                        } else {
                            return <Image
                                source={images.footer.history_deactive}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: color.Lightblue
                                }}
                            />
                        }
                    },
                    headerShown: true,
                    headerTitle: 'History',
                    headerStyle: {
                        backgroundColor: colors.white
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'History'
                })}
            />
           
            <Tab.Screen
                name="Alerts"
                component={Alerts}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Image
                                source={images.footer.alert_active}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: color.Lightblue
                                }}
                            />
                        } else {
                            return <Image
                                source={images.footer.alert_deactive}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: color.Lightblue
                                }}
                            />
                        }
                    },
                    headerShown: true,
                    headerTitle: 'Notifications',
                    headerStyle: {
                        backgroundColor: colors.white
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'Alerts'
                })}
            />

            <Tab.Screen
                name="Account"
                component={Account}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Image
                                source={images.footer.account_active}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: color.Lightblue
                                }}
                            />
                        } else {
                            return <Image
                                source={images.footer.account_deactive}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: color.Lightblue
                                }}
                            />
                        }
                    },
                    headerShown: true,
                    headerTitle: 'Account',
                    headerStyle: {
                        backgroundColor: colors.white
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'Account'
                })}
            />

        </Tab.Navigator>

    );
};

export default Tabs;
