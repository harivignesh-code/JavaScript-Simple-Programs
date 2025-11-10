import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Intro = () => {

    let name='praveen'
let colors=['red','orange','red','black','blue','pink','orange']

let listnames=['naveen','hari','praveen','lak','deepak']

let [list,setlist]=useState(listnames)

let [additem,setAdditem]=useState('')

function addhandler(){
  setlist([...list,additem])
  console.log(list);

  setAdditem('')
  
}
let [remove,setremove]=useState('')
function removehandler(){
  let fiteredarr=list.filter(ele=>ele!=remove)

  console.log(fiteredarr);
  
  setlist(fiteredarr)
}



  return (
    <div className=''>
      

      <Button className='m-4 p-5'>click</Button>

      <h1>Variables key = let age='twelve"</h1>

      <p>{name}</p>

      <button style={{backgroundColor:'blue'}}>blue</button>

      <p>{list}</p>

      <input onChange={(e)=>setAdditem(e.target.value)} value={additem}/>
      <button onClick={addhandler}>add</button>


      
      <input onChange={(e)=>setremove(e.target.value)} />
      <button onClick={removehandler}>remove</button>

      {
        colors.map(clr=><button style={{backgroundColor:clr}}>{clr}</button>)
      }

      {
        listnames.map(nam=><div className='card'>

          <h1>{nam}</h1>
          <h2>Btech IT</h2>
          <Button variant='danger'>Contact</Button>
          
           </div>)
      }
    </div>
  )
}

export default Intro
