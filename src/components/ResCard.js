import React from 'react'
import { resObj } from '../utils/resObj'

const ResCard = (props) => {
    console.log(props)
    const { id, cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = props?.resname?.info
    return (
        <div className="res-card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="" />
            <h3>{name}</h3>
            <h4 className="cusine">{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{props?.resname?.info?.sla?.deliveryTime} mintus</h4>
        </div>
    )
}

export default ResCard