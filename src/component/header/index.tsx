//----- Component Import Statement -----//
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Color, Font, Images } from "../../common/styles";
import colors from "../../common/styles/color";

const Header = (props: any) => {
    return (<View style={style.mainContainer}>
        {
            props.isBack && <TouchableOpacity onPress={() => props.onBack()}>
                <Image source={Images.back} style={style.imageStyle} resizeMode={'contain'} />
            </TouchableOpacity>
        }
        <Text style={[style.titleTextStyle, Font.text25]} >{props.title}</Text>
        {props.isSearch &&
            <TouchableOpacity onPress={() => props.onSearch()}>
                <Image source={Images.search} style={style.imageStyle} />
            </TouchableOpacity>
        }
    </View>)
}

//----- Component Stylesheet -----//
const style = StyleSheet.create({
    mainContainer: {
        height: hp('8%'),
        paddingHorizontal: wp('5%'),
        backgroundColor: colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    titleTextStyle: {
        flex: 1,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: Color.black
    },
    imageStyle: {
        width: wp('8%'),
        height: hp('4%'),
        tintColor: Color.black
    }
})

export default Header;