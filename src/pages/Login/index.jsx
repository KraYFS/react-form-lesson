import { useForm } from 'react-hook-form'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { GoogleIcon } from '@/components/icons'
import LogoLink from '@/components/LogoLink'
import './styles.scss'
import Copyright from '@/components/Copyright'
import Link from '@/components/Link'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const submit = data => {
    console.log(data)
  }
  return (
    <div className='container'>
      <div className='auth'>
        <LogoLink />
        <form onSubmit={handleSubmit(submit)} className='form'>
          <div className='form__inputs'>
            <Input
              placeholder='Your email'
              type='email'
              name='email'
              register={register}
            />
            {errors.email && (
              <span className='form__error'>{errors.email.message}</span>
            )}
            <Input
              placeholder='Password'
              type='password'
              name='password'
              register={register}
            />
            {errors.password && (
              <span className='form__error'>{errors.password.message}</span>
            )}
          </div>
          <div className='form__buttons'>
            <Button text='Log in' type='submit' />
            <br />
            <Button
              className='button--google'
              text='Sign in with Google'
              icon={<GoogleIcon />}
            />
          </div>
          <div className='form__register-reset'>
            <div className='form__register'>
              <span>
                Don’t have an account<em>?</em>
              </span>
              <Link
                text='Register'
                href='https://partners.joinmassive.com/create-account'
              />
            </div>
            <div className='form__reset-password'>
              <Link
                text='Reset your password'
                href='https://partners.joinmassive.com/reset'
              />
            </div>
          </div>
          <Copyright />
        </form>
      </div>
    </div>
  )
}

export default Login
