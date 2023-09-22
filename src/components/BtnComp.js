import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../assets/colors/Colors';
import { fonts } from '../assets/fonts';
import { fs, vs } from '../utility/ResponsiveStyle';

const BtnComp = (
    {
        onPress,
        leftIcon = () => { },
        rightIcon = () => { },
        title,
        btnStyle,
        btnTextStyle
    }
) => {
    return (

        <Pressable
            onPress={onPress}
            style={{ ...styles.btn, ...btnStyle }}>

            {leftIcon ? leftIcon() : null}
            <Text
                style={{ ...styles.btnlabel, ...btnTextStyle }}
            >
                {title}
            </Text>
            {rightIcon ? rightIcon() : null}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: vs(55),
        borderRadius: 25,
        width: '100%',
        backgroundColor: colors.PrimaryBlue
    },
    btnlabel: {
        fontFamily: fonts.Bold,
        color: colors.white,
        fontSize: fs(22),
    }
});

export default BtnComp;
