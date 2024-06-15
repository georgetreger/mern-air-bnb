import { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(formData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);

        return;
      }
      navigation("/");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="signup">
      <h1> Sign In</h1>
      <form onSubmit={handleSubmit}>
        
        <input
          onChange={handleChange}
          type="text"
          id="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="Password"
        />
        <button disabled={loading} className="btn">
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="account">
        <p>dnt have an account?</p>
        <Link to={"/sign-up"}>
          <span className="spa">Sign Up</span>
        </Link>
      </div>
      <p className="error">{error && "Something went wrong"}</p>
    </div>
  );
}
