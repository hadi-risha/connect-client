import { IcSharpPersonAdd, PrimeStarFill, AntDesignMessageFilled, 
    FluentNotepadEdit16Filled, TeenyiconsUpSolid, SolarMenuDotsBold, 
    IonPerson, LineiconsWorld, PhBagFill, IcRoundEmail, MdiHexagonMultiple, 
    GameIconsAchievement, MdiEducationOutline, TdesignStarFilled, 
    FluentEdit28Filled,
    TypcnUserAdd} from '../../assets/userIcons/ProfileIcons'
import instructor from '../../assets/userImgs/instructor.png';
import bg4 from '../../assets/userImgs/bg-4.jpeg';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/user/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useUserData } from "../../context/userDataProvider"







const NewProfile = () => {
    const navigate = useNavigate();
    const { userData, setUserData} = useUserData()


  
  return (
    <>
      <div className='w-screen h-auto bg-white'>


        <div className='bg-white w-10/12 h-48  ml-28 mt-5  rounded-tl-lg rounded-tr-lg shadow'>

            {/* first part */}
            <div className='w-full h-32 bg-[#fbcfb1] rounded-tl-lg rounded-tr-lg object-cover bg-center' >
                {/* profile photo section */}
                <div className='flex w-full h-3 pl-10 pt-8'>
                    {userData && userData?.profilePicUrl ? (
                        <img
                            src={userData?.profilePicUrl} className="w-20 h-20 object-cover rounded-full" alt="Instructor Profile"
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
                        <div>
                            <p className='text-primary-orange font-serif text-lg'>About</p>
                            <TeenyiconsUpSolid className='mt-2 ml-3' />
                        </div>

                        <Link to={"/instructor/session-actions"}>
                            <p className='text-black font-serif text-lg'>Session Actions</p>
                        </Link>

                        <Link to={"/instructor/booked-sessions"}>
                            <p className='text-black font-serif text-lg'>Confirmed Sessions</p>
                        </Link>

                        <Link to={"/instructor/session-history"}>
                            <p className='text-black font-serif text-lg'>Session History</p>
                        </Link>

                        <Link to={"/user/reset-password"}>
                            <p className='text-black font-serif text-lg'>Reset password</p>
                        </Link>
                        
                    </div>

                    <div className='ml-auto mr-6'>
                        {/* <p className='text-black text-md font-serif'>Following Students</p>
                        <p className='text-primary-orange text-md ml-16 font-serif'>20</p> */}

                        <div className='bg-[#f6f6f6] w-10 h-10 -mt-2 rounded-full flex items-center justify-center hover:border hover:border-black'>
                            <SolarMenuDotsBold />
                        </div>
                    </div> 
                </div> 
            </div>   
        </div>


        {/* user info */}  
        <div className='w-10/12 h-auto ml-28 mt-8 space-x-8 flex' >

            {/* personal info */}
            <div className='mb-20 w-full h-auto bg-white rounded-md shadow-md space-y-8 pl-6'>
                <div className='flex justify-between items-center'>
                    <p className='mt-5 text-blue-950 text-xl font-serif'>Personal Info</p>
                    <FluentEdit28Filled  
                        className='mr-6 cursor-pointer hover:w-6 hover:h-6' 
                        onClick={() => navigate('/instructor/update-profile')}
                    />
                </div>
                
                <hr className='w-full mt-3' />
                <div className='biography pt-4'>
                    {userData?.about && (
                        <div className='flex space-x-4'>
                            <IonPerson />
                            <p className='-mt-1 text-black text-md font-serif'>Biography:</p>
                        </div>
                    )}
                    {userData?.about && (
                        <p className='mt-1 w-96 text-gray-600 text-sm ml-8 pr-3'>{userData?.about}</p>
                    )}
                </div>

                <div className='country pt-4'>
                    {userData?.country && (
                        <div className='flex space-x-4'>
                            <LineiconsWorld />
                            <p className='-mt-1 text-black text-md font-serif'>Country:</p>
                        </div>
                    )}
                    {userData?.country && (
                        <p className='mt-1 w-96 text-gray-600 text-sm ml-8 pr-3'>{userData?.country}</p>
                    )}
                </div>

                <div className='occupation pt-4'>
                    {userData?.occupation && (
                        <div className='flex space-x-4'>
                            <PhBagFill />
                            <p className='-mt-1 text-black text-md font-serif'>Occupation:</p>
                        </div>
                    )}
                    {userData?.occupation && (
                        <p className='w-96 text-gray-600 text-sm ml-8 pr-3'>{userData?.occupation}</p>
                    )}
                </div>

                <div className='email pt-4 pb-12'>
                    {userData?.email && (
                        <div className='flex space-x-4'>
                            <IcRoundEmail />
                            <p className='-mt-1 text-black text-md font-serif'>Email:</p>
                        </div>
                    )}
                    {userData?.email && (
                        <p className='w-96 text-gray-600 text-sm ml-8 pr-3'>{userData?.email}</p>
                    )}
                </div>

            </div>


            

            <div className='mb-20 w-full h-auto bg-white rounded-md shadow-md space-y-8 pl-6'>
                <div className='flex justify-between items-center'>
                    <p className='mt-5 text-blue-950 text-xl font-serif '>General Info</p>
                    <FluentEdit28Filled  
                        className='mr-6 cursor-pointer hover:w-6 hover:h-6' 
                        onClick={() => navigate('/instructor/update-profile')}
                    />
                </div>
                <hr className='w-full mt-3' />

                <div className='flex space-x-8'>
                    <div className='teachingPhilosophy pt-4'>
                        {userData?.teachingViews && (
                            <div className='flex space-x-4'>
                                <MdiHexagonMultiple />
                                <p className='-mt-1 text-black text-md font-serif'>Teaching Philosophy:</p>
                            </div>
                        )}
                        {userData?.teachingViews && (
                            <p className='mt-1 w-72 text-gray-600 text-sm ml-8 pr-3'>{userData?.teachingViews}</p>
                        )}
                    </div>
                    <div className='work pt-4'>
                        {userData?.experience && (
                            <div className='flex space-x-4'>
                                <TdesignStarFilled />
                                <p className='-mt-1 text-black text-md font-serif'>Work and Experience:</p>
                            </div>
                        )}
                        {userData?.experience && (
                            <p className='mt-1 w-72 text-gray-600 text-sm ml-8 pr-3'>{userData?.experience} </p>
                        )}
                    </div>

                </div>
                

                <div className='achievements pt-4'>
                    {userData?.achievements && (
                        <div className='flex space-x-4'>
                            <GameIconsAchievement />
                            <p className='-mt-1 text-black text-md font-serif'>Achievements:</p>
                        </div>
                    )}
                    {userData?.achievements && (
                        <p className='mt-1 w-72 text-gray-600 text-sm ml-8 pr-3'>{userData?.achievements}</p>
                    )}
                </div>

                <div className='education pt-4'>
                    {userData?.education && (
                        <div className='flex space-x-4'>
                            <MdiEducationOutline />
                            <p className='-mt-1 text-black text-md font-serif'>Education:</p>
                        </div>
                    )}
                    {userData?.education && (
                        <p className='mt-1 w-72 text-gray-600 text-sm ml-8 pr-3'>{userData?.education}</p>
                    )}
                </div>

            </div>


        </div>
        

      </div>
    </>
  )
}

export default NewProfile;
