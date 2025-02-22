import React from "react";
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens'
import { SafeAreaView, StyleSheet, Text } from "react-native";

enableScreens();

export default props => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                Cadastro CRUD
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
        backgroundColor: '#fff'
    }
})