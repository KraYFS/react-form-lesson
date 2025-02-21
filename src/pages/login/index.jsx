import { useForm } from 'react-hook-form'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { GoogleIcon } from '@/components/icons'
import LogoLink from '@/components/LogoLink'
import './styles.scss'

const Login = () => {
  const { register, handleSubmit } = useForm()

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
              name='mail'
              register={register}
            />
            <Input
              placeholder='Password'
              type='password'
              name='password'
              register={register}
            />
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
              <a
                href='https://partners.joinmassive.com/create-account'
                className='form__register-link'
              >
                Register
              </a>
            </div>
            <div className='form__reset-password'>
              <a href='https://partners.joinmassive.com/reset'>
                Reset your password
              </a>
            </div>
          </div>
            <span className='form__copyright'>
              © 2025 Massive Computing, Inc.
            </span>
        </form>
      </div>
    </div>
  )
}

export default Login
