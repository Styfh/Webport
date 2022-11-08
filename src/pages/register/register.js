import { Link } from "react-router-dom";
import RegisterForm from "../../components/register-form/register-form";
import BodyLink from "../../style/BodyLink";
import "./register.css"

const Register = () => {
    return (
        <>
            <h1 class="center-text">Register</h1>

            <RegisterForm/>

            <div class="center-text">
                <span>don't have an account yet? register <Link to="/login" style={BodyLink}>here</Link></span>
            </div>


        </>
    )
};

export default Register;