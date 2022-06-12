import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {

    const [ data, setData ] = useState({
        userId: "",
        password: "",
    })

    const [error, setError] = useState('')

    const handleChange = ({ currentTarget: input }) => {
        setData({...data,[input.name]: input.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const{ data: res } = await axios.post('http://localhost:5000/api/auth', data)
            console.log(res.message)
            localStorage.setItem("token", res.data)
            window.location = "/"

        } catch (error) {
            if(error.response && 
               error.response.status >= 400 && 
               error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        } 
    }

    return (
        <div>
            <h1>New Here</h1>
            <Link to="/signup">Sign Up</Link>

            <h1>Login to our account</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder='userId' name='userId' value={data.userId} onChange={handleChange} />
                <input type="password" placeholder='password' name='password' value={data.password} onChange={handleChange} />
                <button type="submit">Sign In</button>

                {error && <div>{error}</div>}
            </form>

        </div>
    )
}

export default Login