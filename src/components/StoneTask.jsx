import React, { useState } from 'react'
import Form from './Form';

function StoneTask () {
    let [playerone, setplayerone]=useState('');
    let [playertwo, setplayertwo]=useState('');
    let [ans, setAns]=useState('');

    function user(choice,player){
        if(player===1){
            setplayerone(choice);
        }
        else{
            setplayertwo(choice);
        }
    }

    function check() {
      console.log('checking...');
      
    if (playerone === "" || playertwo === "") {
      setAns("Both players must choose!");
    } else if (playerone === playertwo) {
      setAns("Draw!");
    } else if (
      (playerone === "stone" && playertwo === "scissors") ||
      (playerone === "paper" && playertwo === "stone") ||
      (playerone === "scissors" && playertwo === "paper")
    ) {
      setAns("Player 1 Wins!");
    } else {
      setAns("Player 2 Wins!");
    }
    console.log(ans);
    
  }

    function reset(){
        setplayerone("");
        setplayertwo("");
        setAns("");      
    }



  return (
    <div>
       <h2>Stone-Paper-Sissor</h2>
       <div>
        <h3>Player 1</h3>
        <button onClick={()=>user("Stone",1)}>Stone</button>
        <button onClick={()=>user("Paper",1)}>Paper</button>
        <button onClick={()=>user("Scissor",1)}>Scissor</button>
        <p>choice:{playerone}</p>
       </div>
       <div>

       <h3>Player 2</h3>
         <button onClick={()=>user("Stone",2)}>Stone</button>
        <button onClick={()=>user("Paper",2)}>Paper</button>
        <button onClick={()=>user("Scissor",2)}>Scissor</button>
        <p>choice:{playertwo}</p>
        </div>
        <button onClick={check}>Show Result</button>
        <button onClick={reset}>Reset</button>
        <h3>{ans}</h3>

        <Form />
    </div>
  );
}

export default StoneTask