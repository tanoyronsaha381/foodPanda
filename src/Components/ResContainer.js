import React from 'react'
import { useState,useEffect } from 'react'
import ResCard from './ResCard';
const ResContainer = ({resList,isDark}) => {

  return (
    <div className="flex flex-wrap justify-center">
      {resList.map((res)=>(
        <ResCard key={res.info.id} resInfo={res} isDark={isDark}/>
      ))}
    </div>
  )
}

export default ResContainer