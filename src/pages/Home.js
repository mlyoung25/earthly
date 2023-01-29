import '../App.css';
import { co2 } from "../utils";

export default function Home() {
    return (<div>
        <body>
            <main>
                <a href="#/Log" role="button"> +Log Your Trip</a>
                <div style={{padding: "100px"}}>
                <h1 className="home-header">
                    You've saved {(co2).toFixed(3)} pounds of CO2!
                </h1>
                </div>
                <article style={{ backgroundColor: "#18453B" }}  >
                    <p style={{fontSize: "30px"}}>
                        Thats equal to {(co2/22).toFixed(3)} trees worth of CO2
                    </p>

                    <img src="/imgs/forest-trees-5075.svg" height="auto" alt="Trees">
                    </img>
                </article>
                <div className="grid">
                    <div>
                        <h3> {(co2/4500).toFixed(3)} lightbulbs </h3>
                        <img className="svg" src="/imgs/lightbulb-on-svgrepo-com.svg" height="70%" width="70%" filter= "invert(100%)" alt="Lightbulbs" />
                    </div>
                    <div>
                        <h3> {(co2/155).toFixed(3)} pounds of beef </h3>
                        <img className="svg" src="/imgs/steak-4-svgrepo-com.svg" height="70%" width="70%" filter= "invert(100%)" alt="Pounds of Beef" />
                    </div>
                    <div>
                        <h3> {(co2/109).toFixed(3)} flights </h3>
                        <img className="svg" src="/imgs/Airplane_silhouette.svg" height="70%" width="70%" filter= "invert(100%)" alt="Flights" />
                    </div>
                    <div>
                        <h3> {(co2/20).toFixed(3)} gallons of gas </h3>
                        <img className="svg" src="/imgs/gas-station-svgrepo-com.svg" height="70%" width="70%" filter= "invert(100%)" alt="Gallon of Gas" />
                    </div>
                </div>
                <div style={{padding: "100px"}}>
                    <h1>
                        History:
                    </h1>
                </div>
                <div style={{padding: "100px"}}>
                    <h1>
                        Friends Activity:
                    </h1>
                </div>
            </main>
        </body>
    </div>)
}