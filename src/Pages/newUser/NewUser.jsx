import React, { useState } from "react";
import { showAlert } from "../../util";
import axios from "axios";

const style = {
  login: `flex-[4] mx-5 p-5 rounded-md bg-slate-100 flex flex-col items-center gap-12`,
  loginTitle: `text-slate-500 font-bold text-lg my-4`,
  loginFormWrapper: `flex items-center justify-center`,
  loginForm: `flex flex-col items-center gap-3`,
  loginFormInput: `p-2 focus:outline-none`,
  loginBtn: `bg-white p-2 w-full hover:bg-slate-500 hover:text-white transition-all`,
  loginFromWarning : `p-1 bg-slate-100 text-black`
};

export default function NewUser() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userJob, setUserJob] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [submitted , setSubmitted] = useState(false);
  const [allValid , setAllValid] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    setSubmitted(true);

    let newUserInfo = {
      userFirstName,
      userLastName,
      userJob,
      userEmail,
    };

    if(userFirstName.length !== 0 && userLastName.length !== 0 && userEmail.length !== 0 && userJob.length !== 0){
      setAllValid(true);
    }
    if(allValid){
      try {
        const res = await axios.post(
          "https://dashboard-8d24f-default-rtdb.firebaseio.com/users.json",
          newUserInfo
        );
  
        setUserFirstName("");
        setUserLastName("");
        setUserJob("");
        setUserEmail("");
        setSubmitted(false);
        setAllValid(false);
  
        showAlert({
          title: "NewUser created.",
          text: "The User has been created successfully.",
          icon: "success",
          confirmButtonText: "OK :)",
        });
      } catch (err) {
        console.error("Error :", err);
      }
    }
    
  };

  return (
    <div className={style.login}>
      <h1 className={style.loginTitle}>Create a new User</h1>
      <div className={style.loginFormWrapper}>
        <form onSubmit={submitHandler} className={style.loginForm}>
          <input
            type="text"
            className={style.loginFormInput}
            value={userFirstName}
            onChange={(e) => setUserFirstName(e.target.value.trim())}
            placeholder="FirstName"
          />
          {submitted && userFirstName.length === 0 && (
          <span className={style.loginFromWarning}>please fill the input</span>
          )}
          <input
            type="text"
            className={style.loginFormInput}
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value.trim())}
            placeholder="lastName"
          />
          {submitted && userLastName.length === 0 && (
          <span className={style.loginFromWarning}>please fill the input</span>
          )}
          <input
            type="text"
            className={style.loginFormInput}
            value={userJob}
            onChange={(e) => setUserJob(e.target.value.trim())}
            placeholder="Job"
          />
          {submitted && userJob.length === 0 && (
          <span className={style.loginFromWarning}>please fill the input</span>
          )}
          <input
            type="text"
            className={style.loginFormInput}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value.trim())}
            placeholder="Email"
          />
          {submitted && userEmail.length === 0 && (
          <span className={style.loginFromWarning}>please fill the input</span>
          )}
          <button type="submit" className={style.loginBtn}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
