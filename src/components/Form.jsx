import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [gmail, setGmail] = useState('');
    const [age, setAge] = useState('');
    const [submittedData, setSubmittedData] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        setSubmittedData(`Name: ${name}, Email: ${gmail}`);
        console.log(name, gmail, age);  

     };
    return (
        <div>
            <h3>Details Form</h3>
            <form onSubmit={handlesubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter the Name'
                />
                <br />

                <label>Gmail:</label>
                <input
                    type="text"
                    value={gmail}
                    onChange={(e) => setGmail(e.target.value)}
                    placeholder='Enter Gmail Id'
                />
                <br/>

                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder='Enter The Age'
                />
                <br/>

                <button type='submit'>Submit</button>

            </form>

        </div>
    )
}

export default Form