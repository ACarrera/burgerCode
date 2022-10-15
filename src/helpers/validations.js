export const validationLogin = values => {
    let errors = {};
    if (!values.email) {
        errors.email = 'El email es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
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


export const validationRegister = values => {
    let errors = {};

    if (!values.name) {
        errors.name = 'El nombre es obligatorio';
    } else if (!/ ^ [a-zA-Z] + [a-zA-Z] + {2,20} $ /i.test(values.name)) {
        errors.name = 'El nombre no es valido';
    } else if (values.name.length > 20) {
        errors.name = 'El nombre no debe poseer mas de 20 caracteres';
    }

    if (!values.lastname) {
        errors.lastname = 'El nombre es obligatorio';
    } else if (!/ ^ [a-zA-Z] + [a-zA-Z] + {2,25}$ /i.test(values.lastname)) {
        errors.lastname = 'El apellido no es valido';
    } else if (values.lastname.length > 25) {
        errors.lastname = 'El apellido no debe poseer mas de 25 caracteres';
    }

    if (!values.email) {
        errors.email = 'El email es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
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
    if (!values.password2) {
        errors.password2 = 'La contraseña es obligatoria';
    } else if (values.password2.length < 8) {
        errors.password2 = 'La contraseña debe tener como minimo 8 caracteres';
    } else if (values.password2 > 30) {
        errors.password2 = 'La contraseña no debe tener mas de 30 caracteres';
    } else if (!values.password2 === values.password) {
        errors.password2 = 'Las contraseñas no coinciden';
    }
    return errors;
}