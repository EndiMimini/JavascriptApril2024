import { useState } from "react"
import {v4 as uuidv4} from 'uuid';

const Form = (props)=>{
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")


    const [emailError, setEmailError]= useState("")
    const [fullNameError, setFullNameError]= useState("")
    const [passwordError, setPasswordError]= useState("")
    const [confirmPasswordError, setConfirmPasswordError]= useState("")

    const [error, setError] = useState("")

    // descructure the users array, the setter and the getter
    const {users, setUsers} = props

    const createUser = (e) => {
        e.preventDefault()

       
        if (emailError || fullNameError || passwordError || confirmPasswordError){
            setError('Your form has some errors. Fix them and try again')
        }
        else{
            let _uuid = uuidv4()
            const newuser = {
                _uuid,
                email,
                fullName,
                password,
                confirmPassword
            }
            setUsers([...users, newuser])
            setEmail("")
            setFullName("")
            setPassword("")
            setconfirmPassword("")
        }
       
    }
    const handleEmail= (e)=>{
        setEmail(e.target.value)
        e.target.value.length < 2?setEmailError('Email is requered'):setEmailError('')
    }

    const handleFullName= (e)=>{
            setFullName(e.target.value)
            e.target.value.length < 2?setFullNameError('Full name is requered'):setFullNameError('')
        }
    


    const handlePassword= (e)=>{
        setPassword(e.target.value)
        e.target.value.length < 2?setPasswordError('Password should be at least 2 charaters.'):setPasswordError('')
    }
        

    const handleConfirmPassword= (e)=>{
        setconfirmPassword(e.target.value)
        e.target.value != password?setConfirmPasswordError('Passwords should match!'):setConfirmPasswordError('')
    }
        
    

    return (
        <>
        <h1>Create a user</h1>
        {
                error?
                <p>{error}</p>:null
            }
        <form onSubmit={createUser}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" onInput={(e)=>handleEmail(e)} placeholder="Enter your email" value={email} />
            </div>
            {
                emailError?
                <p>{emailError}</p>:null
            }
            <div>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" onInput={(e)=>handleFullName(e)} placeholder="Enter your full name" value={fullName} />
            </div>
            {
                fullNameError?
                <p>{fullNameError}</p>:null
            }
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onInput={(e)=>handlePassword(e)} placeholder="Enter your password" value={password} />
            </div>
            {
                passwordError?
                <p>{passwordError}</p>:null
            }
           <div>
                <label htmlFor="confirmPassword">Confirm password:</label>
                <input type="password" id="confirmPassword"  onInput={(e)=>handleConfirmPassword(e)} placeholder="Confirm your password"  value={confirmPassword}/>
            </div>
            
            {
                confirmPasswordError?
                <p>{confirmPasswordError}</p>:null
            }
            <button type="submit">Create</button>
        </form>
        </>
    )
}
export default Form;