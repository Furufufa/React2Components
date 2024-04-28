import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

export const Formulario = ({ onChange, handleErrors }) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { nombre, email, password, repetPassword } = event.target;

    const dictionary = {
      requiredData: {
        text: "Completa todos los campos",
        color: "danger",
      },
      invalidPassword: {
        text: "Mail incorrecto, intente nuevamente",
        color: "danger",
      },
      notMatchPasswords: {
        text: "Password incorrecto, intente nuevamente",
        color: "danger",
      },
      success: {
        text: "Ingreso correcto!",
        color: "success",
      },
    };

    const errorMesages =
      !nombre.value || !email.value || !password.value || !repetPassword.value
        ? dictionary.requiredData
        : !regexCorreo.test(email.value)
        ? dictionary.invalidPassword
        : password.value !== repetPassword.value
        ? dictionary.notMatchPasswords
        : dictionary.success;

    handleErrors(errorMesages);
  };

  return (
    <Form  className="Formulario" onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Control type="text" 
        placeholder="Nombre" 
        name="nombre" 
        onChange={onChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" 
        placeholder="Ingresa Mail" 
        name="email" onChange={onChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Ingresa contraseña"
          name="password"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Control
          type="password"
          placeholder="Repite contraseña"
          name="repetPassword"
          onChange={onChange}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Registrarse
      </Button>
    </Form>
    
  );
};

Formulario.propTypes = {
  handleErrors: PropTypes.func.isRequired,
};