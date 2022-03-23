//----- Import Statement -----//
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from '../screens/home';
import Detail from '../screens/detail';
import AddProduct from "../screens/addProduct";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTransparent: true,
                headerTitle: '',
                headerLeft: () => null
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="AddProduct" component={AddProduct} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;