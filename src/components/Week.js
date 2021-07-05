import { APIKey } from "../api";
import './index.scss';
import Loading from './Loading';
import React, { useEffect, useState } from 'react';



const Week = ({ city }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&city=${city}&key=${APIKey}&days=8`)
            .then(res => res.json())
            .then(data => {
                setData(data.data)

            }).finally(() => {
                setLoading(false);
            })

    }, [city])

    return (
        <div>
            {
                data && (
                    <Loading isLoading={loading}>
                        <div>
                            <h2>8-day forecast</h2>
                            {data.map((item, index) => (
                                <div className="days">
                                    <p>{item.datetime}</p>
                                    <img src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}></img>
                                    <p>{item.max_temp} / {item.min_temp} °C </p>
                                    <p>{item.weather.description}</p>
                                </div>
                            ))}
                        </div>
                    </Loading>

                )
            }
        </div>

    );
};

export default Week;