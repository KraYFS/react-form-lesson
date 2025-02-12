import './styles.scss'

import clsx from 'clsx'
import PropTypes from 'prop-types'

const Button = ({ className, type, label, children, ...props }) => {
  const classes = clsx('button', className)

  return (
    <button type={type} className={classes} {...props}>
      {children || label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string, // Optional: CSS class name
  type: PropTypes.string, // Optional: button type (default: "button")
  label: PropTypes.string, // Optional: text label for the button
  children: PropTypes.node, // Optional: React children
}

Button.defaultProps = {
  type: 'button',
  label: '',
}

export default Button
