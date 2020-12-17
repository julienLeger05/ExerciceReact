
import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colors'
import {IBarathon,IPub} from '../types/api'
import Button from './Button'
import LeafletMap from './LeafletMap'

interface IProps{
    barathon:IBarathon;
    pubs:IPub[];
}

  
const BarathonThumbmail=({barathon,pubs}:IProps):JSX.Element=>{  
    const [isOpen,setIsOpen]= useState<boolean>(false);
    const toggleMap=()=>{
        setIsOpen(!isOpen)
    }
    const selectedPubs= barathon.checkpoints.map((checkpoint:string)=>{
        return pubs.find((pub:IPub)=>pub._id==checkpoint)
    })
return(
    <SBarathon>
    <STitle>
    {barathon.name}
    </STitle>
    <SAuthor>
        {barathon.author}
    </SAuthor>
<Button onClick={toggleMap} type="button">{isOpen?  'hide':'seeMap'}</Button>
    {isOpen && (<LeafletMap  selectedPubs={selectedPubs} pubs={selectedPubs} />)}
    </SBarathon>
)

}
const SAuthor= styled.div`
color: ${colors.white};
font-size:12px;
`
const STitle= styled.div`
color:${colors.white};
`
const SBarathon=styled.div`
padding:15px;
background:${colors.darkGrey};
margin-bottom:4px;

`
export default BarathonThumbmail