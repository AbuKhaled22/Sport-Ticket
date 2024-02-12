import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sign_up = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response= await axios.post("http://localhost:4000/signup", { username, email, password, confirmPassword });
      alert(response.data.message);
    } catch (error) {
      console.error("Error Signup :", error);
    }
  };

  return (
    <div>
      <div className="auth">
        <h1>Sign Up</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </label>
          <input className='submit' type="submit" value="Submit" />
        </form>
      </div>
      <div className="switch">
        <p>Already have an account?<Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Sign_up;