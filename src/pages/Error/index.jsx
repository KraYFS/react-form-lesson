import './styles.scss'

const ErrorPage = () => {
  return (
    <div className='page404'>
      <h1 className='page404__http-code'>404</h1>
      <div className='page404__description'>
        <h3 className='page404__title'>Oops... page not found.</h3>
        <h5 className='page404__subtitle'>
          We don`t know how you ended up here, but you should go away now.
        </h5>
      </div>
    </div>
  )
}

export default ErrorPage
