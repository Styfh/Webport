import { Link } from "react-router-dom";
import bodyLink from "../../style/bodyLink";
import "./register.css"

const Register = () => {
    return (
        <>
            <h1 class="center-text">Register</h1>

            <div class="center-text">
                <span>don't have an account yet? register <Link to="/login" style={bodyLink}>here</Link></span>
            </div>


        </>
    )
};

export default Register;