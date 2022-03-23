//----- Import Statement -----//
import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { heightPercentageToDP } from "react-native-responsive-screen"
import { connect } from "react-redux"
import { Font, Images } from "../../common/styles"
import { Header } from "../../component"
import { getProductsSuccess, getProductsWatcher } from "../../store/actions"
import styles from "./styles"

const Detail = ({ getProductsWatcher }: any) => {
    //----- Component State -----//
    const navigation = useNavigation()
    const route = useRoute()
    const [detail, setDetail] = useState(null)

    //----- Component Lifycycles -----//
    useEffect(() => {
        // Api call for get products based on product id
        getProductsWatcher({ id: route?.params?.id },
            async (res: any) => {
                let response = await res;
                !!response && setDetail(response)
            },
            (err: any) => { }
        )
    }, [])

    //----- Return Statement -----//
    return (
        <View style={styles.mainContainer} >
            <Header title={''} isBack={true} onBack={() => navigation.goBack()} />
            <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.scrollViewContentContainerStyle}>
                <View style={styles.scrollViewSubContainer} >
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: detail?.avatar ?? null }}
                            resizeMode={'cover'}
                            style={styles.imageStyle} />
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.descriptionTitleContainerStyle}>
                            <Text style={[styles.textStyle, Font.text23, { flex: 1 }]}>{detail?.name}</Text>
                            <Text style={[styles.textStyle, Font.text23]}>${detail?.price}</Text>
                        </View>
                        <Text style={[styles.textStyle, Font.text15]}>{detail?.description}</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}
const mapStateToProps = (state: any) => {
    return {
    };
};
export default connect(mapStateToProps,
    {
        getProductsWatcher
    })(Detail)