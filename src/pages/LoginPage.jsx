import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
import InputText from '../components/atoms/Input/InputText.atom.jsx';
import InputPassword from '../components/atoms/Input/InputPassword.atom'



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
      
      <Link to="/Landing">  </Link>
      console.log('Formulario enviado:', { email, password });
    }
  };

//----------------------------------------------------------------------------------

  return (
    <div className='pn-container-principal' >
    
           <main> 
             
                <form onSubmit={handleSubmit} >
                    <img src="./Recurso_12x.png" alt="chico" />
                        <h2>Iniciar Sesion </h2>


                         <InputText 
                              name="IN-LG-Email" 
                              value={email} 
                              placeholder='Email o número de telefono'
                              onChange={(e) => setEmail(e.target.value)} 
                              
                              />

                          {/* <input 
                             type="text"
                             placeholder="Email o número de teléfono"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                      
                          /> */}
                           {errors.email && <p className="error">{errors.email}</p>}

                          <InputPassword 
                              name="IN-LG-Password" 
                              value={password}
                              placeholder='Contraseña'
                              onChange={(e) => setPassword(e.target.value)} 
                               
                          />   
                          {/* <input 
                             type="password" 
                             placeholder="Contraseña"
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}


                          /> */}
                           {errors.password && <p className="error">{errors.password}</p>}
                    



                        <div className='lg-container-recuerdame' >
                           <fieldset className='lg-container-terminos'>
                                <label>
                                  <input name="terms" type="checkbox" role="switch" />
                                  Recuerdame
                                </label>    

                                <span>¿Olvidaste contraseña?</span>
                           </fieldset>
                         
                        </div>

                        
                          <button type='submit'> Iniciar Sesion </button>
                         
                          <span className='lg-span-register'> ¿Aun no tienes cuenta?</span>
                          <button className='lg-btn-register' type='button'><Link className='lg-link' to="/register"> Registrate aqui </Link></button>


                        

                </form>



           </main>



    </div>
  )
}
