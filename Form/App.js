import React from 'react'
import { useState } from 'react'
import { Await } from 'react-router-dom'

const App = () => {

    const [form, setForm] = useState({})

    const handleForm = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

   const response = await fetch('http://localhost:8080/demo', {
            method: 'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })

   const data = await response.text();
        console.log(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>{JSON.stringify(form)}</p>
                <span>username</span>
                <input type='text' name='username' onChange={handleForm} /><br></br><br></br>
                <span>password</span>
                <input type='text' name='password' onChange={handleForm} /><br></br><br></br>
                <input type='submit' />
            </form>
        </>
    )
}

export default App