import React from 'react'
import Guide from '../components/HomePageComponents/Guide'
import Banner from '../components/HomePageComponents/Banner'
import Bottom from '../components/HomePageComponents/Bottom'
import CardBanner from '../components/HomePageComponents/CardBanner'
import TopAd from '../components/HomePageComponents/TopAd'

const Home = () => {
  return (
    <div>
        <br />
        <TopAd/>
        <br />
        <Guide/>
        <br />
        <Banner/>
        <br />
        <CardBanner/>
        <br />
        <Bottom/>   

    </div>
  )
}

export default Home

