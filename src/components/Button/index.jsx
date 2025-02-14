import "./styles.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  return <button type={props.type} className='button'>{props.text}</button>;
};

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string
}

export default Button;
