import React from 'react'
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import "../../App.css"
const Home = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <HomeMainBar />
        <RightSideBar />

      </div>
    </div>
  )
}

export default Home