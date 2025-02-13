import PropTypes from "prop-types";
import styles from "./input.module.scss";
import { useForm } from "react-hook-form";

const Input = (props) => {
  const { register } = useForm();
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      autoComplete={props.autoComplete}
      className={styles.input}
      {...register(props.register)}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  register: PropTypes.string,
};

export default Input;
