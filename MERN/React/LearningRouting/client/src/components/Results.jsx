import { Link } from "react-router-dom";
const Results = (props)=>{
    const {posts} = props



    return (
        <>
                    <h1 className="text-center">Your Posts:</h1>
        {
            posts.map( (item, index) => 
                <div key={index}>
                    <Link to={`/results/${item.id}`}>{item.title}</Link>
                    
                </div>
                
            )
        }
           

        </>
    )
}
export default Results;