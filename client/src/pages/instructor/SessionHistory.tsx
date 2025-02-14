import { SolarMenuDotsBold, PrimeStarFill, AntDesignMessageFilled, FluentNotepadEdit16Filled, TeenyiconsUpSolid, IcSharpPersonAdd, TypcnUserAdd, MaterialSymbolsAdd } from '../../assets/userIcons/ProfileIcons'
import { BxCalendar, IcOutlineAccessTime, PhChalkboardTeacher } from '../../assets/userIcons/SessionIcons'
import { useEffect, useState } from 'react'
import axiosInstance from '../../utils/user/axiosInstance'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import bg4 from '../../assets/userImgs/bg-4.jpeg';
import {  } from '../../assets/userIcons/ProfileIcons'
import { useUserData } from "../../context/userDataProvider"



interface ISession {
    _id: string;
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
    studentId: {
        // _id: string;
        firstName: string;
        lastName: string;
        email: string;
        
    };
    date: string;
    timeSlot: string;
    status: string;

}


const InstructorSessionHistory = () => {
    const navigate = useNavigate();  // Initialize navigate function
    const { userData, setUserData} = useUserData()
    const [history, setHistory] = useState<ISession[]>([]); // Typed state
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchHistory() {
          try {
            const response = await axiosInstance.get("/instructor/session-history"); // Adjust the endpoint if needed
            console.log("API Response   : ", response);

            const sessions = response.data.historyData || [];
            console.log("Parsed Sessions:", sessions);
            
            setHistory(sessions); // Store the booking data
            setLoading(false);
          } catch (error) {
            console.error('Failed to fetch session:', error);
            setLoading(false);
          }
        };
      
        console.log("history-------", history);
        fetchHistory();
    }, []);


    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate);
        return date.toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      };


      const formatTimeSlot = (timeSlot: string): string => {
        const [hours, minutes] = timeSlot.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const convertedHours = hours % 12 || 12; 
        return `${convertedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    };

      // Handle click event to navigate to session details page
  const handleViewDetails = (sessionId: string) => {
    navigate(`/instructor/session/${sessionId}`);
  };



  
      const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
      const [expandedSession, setExpandedSession] = useState<number | null>(null);
    
      const toggleViewMode = () => {
        setViewMode((prevMode) => (prevMode === 'card' ? 'list' : 'card'));
      };
    
      const toggleSessionDetails = (index: number) => {
        setExpandedSession((prevIndex) => (prevIndex === index ? null : index));
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
  
  

  return (
    <>
        <div className='w-screen h-auto bg-white'>

        <div className='bg-white w-10/12 h-48  ml-28 mt-5  rounded-tl-lg rounded-tr-lg shadow'>
            {/* first part */}
            <div className='w-full h-32 bg-[#fbcfb1] rounded-tl-lg rounded-tr-lg object-cover bg-center' >

                {/* profile photo section */}
                <div className='flex w-full h-3 pl-10 pt-8'>
                    {userData && userData.profilePicUrl ? (
                        <img
                            src={userData.profilePicUrl} className="w-20 h-20 object-cover rounded-full" alt="Instructor Profile"
                        />
                    ) : (
                        <FaUserCircle className="w-20 h-20 text-white" />
                    )}

                    <div className='pl-5 pt-2'>
                        <p className='text-lg text-black font-medium font-serif'>{userData?.firstName} {userData?.lastName}</p>
                        <p className='text-gray-600'>{userData?.role}</p>
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
                <div className='mt-28 ml-10 h-auto flex'>
                    <div>
                        {userData?.occupation && 
                            <p className='font-semibold text-gray-700'>Position: 
                                <span className='font-normal text-gray-700'> {userData?.occupation}</span>
                            </p>
                        }
                        {userData?.currentInstitution && 
                            <p className='font-semibold text-gray-700'>Institution: 
                                <span className='font-normal text-gray-700'> {userData?.currentInstitution}</span>
                            </p>
                        }
                    </div>

                    <div className='flex space-x-10 ml-20'>
                        <Link to={"/instructor/profile"}>
                            <p className='text-black font-serif text-lg'>About</p>
                        </Link>
                        <Link to={"/instructor/session-actions"}>
                            <p className='text-black font-serif text-lg'>Session Actions</p>
                        </Link>
                       
                        <Link to={"/instructor/booked-sessions"}>
                            <p className='text-black font-serif text-lg'>Confirmed Sessions</p>
                        </Link>
                        <div>
                            <p className='text-primary-orange font-serif text-lg'>Session History</p>
                            <TeenyiconsUpSolid className='mt-2 ml-12' />
                        </div>
                        <Link to={"/user/reset-password"}>
                            <p className='text-black font-serif text-lg'>Reset password</p>
                        </Link>
                    </div>

                    <div className="ml-auto mr-6 relative group">
                        <Link to="/instructor/create-session">
                            <div className="bg-[#f6f6f6] w-10 h-10 -mt-2 rounded-full flex items-center justify-center hover:border hover:border-black">
                                <MaterialSymbolsAdd />
                            </div>
                        </Link>
                        {/* Tooltip for text */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            Create
                        </div>
                    </div>
                </div> 
            </div>   
        </div>


        {/* user info */}
        {/* <div className="ml-28 mr-36 mt-8 mb-36 h-auto py-16 px-14 shadow-2xl grid grid-cols-4 gap-3">
            {loading ? (
                <p>Loading...</p>
            ) : history.length > 0 ? (
                history.map((session) => (
                <div
                    key={session._id}
                    className='px-8 py-10 relative w-[280px] h-[350px] rounded-2xl border-2 border-black'
                >
                    <p className="text-black font-serif">{session.sessionId.title}</p>

                    <div className="flex space-x-3 pt-10">
                        <p className="text-gray-600 text-sm"> Student: {` `}
                            {session.studentId?.firstName} {session.studentId?.lastName}
                        </p>
                    </div>
                    <hr className="mt-3 border border-gray-300" />

                    <div className="mt-5 flex justify-between space-x-3 ">
                        
                        {session.status === 'cancelled' ? (
                            <div className='space-y-5'>
                                <div className='flex '>
                                    <p className="text-gray-700 text-sm font-semibold">Date: </p>
                                    <p className="text-gray-600 text-sm">  {formatDate(session.date)}</p>
                                </div>

                                <div className='flex'>
                                    <p className="text-gray-700 text-sm font-semibold"> Time: </p>
                                    <p className="text-gray-600 text-sm">{formatTimeSlot(session?.timeSlot || '00:00')}</p>
                                </div>
                            </div>
                        ) : (
                            <div className='space-y-5'>
                                
                                <div className='flex'>
                                    <p className="text-gray-700 text-sm font-semibold">Conducted on:</p>
                                    <p className="text-gray-600 text-sm">  {formatDate(session.date)}</p>
                                </div>

                                <div className='flex'>
                                    <p className="text-gray-700 text-sm font-semibold">Time:</p>
                                    <p className="text-gray-600 text-sm">  {formatTimeSlot(session?.timeSlot || '00:00')}</p>
                                </div>

                            </div>
                        )}

                    </div>
                    <hr className="mt-3 border border-gray-300" />

                    <div
                        className="ml-8 mt-5 bg-white text-black font-serif text-sm px-4 py-1 rounded-2xl items-center "
                    >
                        Status: {session.status}
                    </div>
                </div>
                ))
            ) : (
                <p>No sessions available.</p>
            )}
        </div> */}


        <div className='mt-8 mb-36 h-auto py-16 px-32 w-full flex flex-col justify-center'>

            <div className="mb-6">
                <p
                    className="w-64 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Click the Card to View More Details
                </p>
            </div>

            <div className="space-y-4">
            {history.map((session, index) => (
                <div
                key={index}
                className={`${
                    viewMode === 'card'
                    ? 'bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow'
                    : 'bg-white border-b border-gray-200 p-4'
                }`}
                onClick={() => toggleSessionDetails(index)}
                >
                <div className="flex justify-between items-center">
                    <div>
                    <h2 className="text-lg font-semibold truncate">{session.sessionId.title}</h2>
                    <p className="text-sm text-gray-600">Student: {session.studentId.firstName} {session.studentId.lastName}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{formatDate(session.date)}</span>
                    <span
                        className={`px-2 py-1 text-sm rounded-full ${
                        session.status === 'cancelled'
                            ? 'bg-red-100 text-red-600'
                            : 'bg-green-100 text-green-600'
                        }`}
                    >
                        {session.status}
                    </span>
                    </div>
                </div>

                {expandedSession === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                    <p>
                        <strong>Time:</strong> {convertTo12HourFormat(session.timeSlot)}
                        
                    </p>
                    <p>
                        <strong>Duration:</strong> {session.sessionId.duration}
                    </p>
                    <p>
                        <strong>Fees:</strong> {session.sessionId.fee}
                    </p>
                    <p>
                        <strong>Details:</strong> This session was {session.status.toLowerCase()}. No further details
                        available.
                    </p>
                    </div>
                )}
                </div>
            ))}
            </div>

        </div>




        </div>
    </>
  )
}

export default InstructorSessionHistory;
