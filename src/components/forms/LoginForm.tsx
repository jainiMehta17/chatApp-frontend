import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Button, InputContainer, InputField, InputLabel } from '../../utils/styles'
import styles from '../../utils/styles/index.module.scss'
import { UserCredentialsParams } from '../../utils/types'
import { postLoginUser } from '../../utils/api'
const LoginForm = () => {
  const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}} = useForm<UserCredentialsParams>()
    const onSubmit = async(data:UserCredentialsParams) =>{
      try{
        await postLoginUser(data);
        navigate("/conversations")
      }catch(err){
        console.log(err);
      }
    }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <InputContainer>
    <InputLabel htmlFor='email'>Email</InputLabel>
  <InputField type="email" id='email' {...register('email')}/>
    </InputContainer>
    <InputContainer className={styles.loginPassword}>
    <InputLabel>Password</InputLabel>
  <InputField type="password" id='password' {...register('password')}/>
    </InputContainer>
    <Button className={styles.button}>Login</Button>
    <div className={styles.footerText}>
    <span className={styles.txtWhite}>Don't have an account ? </span>
    <Link to="/register" >
    <span>Register</span>
    </Link>
    </div>
</form>
  )
}

export default LoginForm
