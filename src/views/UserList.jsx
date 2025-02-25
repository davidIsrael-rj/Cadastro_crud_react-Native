import React from "react";
import { FlatList, Text, View } from "react-native";
import users from "../data/users";
import { Avatar, ListItem } from "@rneui/themed";
import LinearGradient from "react-native-linear-gradient";
import TouchableScale from "react-native-touchable-scale";

export default props => {

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
            style={{ paddingTop:5}}
            onPress={()=> props.navigation.navigate('UserForm')}
            >
                <Avatar
                    rounded
                    source={{uri:user.avatarUrl }}
                />
                <ListItem.Content>
                    <ListItem.Title
                        style={{color:"white", fontWeight:"bold"}}
                    >{user.name}</ListItem.Title>
                    <ListItem.Subtitle
                        style={{color:"white"}}
                    >{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron color="white"/>
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