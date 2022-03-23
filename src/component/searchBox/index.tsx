//----- Component Import Statement -----//
import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Color, Images } from "../../common/styles";

const searchBox = ({ onClose, searchText, onChangeText, onSearch }: any) => {
    return (
        <View style={style.mainContainer}>
            <View style={style.searchViewStyle}>
                <TextInput
                    value={searchText}
                    onChangeText={(text: any) => onChangeText(text)}
                    onSubmitEditing={() => { onSearch() }}
                    style={style.textInputStyle} />
                <TouchableOpacity onPress={() => onClose()}>
                    <Image source={Images.close} resizeMode={'center'} style={style.imageStyle} />
                </TouchableOpacity>
            </View>
        </View>)
}

//----- Component Stylesheet -----//
const style = StyleSheet.create({
    mainContainer: {
        height: hp('8%'),
        flexDirection: 'column',
        backgroundColor: Color.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp('5%')
    },
    searchViewStyle: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Color.brown
    },
    textInputStyle: {
        flex: 1,
        height: hp('5%')
    },
    imageStyle: {
        width: wp('5%'),
        height: hp('5%'),
        tintColor: Color.black
    }
})

export default searchBox;