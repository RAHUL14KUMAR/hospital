
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

function Profile() {
    const [value, setValue] = useState();
    const [comment,setCommment]=useState("");


    let name=JSON.parse(localStorage.getItem("user")).name;

    let role=JSON.parse(localStorage.getItem("user")).role;


    let email=JSON.parse(localStorage.getItem("user")).email;

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
    console.log("value",value)
  return (
    <div className='flex-col items-center justify-center h-full'>
      <div className='font-baloo-bhai sm:text-2xl  md:text-4xl font-bold tracking-widest text-center text-emerald-800 overflow-hidden'>
        Thanks for Contacting!!!
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

        <div className='text-center'>
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

        <div className="my-4 mb-2">
          <textarea
            className="bg-emerald-300 text-emerald-900 font-mono placeholder-emerald-900"
            placeholder="Enter your views"
            name="comment"
            values={comment}
            onChange={(e)=>setCommment(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button className='bg-emerald-300 text-emerald-900 hover:text-white font-mono p-3 rounded-sm' onClick={addComment}>Post Comment</button>
        </div>
        </div>
    </div>
  )
}

export default Profile
