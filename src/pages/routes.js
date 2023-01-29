import Leaderboard from "./Leaderboard";
import Home from "./Home";
import Tracker from "./Challenges";
const pages = [
    {location: "", comp: <Home/>, hidden: true},
    // {location: "#/home", comp: <Home/>},
    {location: "#/leaderboard", comp: <Leaderboard/>},
    {location: "#/challenges", comp: <Tracker/>},
    {location: "*", comp: <div><h2>404 - Not Found</h2></div>, hidden: true}
    
]

export default pages;
