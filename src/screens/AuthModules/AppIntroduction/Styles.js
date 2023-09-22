import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/colors/Colors';
import { fs, screenHeight, vs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white
    },
    introScreenImg: {
        width: "100%",
        height: screenHeight * 0.60,
        resizeMode: 'stretch'
    },
    bottom_view: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 75
    },
    into_title: {
        color: colors.Black,
        fontFamily:fonts.Bold,
        fontSize: fs(22),
        textAlign:'center',
        alignSelf:'center'
    },
    lorem_text: {
        color: colors.Black,
        fontSize: fs(14),
        textAlign:'center',
        fontFamily:fonts.Regular
    },
    Appintro_BottomView: {
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Inline_dots: {
        position: 'absolute',
        bottom: vs(22),
        flexDirection: 'row',
    }

})

export default styles;