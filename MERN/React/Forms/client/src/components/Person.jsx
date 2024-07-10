import { useState } from "react"


const Person = (props) => {
    const {iteratableHuman, users, setUsers} = props
    const [newEmail, setNewEmail] = useState("")
    const deleteUser = (uuidOfUser) => {
        setUsers(users.filter(user => user._uuid !== uuidOfUser))
    }
    const updateUser = (uuidOfUser) =>{
        let newUsersList = []
        
        users.map((iteratableHuman, index) => {
            
            if (iteratableHuman._uuid !== uuidOfUser){
                return iteratableHuman
            }
            else{
                let newUser = {
                    _uuid : iteratableHuman._uuid,
                    email: newEmail,
                    password: iteratableHuman.password,
                    confirmPassword: iteratableHuman.confirmPassword
                }
                return newUser

            }
        
           
        })
    }
    return (
        <div className="card" style={{width: "18rem"}}>
            <h3>{iteratableHuman.email}</h3>
            <ul>
                <li>Full name: { iteratableHuman.fullName }</li>
                <li>Password: { iteratableHuman.password }</li>
                <li>Id: {iteratableHuman._uuid}</li>
                <button className="btn btn-outline-danger" onClick={(e)=>deleteUser(iteratableHuman._uuid)}>Delete</button>
            </ul>
        </div>
    )
}

export default Person;