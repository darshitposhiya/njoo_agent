import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { colors } from '../../../assets/colors/Colors';
import { fonts } from '../../../assets/fonts';
import { vs,hs,fs } from '../../../utility/ResponsiveStyle';
import { useNavigation } from '@react-navigation/native';
import HeaderComp from '../../../components/HeaderComp';
import BtnComp from '../../../components/BtnComp';

const TransactionDetail = () => {

    const navigation = useNavigation();

    const renderHeader = () => {
        return (
            <HeaderComp heading="Detail" onPress={() => navigation.goBack()} />
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: '95%', alignSelf: 'center', }}>
                    <View style={{ marginTop: vs(5) }}>

                        <Row_Box LeftTitle="Name" LeftText="Jenny Arthar" RightTitle="Date" RightText="23 Mar 2023" />
                        <View style={{ borderWidth: 1, borderColor: '#000000', opacity: 0.1, marginTop: vs(15) }} />

                        <Row_Box LeftTitle="Phone number" LeftText="+1 12345678" />
                        <View style={{ borderWidth: 1, borderColor: '#000000', opacity: 0.1, marginTop: vs(15) }} />

                        <Row_Box LeftTitle="Email" LeftText="abc@gmail.com" />
                        <View style={{ borderWidth: 1, borderColor: '#000000', opacity: 0.1, marginTop: vs(15) }} />

                        <Row_Box LeftTitle="From" LeftText="Canada" RightTitle="To" RightText="Camroon" />
                        <View style={{ borderWidth: 1, borderColor: '#000000', opacity: 0.1, marginTop: vs(15) }} />

                        <Row_Box LeftTitle="Sent" LeftText="1000 EUR" RightTitle="Receives" RightText="638,234 XAF" />
                        <View style={{ borderWidth: 1, borderColor: '#000000', opacity: 0.1, marginTop: vs(15) }} />

                        <Row_Box LeftTitle="Pickup location" LeftText="Banque Atantique" />
                        <View style={{ borderWidth: 1, borderColor: '#000000', opacity: 0.1, marginTop: vs(15) }} />

                        <Row_Box LeftTitle="Transaction code" LeftText="6279-2176-4b49-6" />

                    </View>
                    <BtnComp title="Create receipt" onPress={()=>navigation.navigate('CreateReceipt')}
                    btnStyle={{ marginTop: vs(45), marginBottom: vs(10) }} />
                </View>
            </ScrollView>
        </View>
    );
};

const Row_Box = (
    {
        LeftTitle,
        LeftText,
        RightTitle,
        RightText
    }
) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: vs(15) }}>
            <View style={{ width: '60%' }}>
                <Text style={{ fontSize: fs(16), color: colors.Black,fontFamily:fonts.Regular }}>{LeftTitle}</Text>
                <Text style={{ fontSize: fs(18), color: colors.Black, fontFamily: fonts.Bold, marginTop: vs(3) }}>{LeftText}</Text>
            </View>

            <View style={{ width: '40%' }}>
                <Text style={{ fontSize: fs(16), color: colors.Black,fontFamily:fonts.Regular }}>{RightTitle}</Text>
                <Text style={{ fontSize: fs(18), color: colors.Black, fontFamily: fonts.Bold, marginTop: vs(3) }}>{RightText}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default TransactionDetail;
