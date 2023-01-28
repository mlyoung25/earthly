import { Link } from "react-router-dom";
import pages from "../pages/routes";
import { utils } from "../utils";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><h1> <strong><a href="#" className="primary">e<span className="color-primary">a</span>rthly<span className="color-primary">.</span></a></strong></h1></li>
            </ul>
            <ul>
            
            {pages.map(({location, hidden})=> 
                !hidden &&
                <li key={location}><Link to={'/' + location.split('/').pop()}>{utils.parseLocationStr(location)}</Link></li>
            )}
             {/*    <li><a href="#/friends">Friends</a></li>
                <li><a href="#/tracker">Tracker</a></li>
                <li><a href="#" role="button">Button</a></li> */}
            </ul>
        </nav>
    )
}