const Form = (props) =>{
    const {description, setDescription} = props
    return (
        <>
        <p>{description}</p>
        <input type="text" onInput={(e)=>setDescription(e.target.value)} />
           
        </>
    )
}
export default Form;