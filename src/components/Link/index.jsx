import './styles.scss'

const Link = (props) => {
  return (
    <a
      href={props.href}
      className='link'
    >
      {props.text}
    </a>
  )
}

export default Link
