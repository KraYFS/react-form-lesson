import { useForm } from 'react-hook-form'
import Input from '@/components/Form/FormInput'
import Button from '@/components/Form/FormButton'
import { GoogleIcon } from '@/components/icons'
import LogoLink from '@/components/LogoLink'
import './styles.scss'
import Copyright from '@/components/Copyright'
import Link from '@/components/Link'
import AuthorizationForm from '../../common/AuthorizationForm'

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <div className='container'>
      <div className='auth'>
        <LogoLink />
        <AuthorizationForm
          handleSubmit={handleSubmit}
          submit={submit}
          errors={errors}
          control={control}
        />
      </div>
    </div>
  )
}

export default Login
