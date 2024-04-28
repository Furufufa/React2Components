import React from "react";
import PropTypes from 'prop-types';
import { Nombre } from './Nombre';
import { Formulario } from './Formulario';
import { SocialButton } from './SocialButton';
import { Alerta } from './Alert';

export const Registro = ({ onChange, handleErrors, formErrors }) => {
  const icons = ["fa-brands fa-facebook", "fa-brands fa-github", "fa-brands fa-linkedin"];

  return (
    <div className='container'>
      <Nombre />
      <SocialButton icon={icons} />
      <p>o usa tu email para registrarte</p>
      <Formulario onChange={onChange} handleErrors={handleErrors} formErrors={formErrors} />
      <Alerta
				text={formErrors.text}
				color={formErrors.color}
			/>
    </div>
    
  );
};

Registro.propTypes = {
  onChange: PropTypes.func,
  handleErrors: PropTypes.func,
  formErrors: PropTypes.object,
};

