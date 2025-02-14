import { PrimeStarFill, AntDesignMessageFilled, FluentNotepadEdit16Filled, TeenyiconsUpSolid, SolarMenuDotsBold, TypcnUserAdd } from '../../assets/userIcons/ProfileIcons'
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/user/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useUserData } from "../../context/userDataProvider";



interface IBooking {
    _id: string;
    studentId: string;
    sessionId: {
        _id: string;
        title: string;
        duration: string;
        fee: string;
        descriptionTitle: string;
        coverImage: {
            url: string;
        };
    };
    instructorId: {
        firstName: string;
        lastName: string;
        image: {
          url: string;
        }
    };
    date: string;
    timeSlot: string;
    status: string;
    meetingRoomId:string;
}


const UpcomingSessions = () => {
    
    const navigate = useNavigate();  // Initialize navigate function
    const { userData, setUserData } = useUserData(); //from user provider context
    const [booking, setBooking] = useState<IBooking[]>([]); // Typed state
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBookings() {
            try {
                const response = await axiosInstance.get("/student/booked-sessions"); // Adjust the endpoint if needed

                const sessions = Object.values(response.data).filter(
                (item): item is IBooking => typeof item === "object" && item !== null && "_id" in item
                );
                // console.log("response :- ", response.data.session);
                
                setBooking(sessions); // Store the booking data
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch session:', error);
                setLoading(false);
            }
        };
        fetchBookings();
    }, []);


    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate);
        return date.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };


  const convertTo12HourFormat = (time: string): string => {
    if (!time) return ""; // Handle empty or undefined input

    const parts = time.split(":");
    if (parts.length < 2) return time; // Return original time if format is incorrect

    let [hours, minutes] = parts.map(Number); // Convert to numbers safely
    if (isNaN(hours) || isNaN(minutes)) return time; // Handle invalid numbers

    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12 for AM case

    return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
};




    // Handle click event to navigate to session details page
    const handleViewDetails = (bookingId: string, sessionId: string, date: string, time: string, meetingRoomId: string) => {
        navigate(`/student/reserved-session/${sessionId}`, {
            state: {
                bookingId,
                date,
                time,
                meetingRoomId
            },
        });
    };

    const cancelSessionViewDetails = (bookingId: string, sessionId: string, date: string, time: string, meetingRoomId: string) => {
        navigate(`/student/cancelled-session/${sessionId}`, {
            state: {
                bookingId,
                date,
                time,
                meetingRoomId
            },
        });
    };
  

  return (
    <>
      <div className='w-screen h-auto bg-white overflow-x-hidden'>
        <div className='bg-white w-10/12 h-48  ml-32 mt-5  rounded-tl-lg rounded-tr-lg shadow'>
            {/* first part */}
            <div className='w-full h-32 bg-[#fbcfb1] rounded-tl-lg rounded-tr-lg object-cover bg-center'>
                
                {/* profile photo section */}
                <div className='flex w-full h-3 pl-10 pt-8'>
                    {userData && userData?.profilePicUrl ? (
                        <img
                        src={userData.profilePicUrl}
                        className="w-20 h-20 object-cover rounded-full"
                        alt="Student Profile"
                        />
                    ) : (
                        <FaUserCircle className="w-20 h-20 text-white" />
                    )}

                    <div className='mt-5 ml-4'>
                        <p className='font-normal text-gray-700 font-serif'>{userData?.firstName} {userData?.lastName}</p>
                        <p className='font-light text-sm text-gray-700'>{userData?.role}</p>
                    </div>

                    {/* <div className='flex ml-auto bg-white w-80 h-16 space-x-6 pl-9 pt-2 rounded-tl-md rounded-bl-md'>
                        <div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center '>
                            <TypcnUserAdd />
                        </div>
                        <div className='w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center'>
                            <PrimeStarFill />
                        </div>
                        <div className='w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center'>
                            <AntDesignMessageFilled />
                        </div>
                        <div className='w-12 h-12 bg-violet-400 rounded-full flex items-center justify-center'>
                            <FluentNotepadEdit16Filled />
                        </div>
                    </div> */}
                </div>

                {/* options section */}
                <div className='mt-28 ml-10 flex'>
                    

                    <div className='flex space-x-20 ml-40'>
                        <Link to="/student/profile">
                            <p className='text-lg font-serif text-black'>About</p>
                        </Link>
                        <div>
                            <p className='text-lg font-serif text-primary-orange'>Reserved Sessions</p>
                            <TeenyiconsUpSolid className='mt-2 ml-14' />
                        </div>
                        <Link to="/student/session-history">
                            <p className='text-lg text-black font-serif'>Session History</p>
                        </Link>
                        <Link to={"/user/reset-password"}>
                            <p className='text-lg text-black font-serif'>Reset Password</p>
                        </Link>
                    </div>

                    <div className='ml-auto mr-6'>
                        <div className='bg-[#f6f6f6] w-10 h-10 -mt-2 rounded-full flex items-center justify-center hover:border hover:border-black'>
                            <SolarMenuDotsBold />
                        </div>
                    </div>
                </div> 
            </div>   
        </div>

        {/* UPCOMING SESSION CARDS */}
        {/* <div className="mt-8 mb-20 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-16"> */}
        <div className="ml-32 mr-32 mt-8 mb-36 h-auto py-16 px-7 shadow-md grid grid-cols-3 gap-6">
            {loading ? (
                <p>Loading...</p>
            ) : booking.length > 0 ? (
                booking.map((session) => (
                  <div key={session._id} className="flex justify-center items-center w-[350px] h-[400px] bg-[#1b1a1a] rounded-lg"> {/* Increased height to accommodate the button */}
                    <div className="w-[320px] h-[380px] bg-[#1b1a1a] relative text-[#e6e6ea] flex flex-col gap-4"> {/* Added gap between elements */}
                      {/* Big Image Section */}
                      <div 
                        className="w-full h-[200px] absolute bg-cover bg-center cursor-pointer transition-all duration-200 ease-in-out hover:translate-x-2 hover:-translate-y-2 hover:shadow-[ -1px_1px_0_0_violet, -2px_2px_0_0_violet, -3px_3px_0_0_violet, -4px_4px_0_0_violet, -5px_5px_0_0_violet, -6px_6px_0_0_violet, -7px_7px_0_0_violet, -8px_8px_0_0_violet ]"
                        style={{ backgroundImage: `url(${session.sessionId.coverImage.url})` }} // Set the image as background
                      >
                        <div className="absolute top-1.5 left-1.5 font-black text-sm bg-[rgb(228,33,33)] rounded px-1 py-0.5">{formatDate(session.date)}!</div>
                        {/* <div className="absolute bottom-1.5 left-1.5 font-light text-xs bg-[rgb(59,53,53)] rounded-sm px-1 py-0.5">5 members</div> */}
                      </div>
                      <div className="w-full h-[180px]"></div> {/* Spacer for the big image */}

                      {/* Small Image and Text Section */}
                      <div className="flex flex-row gap-4 mt-4"> {/* Added margin-top (mt-4) to create a gap between big and small image */}
                        <div
                          className="w-10 h-10 rounded-full cursor-pointer bg-cover bg-center"
                          style={{ backgroundImage: `url(${session.instructorId?.image?.url})` }}
                        ></div>
                        <div className="flex flex-col gap-1.25 space-y-1">
                          <span className="font-black w-[260px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:text-[#9f7cd3]">
                            {session.sessionId.title}
                          </span>
                          <div className="flex flex-col">
                            <span className="text-sm font-normal text-[rgb(216,213,213)] cursor-pointer hover:text-[#9f7cd3]">{session.instructorId.firstName} {session.instructorId.lastName}</span>
                            {/* <span className="text-sm font-normal text-[rgb(216,213,213)] cursor-pointer hover:text-[#9f7cd3]">Germani</span> */}
                          </div>
                          <div className="flex gap-2">
                            <p className="no-underline text-sm text-[rgb(216,213,213)] bg-[rgb(73,71,71)] px-2.5 py-0.75 rounded-full hover:bg-[rgb(79,79,79)]"> {convertTo12HourFormat(session.timeSlot)}</p>
                          </div>
                        </div>
                      </div>

                      {/* Button Section */}
                      <div className="mt-6 flex justify-center"> 
                        <button
                          onClick={() => handleViewDetails(session._id, session.sessionId._id, session.date, session.timeSlot, session.meetingRoomId)}

                          className="w-8/12 relative inline-flex items-center justify-center px-3 py-1 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
                        >
                          <span
                            className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"
                          ></span>
                          <span className="absolute bottom-0 left-0 h-full -ml-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-auto h-full opacity-100 object-stretch"
                              viewBox="0 0 487 487"
                            >
                              <path
                                fillOpacity=".1"
                                fillRule="nonzero"
                                fill="#FFF"
                                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                              ></path>
                            </svg>
                          </span>
                          <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="object-cover w-full h-full"
                              viewBox="0 0 487 487"
                            >
                              <path
                                fillOpacity=".1"
                                fillRule="nonzero"
                                fill="#FFF"
                                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                              ></path>
                            </svg>
                          </span>
                          <span
                            className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                          ></span>
                          <span className="relative text-base font-semibold">Join Session</span>
                        </button>
                      </div>

                    </div>
                  </div>

                ))
            ) : (
                <p>No upcoming sessions available.</p>
            )}
        </div>

      </div>
    </>
  )
}

export default UpcomingSessions;
