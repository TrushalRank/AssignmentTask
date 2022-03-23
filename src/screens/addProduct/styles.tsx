import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Color } from "../../common/styles";

export default StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    textInputStyle: {
        height: hp(5),
        backgroundColor: Color.white,
        borderRadius: wp(2),
        marginVertical: hp(1),
        paddingHorizontal: wp(2)
    },
    textInputDescStyle: {
        height: hp(10),
        backgroundColor: Color.white,
        borderRadius: wp(2),
        marginVertical: hp(1),
        paddingHorizontal: wp(2)
    },
    categoryViewContainer: {
        marginVertical: hp(1)
    },
    buttonContainerStyle: {
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
        marginHorizontal: wp('2%'),
        borderRadius: 10,
        borderColor: Color.black,
        backgroundColor: Color.black,
        borderWidth: 1,
    }
})