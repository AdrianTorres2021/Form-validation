import React, { useState } from 'react';

const AdvancedForm = () => {

    const [formInfo,setFormInfo]=useState({
        nombre:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const [errores,setErrores]=useState({
        nombre:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    /*useEffect(() => {
        console.log(formInfo);
        validarForm();
    }, [formInfo]);*/

    const onChange = (e) => {
        console.log(e.target.name);

        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        },)
    }

    const validarForm = (event) => {


        const erroresAux={
            nombre:'',
            email:'',
            password:'',
            passwordshort: '',
            confirmPassword:''
        };
        event.preventDefault();
        if(nombre.length<5){
            erroresAux.nombre="El nombre es muy corto"
        }

        if(password !== confirmPassword){
            erroresAux.password="Las contraseñas no coinciden";
        } 
        if (password.length < 8){
            erroresAux.passwordshort= " la contraseña es muy corta";
        } 
        if(email.length < 5){
            erroresAux.email="El email es muy corto";
        }
        setErrores(erroresAux);

    } 

    const {nombre, email, password, confirmPassword} = formInfo;

    return (
        <div>
            <form  onSubmit = {validarForm} className = "form-container">
                <div className="form-group">
                    <label htmlFor='nombre'>Nombre</label>
                    <input name="nombre" type="text"  onChange={onChange} />
                </div>
                <div>
                <p className='warning'> {errores.nombre} </p>
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Correo</label>
                    <input name="email" type="text"  onChange={onChange}  />
                </div>
                <div>
                <p className='warning'> {errores.email} </p>
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Contraseña</label>
                    <input name="password" type="text" onChange={onChange}   />
                </div>
                <div>
                    <p className='warning'> {errores.passwordshort} </p>
                    <p className='warning'> {errores.password} </p>
                </div>
                <div className="form-group">
                    <label htmlFor='confirmPassword'>Confirmar Contraseña</label>
                    <input name="confirmPassword" type="text" onChange={onChange}   />
                </div>
                <input type="submit" value="Crear Usuario" className = "input-chart"></input>
            </form>
        </div>
    );
}

export default AdvancedForm;

