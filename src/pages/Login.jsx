import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div>
      <form action="#" method="POST" autoComplete="on">
        <h1>Sign in</h1>
        <label>
          Mobile Number&nbsp;
          <input type="tel" pattern="[6-9]{1}\d{9}" required placeholder="ex: 98765432210" title="Please add a valid 10-digit Mobile Number" maxLength="10" />
        </label>
        <br />
        <br />
        <label>
          Password&nbsp;
          <input type="text" required />
        </label>
        <br />
        <br />
        <input type="submit" value="Sign in" />
        <p>
          Don't have an account? <Link to="/register" >Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login