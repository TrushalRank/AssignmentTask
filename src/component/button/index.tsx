//----- Component Import Statement -----//
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Color, Font } from "../../common/styles";

const Button = (props: any) => {
    return (
        <TouchableOpacity
            key={props.item.index}
            onPress={() => props.onSelect(props.item.index)}
            style={[style.buttonContainerStyle, { backgroundColor: props.item.index == props.selectedCat ? Color.white : Color.black, }]}>
            <Text
                key={props.item.index}
                style={[{ color: props.item.index == props.selectedCat ? Color.black : Color.white }, Font.text15]}>
                {props.item.item.name}
            </Text>
        </TouchableOpacity>
    )
}

//----- Component Stylesheet -----//
const style = StyleSheet.create({
    flatListContainerStyle: { alignItems: 'center' },
    buttonContainerStyle: {
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
        marginHorizontal: wp('2%'),
        borderRadius: 10,
        borderColor: Color.black,
        borderWidth: 1
    }
})

export default Button;