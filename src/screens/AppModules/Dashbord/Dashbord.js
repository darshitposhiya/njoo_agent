import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { colors } from '../../../assets/colors/Colors';
import { images } from '../../../assets/images';
import { getStatusBarHeight } from '../../../utility/Globals';
import { fonts } from '../../../assets/fonts';
import { useNavigation } from '@react-navigation/native';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';

const Dashboard = () => {

    const transfer_request = [
        {
            id: "1",
            name: "johny arthar",
            date: "26 Mar 2023",
            amount: "200.00 EUR"
        },
        {
            id: "2",
            name: "johny arthar",
            date: "26 Mar 2023",
            amount: "200.00 EUR"
        },
        {
            id: "3",
            name: "johny arthar",
            date: "26 Mar 2023",
            amount: "200.00 EUR"
        },
    ]

    const navigation = useNavigation();
    const statusBarHeight = getStatusBarHeight();

    const renderHeader = () => {
        return (
            <View style={{ width: '100%', backgroundColor: colors.white, paddingTop: statusBarHeight }}>
                <View style={{ width: '95%', alignSelf: 'center', marginTop: vs(10), }}>
                    <Text style={{ fontSize: fs(26), color: colors.Black, fontFamily: fonts.Bold, }}>Transfer requests</Text>
                </View>
            </View>
        )
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => {
                return renderHeader();
            }
        });
    }, []);
    return (
        <View style={styles.container}>
            <View style={{ width: '95%', alignSelf: 'center', marginTop: vs(5) }}>
                <FlatList
                    data={transfer_request}
                    renderItem={({ item }) => {
                        return (
                            <Pressable onPress={() => navigation.navigate('TransactionDetail')}>
                                <View style={{ marginTop: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: vs(20), paddingHorizontal: hs(10), borderWidth: 1, borderRadius: 5, borderColor: colors.InputGray_Border }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={images.applogo}
                                            style={{ height: vs(40), width: hs(40), resizeMode: 'contain' }} />

                                        <View style={{ marginHorizontal: hs(10) }}>
                                            <Text style={{ fontSize: fs(16), color: colors.Black, fontFamily: fonts.Bold, }}>{item.name}</Text>
                                            <Text style={{ fontSize: fs(14), color: colors.GreyText, fontFamily: fonts.Regular }}>{item.date}</Text>
                                        </View>
                                    </View>

                                    <Text style={{ fontSize: fs(16), fontFamily: fonts.Bold, color: colors.PrimaryBlue }}>{item.amount}</Text>
                                </View>
                            </Pressable>
                        )
                    }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
});

export default Dashboard;
