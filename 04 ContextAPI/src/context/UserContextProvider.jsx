import { UserContext } from "./UserContext";
import React from "react";
// here we are extracting children from the props 
const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;
