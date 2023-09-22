import React, { Component } from 'react';
import { View, Text, Image, } from 'react-native';
import { images } from '../../../assets/images';
import styles from './Styles';
import { vs } from '../../../utility/ResponsiveStyle';


const FirstIntroScreen = () => {
    return (
        <>
            <Image source={images.intro1}
                style={styles.introScreenImg} />

            <View style={styles.bottom_view}>
                <Text style={styles.into_title}>
                    Easy,Fast & Trusted
                </Text>

                <View style={{ marginHorizontal: 15 }}>
                    <Text style={[styles.lorem_text, { marginTop: vs(10) }]}>
                        Lorem Ipsum is simply dummy text of the printing
                    </Text>
                    <Text style={styles.lorem_text}>
                        and typesetting industry.
                    </Text>
                </View>
            </View>
        </>
    );
};


export default FirstIntroScreen;
