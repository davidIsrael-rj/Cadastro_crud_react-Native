import React, { useState } from "react";
import { Text } from "react-native";

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    return (

        <Text>UserForm  - { user.id}</Text>
    )
}