// import React from 'react'
import Navbar from "../navbar/navbar"
import Fourthsection from "../fourthsection/Fourthsection"
import Teammember1 from "../team members/Teammember1"
// import Teammember2 from "../team members/Teammember2"
// import Advisors from "../team members/Advisors"

const Teamspage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Teammember1></Teammember1>
        {/* <Teammember2></Teammember2>
        <Advisors></Advisors> */}
        <Fourthsection></Fourthsection>
    </div>
  )
}

export default Teamspage