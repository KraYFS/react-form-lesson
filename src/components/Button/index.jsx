import "./styles.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const Button = ({ type = "button", text, className, icon }) => {
  return (
    <button type={type} className={clsx("button", className)}>
      {icon && <span className="button__img">{icon}</span>}
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.element,
};

export default Button;
