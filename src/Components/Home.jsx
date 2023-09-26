import React from 'react'
import videoHome from '../assets/videoHome.mp4'

const Home = () => {
  return (
    <div className="home flex container">
        <div className="mainText">
            <h1>Tu sitio para comprar y vender</h1>
        </div>

        <div className="homeImages flex">
            <div className="videoDiv">
                <video src= {videoHome} autoPlay muted loop className='video'></video>
            </div>
        </div>

    </div>
  )
}

export default Home