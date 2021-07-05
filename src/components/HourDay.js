import Modal from './Modal';
import { APIKey } from "../api";
import Loading from './Loading';
import React, { useEffect, useState } from 'react';


const HourDay = ({ city }) => {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=${APIKey}&hours=7`)
            .then(res => res.json())
            .then(data => {
                console.log("hour fetch", data);
                setData(data.data)

            }).finally(() => {
                setLoading(false);
            })

    }, [city])

    return (
        <div>
            {
                modal && (
                    <Loading isLoading={loading}>
                        <div className="modal">
                            <Modal closeModal={setModal} title={(<h2>{data[0].datetime}</h2>)}>
                                {data.map((item, index) => (
                                    <div className="hours">
                                        <p>{item.datetime}</p>
                                        <img src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}></img>
                                        <p>{item.app_temp} °C </p>
                                        <p>{item.weather.description}</p>
                                    </div>
                                ))}
                            </Modal>
                        </div>
                    </Loading>

                )
            }

            <button onClick={() => { setModal(true) }} className="Hour">Hourly Forecast</button>
        </div>
    );
};

export default HourDay;