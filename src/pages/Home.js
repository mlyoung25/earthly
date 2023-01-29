import '../App.css';
import { conversions, utils } from "../utils";
import { supabase } from '../supabaseClient'
import { useState, useRef, useEffect } from 'react';

export default function Home() {
    // const [miles, setMiles] = useState(0)
    const mileRef = useRef()
    const [trips, setTrips] = useState([])
    const [allTrips, setAllTrips] = useState([])
    const [total, setTotal] = useState(0)
    const [modelOpen, setModelOpen] = useState(false)
    let deleteTrip = async (id) => {
        const uid = await (await supabase.auth.getUser()).data.user.id
        const { data, error } = await supabase.from("trips")
            .delete().eq("uuid", uid).eq("id", id)
        if (error) {
            return alert(error.message)
        }
        if (data) {
        }
        alert("Deleted trip")
        await getTrips()

    }
    // const [data, setData] = useState({})
    let getTrips = async (everyone = false) => {
        const id = await (await supabase.auth.getUser()).data.user.id
        const { data, error } = await supabase.from("trips").select()[everyone ? "neq" : "eq"]("uuid", id)
        setTotal(data.map(({ miles }) => miles).reduce((partialSum, a) => partialSum + a, 0))
        setTrips(() => data)
    }

    
    let getAllTrips = async (everyone=true) => {
        // const id = await (await supabase.auth.getUser()).data.user.id
        const { data, error } = await supabase.from("trips")
            .select(`users ( id, email ), miles, created_at`)
        setAllTrips(data)
    }
    useEffect(() => {
        async function init() {
            await getTrips()
            await getAllTrips()
        }
        init()
    }, [])
    let createTrip = async (e) => {
        let miles = mileRef.current?.value
        e.preventDefault();
        if (!miles) {
            return alert("Please enter your milage.")
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
            alert("Created trip")
        }
        await getTrips() // refresh with new trips
        await getAllTrips()
    }
    return (<div>
        <body>
            <main>
                <div style={{ paddingRight: "30%", paddingLeft: "30%" }}>
                    <button type="submit" onClick={() => setModelOpen(true)}>Log your recent trip</button>
                </div>
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
                <br />
                <div>
                    <h1 className="home-header">
                        You've saved {(conversions.co2(total)).toFixed(1)} pounds of CO2!
                    </h1>
                </div>
                <article style={{ backgroundColor: "#18453B" }}  >
                    <p style={{ fontSize: "30px" }}>
                        That's equal to {(conversions.co2(total) / 22).toFixed(1)} trees worth of CO2
                    </p>

                    <img src="/imgs/forest-trees-5075.svg" height="auto" alt="Trees">
                    </img>
                </article>
                <div className="grid">
                    <div>
                        <h3> {(conversions.co2(total) / 4500).toFixed(2)} lightbulbs </h3>
                        <img className="svg" src="/imgs/lightbulb-on-svgrepo-com.svg" height="70%" width="70%" filter="invert(100%)" alt="Lightbulbs" />
                    </div>
                    <div>
                        <h3> {(conversions.co2(total) / 155).toFixed(2)} pounds of beef </h3>
                        <img className="svg" src="/imgs/steak-4-svgrepo-com.svg" height="70%" width="70%" filter="invert(100%)" alt="Pounds of Beef" />
                    </div>
                    <div>
                        <h3> {(conversions.co2(total) / 109).toFixed(2)} flights </h3>
                        <img className="svg" src="/imgs/Airplane_silhouette.svg" height="70%" width="70%" filter="invert(100%)" alt="Flights" />
                    </div>
                    <div>
                        <h3> {(conversions.co2(total) / 20).toFixed(2)} gallons of gas </h3>
                        <img className="svg" src="/imgs/gas-station-svgrepo-com.svg" height="70%" width="70%" filter="invert(100%)" alt="Gallon of Gas" />
                    </div>
                </div>
                <div style={{ padding: "50px" }}>
                    <h1>
                        History
                    </h1>
                    {trips.reverse().map((trip) => <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
                        <h6 style={{ backgroundColor: "#18453b" }}>
                            {trip.miles} miles on {new Date(trip.created_at).toDateString() + " " + new Date(trip.created_at).toLocaleTimeString()}
                        </h6>
                        <button onClick={(e) => deleteTrip(trip.id)}>Delete</button>
                        <br /><hr/></div>)}
                </div>
                <div>
                    <h1>
                        Recent Activity
                    </h1>
                    {allTrips.length == 0 ? <progress/> : 
                    allTrips.slice(0,5).reverse().map(({miles, users, created_at}) => <div style={{paddingLeft: "15%", paddingRight: "15%"}}> <h6 style={{backgroundColor: "#18453b"}}>{users?.email} saved {conversions.co2(miles).toFixed(2)} pounds of CO2 with a {miles} mile trip on 
                    <br></br>
                   <code> {new Date(created_at).toDateString() + " " + new Date(created_at).toLocaleTimeString() } </code></h6>
</div>)}
</div>
                     </main>
        </body>
    </div>)
}