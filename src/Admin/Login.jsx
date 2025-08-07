import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { use } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate()
  console.log("before handle login");
  
  async function handleLogin() {
    console.log("inside hanlelogin");
    
    try {
        console.log("sending data to login");
        
            const dataToSend = {
                email:user,
                password:pass
            }
            console.log("befor await");
            
        let data1 = await axios.post("http://localhost:3000/admin/login",dataToSend,{withCredentials:true})
              console.log(data1.data);
              
        console.log("after wait");
        if(data1.data.success){
          navigate("/dash")
        }
        
    } catch (err) {
      console.log(err.response.data);
    }
  }
  return (
    <div className=" w-full h-[100vh] flex justify-center items-center ">
      <div className=" bg-gradient-to-l flex flex-col gap-2">
        <label>Uer Name</label>
        <input
          value={user}
          className="border"
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          value={pass}
          className="border"
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button
          className="mt-2 bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
