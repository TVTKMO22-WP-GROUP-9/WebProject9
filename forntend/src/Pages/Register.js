import React from 'react'
import axios from 'axios'

export default function Register() {


    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [first_name, setFirst_Name] = React.useState('')
    const [last_name, setLast_Name] = React.useState('')
    const [password, setPassword] = React.useState('')

    //use axios with x-www-form-urlencoded to send data to the backend

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            login_user: username,
            email_user: email,
            fname_user: first_name,
            lname_user: last_name,
            password_user: password
        }
        axios.post('http://localhost:3001/user', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


   



    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /> <br/>
                <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> <br/>
                <input type="First Name" value={first_name} onChange={(e) => setFirst_Name(e.target.value)} placeholder="First Name" /> <br/>
                <input type="Last Name" value={last_name} onChange={(e) => setLast_Name(e.target.value)} placeholder="Last Name" /> <br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}