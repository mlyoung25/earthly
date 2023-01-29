import { useState } from 'react';
import '../App.css';

export default function Reduce() {
    const [modalOpen, setModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <main>
                <h1>Ways to Reduce Your Carbon Footprint</h1>
                <h4>Traveling green isn't the only thing you can do!</h4>
                <div className='all-imgs'>
                    <div className='img-with-caption'>
                        <img src="/imgs/light-bulb-svgrepo-com.svg"></img>
                        <p>The energy used to power lights often comes from burning fossil fuels like coal, 
                            natural gas, and oil, which releases carbon dioxide (CO2) and other greenhouse 
                            gases into the atmosphere. Turning off the lights when they are not in use
                            reduces the amount of energy that needs to be generated, which in turn can 
                            reduce your carbon footprint.</p>
                    </div>
                    <div className='img-with-caption'>
                        <img src="/imgs/air-conditioning-air-conditioner-svgrepo-com.svg"></img>
                        <p>Similar to lights, Air conditioners increase your carbon footprint 
                            because they use a lot of energy, which often comes from burning 
                            fossil fuels like coal, natural gas, and oil. To use your air conditioner
                            in a more environmentally friendly way you can look for environmentally
                            friendly air conditioners, use a programmable thermostat, and keep
                            your air conditioner clean.</p>
                    </div>
                    <div className='img-with-caption'>
                        <img src="/imgs/ghost-svgrepo-com.svg"></img>
                        <p>Phantom power refers to the electricity that is consumed by electronic 
                            devices when they are turned off or in standby mode. This happens 
                            because many devices continue to draw a small amount of power even 
                            when they are not in use, which can add up to a significant amount 
                            of energy over time. To minimize your footprint from phantom power,
                            it is reccomended to use power strips that can automatically turn 
                            off power to devices that are not in use.</p>
                    </div>
                </div>
                <h3>Why should you reduce your carbon footprint?</h3>
                <p>Climate change is caused by the buildup of greenhouse gases in the atmosphere, 
                    which trap heat from the sun and cause the planet to warm up. This warming 
                    is leading to a range of negative impacts, including more extreme weather 
                    events, sea level rise, and changes to the distribution of plants and animals.
                    By reducing your carbon footprint, you are helping to reduce the amount of 
                    greenhouse gases that are released into the atmosphere. This can help to slow 
                    the rate of climate change and reduce the severity of its impacts. Additionally, 
                    by reducing your energy consumption, you can also save money on your energy bills.
                    By reducing your carbon footprint, you are not only helping the environment but 
                    also contribute to a better future for generations to come!</p>
            </main>
        </div>
    );    
}