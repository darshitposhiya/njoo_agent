import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput, Modal } from 'react-native';
import { colors } from '../../../assets/colors/Colors';
import { fonts } from '../../../assets/fonts';
import { images } from '../../../assets/images';
import { vs, fs, hs, screenHeight } from '../../../utility/ResponsiveStyle';
import HeaderComp from '../../../components/HeaderComp';
import TextInputWithLabel from '../../../components/TextInputWithLabel';
import BtnComp from '../../../components/BtnComp';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const CreateReceipt = () => {

    const navigation = useNavigation();
    const [image, setSelectedImage] = useState();
    const [galary, setGallry] = useState('');
    const [visibles, setVisible] = useState(false);


    if (galary == '1') {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
        setVisible(false)
        setGallry('')
    }
    else if (galary == '2') {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
        setVisible(false)
        setGallry('')
    }


    const renderHeader = () => {
        return (
            <HeaderComp heading="Create receipt" onPress={() => navigation.goBack()} />
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
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: '95%', alignSelf: 'center', }}>

                    <Pressable onPress={() => { setVisible(!visibles) }}
                        style={{ marginTop: vs(20), height: vs(100), width: hs(100), alignSelf: 'center' }}>
                        {
                            image ? (<Image source={{ uri: image }}
                                style={{ height: vs(100), width: hs(100), resizeMode: 'contain', alignSelf: 'center' }} />)
                                :
                                (<Image source={images.take_photo}
                                    style={{ height: vs(100), width: hs(100), resizeMode: 'contain', alignSelf: 'center' }} />)
                        }

                    </Pressable>

                    <TextInputWithLabel placeholder="Receiver name" inputStyle={{ marginTop: vs(15) }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: vs(15) }}>
                        <TextInputWithLabel placeholder='code' inputStyle={{ width: '23%' }} />
                        <TextInputWithLabel placeholder="Receiver phone number" inputStyle={{ width: '75%' }} />
                    </View>

                    <Pressable style={{ marginTop: vs(15), borderWidth: 1, borderColor: colors.InputGray_Border, borderRadius: 5, height: vs(100), justifyContent: 'center', alignItems: 'center', marginBottom: vs(25) }}>
                        <TextInput placeholder='click here to add signature' editable={false} style={{ height: vs(100), fontFamily: fonts.Regular }} />
                    </Pressable>
                </View>

                <BtnComp title="Upload" btnStyle={{ width: '95%', alignSelf: 'center', marginBottom: vs(10) }} />
            </KeyboardAwareScrollView>
            {visibles ? (
                <>
                    <Modal animationType='fade' visible={visibles} transparent={true}>
                        <View style={{
                            backgroundColor: colors.PrimaryBlue, alignSelf: 'center', width: '80%', height: '30%', justifyContent: 'center',
                            marginTop: screenHeight * 0.3, borderRadius: 5,
                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: hs(40) }}>
                                <Pressable onPress={() => setGallry(1)}>
                                    <Image source={images.camera} style={{ height: 40, width: 40, resizeMode: 'contain' }} />
                                </Pressable>
                                <Pressable onPress={() => setGallry(2)}>
                                    <Text style={{ fontSize: fs(20), fontFamily: fonts.Bold, color: colors.white }}>Gallry</Text>
                                </Pressable>
                            </View>
                            <Pressable onPress={() => setVisible(!visibles)}>
                                <Text style={{ fontSize: fs(20), fontFamily: fonts.Bold, color: colors.white, alignSelf: 'center' }}>close</Text>
                            </Pressable>
                        </View>
                    </Modal>
                </>) : ''
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
});

export default CreateReceipt;
