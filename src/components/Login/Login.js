import React,{useState} from 'react'
import {BsHospital} from 'react-icons/bs'
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";


import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../Loader/Loading';


function Login() {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [load,setLoad]=useState(false);

    const loginMe=async()=>{

        if(email=="" || password==""){
            toast.warning("enter all details");
            return;
        }

        setLoad(true);

        const res=await axios.post(`${process.env.REACT_APP_SERVER_BASE}/user/login`,{email,password});

        if(res.status===200){
            toast.success("user logged in successfull");
            navigate('/play')
            localStorage.setItem(
                "user",
                JSON.stringify({
                  id: res.data._id,
                  name: res.data.name,
                  email: res.data.email,
                  token:res.data.token,
                  role:res.data.role
                })
              );
              setLoad(false)
            return;
            
        } else if(res.status===203){
            toast.info(res.data);
            setLoad(false)
            return;
        }
    }

  return (
    <div className={`flex h-screen w-screen items-center justify-center ${load === true ? 'bg-white' : 'bg-emerald-100'}`}>
        {!load && <div className="flex-col rounded-lg bg-white text-center drop-shadow-2xl">
            <div className="flex-col p-2">
                <div className="mx-auto my-auto flex items-center justify-center h-24 w-24 rounded-full bg-emerald-100">
                    <BsHospital className="text-4xl text-green-600" />
                </div>
                <h1 className="font-sans font-bold text-green-600">Health Point <span className="text-rose-700">+</span></h1>
            </div>

            <div className="mb-5 text-2xl font-bold">
                <h1>Looking For CheckUp !!!</h1>
                <p className="text-base font-normal text-emerald-950">Login here</p>
            </div>

            <div className="m-2 flex-col">

                <div className="border-r-none m-5 flex rounded-lg border-l-4 border-l-emerald-800 bg-emerald-100 p-3 text-justify">
                    <div className="h-16 w-14 bg-emerald-300 flex items-center justify-center">
                        <MdOutlineMailOutline className="text-4xl text-green-600"/>
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">Email</label>
                    <div><input type="text" placeholder="enter your email" className="mx-2 w-fit bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email" name={email} value={email} onChange={(e)=>setEmail(e.target.value)} /></div>
                    </form>
                </div>

                <div className="border-r-none m-5 flex rounded-lg border-l-4 border-l-emerald-800 bg-emerald-100 p-3 text-justify">
                    <div className="h-16 w-14 bg-emerald-300 flex items-center justify-center">
                        <TbPasswordFingerprint className="text-4xl text-green-600"/>
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="password">Password</label>
                    <div><input type="password" placeholder="enter your password" className="mx-2 w-fit bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="password"  name={password} value={password} onChange={(e)=>setPassword(e.target.value)} /></div>
                    </form>
                </div>

                <div className="m-3 mb-2">
                    <button className="w-full rounded-lg bg-teal-600 p-3 font-sans text-xl font-medium text-white" onClick={loginMe}>Login</button>
                </div>

                <div className='font-medium hover:underline'>
                    <Link to='/register'>New User? Register Here</Link>
                </div>
            </div>
        </div>}
        {
            load && <div>
                <Loading/>
            </div>
        }
    </div>
  )
}

export default Login
