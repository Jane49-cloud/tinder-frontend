import React from 'react'
import '../styles/swipebtn.css'

import ReplayIcon from "@mui/icons-material/Replay"
import CloseIcon from "@mui/icons-material/Close"
import StarRateIcon from "@mui/icons-material/StarRate"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FlashOnIcon from "@mui/icons-material/FlashOn"
import  IconButton  from '@mui/material/Button';



export default function SwipeButtons() {
  return (
    <div className='swipeButtons'>
 <IconButton className='swipeButtons_repeat' style={{padding: "3vh", color:"#f5b748" , borderRadius:"50%" , background: '#E8F6FB'}}>
<ReplayIcon fontSize='large'/>
 </IconButton>
 <IconButton className='swipeButtons_left' style={{padding: "3vh", color:"#fec5e67" ,borderRadius:"50%" , background: '#E8F6FB'}}>
<CloseIcon fontSize='large'/>
 </IconButton>
 <IconButton className='swipeButtons_star' style={{padding: "3vh", color:"#62b4f9" ,borderRadius:"50%" , background: '#E8F6FB'}}>
<StarRateIcon fontSize='large'/>
 </IconButton>
 <IconButton className='swipeButtons_right' style={{padding: "3vh", color:"#76e2b3",borderRadius:"50%" , background: '#E8F6FB' }}>
<FavoriteIcon fontSize='large'/>
 </IconButton>
 <IconButton className='swipeButtons_lighting' style={{padding: "3vh", color:"#915dd1",borderRadius:"50%" , background: '#E8F6FB'}}>
<FlashOnIcon fontSize='large'/>
 </IconButton>

      
    </div>
  )
}
