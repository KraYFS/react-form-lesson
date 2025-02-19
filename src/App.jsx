import { useForm } from 'react-hook-form'
import Input from './components/Input'
import Button from './components/Button'
import GoogleIcon from './components/icons/GoogleIcon'
import LogoLink from './components/LogoLink'

function App() {
  const { register, handleSubmit } = useForm()

  const submit = data => {
    console.log(data)
  }
  return (
    <div className='container'>
      <div className='auth'>
        <LogoLink />
        <form onSubmit={handleSubmit(submit)} className='form'>
          <div className='from_inputs'>
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
        </form>
      </div>
    </div>
  )
}

export default App
