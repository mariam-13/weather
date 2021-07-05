import React, { useEffect, useState } from 'react';
import { APIKey } from "../api";
import Loading from './Loading';

const CurrentDay = ({ city }) => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        fetch(`https://api.weatherbit.io/v2.0/current?&city=${city}&key=${APIKey}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setData({
                    cityName: data.data[0].city_name,
                    date: data.data[0].ob_time,
                    temp: data.data[0].temp,
                    description: data.data[0].weather.description,
                    icon: data.data[0].weather.icon
                })

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
                            <p>{data.date}</p>
                            <h2>{data.cityName}</h2>
                            <div className="icon">
                                <img src={`https://www.weatherbit.io/static/img/icons/${data.icon}.png`}></img>
                                <p>{data.temp} °C</p>
                            </div>
                            <p>{data.description}</p>
                        </div>
                    </Loading>
                )

            }

        </div>

    )
};

export default CurrentDay;