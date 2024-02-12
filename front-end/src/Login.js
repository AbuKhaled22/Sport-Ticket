import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login= () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response= await axios.post("http://localhost:4000/login/:name/:pass/users", { username, password});
      alert(response.data.message);
    } catch (error) {
      console.error("Error login:", error);
    }
  };
    return (
      <div>
      <div className="auth">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label >
          <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label >
          <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <input className='submit' type="submit" value="Submit"  />
      </form>
      </div>
      <div className="switch">
        <p>Don't have an account?<Link to="/sign_up">Sign Up</Link></p>
      </div>
    </div>
    );
}

export default Login;