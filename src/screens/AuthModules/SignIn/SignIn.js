import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, } from 'react-native';
import { images } from '../../../assets/images';
import { colors } from '../../../assets/colors/Colors';
import BtnComp from '../../../components/BtnComp';
import { fonts } from '../../../assets/fonts';
import TextInputWithLabel from '../../../components/TextInputWithLabel';
import { fs, hs, screenHeight, screenWidth, vs } from '../../../utility/ResponsiveStyle';
import { Formik } from 'formik';
import { loginValidate } from '../../../utility/Validations';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {

    const navigation = useNavigation()
    const [isVisible, setVisible] = useState(true);

    const signinHandler = async (values) => {

        console.log(values)
        navigation.navigate('Tabs')
    }
    return (
        <>
            <View style={styles.container}>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: '95%', alignSelf: 'center', }}>

                        <Image source={images.applogo_login} resizeMode='contain'
                            style={{
                                height: screenHeight * 0.30,
                                width: screenWidth * 0.55,
                                alignSelf: 'center',
                                marginTop: vs(10)
                            }} />

                        <Text style={{ color: colors.Black, fontSize: fs(24), fontFamily: fonts.Bold, }}>Sign In</Text>

                        <Formik
                            initialValues={loginValidate.initialState}
                            validationSchema={loginValidate.schema}
                            onSubmit={(values) => signinHandler(values)}
                        >
                            {({ values, setFieldTouched, handleChange, handleSubmit, errors, touched }) => (
                                <>
                                    <TextInputWithLabel
                                        placeHolder={'Email'}
                                        value={values.username}
                                        onChangeText={handleChange("username")}
                                        onBlur={() => setFieldTouched('username')}
                                        touched={touched.username}
                                        errors={errors.username}
                                        autoCapitalize='none'
                                        keyboardType='email-address'
                                        inputStyle={{ marginTop: vs(20), borderColor: touched.username && errors.username ? 'red' : colors.InputGray_Border, }}
                                    />

                                    <TextInputWithLabel
                                        placeholder={'Password'}
                                        value={values.password}
                                        onChangeText={handleChange("password")}
                                        onBlur={() => setFieldTouched('password')}
                                        touched={touched.password}
                                        errors={errors.password}
                                        secureTextEntry={isVisible}
                                        icon={() => (
                                            <>
                                                <Pressable onPress={() => setVisible(!isVisible)} >
                                                    {
                                                        isVisible ? (<Image style={{
                                                            tintColor: colors.Black, height: vs(14),
                                                            width: hs(20), resizeMode: 'contain'
                                                        }}
                                                            source={images.hide_psw} />)
                                                            :
                                                            (<Image style={{
                                                                tintColor: colors.Black, height: vs(14),
                                                                width: hs(20), resizeMode: 'contain'
                                                            }}
                                                                source={images.visible_psw} />)
                                                    }

                                                </Pressable>
                                            </>
                                        )}
                                        inputStyle={{ marginTop: vs(15), borderColor: touched.password && errors.password ? 'red' : colors.InputGray_Border, }}
                                    />

                                    <BtnComp title="Sign In" onPress={handleSubmit} btnStyle={styles.btnStyle} />
                                </>
                            )}
                        </Formik>

                    </View>
                </KeyboardAwareScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    btnStyle: {
        marginTop: vs(25)
    },
    google_btn: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: colors.white,
        height: vs(55),
        borderRadius: 25,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: fs(1),
        borderColor: colors.InputGray_Border,
        paddingHorizontal: hs(15),
        marginTop: vs(25)
    }
});

export default SignIn;
