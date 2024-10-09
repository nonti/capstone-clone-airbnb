import React, {useState, useEffect} from 'react';
import './Signupin.css';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { useRegisterMutation } from '../../slices/userApiSlice';
import {toast } from 'react-toastify';
import { setCredentials } from '../../slices/authSlice';
import Loader from '../../components/loader/Loader'
const Signup = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();


    const {userInfo }= useSelector((state) => state.auth);
    const [register, {isLoading}] = useRegisterMutation();
    
    useEffect(() => {
      if(userInfo){
        navigate('/signin');
      }
    }, [navigate, userInfo]);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
    }else {
      try {
        const res = register(formData).unwrap();
        dispatch(setCredentials({...res}));
      }catch (err) {
        toast.error(err.data?.message || err.error);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
      console.log(formData);
  };
  return (
    <div className='signin-signup-form'>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="input-container">
        <input type="text" name='username' placeholder='Username' value={formData.username} onChange={handleChange}/>
        <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
        <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange}/>
        <input type="password" name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange}/>
        <select name='role' value={formData.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="host">Host</option>
          <option value="user">User</option>
        </select>

        {isLoading && <Loader/>}
        <button type='submit'>Sign up</button>
        </div>
       
        <Link to='/signin' className='link'>Already have an account? <span>Sign in</span></Link>

      </form>
    </div>
  )
}

export default Signup
