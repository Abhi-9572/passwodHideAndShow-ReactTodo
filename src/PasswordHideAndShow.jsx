import React, { useEffect, useState } from 'react'

const PasswordHideAndShow = () => {
   

   
        const[passType,setPassType]=useState("password")
        const[passwordGiven,setPasswordGiven]=useState("")

        const handlePasswordChange=(e)=>
        {
           setPasswordGiven(e.target.value)
        }

   const showAndHide=()=>
   {
    if(passType=="password")
    {
        setPassType("text")
        return;
   }
   setPassType("password")
}

  return (
    <>

     <input type={passType}  value={passwordGiven} onChange={handlePasswordChange}/>
     <button onClick={showAndHide}>show</button>
    </>
    
  )
}

export default PasswordHideAndShow