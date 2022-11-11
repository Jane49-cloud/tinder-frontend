import React from 'react'
import '../styles/header.css'
import PersonIcon from '@mui/icons-material/Person';
import  IconButton  from '@mui/material/Button';
import TinderIcon  from '../assets/tinder.png'
import ForumIcon from '@mui/icons-material/Forum'

export default function Header() {
  return (
 <div className='header'>
    <IconButton>
        <PersonIcon fontSize='large' className='header_icon' />
    </IconButton>

    <img className='header-logo' src={TinderIcon} alt="Tinder" />

    <IconButton>
        <ForumIcon  fontSize='large' className='header_icon'/>
    </IconButton>

     </div>

  )
}
