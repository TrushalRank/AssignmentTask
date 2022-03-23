//----- Import Statement -----//
import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, DeviceEventEmitter, Text, TextInput, TouchableOpacity, View } from "react-native"
import { connect } from "react-redux"
import { Color, Font } from "../../common/styles"
import { Button, Categories, Header, TextBox } from "../../component"
import { addProductsWatcher } from "../../store/actions"
import styles from "./styles"

const AddProduct = ({ categories, addProductsWatcher }: any) => {
    //----- Component State -----//
    const navigation = useNavigation()
    const route = useRoute()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [selectedCat, setCategory] = useState(0)
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [loader, setLoader] = useState(false)

    //----- Component Lifycycles -----//
    useEffect(() => { }, [])

    //----- Custom Functions -----//
    const addProductAPI = () => {
        if (name != '' && price != '' && desc != '' && image != '') {
            setLoader(true)
            let payload = {
                name: name,
                price: price,
                category: categories[selectedCat]?.name,
                description: desc,
                avatar: image,
                DeveloperEmail: 'ranktrushal15@gmail.com'
            }
            addProductsWatcher(payload, (res: any) => {
                setLoader(false)
                DeviceEventEmitter.emit('update')
                navigation.goBack()
            }, (err: any) => { setLoader(false) })
        }
    }

    //----- Return Statement -----//
    return (
        <View style={styles.mainContainer}>
            <Header title={''} isBack={true} onBack={() => navigation.goBack()} />
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <TextBox
                    placeholderText="Product title"
                    onChangeText={(text: any) => { setName(text) }}
                    value={name} />
                <TextBox
                    placeholderText="Price"
                    keyboardType={'number-pad'}
                    onChangeText={(text: any) => { setPrice(text) }}
                    value={price} />
                <TextBox
                    placeholderText="Description"
                    multiline={true}
                    onChangeText={(text: any) => { setDesc(text) }}
                    value={desc} />
                <TextBox
                    placeholderText="Image link"
                    onChangeText={(text: any) => { setImage(text) }}
                    value={image} />
                <View style={styles.categoryViewContainer}>
                    <Text style={[Font.text17]}>Select Category</Text>
                    <Categories
                        isDisplayAll={false}
                        selectedCat={selectedCat}
                        onSelect={(index: any) => { setCategory(index) }}
                    />
                </View>
            </View>
            {
                loader == true ?
                    <View style={styles.buttonContainerStyle}>
                        <ActivityIndicator size={'small'} color={Color.white} />
                    </View>
                    :
                    <TouchableOpacity style={styles.buttonContainerStyle} onPress={() => addProductAPI()}>
                        <Text style={[{ color: Color.white }, Font.text17]}>Add Product</Text>
                    </TouchableOpacity>
            }


        </View>
    )
}

const mapStateToProps = (state: any) => {
    return {
        categories: state.home.categoryData
    };
};
export default connect(mapStateToProps, { addProductsWatcher })(AddProduct)