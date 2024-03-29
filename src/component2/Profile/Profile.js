
import { FaUser } from 'react-icons/fa6'
import  React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import axios from 'axios';
import { toast } from 'react-toastify';
import { io } from "socket.io-client";

const socket = io.connect(`${process.env.REACT_APP_SOCKET_BASE_URL}`);


function Profile() {
    const [value, setValue] = useState();
    const [comment,setCommment]=useState("");
    const [announce,setAnnouncement]=useState('')
    const [query,setQuery]=useState("");

    const sendQuery=(e)=>{
      e.preventDefault();
      if(query===''){
        toast.info("query cant be empty!!!")
        return;
      }

      socket.emit("query",{query})
      setQuery("");
      toast.dark("your query has been sent")
    }

    const announcement=(e)=>{
      e.preventDefault();
      if(announce===''){
        toast.info("announcement cant be empty!!!")
        return;
      }

      socket.emit("announcement",{announce})
      setAnnouncement("");
      toast.dark("annoumcement has been done");
    }

    let user=JSON.parse(localStorage.getItem("user"))
    let name=user.name;

    let role=user.role;


    let email=user.email;
    let id=user.id

    useEffect(()=>{
      if(role==="ADMIN"){
        socket.emit("adminConnected",{id})
      }

      if(role==="CONSULTANT"){
        socket.emit("consultantConnected",{id})
      }
    },[])

    const addComment=async()=>{

      let token=JSON.parse(localStorage.getItem("user")).token;
      // console.log(token);
  
      if(comment==""){
        toast.warn("add your comment",{autoClose:600});
        return;
      }

      let data = JSON.stringify({
        "comment": comment
      });

      let config={
        method: 'put',
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_SERVER_BASE}/user/comment`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`
        },
        data:data
      }
        try{
          const res=await axios.request(config);
          if(res.status===201){
            toast.success(res.data.message);
            return;
          }
        }catch(err){
          toast.error("something went wrong");
          console.log(err)
        }
    }

    const setRating=async()=>{
      let token=JSON.parse(localStorage.getItem("user")).token;

      let data = JSON.stringify({
        "rate": value
      });

      let config={
        method: 'put',
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_SERVER_BASE}/user/rate`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`
        },
        data:data
      }
        try{
          const res=await axios.request(config);
          if(res.status===201){
            toast.success(res.data.message,{autoClose:200});
            return;
          }
        }catch(err){
          toast.error("something went wrong");
          console.log(err)
        }
    }

    const StyledRating = styled(Rating)(({ theme }) => ({
        '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
          color: theme.palette.action.disabled,
        },
    }));

    const customIcons = {
        1: {
          icon: <SentimentVeryDissatisfiedIcon color="error" />,
          label: 'Very Dissatisfied',
        },
        2: {
          icon: <SentimentDissatisfiedIcon color="error" />,
          label: 'Dissatisfied',
        },
        3: {
          icon: <SentimentSatisfiedIcon color="warning"/>,
          label: 'Neutral',
        },
        4: {
          icon: <SentimentSatisfiedAltIcon color="success"/>,
          label: 'Satisfied',
        },
        5: {
          icon: <SentimentVerySatisfiedIcon color="success"/>,
          label: 'Very Satisfied',
        },
    };

    const iconContainerStyles = {
        margin: '8px', // Add your desired margin value
        overflow: 'hidden',
        iconSize:'4em'
    };
      
    function IconContainer(props) {
        const { value, ...other } = props;
        return <span style={iconContainerStyles} {...other}>{customIcons[value].icon}</span>;
    }
      
    IconContainer.propTypes = {
      value: PropTypes.number.isRequired,
    };
  return (
    <div className='flex-col items-center justify-center h-full'>
      <div className='font-baloo-bhai sm:text-2xl  md:text-4xl font-bold tracking-widest text-center text-emerald-800 overflow-hidden'>
       {role==="USER" && <h1 className='overflow-hidden'> Thanks for Contacting!!!</h1>}
       {role==="ADMIN" && <h1 className='overflow-hidden'> Hello SIR!!!</h1>}
      </div>

      <div className="bg-emerald-300 w-44 h-44 mx-auto my-9">
            <FaUser className='text-6xl font-bold text-emerald-900 mx-auto my-12'/>
      </div>
      <div className="text-mono font-bold tracking-widest mx-auto text-center my-9">
        <div className="flex mx-auto justify-center my-5">
            <h1 className='font-baloo-bhai overflow-hidden tracking-widest text-2xl text-emerald-900'>Name:&nbsp;</h1>
            <p className='font-mono text-2xl text-emerald-600'>{name}</p>
        </div>

        <div className="flex mx-auto justify-center my-5">
            <h1 className='font-baloo-bhai overflow-hidden tracking-widest text-2xl text-emerald-900 hidden md:block'>Email:&nbsp;</h1>
            <p className='font-mono text-2xl text-emerald-600'>{email}</p>
        </div>

        <div className="flex mx-auto justify-center my-5">
            <h1 className='font-baloo-bhai overflow-hidden tracking-widest text-2xl text-emerald-900'>Role:&nbsp;</h1>
            <p className='font-mono text-2xl text-emerald-600'>{role}</p>
        </div>
      </div>

        {role==="USER" && <div className='text-center'>
        <StyledRating
            name="highlight-selected-only"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly

            onClick={setRating}

            style={{overflow:'Hidden', fontSize:2+'em'}}
        />
        {value==undefined?<p className='font-mono text-emerald-700 tracking-widest'> Rate US!!!</p> : 
        <p className='font-mono text-emerald-700 tracking-widest'> Thanks for the Rating!!!</p>}

        {role==="USER" && <div className="my-4 mb-2">
          <textarea
            className="bg-emerald-300 text-emerald-900 font-mono placeholder-emerald-900"
            placeholder="Enter your views"
            name="comment"
            values={comment}
            onChange={(e)=>setCommment(e.target.value)}
          ></textarea>
        </div>}
        {role==="USER" &&<div>
          <button className='bg-emerald-300 text-emerald-900 hover:text-white font-mono p-3 rounded-sm' onClick={addComment}>Post Comment</button>
        </div>}
        </div>}


        {role==="ADMIN" && <div className="flex-col text-center">
            <div className="my-4 mb-2">
                <textarea className="mx-auto bg-emerald-300 font-mono text-emerald-900 placeholder-emerald-900" placeholder="Announcement" name={announce} value={announce} onChange={(e)=>setAnnouncement(e.target.value)}></textarea>
            </div>
            <div>
                <button className="rounded-sm bg-emerald-300 p-2 font-mono text-emerald-900 hover:text-white mb-3" onClick={announcement}>Announce</button>
            </div>
        </div>}

        {role==="CONSULTANT" && <div className="flex-col text-center">
            <div className="my-4 mb-2">
                <textarea className="mx-auto bg-emerald-300 font-mono text-emerald-900 placeholder-emerald-900" placeholder="send query to admin" name={query} value={query} onChange={(e)=>setQuery(e.target.value)}></textarea>
            </div>
            <div>
                <button className="rounded-sm bg-red-600 hover:bg-red-700 p-2 font-mono text-black hover:text-white mb-3" onClick={sendQuery}>SEND</button>
            </div>
        </div>}
    </div>
  )
}

export default Profile
