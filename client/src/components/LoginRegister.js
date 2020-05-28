import React from 'react';
import '../assets/styles/components/Login.scss';
import { useHistory } from 'react-router-dom'
// import useFetch from '../hooks/useFetch'
import useForm from '../hooks/useForm';

const LoginRegister = () => {
    const history = useHistory();
    const register = () => {
        const token = localStorage.getItem('token')
        console.log('TOKEN ' + token)
        const session = sessionStorage.getItem('token')
        const role = sessionStorage.getItem('role')
        console.log('ROLE ' + role)
        if (session && role === "admin") {
            // console.log('session: ' + session)
            fetch('api/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: inputsRegister.name,
                role: inputsRegister.role,
                email: inputsRegister.email,
                password: inputsRegister.password
            })
        }).then(x => x.text())
            .then(x => {
                if (x === 'User created') {
                    return alert('User Created!')
                } else if (x === 'User exists') {
                    alert('User Exists')
                }
            })
        }else{
            alert('Error: You should Admin to create a new User!')
        }
        
    }
    const login = () => {
        fetch('api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: inputsLogin.emailLogin,
                password: inputsLogin.passwordLogin
            })
        }).then(x => x.text())
            .then(x => {
                try {
                    return JSON.parse(x)
                } catch {
                    throw x
                }
            })
            .then(x => {
                // localStorage.setItem('token', x.token)
                sessionStorage.setItem('token', x.token)
                sessionStorage.setItem('role', x.role)
                // alert('res: ' + x.role)
                return history.push("/cameras")
            })
            .catch(e => alert('Error:  ' + e))
    }
    const { inputs: inputsLogin, handleInputChange: handleInputChangeLogin, handleSubmit: handleSubmitLogin } = useForm(login)
    const { inputs: inputsRegister, handleInputChange: handleInputChangeRegister, handleSubmit: handleSubmitRegister } = useForm(register)

    return (
        <div className="container">
            <form onSubmit={handleSubmitLogin}>
                <div className="container_data">
                    <h2>Login</h2>
                    <input className="login__input" type="email" name="emailLogin" placeholder="Email" required="Required"
                        onChange={handleInputChangeLogin} value={inputsLogin.emailLogin}
                    />
                    <input className="login__input" type="password" name="passwordLogin" placeholder="Password" required="Required" pattern="^\S+$"
                        onChange={handleInputChangeLogin} value={inputsLogin.passwordLogin}
                    />
                    <button className="button" type="submit">login</button>
                </div>
            </form>
            {/* FORM TO SEND DATA REGISTER */}
            <form onSubmit={handleSubmitRegister}>
                <div className="container_data">
                    <h2>Register</h2>
                    <input className="login__input" type="text" placeholder="Name" name="name" required="Required"
                        onChange={handleInputChangeRegister} value={inputsRegister.name}
                    />
                    <select className="login__input" value={inputsRegister.role} name="role" onChange={handleInputChangeRegister}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <input className="login__input" type="email" placeholder="Email" name="email" required="Required"
                        onChange={handleInputChangeRegister} value={inputsRegister.email}
                    />
                    <input className="login__input" type="password" placeholder="Password" name="password" required="Required" pattern="^\S+$"
                        onChange={handleInputChangeRegister} value={inputsRegister.password}
                    />
                    <button className="button" type="submit">
                        register
                </button>
                </div>
            </form>
            {/* END FORM TO SEND DATA REGISTER */}
        </div>
    )
}

export default LoginRegister;