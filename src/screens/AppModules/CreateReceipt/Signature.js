import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import SignatureCapture from 'react-native-signature-capture'


const Signature = () => {

    const saveSign = () => {
        console.log("save")
    }

    const resetSign = () => {
        console.log("reset")
    }

    const _onSaveEvent = (result) => {

        console.log(result);
    }
    const _onDragEvent = () => {

        console.log("dragged");
    }


    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={{ alignItems: "center", justifyContent: "center" }}>Signature Capture Extended </Text>
            <SignatureCapture
                style={[{ flex: 1 }, styles.signature]}
                onSaveEvent={_onSaveEvent}
                onDragEvent={_onDragEvent}
                saveImageFileInExtStorage={false}
                showNativeButtons={false}
                showTitleLabel={false}
                backgroundColor="#ff00ff"
                strokeColor="#ffffff"
                minStrokeWidth={4}
                maxStrokeWidth={4}
                viewMode={"portrait"} />

            <View style={{ flex: 1, flexDirection: "row" }}>
                <Pressable style={styles.buttonStyle}
                    onPress={() => saveSign()} >
                    <Text>Save</Text>
                </Pressable>

                <Pressable style={styles.buttonStyle}
                    onPress={() => resetSign()} >
                    <Text>Reset</Text>
                </Pressable>

            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    signature: {
        flex: 1,
        borderColor: '#000033',
        borderWidth: 1,
    },
    buttonStyle: {
        flex: 1, justifyContent: "center", alignItems: "center", height: 50,
        backgroundColor: "#eeeeee",
        margin: 10
    }
});

export default Signature;
