import React, {useState, useEffect} from 'react'
import './Signupin.css';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import{ useLoginMutation } from '../../slices/userApiSlice';
import { setCredentials } from '../../slices/authSlice';
import {toast} from 'react-toastify';
import Loader from '../../components/loader/Loader';
const Signin = () => {
  
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const[login, {isLoading}] = useLoginMutation();
    const {userInfo} = useSelector((state) => state.auth);

    useEffect(() => {
      if(userInfo){
        navigate('/');
      }
    }, [navigate, userInfo]);

    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const res = await login(formData).unwrap();
        dispatch(setCredentials({...res}));
        navigate('/reservations');
      }catch (err) {
        toast.error(err.data?.message || err.error);
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
          <h1>Sign in</h1>
          <div className="input-container">
          <input type="text" name='username' placeholder='Username' value={formData.username} onChange={handleChange}/>
          <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange}/>

          {isLoading && <Loader/>}

          <button type='submit'>Sign in</button>
          </div>
          <Link to='/signup' className='link'>Dont have an account? <span>Sign up</span></Link>
        </form>
      </div>
  )
}

export default Signin
