import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { v4 as uuid } from 'uuid'
const Create = (props)=>{
    const {posts, setPosts} = props
    const [title, setTitle]= useState('')
    const [description, setDescription]= useState('')

    const navigate = useNavigate()
    const sendSurvey = (e) => {
        e.preventDefault();
        const singlePost = {
            id: uuid(),
            title: title,
            description: description
        }
        setPosts([...posts, singlePost])
        
        // When the user clicks the submit input in the form, 
    //we will navigate to the "/results" path
        navigate("/results");
      }

    return (
        <>
            <form  className="w-50 m-auto" onSubmit={ sendSurvey }>
            <h1 className="text-center">Create</h1>

                <div>
                    <label>Title:</label>
                    <input className="form-control" type="text" onChange={ (e) => setTitle(e.target.value) } value={ title } />
                </div>
                <div>
                
                    <label>Description:</label>
                    <textarea className="form-control" onChange={ (e) => setDescription(e.target.value) } value={ description }></textarea>
                </div>
                <input className="btn btn-success mt-2" type="submit" value="Create Post" />
                </form>
                
        </>
    )
}
export default Create;