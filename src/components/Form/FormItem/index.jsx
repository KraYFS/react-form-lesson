import clsx from 'clsx'
import './styles.scss'

const FormItem = ({ label, hint, children, errorMessage, className }) => {
  const classes = clsx('form-item', className, !!hint && 'form-item--with-hint')

  return (
    <div className={classes}>
      <label className='form-item__label'>{label}</label>
      {hint && <div className='form-item__hint'>{hint}</div>}
      <div className='form-item__control'>{children}</div>
      {errorMessage && <span className='form-item__error'>{errorMessage}</span>}
    </div>
  )
}

export default FormItem
