import React from 'react'
import axios from 'axios'

export default function Login() {


    const [id_user, setId_User] = React.useState('')
    const [password, setPassword] = React.useState('')

    //use axios with x-www-form-urlencoded to send data to the backend

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id_user: id_user,
            password_user: password
        }
        axios.post('http://localhost:3001/login', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


   



    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="id_user" value={id_user} onChange={(e) => setId_User(e.target.value)} placeholder="id_user" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}