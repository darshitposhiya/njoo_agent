import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../assets/colors/Colors';
import { fs, hs, vs } from '../utility/ResponsiveStyle';

const InputComp = ({
    Img,
    onPress,
    input_view,
    placeHolder,
    inlineStyle,
    value,
    touched,
    errors,
    onChangeText = () => { },
    ...props
}) => {

    const textInputRef = useRef();

    return (
        <>
            <View style={{ ...styles.input_box_view, ...input_view }}>
                <View style={{ paddingHorizontal: hs(10) }}>
                    {
                        !!Img ?
                            (
                                <Image source={Img}
                                    style={{
                                        height: vs(25),
                                        width: hs(25),
                                        resizeMode: 'contain'
                                    }} />
                            ) :
                            (
                                <TextInput
                                    placeholder={placeHolder}
                                    placeholderTextColor='grey'
                                    ref={textInputRef}
                                    style={styles.inlineStyle}
                                    {...props}
                                    value={value}
                                    onChangeText={onChangeText}
                                />
                            )
                    }

                </View>

                <Pressable onPress={onPress} style={{right:2,position:'absolute'}}>
                    <Ionicons name='caret-down-outline' size={14} style={{ right: 2,}} color={"#000"} />
                </Pressable>
            </View>
            {
                touched && errors &&
                <Text style={{ color: 'red', fontSize: fs(12), marginTop: vs(3) }}>{errors}</Text>
            }
        </>
    );
};

const styles = StyleSheet.create({
    input_box_view: {
        borderWidth: fs(1),
        borderColor: colors.InputGray_Border,
        borderRadius: 5,
        height: vs(55),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inlineStyle: {
        fontSize: fs(16),
        flex: 1,
    }
});

export default InputComp;
