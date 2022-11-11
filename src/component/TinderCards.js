import React , { useState, useEffect}from 'react'
import '../styles/cards.css'
import TinderCard from 'react-tinder-card'
import TinderIcon  from '../assets/tinder.png'
import axios from "./axios"



export default function TinderCards() {
const [people, setPeople] = useState([])

useEffect(()=>{
    const fetchData = async () =>{
        const req = await axios.get('/tindercards')
        setPeople(req.data)
        console.log(people)
           }
           fetchData()
    
},[people.name])

const swiped =(direction, nametodelete)=>{
    console.log( `removing ${nametodelete}`)
}  

const outOfFrame =(name)=>{
    console.log( ` ${name}  left the screen`)
}
  return<div className='tinderCards'>
    <div className="tinder_cards_container">        
    {
            people.map((person)=>{
               
                return <TinderCard
                    className='swipe'
                    key={person._id}
                    preventSwipe={["up", "down",]}
                    onSwipe ={(dir)=>swiped(dir, person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                    >
                        <div style={{
                         backgroundImage: `url(${person.image})`,
                        }}
                        className ='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                       
                    </TinderCard>
             
                        
            })
        }
          

    </div  >

   
     
    </div>

}
