import React from 'react'

  const handleClick = (e) =>{
    console.log(e);
  }

  const Boton = () => {
    return (
      <button onClick={handleClick}>Click me!</button>
    )
  }



export const ComponentEvento = () => {
  
  return (
    <div className='component'>
        <h3>COMPONENT EVENTO </h3>
        <Boton></Boton>
        <br />
        <Boton></Boton>
    </div>
  )
}

