import React from 'react'

const User = (props) => {
    const {firstName, lastName} = props
  return (
    <div style={{border:"1px solid black", padding:"20px"}}>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>

    </div>
  )
}

export default User
