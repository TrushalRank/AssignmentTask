import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../common/styles";

export default StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    scrollViewContainer: {
        flex: 1
    },
    scrollViewSubContainer: {
        flex: 1
    },
    scrollViewContentContainerStyle: {
        flexGrow: 1
    },
    imageContainer: {
        // flex: 0.5
    },
    imageStyle: {
        width: '100%',
        height: hp(30)
    },
    contentContainer: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: Color.black,
        padding: 15
    },
    textStyle: {
        color: Color.white
    },
    descriptionTitleContainerStyle: {
        flexDirection: 'row',
        marginBottom: hp(2)
    }
})