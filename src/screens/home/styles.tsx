import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Color } from "../../common/styles";

export default StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    itemMainContainer: {
        height: hp('25%'),
        width: "44%",
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    itemImageStyle: {
        width: wp(44),
        height: hp(20),
    },
    itemBottomViewContainer: {
        width: wp(44),
        height: hp(5),
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: Color.black,
        padding: 5,
    },
    itemTextStyle: { flex: 1, color: Color.white },
    itemSubviewContainer: { flex: 1, flexDirection: 'row' },
    itemEditImageStyle: { width: wp(3), height: hp(2), tintColor: Color.white },
    addImageContainer: {
        alignSelf: 'flex-end',
        bottom: 0,
        right: 20,
        position: 'absolute',
        zIndex: 99,
        backgroundColor: Color.white,
        borderRadius: 35
    },
    addImageStyle: {
        width: 50,
        height: 50
    },
    emptyComponentViewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})