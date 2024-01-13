import React,{ useEffect, useCallback, useState } from 'react'
import './style.css'
import { FaAmbulance } from 'react-icons/fa';
import { FaCity, FaPeopleGroup, FaUserDoctor } from 'react-icons/fa6';
import { GiDoctorFace } from 'react-icons/gi';

const cardItems = [
    {
      id: 1,
      src:"https://www.bing.com/th?id=OIP.G0lYmxDtXhTPxFv4pVVdhgAAAA&w=150&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      title: "DR.SANJAY SHARMA",
      specialist:"CANCER SPECIALIST",
      copy:
        "Has solved more than 1500 sucessful cases in cancer. He has received award for best doctor"
    },
    {
      id: 2,
      src:"https://www.bing.com/th?id=OIP.qI4_AXOiSpFzGBfMuMmnwQHaLI&w=123&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      title: "DR.SHIVAM AGRAWAL",
      title: "DR.NAINA AGRAWAL",
      specialist:"HEART SPECIALIST",
      copy: "Has received an award for best Heart specialist in the India and solved 250+ cases succesfully."
    },
    {
      id: 3,
      src:"https://www.bing.com/th?id=OIP.G0lYmxDtXhTPxFv4pVVdhgAAAA&w=150&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      title: "DR.SULTAN PRADHAN",
      specialist:"ENT SPECIALIST",
      copy:
        "He is specalised in this fields and solved 150+ cases and also gives new birth to the people"
    },
    {
      id: 4,
      src:"https://www.bing.com/th?id=OIP.qI4_AXOiSpFzGBfMuMmnwQHaLI&w=123&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      title: "DR.SHIVAM AGRAWAL",
      specialist:"BONE SPECIALIST",
      copy: "Studied from TOP Notch AIIMS college and provides 150+ peoples to stand in the place"
    },
];
  
function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
      return "active";
    } else if (indexes.nextIndex === cardIndex) {
      return "next";
    } else if (indexes.previousIndex === cardIndex) {
      return "prev";
    }
    return "inactive";
}


function DoctorCarousel() {
    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1
    });

    const handleCardTransition = useCallback(() => {
        // If we've reached the end, start again from the first card,
        // but carry previous value over
        if (indexes.currentIndex >= cardItems.length - 1) {
          setIndexes({
            previousIndex: cardItems.length - 1,
            currentIndex: 0,
            nextIndex: 1
          });
        } else {
          setIndexes(prevState => ({
            previousIndex: prevState.currentIndex,
            currentIndex: prevState.currentIndex + 1,
            nextIndex:
              prevState.currentIndex + 2 === cardItems.length
                ? 0
                : prevState.currentIndex + 2
          }));
        }
    }, [indexes.currentIndex]);

    useEffect(() => {
        const transitionInterval = setInterval(() => {
          handleCardTransition();
        }, 4000);
    
        return () => clearInterval(transitionInterval);
    }, [handleCardTransition, indexes]);
    
  return (
    <div className="bg-emerald-100 p-5 h-fit m-5">
        <div className="font-baloo-bhai text-center overflow-hidden text-emerald-600 h-28">
            <h1 className="sm:text-xl md:text-3xl overflow-hidden">GET ADVISED FROM</h1>
            <p className="-m-2 overflow-hidden tracking-widest underline">Top notch doctor</p>
        </div>

        <div className='flex justify-around'>
            <div className="flex-col h-40 w-40 items-center justify-center bg-blue-200 rounded-lg shadow-2xl hidden md:block lg:block box">
                <FaPeopleGroup className="text-5xl text-blue-950 mx-auto text-center my-5" />
                <div className="text-center font-baloo-bhai overflow-hidden text-blue-950">
                10000+<br/>
                Happy Patients<br/>
                And counting
                </div>
            </div>
            <div>
                <ul className="card-carousel flex-col items-center overflow-hidden mx-10 caro">
                {cardItems.map((card, index) => (
                <li
                    key={card.id}
                    className={`card bg-emerald-200 overflow-hidden ${determineClasses(indexes, index)}`}
                >
                    <div className='flex items-start'>
                        <img src={card.src}  alt='no image' className="w-32 h-fit m-auto rounded-lg relative -top-10"/>
                        <div className="mx-8">
                            <h2 className='font-baloo-bhai font-bold overflow-hidden tracking-widest text-emerald-900 tracking-widest'>{card.title}</h2>
                            <p className='text-sm font-normal tracking-widest font-baloo-bhai overflow-hidden'>{card.specialist}</p>
                            <p className='py-5 font-medium font-baloo-bhai overflow-hidden'>{card.copy}</p>
                        </div>
                    </div>
                </li>
                ))}
                </ul>
            </div>
            <div>
                <div className="flex-col h-40 w-40 items-center justify-center bg-blue-200 rounded-lg shadow-2xl hidden md:block lg:block box">
                <FaCity className="text-5xl text-blue-950 mx-auto text-center my-5" />
                    <div className="text-center font-baloo-bhai overflow-hidden text-blue-950">
                        500+<br/>
                        city Available
                    </div>
                </div>
            </div>
        </div>

        <div className="flex m-5 opt">
            <div className="flex-col h-40 w-40 items-center justify-center bg-blue-200 rounded-lg shadow-2xl md:hidden lg:hidden m-4 box2">
                <FaPeopleGroup className="text-5xl text-blue-950 mx-auto text-center my-5" />
                <div className="text-center font-baloo-bhai overflow-hidden text-blue-950">
                10000+<br/>
                Happy Patients<br/>
                </div>
            </div>

            <div className="flex-col h-40 w-40 items-center justify-center bg-blue-200 rounded-lg shadow-2xl md:hidden lg:hidden m-4 box2">
                <FaCity className="text-5xl text-blue-950 mx-auto text-center my-5" />
                <div className="text-center font-baloo-bhai overflow-hidden text-blue-950">
                    500+<br/>
                    city Available
                </div>
            </div>

            <div className="flex-col h-40 w-40 items-center justify-center bg-blue-200 rounded-lg shadow-2xl md:hidden lg:hidden m-4 box2 not">
                <FaUserDoctor className="text-5xl text-blue-950 mx-auto text-center my-5" />
                <div className="text-center font-baloo-bhai overflow-hidden text-blue-950">
                    100+<br/>
                    a-one Doctor
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorCarousel
