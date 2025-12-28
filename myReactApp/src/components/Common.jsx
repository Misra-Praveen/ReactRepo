import React from 'react'

const Common = (props) => {
  return (
    <>
        <h1>{props.h1Text}</h1>
        {
          props.h1Text2 && <h1>{props.h1Text2}</h1>
        }
        
        {
          props.pText && <p>{props.pText}</p>
        }
    </>
  )
}

export default Common