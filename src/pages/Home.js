import '../App.css';

export default function Home() {
    return (<div>
        <body>
            <main>
                <h1 className="home-header">
                    You've saved 'variable' pounds of CO2
                </h1>
                <article style={{ backgroundColor: "#18453B" }}  >
                    <p>
                        Thats equal to 'variable / 22' trees worth of CO2
                    </p>

                    <img src="/imgs/forest-trees-5075.svg" height="auto" alt="Trees">
                    </img>
                </article>
                <div className="grid">
                    <div>
                        <h3> 'variable / 4500' lightbulbs </h3>
                        <img src="/imgs/lightbulb-on-svgrepo-com.svg" height="70%" width="70%" filter= "invert(100%)" alt="Lightbulbs" />
                    </div>
                    <div>
                        <h3> 'variable / 155' pounds of beef </h3>
                        <img src="/imgs/steak-4-svgrepo-com.svg" height="70%" width="70%" filter= "invert(100%)" alt="Pounds of Beef" />
                    </div>
                    <div>
                        <h3> 'variable / 109' flights </h3>
                        <img src="/imgs/Airplane_silhouette.svg" height="70%" width="70%" filter= "invert(100%)" alt="Flights" />
                    </div>
                    <div>
                        <h3> 'variable / 20' gallons of gas </h3>
                        <img src="/imgs/gas-station-svgrepo-com.svg" height="70%" width="70%" filter= "invert(100%)" alt="Gallon of Gas" />
                    </div>
                </div>
            </main>
        </body>
    </div>)
}