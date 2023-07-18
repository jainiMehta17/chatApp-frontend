import { log } from 'console'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button, InputContainer, InputField, InputLabel } from '../../utils/styles'
import styles from '../../utils/styles/index.module.scss'
import { CreateUserParams } from '../../utils/types'
import { postRegisterUser } from '../../utils/api'
const RegsiterForm = () => {

  const {register, handleSubmit,formState:{errors}, reset} = useForm <CreateUserParams>()
  const onSubmit = async(data:CreateUserParams) =>{
    try{
      await postRegisterUser(data)
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
        <section className={styles.nameField}>
        <InputContainer>
        <InputLabel>First Name</InputLabel>
      <InputField type="text" id='firstName' {...register('firstName')}/>
        </InputContainer>
        <InputContainer>
        <InputLabel>Last Name</InputLabel>
      <InputField type="text" id='lastName' {...register('lastName')}/>
        </InputContainer>
        </section>
        <InputContainer>
        <InputLabel>Password</InputLabel>
      <InputField type="password" id='password' {...register('password')}/>
        </InputContainer>
        <Button className={styles.button}>Create My Account</Button>
        <div className={styles.footerText}>
        <span className={styles.txtWhite}>Already have an account ? </span>
        <Link to="/login" >
          <span>Login</span>
        </Link>
        </div>
    </form>
  )
}

export default RegsiterForm
