import { Link } from "react-router-dom";
import pages from "../pages/routes";
import { utils } from "../utils";

export default function Nav({ children }) {
    return (
        <nav>
            <ul>
                <li><h1> <strong><a href="#" className="primary">e<span className="color-primary">a</span>rthly<span className="color-primary">.</span></a></strong></h1></li>
            </ul>
            <ul>
                <li key="home"><Link to={"/#"}>Home</Link></li>
                {pages.map(({ location, hidden }) =>
                    !hidden &&
                    <li key={location}><Link to={'/' + location.split('/').pop()}>{utils.parseLocationStr(location)}</Link></li>
                )}
                <li>{children}</li>
            </ul>
        </nav>
    )
}