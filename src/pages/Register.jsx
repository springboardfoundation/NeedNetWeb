const Register = () => {
  return (
    <form action="#" method="POST">
      <section>
        <h2> Sign up </h2>
        <label>
          Mobile Number&nbsp;
          <input type="tel" pattern="[6-9]{1}\d{9}" placeholder="ex: 98765432210" title="Please add a valid 10-digit Mobile Number" maxLength="10" required />
        </label>
        <br />
        <br />
        <label>
          One Time Password (OTP) &nbsp;
          <input type="text" placeholder="Enter One Time Password" required />
        </label>
        <br />
        <br />
        <input type="submit" value="Sign Up" />
      </section>
      <section>
        <h2> Set a Password </h2>
        <label>
          Password &nbsp;
          <input type="password" placeholder="Enter Password" required />
        </label>
        <br />
        <br />
        <label>
          Confirm Password &nbsp;
          <input type="password" placeholder="Enter Password" required />
        </label>
        <br />
        <br />
        <input type="button" value="Proceed to Next Step" />
      </section>
      <section>
        <h2>User Profile</h2>
        <label>
          Full name &nbsp;
          <input type="text" placeholder="Enter your Full Name" required />
        </label>
        <br />
        <br />
        <label>
          Email address &nbsp;
          <input type="email" placeholder="Enter a valid email address" required />
        </label>
        <br />
        <br />
        <label>
          Place &nbsp;
          <input type="text" placeholder="Enter One Time Password" required />
        </label>
        <br />
        <br />
        <label>
          Age &nbsp;
          <input type="number" placeholder="Enter your age" required />
        </label>
        <br />
        <br />
        <section>
          <h3> Gender </h3>
          <label>
            <input type="radio" name="gender" placeholder="Enter One Time Password" required /> Male
          </label>
          <label>
            <input type="radio" name="gender" placeholder="Enter One Time Password" required /> Female
          </label>
        </section>
        <br />
        <br />
        <label>
          Occupation &nbsp;
          <input type="text" placeholder="Enter your Occupation" required />
        </label>
        <br />
        <br />
        <label>
          <input type="checkbox" placeholder="Enter your age" required />
          I accept the Terms & Conditions &nbsp;
        </label>
        <br />
        <br />
        <input type="submit" value="Complete Registration" />
      </section>
    </form>
  )
}

export default Register