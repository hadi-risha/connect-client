import { PrimeStarFill, AntDesignMessageFilled, FluentNotepadEdit16Filled, TeenyiconsUpSolid, SolarMenuDotsBold, TypcnUserAdd } from '../../assets/userIcons/ProfileIcons'
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/user/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useUserData } from "../../context/userDataProvider"

interface ISession {
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
    };
    date: string;
    timeSlot: string;
    status: string;
}


const OldSessionHistory = () => {
    const navigate = useNavigate();  // Initialize navigate function
    const { userData, setUserData} = useUserData()
    const [history, setHistory] = useState<ISession[]>([]); // Typed state
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchHistory() {
          try {
            const response = await axiosInstance.get("/student/session-history"); 
            // console.log("response.data:- ", response.data);

            const sessions = Object.values(response.data).filter(
            (item): item is ISession => typeof item === "object" && item !== null && "_id" in item
            );
            console.log("Parsed Sessions history:- ", sessions);
            setHistory(sessions); 
            setLoading(false);
          } catch (error) {
            console.error('Failed to fetch session:', error);
            setLoading(false);
          }
        };
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


    // Handle click event to navigate to session details page
    const handleViewDetails = (bookingId: string, sessionId: string, date: string, time: string) => {
        navigate(`/student/reserved-session/${sessionId}`, {
            state: {
                bookingId,
                date,
                time,
            },
        });
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
                            <Link to={"/student/profile"}>
                                <p className='text-lg font-serif text-black'>About</p>
                            </Link>
                            
                            <Link to={"/student/upcoming-sessions"}>
                                <p className='text-lg text-black font-serif'>Reserved Sessions</p>
                            </Link>
                            <div>
                                <p className='text-lg font-serif text-primary-orange'>Session History</p>
                                <TeenyiconsUpSolid className='mt-2 ml-14' />
                            </div>
                            <Link to={"/user/reset-password"}>
                                <p className='text-lg text-black font-serif'>Reset Password</p>
                            </Link>
                        </div>

                        <div className='ml-auto mr-6'>
                            {/* <p className='text-black text-md font-serif'>Following Instructors</p>
                            <p className='text-primary-orange text-md ml-16 font-serif'>20</p> */}
                            <div className='bg-[#f6f6f6] w-10 h-10 -mt-2 rounded-full flex items-center justify-center hover:border hover:border-black'>
                                <SolarMenuDotsBold />
                            </div>
                        </div>
                    </div> 
                </div>   
            </div>


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
                    <p className="text-sm text-gray-600">{session.instructorId.firstName} {session.instructorId.lastName}</p>
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

export default OldSessionHistory;
