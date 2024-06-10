import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
export const LoginPage = () => {
  return (
    <div className='pn-container-principal' >
    
           <main> 
             
                <form action="" >
                    <img src="./Recurso_12x.png" alt="chico" />
                        <h2>Iniciar Sesion </h2>
                          <input type='text' placeholder="Email o numero de telefono"/>
                          <input type='password' placeholder='Contraseña'/>
                          <button type='submit'> <Link to="/Landing"> Iniciar sesion </Link></button>
                            <div className='pn-container-2'>
                                 <span> ¿Aun no tienes cuenta?</span>
                                      <button type='submit'>Registro</button>
                                 <span>¿Olvidaste contraseña?</span>
                       
                            </div>


                </form>



           </main>



    </div>
  )
}
