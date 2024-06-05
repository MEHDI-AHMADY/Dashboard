import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showAlert } from '../../util';

const style = {
    login : `flex-[4] mx-5 rounded-md bg-slate-100 flex flex-col items-center gap-12`,
    loginTitle : `text-slate-500 font-bold text-lg my-4`,
    loginFormWrapper : `flex items-center justify-center`,
    loginForm : `flex flex-col items-center gap-3`,
    loginFormInput : `p-2 focus:outline-none`,
    loginBtn : `bg-white p-2 w-full hover:bg-slate-500 hover:text-white transition-all`

};

export default function Login() {
    const navigate = useNavigate();

    const [userFirstName , setUserFirstName] = useState('');
    const [userLastName , setUserLastName] = useState('');
    const [userEmail , setUserEmail] = useState(''); 
    const [submitted , setSubmitted] = useState(false);

    const submitHandler = e => {
        e.preventDefault();
        
        showAlert({title : 'Welcome' , text : "You entered successfully to your Dashboard." , icon : "success" , confirmButtonText : 'OK :)'});

        setUserFirstName('');
        setUserLastName('');
        setUserEmail('');
        setSubmitted(true);
        
    }

    if(submitted) {
        navigate('/')
    }

  return (
    <div className={style.login}>
        <h1 className={style.loginTitle}>Please fill the Form.</h1>
        <div className={style.loginFormWrapper}>
        <form onSubmit={submitHandler} className={style.loginForm}>
            <input type="text" className={style.loginFormInput} value={userFirstName} onChange={(e) => setUserFirstName(e.target.value.trim())} placeholder="FirstName"/>
            <input type="text" className={style.loginFormInput} value={userLastName} onChange={(e) => setUserLastName(e.target.value.trim())} placeholder="lastName"/>
            <input type="text" className={style.loginFormInput} value={userEmail} onChange={(e) => setUserEmail(e.target.value.trim())} placeholder="Email"/>
            <button type='submit' className={style.loginBtn}>login</button>
        </form>
        </div>
    </div>
  )
}
