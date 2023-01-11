import React, { useState, useEffect } from 'react';
import Tower from "./Tower"

function App() {
  const [towerArray,setTowerArray]=useState([[1,2,3,4],[0,0,0,0],[0,0,0,0]])
  const [selectedTower,setSelectedTower]=useState(null)
  const [won,setWon]=useState(false)

  useEffect(()=>{
    console.log(towerArray)
    console.log(towerArray[1])
    console.log([1,2,3,4])
    console.log(towerArray[1]==[1,2,3,4])
    if(towerArray[1]==[1,2,3,4] || towerArray[2]==[1,2,3,4]){
      setWon(true)
      console.log("won")
    }
  },[towerArray])
  
  function swap(swapFindex,swapTindex){
    setTowerArray(prevTowerArray=>{
      let firstArray=towerArray[swapFindex]
      let secondArray=towerArray[swapTindex]
      for(let i=0;i<4;i++){
        var num=firstArray[i]
        if(num!=0){
          firstArray[i]=0
          break;
        }
      }
      if(num==0){
        return prevTowerArray
      }
      for(let i=0; i<4;i++){
        if(secondArray.length===i || secondArray[i+1]!=0){
          secondArray[i]=num
          break;
        }
      }
      let rArray=[...prevTowerArray]
      rArray[swapFindex]=firstArray
      rArray[swapTindex]=secondArray
      return rArray
    })
    setSelectedTower(null)
  }
  
  const towerElements=towerArray.map((tower,index)=>{
    return (
      <Tower 
        disks={tower} 
        selectedTower={selectedTower} 
        isSelected={selectedTower===index} 
        selectSelf={()=>setSelectedTower(index)}
        swap={()=>swap(selectedTower,index)}
        key={index}
       />
    )
  })

  return (
    <>
      {towerElements}
      {won && <button className='restartButton' onClick={reset}>Restart</button>}
    </>
  );
}

export default App;