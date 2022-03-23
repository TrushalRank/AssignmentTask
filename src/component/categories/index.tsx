//----- Component Import Statement -----//
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from "react-redux";
import { Color, Font } from "../../common/styles";
import Button from "../button";

const Categories = ({ selectedCat, onSelect, categories, isDisplayAll }: any) => {

    //----- Component State -----//
    const [cate, setCate] = useState(categories)

    //----- Component Lifecycles -----//
    useEffect(() => {
        let allCatArr = Object.assign([], categories);
        if (isDisplayAll == true) {
            allCatArr?.findIndex((i: any) => i.id == 0) == -1 && allCatArr?.unshift({ id: 0, name: 'All' })
            setCate(allCatArr)
        }
        else {
            setCate(categories)
        }
    }, [categories, isDisplayAll])

    //----- Component Return Statement -----//
    return (
        <View style={style.mainContainer}>
            <FlatList
                contentContainerStyle={style.flatListContainerStyle}
                horizontal={true}
                data={cate}
                showsHorizontalScrollIndicator={false}
                renderItem={(item: any) => {
                    return <Button
                        item={item}
                        onSelect={(index: any) => onSelect(index)}
                        selectedCat={selectedCat}
                    />
                }}
            />
        </View>
    )
}

//----- Component Stylesheet -----//
const style = StyleSheet.create({
    mainContainer: { height: hp('10%') },
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

const mapStateToProps = (state: any) => {
    return {
        categories: state.home.categoryData
    };
};
export default connect(mapStateToProps, {})(Categories);