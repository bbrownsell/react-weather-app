import React from 'react'

const Weather = ({city, temp, desc, icon, background}) => {
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
    const celcius = Math.round(parseFloat(temp)-273.15);

    return (
        <div className={`weather ${background}`}>
            <h2 className="city">{city}</h2>
            <div className="temp">{celcius}&deg;c</div>
            <div className="description">{desc}</div>
            <div className="icon">
                <img src={iconUrl} alt={desc} className="icon-img"/>
            </div>
        </div>
    );
}
 
export default Weather;