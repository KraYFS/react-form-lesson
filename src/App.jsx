import { useForm } from "react-hook-form";
import Input from "./components/Input/index.jsx";
import Button from "./components/Button/index.jsx";
import GoogleButtonIcon from "./components/icons/GoogleButtonIcon/GoogleButtonIcon.jsx";

function App() {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <div className="auth">
        <a
          className="logo_title"
          href="https://joinmassive.com/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 140 16"
            width="220"
            height="45"
          >
            <defs>
              <linearGradient
                id="prefix__a"
                x1="19.176%"
                x2="77.325%"
                y1="52.649%"
                y2="50%"
              >
                <stop offset="28.816%" stopColor="#FF9964"></stop>
                <stop offset="100%" stopColor="#FF6E63"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#prefix__a)"
              d="M.48 12.95l9.897-10.097C12.224.968 15.242.944 17.119 2.8l.007.007 7.362 7.312c.068.068.179.068.247-.001.064-.066.067-.171.006-.24l-3.009-3.4c-.346-.391-.37-.973-.058-1.391L23.04 3.25c.851-1.143 2.464-1.377 3.603-.522.143.108.275.23.393.366l8.67 9.926c.608.696.54 1.755-.153 2.365-.305.268-.696.416-1.1.416H1.668c-.922 0-1.669-.75-1.669-1.676 0-.44.172-.862.48-1.175z"
            ></path>
            <path d="M44.903 15.426L47.431.376h3.831L54.244 8.4 57.206.376h3.831l2.528 15.05h-3.85L58.43 6.763l-3.515 8.663h-1.54l-3.338-8.663-1.284 8.663h-3.85zm29.113-5.644l-1.68-4.89-1.68 4.89h3.36zm1.292 3.03h-5.57l-.895 2.614h-4.158l5.71-15.05h4.257l5.709 15.05h-4.158l-.895-2.615zm15.179-8.564c-.43-.344-.858-.599-1.287-.764-.429-.165-.844-.248-1.246-.248-.51 0-.925.119-1.247.357-.321.238-.482.55-.482.933 0 .265.08.483.241.655.161.172.372.321.633.447.262.126.557.235.885.328.328.092.653.192.975.297 1.286.424 2.228.99 2.824 1.698.597.708.895 1.63.895 2.77 0 .767-.13 1.462-.392 2.084-.261.622-.643 1.154-1.146 1.598-.503.443-1.119.787-1.85 1.032-.73.245-1.557.367-2.482.367-1.917 0-3.692-.562-5.327-1.687l1.688-3.137c.59.516 1.173.9 1.75 1.152.576.251 1.145.377 1.708.377.643 0 1.122-.146 1.437-.437.315-.291.473-.622.473-.993 0-.225-.04-.42-.12-.585-.081-.166-.215-.318-.403-.457-.188-.139-.432-.268-.734-.387-.301-.119-.666-.251-1.095-.397-.51-.159-1.009-.334-1.498-.526-.49-.192-.925-.447-1.307-.764-.382-.318-.69-.718-.924-1.201-.235-.483-.352-1.096-.352-1.837 0-.74.124-1.412.372-2.015.248-.602.596-1.118 1.045-1.548.45-.43.999-.764 1.649-1.003C85.82.12 86.547 0 87.35 0c.751 0 1.535.103 2.353.308.817.205 1.601.506 2.352.903l-1.568 3.037zm12.69 0c-.43-.344-.858-.599-1.287-.764-.429-.165-.844-.248-1.246-.248-.51 0-.925.119-1.247.357-.321.238-.482.55-.482.933 0 .265.08.483.241.655.161.172.372.321.633.447.262.126.557.235.885.328.328.092.653.192.975.297 1.287.424 2.228.99 2.824 1.698.597.708.895 1.63.895 2.77 0 .767-.13 1.462-.392 2.084-.261.622-.643 1.154-1.146 1.598-.502.443-1.119.787-1.85 1.032-.73.245-1.557.367-2.482.367-1.916 0-3.692-.562-5.327-1.687l1.688-3.137c.59.516 1.173.9 1.75 1.152.576.251 1.145.377 1.708.377.643 0 1.122-.146 1.437-.437.315-.291.473-.622.473-.993 0-.225-.04-.42-.12-.585-.081-.166-.215-.318-.403-.457-.187-.139-.432-.268-.734-.387-.301-.119-.666-.251-1.095-.397-.51-.159-1.009-.334-1.498-.526-.489-.192-.925-.447-1.307-.764-.381-.318-.69-.718-.924-1.201-.235-.483-.352-1.096-.352-1.837 0-.74.124-1.412.372-2.015.248-.602.596-1.118 1.045-1.548.45-.43.999-.764 1.649-1.003C98.51.12 99.237 0 100.04 0c.751 0 1.535.103 2.353.308.817.205 1.601.506 2.352.903l-1.568 3.037zM111.34.376v15.05h-3.733V.376h3.733zm6.087 0l3.607 9.162 3.627-9.162h4.221l-6.302 15.05h-3.092L113.206.376h4.221zM138.96 3.69h-4.662v2.515h4.402v3.313h-4.402v2.595h4.662v3.313h-8.584V.376h8.584V3.69z"></path>
          </svg>
        </a>
        <form onSubmit={handleSubmit(submit)} className="form">
          <div className="from_inputs">
            <Input
              placeholder="Your email"
              type="email"
              name="mail"
              register={register}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              register={register}
            />
          </div>
          <div className="form__buttons">
            <Button text="Log in" type="submit" />
            <br />
            <Button
              className="button--google"
              text="Sign in with Google"
              icon={<GoogleButtonIcon />}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
