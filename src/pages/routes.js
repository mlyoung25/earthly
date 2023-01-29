import Friends from "./Friends";
import Home from "./Home";
import Tracker from "./Challenges";
import Reduce from "./Reduce";
const pages = [
    {location: "", comp: <Home/>},
    {location: "#/friends", comp: <Friends/>},
    {location: "#/challenges", comp: <Tracker/>},
    {location: "#/reduce", comp: <Reduce/>},
    {location: "*", comp: <div><h2>404 - Not Found</h2></div>, hidden: true}
    
]

export default pages;
