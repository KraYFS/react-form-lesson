import styles from "./button.module.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  return <button type={props.type} className={styles.button}>{props.text}</button>;
};

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string
}

export default Button;
