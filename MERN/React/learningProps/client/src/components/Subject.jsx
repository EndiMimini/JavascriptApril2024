import { useEffect, useState } from "react"
import Form from "./Form"
const Subject  = (props) => {
    const {name, studentNr, difficulty} = props
    const [description, setDescription] = useState(null)
    const [formVisible, setFormVisible] = useState(false)
    useEffect()
    return (
        <>
        <div>
            <h1>Subject name: {name}</h1>
            <h2>Students number: {studentNr}</h2>
            <p>Description: {description} </p>
            <button onClick={() => setFormVisible(true)}>Update Description</button>
            {
                formVisible?
                <Form description={description} setDescription={setDescription}/>
                :null
            }
        </div>
        </>
    )
}

export default Subject