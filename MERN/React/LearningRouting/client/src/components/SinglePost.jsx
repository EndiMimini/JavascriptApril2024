import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePost = (props)=>{
    const { id } = useParams();
    const {posts} = props
    const [post, setPost]= useState({})

    useEffect(() => {
        console.log(id, 'title from params')

        
        let results = posts.filter(person => person.id == id)
        console.log(results , 'after filteringg')
            
        setPost(results[0])
        // setPost(filteredPost)
    }, []);


    return (
        <>
        <h1 className="text-center">Single Post:</h1>
       
        <div>
            <p>{post.title}</p>
            <p>{post.description}</p>

        </div>
           
           

        </>
    )
}
export default SinglePost;