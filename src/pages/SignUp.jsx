import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const SignUp = () => {

    const [ data, setData ] = useState({
        firstName: "",
        lastName: "",
        userId: "",
        password: "",
    })

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleChange = ({ currentTarget: input }) => {
        setData({...data,[input.name]: input.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const{ data: res } = await axios.post('http://localhost:5000/api/users', data)
            console.log(res.message)

            navigate("/login")

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
            <Link to="/login">Sign In</Link>

            <h1>create account</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='first name' name='firstName' value={data.firstName} onChange={handleChange} />
                <input type="text" placeholder='last name' name='lastName' value={data.lastName} onChange={handleChange} />
                <input type="number" placeholder='userId' name='userId' value={data.userId} onChange={handleChange} />
                <input type="password" placeholder='password' name='password' value={data.password} onChange={handleChange} />
                <button type="submit">Sign up</button>

                {error && <div>{error}</div>}
            </form>

        </div>
    )
}

export default SignUp