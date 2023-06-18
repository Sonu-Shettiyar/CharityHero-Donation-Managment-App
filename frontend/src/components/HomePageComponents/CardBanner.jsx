import React from 'react'
import "../../styles/homecss/cardbanner.css"
import yourself from "../../images/start-yourself@2x.png"
import family from "../../images/start-friends-Family@2x.png"
import charity from "../../images/start-charity@2x.png"

const CardBanner = () => {
  return (
    <div className='CBMain'>
        <div>
            <p>Make your Impact</p>
            <h2>FundRaise For ....</h2>
        </div>
        <div>
            <img width={"100%"} src={yourself} alt="" />
            <div>Yourself</div>
        </div>
        <div>
            <img width={"100%"} src={family} alt="" />
            <div>Family</div>
        </div>
        <div>
            <img width={"100%"} src={charity} alt="" />
            <div>Charity</div>
        </div>
    </div>
  )
}

export default CardBanner