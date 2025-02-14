import { IcSharpPersonAdd, PrimeStarFill, AntDesignMessageFilled, FluentNotepadEdit16Filled, TeenyiconsUpSolid, SolarMenuDotsBold, IonPerson, LineiconsWorld, PhBagFill, IcRoundEmail, MdiEducationOutline, TypcnUserAdd, MaterialSymbolsAdd } from '../../assets/userIcons/ProfileIcons'
import instructor from '../../assets/instructor.png'
import bg1 from '../../assets/bg-1.jpeg'
import bg2 from '../../assets/userImgs/bg-2.jpeg'
import bg3 from '../../assets/bg-3.jpeg'
import bg4 from '../../assets/bg-4.jpeg'
import bg5 from '../../assets/bg-5.jpeg'
import bg6 from '../../assets/bg-6.jpeg'
import bg7 from '../../assets/bg-7.jpeg'
import bg8 from '../../assets/bg-8.jpeg'
import bg9 from '../../assets/bg-9.jpeg'
import bg10 from '../../assets/bg-10.jpeg'
import bg11 from '../../assets/bg-11.jpeg'
import studentImg from '../../assets/userImgs/student.png'
import { IconParkSolidDownOne, CharmMenuKebab, EmojioneStar, EmojioneMonotoneStar } from '../../assets/userIcons/HomeIcons';
import { BxCalendar, FluentPeopleTeam48Regular, IcOutlineAccessTime, PhChalkboardTeacher } from '../../assets/userIcons/SessionIcons'
import { useEffect, useState } from 'react'
import axiosInstance from '../../utils/user/axiosInstance'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { useUserData } from "../../context/userDataProvider";


interface IBooking {
    _id: string;
    studentId: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        image: {
            url: string;
        }
    };
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
        // _id: string;
        firstName: string;
        lastName: string;
    };
    date: string;
    timeSlot: string;
    status: string;
    meetingRoomId: string;
}


