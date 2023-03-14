import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSideBarTest from '../../components/RightSideBar/RightSidebarTest'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
    
     <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <QuestionDetails />
        <RightSideBarTest />
    </div>
    </div>
  )
}

export default DisplayQuestion