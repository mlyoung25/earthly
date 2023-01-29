import '../App.css';
import { co2 } from "../utils";
import { supabase } from '../supabaseClient'
import { useState, useRef, useEffect } from 'react';

export default function Home() {
    // const [miles, setMiles] = useState(0)
    const mileRef = useRef()
    const [trips, setTrips] = useState([])
    const [modelOpen, setModelOpen] = useState(false)

    // const [data, setData] = useState({})
    let getTrips = async () => {
        const id = await (await supabase.auth.getUser()).data.user.id
        const { data, error } = await supabase.from("trips").select().eq("uuid", id)
        setTrips(() => data)
    }
    useEffect(() => {
        async function init() {
            await getTrips()
        }
        init()
    }, [])
    let createTrip = async (e) => {
        let miles = mileRef.current?.value
        e.preventDefault();
        if (!miles) {
            return alert("Please enter a valid milage.")
        }
        if (miles <= 0) {
            return alert("Please enter a positive milage.")
        }
        setModelOpen(false)
        const id = await (await supabase.auth.getUser()).data.user.id
        let trip = { miles, uuid: id }
        const { data, error } = await supabase.from("trips").insert([trip])
        if (error) {
            return alert(error.message)
        }
        if (data) {
            console.log(data)
        }
        await getTrips() // refresh with new trips
    }
    return (<div>
        <body>
            <main>
                <button type="submit" onClick={()=>setModelOpen(true)}>Log your recent trip</button>
                {modelOpen && <dialog open>
                    <article>
                        <h1 className='secondary'>
                            Enter miles that have been <code>walked, biked, or carpooled</code>
                        </h1>
                        <input placeholder='Enter milage here' type="number" ref={mileRef} />
                        <button style={{backgroundColor: "red"}} onClick={()=>setModelOpen(false)}>Close</button>
                        <button  onClick={createTrip}>Create</button>

                    </article>
                </dialog>}
                <div style={{ padding: "100px" }}>
                    <h1 className="home-header">
                        You've saved {(co2).toFixed(3)} pounds of CO2!
                    </h1>
                </div>
                <article style={{ backgroundColor: "#18453B" }}  >
                    <p style={{ fontSize: "30px" }}>
                        Thats equal to {(co2 / 22).toFixed(3)} trees worth of CO2
                    </p>

                    <img src="/imgs/forest-trees-5075.svg" height="auto" alt="Trees">
                    </img>
                </article>
                <div className="grid">
                    <div>
                        <h3> {(co2 / 4500).toFixed(3)} lightbulbs </h3>
                        <img className="svg" src="/imgs/lightbulb-on-svgrepo-com.svg" height="70%" width="70%" filter="invert(100%)" alt="Lightbulbs" />
                    </div>
                    <div>
                        <h3> {(co2 / 155).toFixed(3)} pounds of beef </h3>
                        <img className="svg" src="/imgs/steak-4-svgrepo-com.svg" height="70%" width="70%" filter="invert(100%)" alt="Pounds of Beef" />
                    </div>
                    <div>
                        <h3> {(co2 / 109).toFixed(3)} flights </h3>
                        <img className="svg" src="/imgs/Airplane_silhouette.svg" height="70%" width="70%" filter="invert(100%)" alt="Flights" />
                    </div>
                    <div>
                        <h3> {(co2 / 20).toFixed(3)} gallons of gas </h3>
                        <img className="svg" src="/imgs/gas-station-svgrepo-com.svg" height="70%" width="70%" filter="invert(100%)" alt="Gallon of Gas" />
                    </div>
                </div>
                <div style={{ padding: "100px" }}>
                    <h1>
                        History:
                        {trips.map((trip) => <p>{trip.miles} miles on {new Date(trip.created_at).toDateString()}</p>)}
                    </h1>
                </div>
                <div style={{ padding: "100px" }}>
                    <h1>
                        Friends Activity:
                    </h1>
                </div>
            </main>
        </body>
    </div>)
}