import { useContext } from "react";
import { UserContext } from "../context/UserContext.js";

const Profile = () => {
    const { user } = useContext(UserContext);

    if (user === null) return <div>Please log in</div>


    return (
        <h3>Welcome {user.username}</h3>
    );
};

export default Profile;
