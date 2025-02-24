import React from "react";
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens'
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";

enableScreens();

const Stack = createStackNavigator()
export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="UserList">
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                    />

                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    }
})