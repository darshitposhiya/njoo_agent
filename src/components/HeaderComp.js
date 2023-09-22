import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { images } from '../assets/images';
import { colors } from '../assets/colors/Colors';
import { hs, vs, fs } from '../utility/ResponsiveStyle';
import { getStatusBarHeight } from '../utility/Globals';
import { fonts } from '../assets/fonts';

const HeaderComp = (
    {
        heading,
        onPress
    }
) => {

    const statusBarHeight = getStatusBarHeight();

    return (
        <View style={{ width: '100%', backgroundColor: colors.white, paddingTop: statusBarHeight }}>
            <View style={{ width: '95%', alignSelf: 'center', marginTop: vs(10), flexDirection: 'row', alignItems: 'center' }}>
                <Pressable onPress={onPress}>
                    <Image source={images.back_icon}
                        style={{ height: vs(45), width: hs(45), resizeMode: 'contain' }}
                    />
                </Pressable>
                <Text style={{ fontSize: fs(22), color: colors.Black, fontFamily: fonts.Bold, marginHorizontal: hs(10) }}>{heading}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   
});

export default HeaderComp;
