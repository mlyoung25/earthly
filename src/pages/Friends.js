import '../App.css';

export default function Friends() {
    return (<div>
            <main>
                <h1>
                    Weekly Leaderboard: 
                </h1>
                <div id="podium">
                    <div className="step" id="second">
                         <p className="var-name">Variable 1</p>
                         <img src="/imgs/2nd-place-svgrepo-com.svg" class="overlay-image"></img>
                    </div>
                    <div className="step" id="first">
                        <p className="var-name">Variable 2</p>
                        <img src="/imgs/1st-place-svgrepo-com.svg" class="overlay-image"></img>
                    </div>
                    <div className="step" id="third">
                        <p className="var-name">Variable 3</p>
                        <img src="/imgs/3rd-place-svgrepo-com.svg" class="overlay-image"></img>
                    </div>
                </div>
                <div id="horizontal-bar"></div>
            </main>
    </div>)
}