import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
import InputText from '../components/atoms/Input/InputText.atom.jsx';
import InputPassword from '../components/atoms/Input/InputPassword.atom'
import Heading from '../components/atoms/Labels/Heading.atom.jsx';
import Checkbox from '../components/atoms/Input/Checkbox.atom.jsx';
import  Button from '../components/atoms/Button/Button.atom.jsx';




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
                    {/* <Heading level={1} className="custom-heading">
                        Iniciar Sesion
                    </Heading> */}

                         <InputText 
                              name="IN-LG-Email" 
                              value={email} 
                              placeholder='Email o número de telefono'
                              onChange={(e) => setEmail(e.target.value)} 
                              
                              />

                      
                           {errors.email && <p className="error">{errors.email}</p>}

                          <InputPassword 
                              name="IN-LG-Password" 
                              value={password}
                              placeholder='Contraseña'
                              onChange={(e) => setPassword(e.target.value)} 
                               
                          />   
                     
                           {errors.password && <p className="error">{errors.password}</p>}
                    
{/* 
                           <Checkbox
                                  id="exampleCheckbox"
                                  name="example"
                                  checked={false}
                                  // onChange={handleCheckbxoChange}
                                  label="Recuerdame"
                                /> */}

                       

                            <Link href="https://example.com" className="custom-link"
                                      // onClick={handleLinkClick}
                                      >
                                      ¿Olvidaste tu contraseña?
                                    </Link>


                         
        
                        
                            <Button 
                              className="primary" 
                              label="Ingresar" 
                              type="button" 
                              navigateTo={"/components "}
                              />

                         
                            <Link href="https://example.com" className="custom-link"
                                      // onClick={handleLinkClick}
                                      >
                                      ¿No tienes cuenta?
                                    </Link>

                            <Button 
                             className="primary" 
                             label="Registrate" 
                             type="button"
                             navigateTo={"/register "}
                            />
                                 
                          

                      


                        

                </form>



           </main>



    </div>
  )
}
