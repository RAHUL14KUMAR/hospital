import React,{useState,useEffect} from 'react'
import { FaCameraRetro, FaLaptopMedical, FaList, FaPeopleCarryBox, FaSpeakap, FaUserDoctor } from 'react-icons/fa6';
import { RiHome3Fill,  RiListCheck2, RiLogoutBoxLine, RiMenu2Line, RiNotification3Line, RiProfileLine } from "react-icons/ri";
import {motion} from 'framer-motion'
import Contact from '../Contact/Contact';
import About from '../About/About';
import Careers from '../Career/Careers';
import Doctors from '../Doctor/Doctors';
import {useNavigate} from "react-router-dom"
import Profile from '../Profile/Profile';
import Appointment from '../Appointment/Appointment';
import { toast } from 'react-toastify';
import Applicants from '../Admin/Applicants/Applicants';
import { Mic, PeopleAltTwoTone, Search } from '@mui/icons-material';
import Announce from '../Admin/Search/Search';
import Notification from '../Notification/Notification';
import { BsReceiptCutoff } from 'react-icons/bs';
import Test from '../Consultant/Test/Test';
import Ask from '../Ask/Ask';
import Query from '../../physician/Answer/Query';

function Layout() {
    const navigate=useNavigate();
    const [toggle,setToogle]=useState(false);
    const [role,setRole]=useState("")

    const [renderComponent,setRenderComponent]=useState('About');

    useEffect(()=>{
        const a =JSON.parse(localStorage.getItem("user"))

        if(!a){
            toast.dark("you are not logged in")
            navigate('/');
            return;
        }else{
            setRole(a.role);
            return;
        }
    },[])


    const handleNavItem=(component)=>{
        setToogle(false);
        setRenderComponent(component);
    }


    const setComponent=()=>{
        switch(renderComponent){
            case "About":
                return <About/>

            case "Contact":
                return <Contact/>;

            case "Careers":
                return <Careers/>
                    
            case "Doctors":
                return <Doctors/>

            case "Profile":
                return <Profile/>

            case "Appointment":
                return <Appointment/>

            case "Applicants":
                return <Applicants/>

            case "Search":
                return <Announce/>

            case "Notification":
                return <Notification/>

            case 'SeeReport':
                return <Test/>

            case 'Ask':
                return <Ask/>
            
            case "Query":
                return <Query/>

            default:
                return <About/>
                
        }
    }

    const logout=()=>{
        toast.info("you are logout",{autoClose:600})
        localStorage.removeItem("user");
        navigate('/');
        return;
    }


  return (
    <div className="p-1">
        {/* navbar */}
        <div className="h-14 flex w-100 bg-emerald-100 justify-between p-2 fixed top-0 left-0 right-0 border-4 overflow-hidden border-emerald-800">
            <button className="bg-emerald-200 w-14 h-10 rounded flex items-center justify-center md:invisible" onClick={()=>setToogle((prev)=>!prev)}>
                <RiMenu2Line className="text-emerald-900 text-2xl arrow-icon"/>
            </button>
            <div className="flex items-center justify-center p-2 overflow-hidden">
                {role!=="USER" && <button className="bg-emerald-200 w-14 h-10 rounded flex items-center justify-center" onClick={()=>handleNavItem("Notification")}>
                    <RiNotification3Line className="text-emerald-900 text-2xl  arrow-icon"/>
                </button>}

                <div className="overflow-hidden">
                    <button className="bg-emerald-200 p-2 ml-5 rounded-lg text-purple-900 flex overflow-hidden p-1 text-emerald-900" 
                        onClick={()=>handleNavItem("Profile")}
                    >Profile
                        <span className="text-2xl ml-3 text-emerald-900 arrow-icon">
                            <RiProfileLine/>
                        </span>
                    </button>
                </div>
            </div>
        </div>

        {/* side bar for small screen*/}
        {
            toggle &&
            <div className=" w-screen bg-emerald-100 h-screen rounded-sm flex-col  justify-between items-center mt-14 mr-1 fixed ">
                <motion.div whileInView={{x:[0,0]}} transition={{duration:0.85,ease:"easeInOut"}}>

                <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 " onClick={()=>navigate('/')}><RiHome3Fill className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Home
                    </span>
                </button>

                <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900" onClick={()=>handleNavItem("About")}><RiListCheck2 className="text-2xl text-emerald-950"/>
                    <span className=" arrow-icon text-lg mb-2 -py-1 ml-2">
                        About
                    </span>
                </button>

                {role==="USER" &&<button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900" onClick={()=>handleNavItem("Contact")}><FaCameraRetro className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Contact
                    </span>
                </button>}

                {role==="USER"&&<button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900" onClick={()=>handleNavItem("Careers")}><FaList className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Careers
                    </span>
                </button>}

                {role==="USER"&&<button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900" onClick={()=>handleNavItem("Doctors")}><FaUserDoctor className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Doctors
                    </span>
                </button>}

                {role==="USER"&&<button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Appointment")}><FaLaptopMedical className="text-2xl text-emerald-950"/>
                        <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                            Test
                        </span>
                    </button>}

                    {role==="USER"&&<button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Ask")}><FaSpeakap className="text-2xl text-emerald-950"/>
                        <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                            ASK
                        </span>
                    </button>}

                {role==="ADMIN"  && <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Applicants")}><FaPeopleCarryBox className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Applicants
                    </span>    
                </button>}


                {role==="ADMIN"  && <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Search")}><Search className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Search
                    </span>    
                    </button>}

                {role==="CONSULTANT"  && <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("SeeReport")}><BsReceiptCutoff className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Reports
                    </span>    
                    </button>}

                {role==="DOCTOR" && <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Query")}><BsReceiptCutoff className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Query
                    </span>    
                    </button>}

                <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900" onClick={logout}><RiLogoutBoxLine className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        logout
                    </span>
                </button>

                </motion.div>
            </div>
        }

        {/* side navbar */}
        <div className="flex mt-12">
            <div className='md:w-1/4 relative'>
                <div className="hidden md:block w-1/5 bg-emerald-100 h-screen rounded-sm flex-col  justify-between items-center mt-2 fixed top-13 left-0 border-4 overflow-hidden border-emerald-800">
                    <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>navigate('/')}><RiHome3Fill className="text-2xl text-emerald-950"/>
                        <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                            Home
                        </span>
                    </button>

                    <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("About")}><RiListCheck2 className="text-2xl text-emerald-950"/>
                        <span className=" arrow-icon text-lg mb-2 -py-1 ml-2">
                            About
                        </span>
                    </button>

                    {role==="USER"&&<button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Contact")}><FaCameraRetro className="text-2xl text-emerald-950"/>
                        <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                            Contact
                        </span>
                    </button>}

                    {role==="USER"&&<button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Careers")}><FaList className="text-2xl text-emerald-950"/>
                        <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                            Careers
                        </span>
                    </button>}

                    {role==="USER"&&<button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Doctors")}><FaUserDoctor className="text-2xl text-emerald-950"/>
                        <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                            Doctors
                        </span>
                    </button>}

                    {role==="USER"&&<button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Appointment")}><FaLaptopMedical className="text-2xl text-emerald-950"/>
                        <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                            Test
                        </span>
                    </button>}

                    {role==="USER"&&<button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Ask")}><FaSpeakap className="text-2xl text-emerald-950"/>
                        <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                            ASK
                        </span>
                    </button>}


                    {role==="ADMIN"  && <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Applicants")}><FaPeopleCarryBox className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Applicants
                    </span>    
                    </button>}


                    {role==="ADMIN"  && <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Search")}><Search className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Search
                    </span>    
                    </button>}

                    {role==="CONSULTANT"  && <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("SeeReport")}><BsReceiptCutoff className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Reports
                    </span>    
                    </button>}

                    {role==="DOCTOR" && <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={()=>handleNavItem("Query")}><BsReceiptCutoff className="text-2xl text-emerald-950"/>
                    <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                        Query
                    </span>    
                    </button>}
                    

                    <button className="hover:w-11/12 mr-2 p-3 hover:bg-emerald-200 m-2 ml-5 rounded-lg text-emerald-900 flex overflow-hidden p-1 text-emerald-900 rounded-lg hover:border-r-4 hover:border-r-emerald-800" onClick={logout}><RiLogoutBoxLine className="text-2xl text-emerald-950"/>
                        <span className="arrow-icon text-lg mb-2 -py-1 ml-2">
                            logout
                        </span>
                    </button>

                </div>
            </div>

            {/* body for children */}
            {!toggle && 
                <div className="mt-2 w-full ml-1 p-2">
                    {setComponent()}
                </div>
            }
        </div>
    </div>

  )
}

export default Layout
