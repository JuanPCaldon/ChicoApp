import React, { useState } from 'react';
import inputText from '../components/atoms/Input/InputText.atom.jsx';


export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const { email, password, confirmPassword } = formData;

    if (!email) {
      newErrors.email = 'El email es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El email no es válido.';
    }

    if (!password) {
      newErrors.password = 'La contraseña es obligatoria.';
    } else if (password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = 'La contraseña debe tener al menos una letra mayúscula.';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Poner ENDPOINT
      console.log('Formulario de Registro Enviado:', formData);
    }
  };

  return (
    <div className="register-page">
      <main>
        <form onSubmit={handleSubmit}>
          <img src="./Recurso_12x.png" alt="chico" />
          <h2>Registro</h2>



          <input
            type="text"
            name="fullName"
            placeholder="Nombre completo"
            value={formData.fullName}
            onChange={handleChange}
          />

          
          {errors.fullName && <p>{errors.fullName}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          <fieldset className="rg-container-terms">
            <label>
              <input name="terms" type="checkbox" role="switch" />
              Acepto terminos y condiciones
            </label>
            <label>
              <input name="opt-in" type="checkbox" role="switch" />
              Quiero recibir ofertas
            </label>
          </fieldset>
          <button type="submit">Registrarse</button>
        </form>
      </main>
    </div>
  );
};
