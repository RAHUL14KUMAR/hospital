
import { FaUser } from 'react-icons/fa6'
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

function Profile() {
    const [value, setValue] = React.useState();
    const [comment,setCommment]=React.useState();

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
          icon: <SentimentSatisfiedIcon color="warning" />,
          label: 'Neutral',
        },
        4: {
          icon: <SentimentSatisfiedAltIcon color="success" />,
          label: 'Satisfied',
        },
        5: {
          icon: <SentimentVerySatisfiedIcon color="success" />,
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
    <div className='flex-col items-center justify-center h-screen'>
      <div className='font-baloo-bhai sm:text-2xl  md:text-4xl font-bold tracking-widest text-center text-emerald-800 overflow-hidden'>
        Thanks for Contacting!!!
      </div>

      <div className="bg-emerald-300 w-44 h-44 mx-auto my-9">
            <FaUser className='text-6xl font-bold text-emerald-900 mx-auto my-12'/>
      </div>
      <div className="text-mono font-bold tracking-widest mx-auto text-center my-9">
        <div className="flex mx-auto justify-center my-5">
            <h1 className='font-baloo-bhai overflow-hidden tracking-widest text-2xl text-emerald-900'>Name:&nbsp;</h1>
            <p className='font-mono text-2xl text-emerald-600'>Rahul Kumar</p>
        </div>

        <div className="flex mx-auto justify-center my-5">
            <h1 className='font-baloo-bhai overflow-hidden tracking-widest text-2xl text-emerald-900'>Email:&nbsp;</h1>
            <p className='font-mono text-2xl text-emerald-600'>agrawal.r1412@gmail.com</p>
        </div>

        <div className="flex mx-auto justify-center my-5">
            <h1 className='font-baloo-bhai overflow-hidden tracking-widest text-2xl text-emerald-900'>Role:&nbsp;</h1>
            <p className='font-mono text-2xl text-emerald-600'>USER</p>
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

            style={{overflow:'Hidden', fontSize:2+'em'}}
        />
        {value==undefined?<p className='font-mono text-emerald-700 tracking-widest'> Rate US!!!</p> : 
        <p className='font-mono text-emerald-700 tracking-widest'> Thanks for the Rating!!!</p>}

        <div className="my-4 mb-2">
          <textarea
            class="bg-emerald-300 text-emerald-900 font-mono placeholder-emerald-900"
            placeholder="Enter your views"
            name="comment"
            values={comment}
            onChange={(e)=>setCommment(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button className='bg-emerald-300 text-emerald-900 hover:text-white font-mono p-3 rounded-sm'>Post Comment</button>
        </div>
        </div>
    </div>
  )
}

export default Profile
