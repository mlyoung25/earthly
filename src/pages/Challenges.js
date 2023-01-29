import '../App.css';
import "./Home.js"
import { conversions, utils } from "../utils";
import { supabase } from '../supabaseClient'
import { useState, useRef, useEffect } from 'react';

export default function Challenges() {
    const [trips, setTrips] = useState([])
    const [total, setTotal] = useState(0)

    let getTrips = async (everyone = false) => {
        const id = await (await supabase.auth.getUser()).data.user.id
        const { data, error } = await supabase.from("trips").select()[everyone ? "neq" : "eq"]("uuid", id)
        setTotal(data.map(({ miles }) => miles).reduce((partialSum, a) => partialSum + a, 0))
        setTrips(() => data)
    }
    useEffect(() => {
        async function init() {
            await getTrips()
        }
        init()
    }, [])

    return (<body>
        <main>
            <p style={{fontSize:"38pt"}}>
                Current Challenges Progress
            </p>
            <div className="grid" style={{marginTop:"-10%"}}>
                <article>
                    <h4> Daily Challenge </h4>
                    <img src="/imgs/runners.svg" style={{height:"50%", width:"50%", alt:"Lightbulbs", filter:"invert(70%)"}}  />
                    <progress value={(conversions.co2(total)).toFixed(1)} max={conversions.co2(2).toFixed(1)}></progress>
                    <p> Find the time today to try and hit 2 pounds of CO2!</p>
                </article>
                <article>
                    <h4> Weekly Challenge </h4>
                    <img src="/imgs/bike.svg" style={{height:"50%", width:"50%", alt:"Lightbulbs", filter:"invert(70%)"}} />
                    <progress value={(conversions.co2(total)).toFixed(1)} max={conversions.co2(14).toFixed(1)}></progress>
                    <p> Challenge yourself to get 14 pounds of CO2!</p>
                </article>
            </div>
            <div className="grid" style={{marginTop:"-20%", marginBottom:"-10%"}}>
                <article>
                    <h4> Monthly Challenge </h4>
                    <img src="/imgs/train.svg" style={{height:"50%", width:"50%", alt:"Lightbulbs", filter:"invert(70%)"}}/>
                    <progress value={(conversions.co2(total)).toFixed(1)} max={conversions.co2(50).toFixed(1)}></progress>
                    <p> Keep it up and reach 50 pounds of CO2!</p>
                </article>
                <article>
                    <h4> Community Challenge </h4>
                    <img src="/imgs/community.svg" style={{height:"50%", width:"50%", alt:"Lightbulbs", filter:"invert(70%)"}}/>
                    <progress value={(conversions.co2(total+300)).toFixed(1)} max={conversions.co2(1000).toFixed(1)}></progress>
                    <p> Team up to collectively save 1000 pounds of CO2!</p>
                </article>
            </div>
        </main>
    </body>)
}

