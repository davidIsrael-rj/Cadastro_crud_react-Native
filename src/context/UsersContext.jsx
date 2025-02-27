import React, { createContext } from "react";
import users from "../data/users";

const UsersContext = createContext({})

export const UsersProvider = props => {
    return (
        <UsersContext.Provider value={{
            state: {
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext