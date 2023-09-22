import React, { useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { colors } from '../assets/colors/Colors';
import { fs, hs, vs } from '../utility/ResponsiveStyle';
import { fonts } from '../assets/fonts';

const TextInputWithLabel = (
    {

        placeHolder,
        onChangeText = () => { },
        onBlur,
        inputStyle = {},
        icon,
        onPressIcon,
        rightText,
        value,
        touched,
        errors,
        ...props
    }) => {

        const textInputRef = useRef();

    return (
        <>
            <View style={{ ...styles.inputStyle, ...inputStyle }}>
                <View style={styles.flexView}>

                    <TextInput
                        placeholder={placeHolder}
                        placeholderTextColor='grey'
                        ref={textInputRef}
                        style={styles.inlineStyle}
                        {...props}
                        value={value}
                        onChangeText={onChangeText}
                        onBlur={onBlur}
                    />

                    {icon && icon()}
                        
                </View>
            </View>

            {
                touched && errors &&
                <Text style={{ color: 'red', fontSize: fs(12),marginTop:vs(3) }}>{errors}</Text>
            }
        </>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: fs(1),
        borderColor: colors.InputGray_Border,
        borderRadius: 5,
        height: hs(55),
        width: '100%',
        justifyContent: 'center'
    },
    inlineStyle: {
        fontSize: fs(18),
        flex: 1,
        color: colors.Black,
        fontFamily:fonts.Regular
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: hs(10)
    }
});

export default TextInputWithLabel;
