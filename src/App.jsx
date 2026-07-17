import {useState } from "react"

import Header from "./components/Header"
import Routes from "./components/Routes"
import Content from "./components/Content"

export default function App(){
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  console.log(isMenuClicked)

  function handleClick(event){
    // console.log(event.type)
    setIsMenuClicked( prev => !prev)
  } 

  return (
    <div>
      <Header 
        handleClick = {handleClick}
      />
      {!isMenuClicked && <Routes />}
      <Content />
    </div>
  )
}
