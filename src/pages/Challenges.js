import '../App.css';
import ChallengeSection from '../comps/ChallengeButton'
export default function Challenges() {
    const tempval = 50;
    return (<div>
        <main>
            <h1 className="Challenge header">
                Current Challenges Progress
            </h1>
            <article>
                <p>
                    Daily
                </p>
                <progress value={tempval} max="100"></progress>
                <p>
                    Weekly
                </p>
                <progress value={tempval} max="100"></progress>
                


                <img src="/imgs/forest-trees-5075.svg" height="auto" alt="Trees">
                </img>
            </article>
            <div className="grid">
                <div>
                    <h3> Daily Challenge </h3>
                    
                    <img src="/imgs/johnny-automatic-running.svg" height="70%" width="70%" alt="Lightbulbs" />
                </div>
                <div>
                    <h3> Weekly Challenge </h3>
                    <img src="/imgs/steak-4-svgrepo-com.svg" height="70%" width="70%" alt="Pounds of Beef" />
                </div>
                <div>
                    <h3> Monthly Challenge </h3>
                    <img src="/imgs/Airplane_silhouette.svg" height="70%" width="70%" alt="Flights" />
                </div>
                <div>
                    <h3> Community Challenge </h3>
                    <img src="/imgs/gas-station-svgrepo-com.svg" height="70%" width="70%" alt="Gallon of Gas" />
                </div>
            </div>
        </main>
    </div>)
}

