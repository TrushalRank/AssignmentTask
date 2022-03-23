//----- Component Import Statement -----//
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Color } from "../../common/styles";

const TextBox = ({
    value,
    onChangeText,
    placeholderText,
    keyboardType,
    multiline }: any) => {
    return <TextInput
        onChangeText={(text: any) => { onChangeText(text) }}
        value={value}
        placeholder={placeholderText}
        keyboardType={keyboardType}
        multiline={multiline}
        style={multiline == true ? style.textInputDescStyle : style.textInputStyle} />
}

//----- Component Stylesheet -----//
const style = StyleSheet.create({
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
    }
})

export default TextBox;