import { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInFailure,signInStart,signInSuccess } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const navigation = useNavigate();
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state)=> state.user)
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
       dispatch(signInStart())
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (data.success === false) {
        dispatch(signInFailure(data))

        return;
      }
      dispatch(signInSuccess(data));
      navigation("/");
    } catch (error) {
     dispatch(signInFailure(error))
     
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
        <p>dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className="spa">Sign Up</span>
        </Link>
      </div>
      <p className="error">{error ? error.message  || "Something went wrong" : ""}</p>
    </div>
  );
}
