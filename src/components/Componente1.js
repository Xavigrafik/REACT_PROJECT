
import React, {useState} from 'react'

export const Componente1 = () => {

    let arr = ['uno', 'dos', 'tres'];

    const[nombre, setNombre] = useState('default!');

    const cambiarNombre = (nom)=> {
        if (nom) {
            setNombre(nom)
        } else {
            setNombre('??')
        }
    }
  return (
    <div>
        <h3>COMPONENTE 1</h3>
        <p>nombre : <strong className={nombre.length >= 4 ? 'bg-verde' : 'bg-rojo'}>{nombre}</strong></p>
        <input onChange={e=>(cambiarNombre(e.target.value))}></input>
        <button onClick={e => (cambiarNombre('NUEVO NOMBRE BOTON'))}>Cambiar nombre</button>
        <ul>
            {
                arr.map((item, i)=>{
                    return (<li key={i}>{item}</li>)
                })
            }
        </ul>



    </div>
    
  )
}
