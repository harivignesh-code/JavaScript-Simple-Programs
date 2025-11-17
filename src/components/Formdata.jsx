import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Formdata = () => {
   let navigate=useNavigate()

    let[word, setWord]=useState({name:'',age:'',language:'',gender:''})
   function get(e){
    setWord({...word,[e.target.name]:e.target.value})
    
    console.log(word);
    console.log(e.target.value);
    
   }
   function sub(e){
    e.preventDefault()
    console.log(word);
      navigate('/game',{state: word})
    
    setWord({name:'',age:'',language:'',gender:''})

    // navigate('/game')  //it will navigate to tne next page
  
   }

   let number=124

   function numberHandler(){

    navigate(`/perfectNumber/${number}`)

   }
  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={sub}>
            <input placeholder='name' onChange={get}name='name' value={word.name}/>
            <br />
            <input placeholder='age' onChange={get}name='age' value={word.age}/>
             <br />
                <label>Gender</label>
                <label>Male
                    <input type='radio' name='gender'value='male' checked={word.gender=='male'} onChange={get}/>
                </label>
                <label>feMale
                    <input type='radio' name='gender'value='female' checked={word.gender=='female'} onChange={get}/>
                </label>
                <br />
                <select name="language" onChange={get} >
                <option value=''>language</option>
                <option value='Java'>Java</option>
                <option value='Python'>Python</option>
                <option value='React'>React</option>
                </select>

                <button>Submit</button>

                <button onClick={numberHandler}>Go to perfect number</button>
        </form>
    </div>
  )
}

export default Formdata