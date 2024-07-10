
import Person from "../components/Person"
const Display = (props)=>{
    const {users, setUsers} = props

    return (
        <>
        <div className="d-flex justify-content-evenly">
       
        
        {
            users.map( (iteratableHuman, index) => 
               <Person key={index} iteratableHuman = {iteratableHuman} users={users} setUsers={setUsers}/>
            )
        }
        </div>
        </>
    )
}
export default Display;