import GoogleButtonIcon from "../GoogleButtonIcon/GoogleButtonIcon";
import "./styles.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button type={props.type} className={`button ${props.styleGoogle}`}>
      {props.styleGoogle ? (
        <span className="button__img">
          <GoogleButtonIcon />
        </span>
      ) : (
        ""
      )}
      {props.text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  styleGoogle: PropTypes.string,
};

export default Button;
