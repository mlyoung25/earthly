import Leaderboard from "./Leaderboard";
import Home from "./Home";
import Tracker from "./Challenges";
import Reduce from "./Reduce";
const pages = [
    {location: "", comp: <Home/>, hidden: true},
    // {location: "#/home", comp: <Home/>},
    {location: "#/leaderboard", comp: <Leaderboard/>},
    {location: "#/challenges", comp: <Tracker/>},
    {location: "#/reduce", comp: <Reduce/>},
    {location: "*", comp: <div><h2>404 - Not Found</h2></div>, hidden: true}
    
]

export default pages;
