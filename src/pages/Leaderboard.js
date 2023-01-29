import { useEffect, useState } from 'react';
import '../App.css';
import { supabase } from '../supabaseClient';
import { utils } from '../utils';

export default function Friends() {
    const [modalOpen, setModalOpen] = useState(false);
    const [trips, setTrips] = useState([])
    const [podium, setPodium] = useState({})
    const [inputValue, setInputValue] = useState('');
    let stripEmail = (a) => /* a.split("@")[0] */a.split("@")[0]
    let getPplTrips = async (everyone = false) => {
        // const id = await (await supabase.auth.getUser()).data.user.id
        const { data, error } = await supabase.from("trips")
            .select(`users ( id, email ), miles`)
        let ppl = {}
        for (let i = 0; i < data.length; i++) {
            let { users, miles } = data[i]

            if (ppl[users.email]) {
                ppl[users.email] += miles
            } else {
                ppl[users.email] = miles
            }
        }
        setPodium(() => utils.sortObject(ppl))
    }
    useEffect(() => {
        async function init() {
            await getPplTrips()
        }
        init()
        console.log(podium)
    }, [])
    return (
        <div>
            <main>
                <h1>
                    Local Leaderboard
                </h1>

                {Object.keys(podium).length === 0 ? <progress /> : <div id="podium">
                    <div className="step" id="second">
                        <p className="var-name">{stripEmail(Object.keys(podium)[1])}</p>
                        <img src="/imgs/2nd-place-svgrepo-com.svg" class="overlay-image"></img>
                    </div>
                    <div className="step" id="first">
                        <p className="var-name">{stripEmail(Object.keys(podium)[0])}</p>
                        <img src="/imgs/1st-place-svgrepo-com.svg" class="overlay-image"></img>
                    </div>
                    <div className="step" id="third">
                        <p className="var-name">{stripEmail(Object.keys(podium)[2])}</p>
                        <img src="/imgs/3rd-place-svgrepo-com.svg" class="overlay-image"></img>
                    </div>
                </div>
                }
                <hr/>
                <ol>
                    {Object.entries(podium).map(([k, v]) => <li key={k}>{k} with {v} miles</li>)}
                </ol>
              
            </main>
        </div>
    );
}