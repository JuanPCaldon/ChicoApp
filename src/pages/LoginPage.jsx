import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
export const LoginPage = () => {
  return (
    <div>
         <section>
                <h1> Chico</h1>

         </section>
           <main >
                <form action="">
                         <h1>Iniciar Sesion </h1>
                    <input type='text' placeholder="Email o numero de telefono"/>
                    <input type='password' placeholder='Contraseña'/>
                    <button type='submit'> <Link to="/Landing"> Iniciar sesion </Link></button>
                    <div className='pn-container-2'>
                        <span>O</span>
                        <button type='submit'>Usar un codigo de inicio de sesion</button>
                        <span>¿Olvidaste contraseña?</span>
                       
                    </div>


                </form>



           </main>



    </div>
  )
}
