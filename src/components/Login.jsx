import React, {useState} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebaseconnfig'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const historial = useNavigate()
    const[email, setEmail] = useState('')
    const[pass, setPass] = useState('')
    const[msgerror, setMessageError] =useState(null)
     
    const RegistrarUsuario =async (e) =>{
       // e.PreventDefault()
        try{
          const user = await createUserWithEmailAndPassword(auth, email, pass)
            alert('Usuario registrado')
            historial('/')
            console.log(user)
        }catch (e){
            console.log(e.code)
            if(e.code == 'auth/invalid-email'){
                setMessageError('Formato Email incorrecto')
            }
            if (e.code == 'auth/weak-password'){
                setMessageError('la password debe tener 6 caracteres o mas')
            }
            
        }
    }
    const LoginUsuario = async ()=>{
       /* auth.signInWithEmailAndPassword(email,pass)
        .then( (r) => console.log(r))
        .catch( (err) =>{
            console.log(err)
        })*/
        try{
            const user = await signInWithEmailAndPassword(auth, email, pass)
              alert('Usuario Inicio sesion')
              historial('/')
              console.log(user)
          }catch (err){
              console.log(err.code)
              if(err.code == 'auth/wrong-password'){
                  setMessageError('contrasena incorrecta')
              }
              if (err.code == 'auth/weak-password'){
                  setMessageError('la password debe tener 6 caracteres o mas')
              }
              
          }
    }
    return (
        <div className="row mt-5" >
            <div className="col"></div>
            <div className="col">
                <div className='form-group' action="">
                    <input onChange={(e) => {setEmail(e.target.value)}} className='form-control mb-3' type="text" placeholder='Introduce el Email' />
                    <input onChange={(e) => {setPass(e.target.value)}} className='form-control mb-3' type="password" placeholder='Introduce la password' />
                    <div onClick={RegistrarUsuario}  className='btn btn-dark btn-block' value='Registrar Usuario' />Registrar Usuario</div>
                   
                </div>
                <button onClick={LoginUsuario} className='btn btn-succces btn-block'> Iniciar sesion</ button>
                {
                msgerror !=null ? (
                    <div>
                        {msgerror}
                    </div>
                ) : (
                    <span></span>
                )}
            <div className="col"></div>
            </div>
    )
}

export default Login