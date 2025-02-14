import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Input = ({
  placeholder,
  type,
  register,
  name,
  autoComplete,
  ...rest
}) => {
  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      type={type}
      autoComplete={autoComplete}
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
};

export default Input;
