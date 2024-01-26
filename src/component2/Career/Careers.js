import React,{useState,useEffect} from 'react'
import { BsCash, BsPencilSquare } from 'react-icons/bs'
import './Career.css'
import { MdExposurePlus1, MdFileUpload, MdOutlineFolderSpecial, MdOutlineMailOutline, MdPhoneAndroid } from 'react-icons/md'
import { toast } from 'react-toastify';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Careers() {

    const navigate=useNavigate();

    const token=JSON.parse(localStorage.getItem("user")).token

    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [phoneNumber,setnumber]=useState("");
    const [applyFor,setApplyFor]=useState("");
    const [salary,setSalary]=useState("");
    const [experience,setExperience]=useState("");

    const [pic,setPic]=useState("");

    const postDetails=(pics)=>{
        if(pics===undefined){
            toast.warn("please select an image");
            return;
        }
        console.log(pics);
        if(pics.type==='image/jpeg'||pics.type==='image/png'){
            const data=new FormData();
            data.append("file",pics);
            data.append("upload_preset","chat-app");
            data.append("cloud_name","dxdctwwyf");
            fetch("https://api.cloudinary.com/v1_1/dxdctwwyf/image/upload",{
                method:'post',
                body:data
            })
            .then((res)=>res.json())
            .then((data)=>{
                setPic(data.url.toString());
                console.log(""+data.url);
            })
            .catch((err)=>{
                toast.error("resume not uploaded");
                console.log(err);
            })
        }
    }

    const submit=async()=>{
        if(firstname=="" || lastname=="" || email=="" || phoneNumber=="" || applyFor =="select..." || applyFor==""||salary==""||experience==""|| experience=="select..."){
            toast.warning("enter all the fields")
            return;
        }

        let data = JSON.stringify({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "phonenumber": phoneNumber,
            "salary": salary,
            "specilization": applyFor,
            "experience":experience,
            "resume": pic
        });
          
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.REACT_APP_SERVER_BASE}/user/career`,
            headers: { 
              'Content-Type': 'application/json', 
              'Authorization': `Bearer ${token}`
            },
            data : data
        };
        try{
            const res=await axios.request(config)
            console.log(res);
            if(res.status==201){
                toast.success(res.data.message);
                navigate('/play');
                return;
            }
        }catch(err){
            toast.error("something went wrong")
            console.log(err);
        }
    }

  return (
    <div className="my-auto bg-emerald-100 p-5 h-100">
        <div>
            <div className="text-lg font-bold tracking-widest text-emerald-900 md:text-2xl">PERSONAL INFORMATION</div>
            <div className="border-2 border-emerald-900"></div>
            <div className="mt-5 w-11/12 border-2 border-emerald-900"></div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 car">
                <div className="border-r-none m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 border-r-4 border-r-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <BsPencilSquare className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">FirstName</label>
                    <div><input type="text" placeholder="enter your first name" className="mx-2 w-fit bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email" name={firstname} value={firstname} onChange={(e)=>setFirstname(e.target.value)} /></div>
                    </form>
                </div>

                <div className="border-r-none m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 border-r-4 border-r-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <BsPencilSquare className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">LastName</label>
                    <div><input type="text" placeholder="enter your last name" className="mx-2 w-fit bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email" name={lastname} value={lastname} onChange={(e)=>setLastname(e.target.value)} /></div>
                    </form>
                </div>

                <div className="border-r-none m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 border-r-4 border-r-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <MdOutlineMailOutline className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">Email</label>
                    <div><input type="text" placeholder="enter your email" className="mx-2 w-fit bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email"name={email} value={email} onChange={(e)=>setEmail(e.target.value)} /></div>
                    </form>
                </div>

                <div className="border-r-none m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 border-r-4 border-r-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <MdPhoneAndroid className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">Phone Number</label>
                    <div><input type="text" placeholder="enter your Number" className="mx-2 w-fit overflow-hidden bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email"name={phoneNumber} value={phoneNumber} onChange={(e)=>setnumber(e.target.value)} /></div>
                    </form>
                </div>
            </div>
        </div>

        <div>
            <div className="text-lg font-bold tracking-widest text-emerald-900 md:text-2xl">APPLY FOR</div>
            <div className="border-2 border-emerald-900"></div>
            <div className="mt-5 w-11/12 border-2 border-emerald-900"></div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 car">
                <div className="border-r-4 border-r-emerald-800 m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <MdOutlineFolderSpecial className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col spe">

                    <label htmlFor="selectOption" className="m-2 font-bold text-emerald-800">Specialization</label>
                    <div>
                    <select id="selectOption" name="selectOption" className="mx-2 w-fit text-emerald-900 bg-emerald-100 p-4 font-mono" value={applyFor} onChange={(e)=>setApplyFor(e.target.value)} >
                        <option className="p-5 text-emerald-950 hover:bg-emerald-700">select...</option>
                        <option value="Doctor" defaultValue className="p-5 text-emerald-950 hover:bg-emerald-700">Doctor</option>
                        <option value="Consultant" className="p-4 text-emerald-900 hover:bg-emerald-300">Consultant</option>
                        <option value="Lab Test" className="p-4 text-emerald-900 hover:bg-emerald-300">Lab Test</option>
                        <option value="Nurse" className="p-4 text-emerald-900 hover:bg-emerald-300">Nurse</option>
                        <option value="Staff" className="p-4 text-emerald-900 hover:bg-emerald-300">Staff</option>
                    </select>
                    </div>
                    </form>
                </div>

                

                <div className="border-r-4 border-r-emerald-800 m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <MdFileUpload className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">Resume</label>
                    <div className="w-fit"><input type="file" className="mx-2 w-fit overflow-hidden bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email" style={{width: 200+"px"}} accept='image/*' onChange={(e)=>postDetails(e.target.files[0])}/></div>
                    </form>
                </div>

                <div className="border-r-4 border-r-emerald-800 m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <MdExposurePlus1 className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col spe">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">Experience</label>
                    <div>
                    <select id="selectOption" name="selectOption" className="mx-2 w-fit text-emerald-900 bg-emerald-100 p-4 font-mono" value={experience} onChange={(e)=>setExperience(e.target.value)} >
                        <option className="p-5 text-emerald-950 hover:bg-emerald-700">select...</option>
                        <option value="Fresher" className="p-4 text-emerald-900 hover:bg-emerald-300" defaultValue>Fresher</option>
                        <option value="1" className="p-4 text-emerald-900 hover:bg-emerald-300">1</option>
                        <option value="2" className="p-4 text-emerald-900 hover:bg-emerald-300">2</option>
                        <option value=">3" className="p-4 text-emerald-900 hover:bg-emerald-300"> {">"}3</option>
                    </select>
                    </div>
                    </form>
                </div>

                <div className="border-r-4 border-r-emerald-800 m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <BsCash className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">Salary</label>
                    <div><input type="text" placeholder="enter your expection" className="mx-2 w-fit bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email" name={salary} value={salary} onChange={(e)=>setSalary(e.target.value)} /></div>
                    </form>
                </div>
            </div>
        </div>
        <div className="border-2 border-emerald-900"></div>
        <div className="sm:w-full  md:w-1/4 mx-auto mt-2 p-4 text-emerald-900 bg-emerald-300 hover:bg-emerald-500 text-center font-bold font-mono text-2xl hover:text-white cursor-pointer" onClick={submit}>
            SUBMIT
        </div>
    </div>
  )
}

export default Careers
