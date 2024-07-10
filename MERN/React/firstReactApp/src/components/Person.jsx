const Person = (props) => {
    
    const {firstName, lastName} = props

    return (
        <>
            <h1>First Name: {firstName}</h1>
            <h2>Last Name: {lastName}</h2>
        </>
    )
}
export default Person;