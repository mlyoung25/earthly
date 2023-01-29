import '../App.css';
import { conversions } from "../utils";
import { supabase } from '../supabaseClient'
import { useState, useRef, useEffect } from 'react';

export default function Home() {
    // const [miles, setMiles] = useState(0)
    const mileRef = useRef()
    const [trips, setTrips] = useState([])
    const [total, setTotal] = useState(0)
    const [modelOpen, setModelOpen] = useState(false)

    // const [data, setData] = useState({})
    let getTrips = async () => {
        const id = await (await supabase.auth.getUser()).data.user.id
        const { data, error } = await supabase.from("trips").select().eq("uuid", id)
        setTotal(data.map(({ miles }) => miles).reduce((partialSum, a) => partialSum + a, 0))
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
                <button type="submit" onClick={() => setModelOpen(true)}>Log your recent trip</button>
                {modelOpen && <dialog open>
                    <article>
                        <h1 className='secondary'>
                            Enter miles that have been <code>walked, biked, or carpooled</code>
                        </h1>
                        <input placeholder='Enter milage here' type="number" ref={mileRef} />
                        <button style={{ backgroundColor: "red" }} onClick={() => setModelOpen(false)}>Close</button>
                        <button onClick={createTrip}>Create</button>

                    </article>
                </dialog>}
                <div style={{ padding: "100px" }}>
                    <h1 className="home-header">
                        You've saved {(conversions.co2(total)).toFixed(1)} pounds of CO2!
                    </h1>
                </div>
                <article style={{ backgroundColor: "#18453B" }}  >
                    <p style={{ fontSize: "30px" }}>
                        Thats equal to {(conversions.co2(total) / 22).toFixed(1)} trees worth of CO2
                    </p>

                    <img src="/imgs/forest-trees-5075.svg" height="auto" alt="Trees">
                    </img>
                </article>
                <div className="grid">
                    <div>
                        <h3> {(conversions.co2(total) / 4500).toFixed(1)} lightbulbs </h3>
                        <img className="svg" src="/imgs/lightbulb-on-svgrepo-com.svg" height="70%" width="70%" filter="invert(100%)" alt="Lightbulbs" />
                    </div>
                    <div>
                        <h3> {(conversions.co2(total) / 155).toFixed(1)} pounds of beef </h3>
                        <img className="svg" src="/imgs/steak-4-svgrepo-com.svg" height="70%" width="70%" filter="invert(100%)" alt="Pounds of Beef" />
                    </div>
                    <div>
                        <h3> {(conversions.co2(total) / 109).toFixed(1)} flights </h3>
                        <img className="svg" src="/imgs/Airplane_silhouette.svg" height="70%" width="70%" filter="invert(100%)" alt="Flights" />
                    </div>
                    <div>
                        <h3> {(conversions.co2(total) / 20).toFixed(1)} gallons of gas </h3>
                        <img className="svg" src="/imgs/gas-station-svgrepo-com.svg" height="70%" width="70%" filter="invert(100%)" alt="Gallon of Gas" />
                    </div>
                </div>
                <div style={{ padding: "100px" }}>
                    <h1>
                        History:
                        {trips.map((trip) => <p>{trip.miles} miles on {new Date(trip.created_on).toDa}</p>)}
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