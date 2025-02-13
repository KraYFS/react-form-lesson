import PropTypes from "prop-types";
import styles from "./input.module.scss";

const Input = ({ placeholder, type, register, name, ...rest }) => {
  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      type={type}
      {...register(name)}
      {...rest}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  register: PropTypes.object,
  required: PropTypes.boolean,
};

export default Input;
