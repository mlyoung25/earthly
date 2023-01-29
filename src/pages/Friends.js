import { useState } from 'react';
import '../App.css';

export default function Friends() {
    const [modalOpen, setModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <main>
                <h1>
                    Local Leaderboard: 
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
                <ol>
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                    <li>Fourth item</li>
                    <li>Fifth item</li>
                </ol>
                <button onClick={() => setModalOpen(true)}>Find Friends</button>
                {modalOpen && (
                    <dialog open>
                        <article>
                        <p style={{marginBottom: 10}}>Search</p>
                        <div>
                            <input
                                type='text'
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                            />
                        </div>
                        <button onClick={() => setModalOpen(false)}>Close</button>
                        </article>
                    </dialog>
                )}
            </main>
        </div>
    );    
}