import React, { useRef, useState } from 'react';
import { View, Text, Image, } from 'react-native';
import PagerView from 'react-native-pager-view';
import { images } from '../../../assets/images';
import { colors } from '../../../assets/colors/Colors';
import FirstIntroScreen from './FirstIntoScreen';
import SecondIntroScreen from './SecondInroScreen';
import ThirdIntroScreen from './ThirdIntroScreen';
import styles from './Styles';
import BtnComp from '../../../components/BtnComp';
import { fs, hs, vs } from '../../../utility/ResponsiveStyle';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../../../assets/fonts';


const AppIntro = () => {
    
    const navigation = useNavigation();
    const [pagePosition, setPagePosition] = useState(0);
    const ref = useRef(null);

    return (
        <View style={{ flex: 1 }}>
            <PagerView style={{ flex: 1 }}
                initialPage={pagePosition}
                ref={ref}
                onPageSelected={(e) => {
                    setPagePosition(e.nativeEvent.position)
                }} >

                <View key="1">
                    <FirstIntroScreen />
                </View>
                <View key="2">
                    <SecondIntroScreen />
                </View>
                <View key="3">
                    <ThirdIntroScreen />
                </View>
            </PagerView>

            <View style={styles.Appintro_BottomView}>
                <View style={styles.Inline_dots}>
                    <View style={{
                        borderWidth: fs(1),
                        height: vs(10),
                        width: hs(10),
                        borderRadius: 20,
                        borderColor: pagePosition == 0 ? colors.Lightblue : "#b2b2b2",
                        backgroundColor: pagePosition == 0 ? colors.Lightblue : "white"
                    }} />

                    <View style={{
                        borderWidth: fs(1),
                        height: vs(10),
                        width: hs(10),
                        borderRadius: 20,
                        marginLeft: hs(5),
                        borderColor: pagePosition == 1 ? colors.Lightblue : "#b2b2b2",
                        backgroundColor: pagePosition == 1 ? colors.Lightblue : "white"
                    }} />

                    <View style={{
                        borderWidth: fs(1),
                        height: vs(10),
                        width: hs(10),
                        borderRadius: 20,
                        marginLeft: hs(5),
                        borderColor: pagePosition == 2 ? colors.Lightblue : "#b2b2b2",
                        backgroundColor: pagePosition == 2 ? colors.Lightblue : "white"
                    }} />

                </View>

                <BtnComp title={pagePosition == 2 ? "Let's go" : 'Next'}
                    onPress={() => {
                        if (pagePosition == 2) {
                             navigation.navigate('SignIn')
                        } else {
                            ref.current?.setPage(pagePosition + 1)
                        }
                    }}
                    btnStyle={{
                        backgroundColor: colors.PrimaryBlue,
                        height: 45,
                        borderRadius: 50,
                        justifyContent: 'center',
                        width: '33%',
                        right: 0,
                        position: 'absolute',
                        bottom: vs(10)
                    }}
                    btnTextStyle={{ fontSize: fs(20), fontfamily:fonts.Bold }}
                    rightIcon={() => (
                        <>
                            {pagePosition == 2 ? null :
                                <Image
                                    source={images.right_arrow}
                                    style={{
                                        height: vs(15),
                                        width: hs(15),
                                        resizeMode: 'contain',
                                        marginLeft: hs(20),
                                        marginTop: vs(2)
                                    }}

                                />
                            }
                        </>
                    )
                    } />

            </View>

        </View>

    );
};



export default AppIntro;
