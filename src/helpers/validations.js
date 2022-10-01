export const validationLogin = values => {
    let errors = {};
    if (!values.email) {
        errors.email = 'El email es obligatorio';
    } else if () {
        errors.email = 'El email no es valido';
    } else if (values.email.length > 30) {
        errors.email = 'El email no debe poseer mas de 30 caracteres';
    }

    if (!values.password) {
        errors.password = 'La contraseña es obligatoria';
    } else if (values.password.length < 8) {
        errors.password = 'La contraseña debe tener como minimo 8 caracteres';
    } else if (values.password > 30) {
        errors.password = 'La contraseña no debe tener mas de 30 caracteres';
    }
    return errors;
}