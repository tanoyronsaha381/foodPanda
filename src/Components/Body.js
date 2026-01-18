import React from 'react'
import Search from './Search'
import ResContainer from './ResContainer'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'

export const Body = () => {

  const isDark = useSelector((store) => store.user.isDarkMode);
  const [resList,setResList] = useState([]);
  const [filteredResList,setFilteredResList] = useState(resList);

  useEffect(()=>{
    resData();
  },[]);

  useEffect(() => {
  const sortedByRatingDesc = [...resList].sort(
    (a, b) => (b.info.avgRating || 0) - (a.info.avgRating || 0));
   setFilteredResList(sortedByRatingDesc);
  }, [resList]);

  const resData = async()=>{
    
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=false&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
/*
    const indiData = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=630353&catalog_qa=undefined&submitAction=ENTER");

if (!indiData.ok) {
  console.error("Request failed", indiData.status);
  return;
}

const text = await indiData.text();

if (!text) {
  console.warn("Empty response body");
  return;
}

const indiJson = JSON.parse(text);
console.log(indiJson);
*/
  }
  
  return (
    <div className={`flex-1 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <Search filteredResList={filteredResList} setFilteredResList={setFilteredResList} resList={resList}/>
        <div className={isDark ? "bg-gray-900 text-white" : "bg-white text-black"}>
            <ResContainer isDark={isDark} resList={filteredResList}/>
        </div>
    </div>
  )
}
