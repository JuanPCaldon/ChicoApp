import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'El email es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El email no es válido.';
    }
    if (!password) {
      newErrors.password = 'La contraseña es obligatoria.';
    } else if (password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Aquí puedes manejar el envío del formulario si no hay errores
      console.log('Formulario enviado:', { email, password });
    }
  };




  return (
    <div className='pn-container-principal' >
    
           <main> 
             
                <form onSubmit={handleSubmit} >
                    <img src="./Recurso_12x.png" alt="chico" />
                        <h2>Iniciar Sesion </h2>
                          <input 
                             type="text"
                             placeholder="Email o número de teléfono"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                      
                          />
                           {errors.email && <p className="error">{errors.email}</p>}


                          <input 
                             type="password" 
                             placeholder="Contraseña"
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}


                          />
                          
                          {errors.password && <p className="error">{errors.password}</p>}
                          <span>¿Olvidaste contraseña?</span>

                          <button type='submit'> <Link to="/Landing"> Iniciar sesion </Link></button>
                         
                          <span> ¿Aun no tienes cuenta?</span>
                          <button type='submit'>Registro</button>
                               
                       
                          

                </form>



           </main>



    </div>
  )
}
