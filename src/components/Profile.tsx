import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import Mario from "./Mario";
import Luigui from "./Luigui";
import DefaultProfile from "./DefaultProfile";

function Profile(){
    const {name} = useParams();
    return(
        <div>
            <h1>Profile Page!</h1>
            <p>Something is happening here...</p>
            <li><Link to="/" >Regresar</Link></li>
            { name === "mario" ? (<Mario />) : name === "Luigui" ? (<Luigui />): (<DefaultProfile />)}
            <Outlet />
        </div>
    );
}

export default Profile;