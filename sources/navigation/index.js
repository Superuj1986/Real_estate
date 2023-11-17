import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeTab from "./homeTab";

const Stack = createStackNavigator();

function AppNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false,}}
            >
                <Stack.Screen name="HomeTab" component={HomeTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;