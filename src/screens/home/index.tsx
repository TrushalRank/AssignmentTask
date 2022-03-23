//----- Import Statement -----//
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, DeviceEventEmitter, FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { Font, Images } from '../../common/styles';
import { Categories, Header, SearchBox } from '../../component';
import styles from './styles';
import {
    deleteProductsWatcher,
    getAllProductsSuccess,
    getAllProductsWatcher,
    getCategorySuccess,
    getCategoryWatcher,
    getProductsWatcher
} from '../../store/actions'


//----- Home Screen -----//
const Home = ({
    getCategoryWatcher,
    getCategorySuccess,
    getAllProductsWatcher,
    getAllProductsSuccess,
    deleteProductsWatcher,
    categories,
    allProductLoader,
    allProductData }: any) => {

    //----- Component State -----//
    const navigation = useNavigation()
    const [isSearch, setIsSearch] = useState(false);
    const [selectedCat, setSelectedCat] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [filterData, setFilterData] = useState([]);

    //----- Component Lifycycles -----//
    useEffect(() => {
        // Api call for get all categories
        getCategoryWatcher('', async (res: any) => getCategorySuccess(await res), (err: any) => { })
        getAllProductsAPI()
        DeviceEventEmitter.addListener('update', () => {
            console.log("update.....")
            getAllProductsAPI()
        })
    }, [])

    useEffect(() => {
        if (selectedCat == 0) {
            // Api call for get all products
            getAllProductsAPI()
        }
        else {
            // filter data based on category name
            let filteredData = allProductData?.filter((data: any) => data.category == categories.find((i: any) => i.id == selectedCat)?.name)
            setFilterData(filteredData)
        }
    }, [selectedCat])

    //----- Custom Functions -----//
    const onSearchPress = () => {
        setIsSearch(true)
    }
    const renderItems = (item: any) => {
        return <TouchableOpacity
            activeOpacity={1}
            style={styles.itemMainContainer}
            onPress={() => { navigation.navigate('Detail', { id: item.item.id }) }}
        >
            <Image source={{ uri: item.item.avatar }} style={styles.itemImageStyle} />
            <View style={styles.itemBottomViewContainer}>
                <Text style={styles.itemTextStyle}>{item.item.name}</Text>
                <View style={styles.itemSubviewContainer} >
                    <Text style={styles.itemTextStyle}>${item.item.price}</Text>
                    <TouchableOpacity onPress={() => deleteProduct(item.item.id)}>
                        <Image source={Images.delete} style={styles.itemEditImageStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    }
    const addButtonView = () => {
        return <TouchableOpacity
            style={styles.addImageContainer}
            onPress={() => { navigation.navigate('AddProduct') }}>
            <Image
                source={Images.add}
                style={styles.addImageStyle} />
        </TouchableOpacity>
    }
    const applyFilter = () => {
        let filterArr = allProductData?.filter((item: any) => item.name.toLowerCase().includes(searchText?.toLowerCase()))
        setFilterData(filterArr)
    }
    const getAllProductsAPI = () => {
        getAllProductsWatcher('',
            async (res: any) => getAllProductsSuccess(await res),
            (err: any) => { }
        )
    }
    const deleteProduct = (id: any) => {
        Alert.alert(
            "Confirmation",
            "Are you sure want to delete product?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        deleteProductsWatcher({ id: id }, (res: any) => {
                            getAllProductsAPI()
                        }, (err: any) => { })
                    }
                }
            ]
        );
    }

    //----- Return Statement -----//
    return (<View style={styles.mainContainer}>
        <Header title={'UPaymment Store'} isSearch={true} onSearch={() => onSearchPress()} />
        {isSearch && <SearchBox
            searchText={searchText}
            onChangeText={(text: any) => { setSearchText(text); text?.length > 2 && applyFilter() }}
            onSearch={() => { applyFilter() }}
            onClose={() => { setIsSearch(false); setSearchText(''); setFilterData([]) }} />}
        {addButtonView()}
        <Categories
            isDisplayAll={true}
            selectedCat={selectedCat}
            onSelect={(index: any) => setSelectedCat(index)}
        />
        <View style={{ height: hp('74%') }}>
            <FlatList
                data={(searchText !== '' || selectedCat !== 0) ? filterData : allProductData}
                style={{ flex: 1 }}
                numColumns={2}
                columnWrapperStyle={{ flexWrap: 'wrap' }}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: hp(10) }}
                renderItem={(item: any) => renderItems(item)}
                extraData={(item: any) => item?.id.toString()}
                ListEmptyComponent={() => {
                    return <View style={styles.emptyComponentViewContainer}>
                        <Text style={Font.text17}>No Result Found</Text>
                    </View>
                }}
            />
        </View>
    </View >)
}

const mapStateToProps = (state: any) => {
    return {
        categories: state.home.categoryData,
        allProductData: state.home.allProductData,
        allProductLoader: state.home.allProductLoader
    };
};
export default connect(mapStateToProps,
    {
        getCategoryWatcher,
        getCategorySuccess,
        getAllProductsWatcher,
        getAllProductsSuccess,
        getProductsWatcher,
        deleteProductsWatcher
    })(Home);