

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAuthToken } from "./Auth";
const signup = "signup.png";
const signupPath = `/static/${signup}`;
const faceBook = "face.svg";
const faceBookPath = `/static/${faceBook}`;
const apple = "apple.svg";
const applePath = `/static/${apple}`;
const google = "google.svg";
const googlePath = `/static/${google}`;
function Sign_up() {
  const initialForm = {
    email: "",
    password: "",
    name: "",
    lastname: "",
    phonenumber: "",
    confirmpassword: "",
  };

  const [formState, setFormState] = useState(initialForm);
  const { password, email, name, lastname, phonenumber, confirmpassword } =
    formState;

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formState.email,
                first_name: formState.name,
                last_name: formState.lastname,
                password: formState.password,
                phonenumber: formState.phonenumber,
                confirmpassword: formState.confirmpassword,
            }),
        });

        console.log(response); // Adicionado para verificação

        if (response.ok) {
            const data = await response.json();
            // Processa a resposta
        } else {
            const errorText = await response.text(); // Tente obter texto em vez de JSON
            console.log("Error response:", errorText); // Log do erro
            setErrorMessage("An error occurred. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        setErrorMessage("An error occurred during registration. Please try again later.");
    }
};

  return (
    <section>
      <div className="container">
        <div className="sign_up_page">
          <div>
            <img src={signupPath} alt="" />
          </div>
          <div>
            <h1>Sign Up</h1>
            <p>
              Let’s get you all set up so you can access your personal account.
            </p>
            <form onSubmit={handleSubmit}>
              <div>
                <fieldset>
                  <legend>First Name</legend>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                </fieldset>
                <fieldset>
                  <legend>Last Name</legend>
                  <input
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <legend>Email</legend>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="john.doe@gmail.com"
                  />
                </fieldset>
              </div>
              <fieldset>
                <legend>Password</legend>
                <input
                  className="signup-placeholder"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="•••••••••••••••••••••••••"
                />
              </fieldset>
              <fieldset>
                <legend>Confirm Password</legend>
                <input
                  className="signup-placeholder"
                  name="confirmpassword"
                  value={confirmpassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="•••••••••••••••••••••••••"
                />
              </fieldset>
              <div>
                <div className="remember">
                  <input type="checkbox" name="remember-me" id="" />
                  <h5>I agree to all the Terms and Privacy Policies</h5>
                </div>
              </div>
              <button className="login_btn" type="submit">
                Create account
              </button>
              {errorMessage && (
                <div className="error-message-container">
                  <h6 className="error-message">{errorMessage}</h6>
                </div>
              )}
              <h4>
                Already have an account? <Link to="/login">Login</Link>
              </h4>
              <span className="or_login">Or login with</span>
              <div>
              <div>
                  <img src={faceBookPath} alt="" />
                </div>
                <div>
                  <img src={applePath} alt="" />
                </div>
                <div>
                  <img src={googlePath} alt="" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sign_up;
