import React, { useContext } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import users from "../data/users";
import { Avatar, Button, ListItem } from "@rneui/themed";
import LinearGradient from "react-native-linear-gradient";
import TouchableScale from "react-native-touchable-scale";
import { Icon } from "@rneui/base";
import UsersContext from "../context/UsersContext";

export default props => {

    useContext(UsersContext)

    function confirmaUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim', onPress() {
                    console.warn('delete ' + user.id + ' - '+user.name)
                }
            },
            { text: 'Não' }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="#FFF" />}
                />
                <Button
                    onPress={() => confirmaUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="#FFF" />}
                />
            </>
        )
    }
    function getUserItem({ item: user }) {
        return (
            <ListItem

                key={user.id}
                bottomDivider
                Component={TouchableScale}
                friction={90}
                tension={100}
                activeScale={0.95}
                linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                }}
                ViewComponent={LinearGradient}
                style={{ paddingTop: 5 }}
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar
                    rounded
                    source={{ uri: user.avatarUrl }}
                />
                <ListItem.Content>
                    <ListItem.Title
                        style={{ color: "white", fontWeight: "bold" }}
                    >{user.name}</ListItem.Title>
                    <ListItem.Subtitle
                        style={{ color: "white" }}
                    >{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {/* <ListItem.Chevron color="white" /> */}
                {getActions(user)}
            </ListItem>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}