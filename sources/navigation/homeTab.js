import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CartScreen from "../screens/cart";
import MyTabBar from "../components/TabBar";
import HomeScreen from "../screens/home";

const Tab = createBottomTabNavigator();

export default function HomeTab(){
    return(
        <Tab.Navigator
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="CartScreen" component={CartScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}