import './styles.scss'
import FormInput from '@/components/Form/FormInput'
import Button from '@/components/Form/FormButton'
import { GoogleIcon } from '@/components/icons'
import Copyright from '@/components/Copyright'
import Link from '@/components/Link'
import FormItem from '../../components/Form/FormItem'
import { Controller } from 'react-hook-form'

const AuthorizationForm = ({ handleSubmit, errors, submit, control }) => {
  return (
    <form onSubmit={handleSubmit(submit)} className='form'>
      <div className='form__inputs'>
        <FormItem errorMessage={errors.email?.message}>
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Incorrect email format'
              }
            }}
            defaultValue=''
            render={({ field }) => (
              <>
                <FormInput
                  placeholder='Enter your email'
                  type='email'
                  {...field}
                />
              </>
            )}
          />
        </FormItem>
        <FormItem errorMessage={errors.password?.message}>
          <Controller
            name='password'
            control={control}
            rules={{
              required: 'Password is required'
            }}
            defaultValue=''
            render={({ field }) => (
              <>
                <FormInput
                  placeholder='Enter your password'
                  type='password'
                  {...field}
                />
              </>
            )}
          />
        </FormItem>
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
            label='Register'
            dest='https://partners.joinmassive.com/create-account'
          />
        </div>
        <div className='form__reset-password'>
          <Link
            label='Reset your password'
            dest='https://partners.joinmassive.com/reset'
          />
        </div>
      </div>
      <Copyright />
    </form>
  )
}

export default AuthorizationForm
