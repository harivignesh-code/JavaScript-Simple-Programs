import React, { useState } from 'react'
import { use } from 'react'

const Inputelemnts = () => {

    const [name, setname] = useState('hari')

    const [color, setColor] = useState('')

    function colorHandler(e) {
        console.log(e);
        console.log(e.target);


    }

    let [num1, setnum1] = useState(0)
    let [num2, setnum2] = useState(0)
    let [result, setResult] = useState('000')

    function findsum() {

        console.log(typeof (num1));
        console.log(num2);

        let answer = parseInt(num1) + parseInt(num2)
        setResult(answer)

    }


    const age = 13

    return (
        <div>

            <input placeholder='type your name' onChange={(e) => setname(e.target.value)} />
            <input placeholder='type your color' onChange={colorHandler} />
            <input placeholder='num1' onChange={(e) => setnum1(e.target.value)} />
            <input placeholder='num2' onChange={(e) => setnum2(e.target.value)} />

            <button onClick={findsum}>add</button>


            <p>{result}</p>


        

            <p>my name is {name}</p>

            <p>{age}</p>
        </div>
    )
}

export default Inputelemnts
