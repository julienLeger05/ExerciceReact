import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import {IBarathon,IPub} from '../types/api'
import BarathonThumbmail from './BarathonThumbmail'
 interface IProps{
     pubs:IPub[];
     barathons:IBarathon[];
 }
const BarathonList=({barathons,pubs}:IProps):JSX.Element=>{
  

    return(
    <>
   
       {barathons.map((barathon:IBarathon)=>{
           return(
               <BarathonThumbmail barathon={barathon} pubs={pubs} ></BarathonThumbmail>
           )
       })}
      
    </>
)
}


export default BarathonList