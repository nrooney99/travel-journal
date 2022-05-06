import React from "react";
import '../App.css'

export default function Card(data){
    return(
        <section>
            <div className='card-img'>
            <img src={data.item.imageUrl}/>
            </div>
            <div className='card-text'>
                <div className="location">
                    <img src='images/Pointer.png' />
                    <p>{data.item.location.toUpperCase()}</p>
                    <a href={data.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{data.item.title}</h2>
                <h3>{data.item.startDate} - {data.item.endDate}</h3>
                <h4>{data.item.description}</h4>
            </div>
        </section>
    )
}