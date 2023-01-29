import '../App.css';
// @deprecated
export default function Challenges() {
    return (<div>
            <main>
                <h1>
                    Weekly Leaderboard: 
                </h1>
                <div id="podium">
                    <div className="step" id="second">
                         <p className="var-name">Variable 1</p>
                    </div>
                    <div className="step" id="first">
                        <p className="var-name">Variable 2</p>
                    </div>
                    <div className="step" id="third">
                        <p className="var-name">Variable 3</p>
                    </div>
                </div>
            </main>
    </div>)
}