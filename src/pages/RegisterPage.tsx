import React from 'react'
import RegsiterForm from '../components/forms/RegsiterForm'
import { Page } from '../utils/styles'

const RegisterPage = () => {
  return (
    <Page display='flex' justifyContent='center' alignItems='center'>
      <RegsiterForm/>
    </Page>
  )
}

export default RegisterPage