const BookedSessions = () => {
    const navigate = useNavigate();  
    const { userData, setUserData } = useUserData(); //from user provider context
    const [booking, setBooking] = useState<IBooking[]>([]); 
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchBookings() {
          try {
            const response = await axiosInstance.get("/instructor/booked-sessions"); 
            console.log("response.data:      2", response.data);

            const sessions = Object.values(response.data).filter(
            (item): item is IBooking => typeof item === "object" && item !== null && "_id" in item
            );
        
            setBooking(sessions); // Store the booking data
            setLoading(false);
          } catch (error) {
            console.error('Failed to fetch session:', error);
            setLoading(false);
          }
        };
      
        console.log("booking---------", booking);
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
                        <div>
                            <p className='text-primary-orange font-serif text-lg'>Confirmed Sessions</p>
                            <TeenyiconsUpSolid className='mt-2 ml-16' />
                        </div>
                        <Link to={"/instructor/session-history"}>
                            <p className='text-black font-serif text-lg'>Session History</p>
                        </Link>
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


        {/* UPCOMING SESSIONS */}
        {/* <div className="ml-28 mr-36 mt-8 mb-36 h-auto py-16 px-14 shadow-2xl grid grid-cols-4 gap-3">
            {loading ? (
                <p>Loading...</p>
            ) : booking.length > 0 ? (
                booking.map((session) => (
                <div
                    key={session._id}
                    className='px-10 py-10 relative w-[280px] h-[350px] rounded-2xl border-2 border-black'
                >
                    <p className="text-black font-serif">{session.sessionId.title}</p>

                    <div className="flex space-x-3 pt-10">
                        <PhChalkboardTeacher />
                        <p className="text-gray-600 text-sm"> Student:
                            {session.studentId.firstName} {session.studentId.lastName}
                        </p>
                    </div>
                    <hr className="mt-3 border border-gray-300" />

                    <div className="mt-5 flex space-x-3">
                        <IcOutlineAccessTime />
                        <p className="text-gray-600 text-sm">{formatTimeSlot(session?.timeSlot || '00:00')}</p>
                    </div>
                    <hr className="mt-3 border border-gray-300" />

                    <div className="mt-5 flex space-x-3">
                        <BxCalendar />
                        <p className="text-gray-600 text-sm">{formatDate(session.date)}</p>
                    </div>
                    <Link to={`/user/meeting-room/${session?.meetingRoomId}?sessionId=${session._id}`} className="text-blue-600">
                        <div className="mt-5 px-5 py-2 text-xs  bg-blue-600 text-white  hover:text-black flex justify-center items-center">
                            Click here to join the session
                        </div>                    
                    </Link>
                </div>
                ))
            ) : (
                <p>No upcoming sessions available.</p>
            )}
        </div> */}


        <div className="ml-28 mr-36 mt-8 mb-36 h-auto py-16 px-7 shadow-md grid grid-cols-3 gap-6">
            {loading ? (
                <p>Loading...</p>
            ) : booking.length > 0 ? (
                booking.map((session) => (
                  <div key={session._id} className="flex justify-center items-center w-[350px] h-[400px] bg-[#1b1a1a] rounded-lg"> {/* Increased height to accommodate the button */}
                    <div className="w-[320px] h-[380px] bg-[#1b1a1a] relative text-[#e6e6ea] flex flex-col gap-4"> {/* Added gap between elements */}
                      {/* Big Image Section */}
                      <div 
                        className="w-full h-[200px] absolute bg-cover bg-center cursor-pointer transition-all duration-200 ease-in-out hover:translate-x-2 hover:-translate-y-2 hover:shadow-[ -1px_1px_0_0_violet, -2px_2px_0_0_violet, -3px_3px_0_0_violet, -4px_4px_0_0_violet, -5px_5px_0_0_violet, -6px_6px_0_0_violet, -7px_7px_0_0_violet, -8px_8px_0_0_violet ]"
                        style={{ backgroundImage: `url(${session?.sessionId?.coverImage?.url})` }} // Set the image as background
                      >
                        <div className="absolute top-1.5 left-1.5 font-black text-sm bg-[rgb(228,33,33)] rounded px-1 py-0.5">{formatDate(session.date)}!</div>
                        {/* <div className="absolute bottom-1.5 left-1.5 font-light text-xs bg-[rgb(59,53,53)] rounded-sm px-1 py-0.5">5 members</div> */}
                      </div>
                      <div className="w-full h-[180px]"></div> {/* Spacer for the big image */}

                      {/* Small Image and Text Section */}
                      <div className="flex flex-row gap-4 mt-4"> {/* Added margin-top (mt-4) to create a gap between big and small image */}
                        <div
                          className="w-10 h-10 rounded-full cursor-pointer bg-cover bg-center"
                          style={{ backgroundImage: `url(${session?.studentId?.image?.url})` }}
                        ></div>
                        <div className="flex flex-col gap-1.25 space-y-1">
                          <span className="font-black w-[260px] whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:text-[#9f7cd3]">
                            {session.sessionId.title}
                          </span>
                          <div className="flex flex-col">
                            <span className="text-sm font-normal text-[rgb(216,213,213)] cursor-pointer hover:text-[#9f7cd3]">Student: {session.studentId.firstName} {session.studentId.lastName}</span>
                            {/* <span className="text-sm font-normal text-[rgb(216,213,213)] cursor-pointer hover:text-[#9f7cd3]">Germani</span> */}
                          </div>
                          <div className="flex gap-2">
                            <p className="no-underline text-sm text-[rgb(216,213,213)] bg-[rgb(73,71,71)] px-2.5 py-0.75 rounded-full hover:bg-[rgb(79,79,79)]">{formatTimeSlot(session?.timeSlot || '00:00')}</p>
                          </div>
                        </div>
                      </div>

                      {/* Button Section */}
                      <div className="mt-6 flex justify-center"> 
                        <Link to={`/user/meeting-room/${session?.meetingRoomId}?sessionId=${session._id}`}

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
                        </Link>
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

export default BookedSessions;
