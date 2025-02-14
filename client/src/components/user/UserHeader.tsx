import { FaUserCircle } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import  { logout }  from '../../slices/loginSlice';
import { useDispatch } from 'react-redux';
import Modal from './userLogout';
import { IconParkSolidDownOne, LetsIconsCloseRound, RiLogoutCircleRLine }  from "../../assets/userIcons/HeaderIcon";
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/user/axiosInstance';
import { useUserData } from "../../context/userDataProvider";
import { useToast } from "@chakra-ui/react";
import './userHeader.css'

interface IBookingStatus {
  status: "booked" | "completed" | "cancelled";
  studentId?: string;
  date?: string;
  timeSlot?: string;
}

interface ISearchSession {
  _id: string;
  title: string;
  description: string;
  coverImage: { url: string };
  bookingStatus?: IBookingStatus;
}

interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  profilePicUrl?: string | null;
  profilePicKey?: string | null;
  country?: string;
  education?: string;
  about?: string;
  occupation?: string;
  currentInstitution?: string;
  teachingViews?: string;
  achievements?: string[];
  experience?: string[];
}

const Header = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const userRole = localStorage.getItem('userRole');
  const { userData, setUserData } = useUserData(); //from user provider context

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRoleSwitchModalOpen, setIsRoleSwitchModalOpen] = useState(false); // state for role switch modal

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ISearchSession[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);  // State to toggle search result visibility

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await axiosInstance.get(`/${userRole}/profile`);
        
        const { id, email, firstName,  lastName, role, profilePicUrl, profilePicKey, country, education,
          about, occupation, currentInstitution, teachingViews, achievements, experience } = res.data;
        localStorage.setItem("userId", id);
        localStorage.setItem("name", `${firstName} ${lastName}`);
        
        const formattedData: UserData = {
          id: id,
          email: email,
          firstName: firstName,
          lastName: lastName,
          role: role,
          profilePicUrl: profilePicUrl || null,
          profilePicKey: profilePicKey || null,
          country: country,
          education: education,
          about: about,
          occupation: occupation,
          currentInstitution: currentInstitution,
          teachingViews: teachingViews,
          achievements: achievements,
          experience: experience,
        };

        setUserData(formattedData);
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast({
        title: "Error Occured!",
        description: "Failed to Load the profile data",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      }
    }
    fetchProfile();
  }, []);
  
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Open logout confirmation modal
  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    
    window.location.reload();
    setTimeout(() => {
      navigate('/login');
    }, 500); // 500ms delay
  };

  const handleRoleSwitchClick = () => {
    setIsRoleSwitchModalOpen(true); // Show role switch confirmation modal
    setIsDropdownOpen(false); // Close dropdown menu after selection
  };
  
  const handleCloseRoleModal = () => {
    setIsRoleSwitchModalOpen(false);
    setIsRoleSwitchModalOpen(false); // Close both modals
    setIsDropdownOpen(false);
  };

  const handleSearchInput = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setShowResults(true);  // Show results when searching starts
    try {
      const response = await axiosInstance.get(`/${userRole}/sessions/search`, {
          params: { query: searchQuery },
      });
      setSearchResults(response?.data?.searchResults);
    } catch (error) {
      console.error("Error searching sessions:", error);
      
      toast({
        title: "Error Occured!",
        description: "Failed to Load the sessions",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleCloseSearchResults = () => {
    setShowResults(false);
    setSearchQuery("");  // Clear search query when closing
  };

  const handleArrowClick = () => {
    setShowResults(false);  // Close search results on arrow button click
  };

  const handleInstructorArrowClick = (sessionId: string) => {
    setShowResults(false); 
    navigate(`/instructor/session/${sessionId}`);
  };

  const handleRoleSwitch = async () => {
    try {
      let response = await axiosInstance.post( `/${userData?.role}/switch-role`);

      // close the modal after confirming the switch
      handleCloseRoleModal();
      localStorage.removeItem('token');
      window.location.reload();
      setTimeout(() => {
        navigate('/login');
      }, 500); // 500ms delay
    } catch (error) {
      console.error('Error switching role:', error);
      toast({
        title: "Error Occured!",
        description: "Unable to switch role. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col">

      {/* Overlay for background shade */}
      {isDropdownOpen && (
        <div className="bg-blackfixed inset-0 opacity-70 z-40"></div>
      )}

      {/* Header */}
      <header className="bg-[#f6f6f6] shadow relative z-50">

        {/* 1st section */}
        <div className="mt-0 my-1 pl-36 pr-32 py-5 h-24 bg-navy-blue  flex items-cente justify-between">
          <p className=' text-white font-mono font-semibold text-2xl'>C<span className='text-orange-600'>o</span>nnect</p>
          
         {/* 32nd one, search bar */}
        <div>
            <div className="search-panels">
                <div className="search-group">
                    <input 
                    required 
                    type="text" 
                    name="text"
                    value={searchQuery}
                    onChange={handleSearchInput} 
                    autoComplete="on" 
                    className="input" />
                    <label className="enter-label">Search</label>
                    <div className="btn-box">
                        <button className="btn-search">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path><circle id="svg-circle" cx="208" cy="208" r="144"></circle></svg>
                        </button>
                    </div>
                    <div className="btn-box-x">
                      {searchQuery ? (
                        <button onClick={handleSearchSubmit} type="submit" className="search-button px-3 py-1 rounded-full text-white hover:text-gray-300">
                          <p>Go</p>
                        </button>
                       ) : (
                        <button className="btn-cleare">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" id="cleare-line"></path></svg>
                        </button>
                       )}
                    </div>
                </div>
            </div>
        </div>



          {/* old one */}
          {/* <div className="px-6 py-2 w-94 h-9 flex items-center bg-white rounded-full gap-x-5">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInput}
              className="search-input flex-grow bg-white text-black focus:outline-none placeholder-gray-400 placeholder:text-xs"
              placeholder="Search Instructor, session, Groups, etc"
            />
            <button onClick={handleSearchSubmit} type="submit" className="search-button px-3 py-1 rounded-full text-black hover:bg-gray-200">
              <FaSearch className=" ml-0 mt-1 size-4 text-gray-400" />
            </button>
          </div> */}


          {isSearching && <p>Loading...</p>}
          {showResults && (
            <div className="search-results absolute ml-[26%] mt-12 w-[370px] bg-white shadow-lg space-y-4 h-auto px-4 py-10 z-50">
              <button className="absolute top-0 right-4 p-2 cursor-pointer" onClick={handleCloseSearchResults}>
                <span className="text-gray-400 text-3xl hover:text-black">×</span>
              </button>

              {Array.isArray(searchResults) && searchResults.length === 0 && (
                <p className="text-center text-gray-500">No results found</p>
              )}

              {Array.isArray(searchResults) &&
                searchResults.map((session) => (
                  <div key={session._id} className="search-result-item px-7 py-5 border border-gray-600 rounded-md flex justify-between">
                    <img src={session.coverImage.url} alt={session.title} className="session-image w-7 h-7 rounded-full object-cover" />
                    <h3 className='text-xs w-40 text-black'>{session.title}</h3>

                  { userData?.role === 'student' ? (
                    <Link to={session.bookingStatus?.status === "booked" ? `/student/reserved-session/${session._id}` : `/student/session/${session._id}`}>
                      <button onClick={handleArrowClick} className='border border-gray-400 w-6 h-6 rounded-full cursor-pointer hover:border-blue-700 flex items-center justify-center hover:bg-[#3ee1a6] transition duration-300'>
                        <span className="text-gray-400 text-sm hover:text-blue-700">→</span>
                      </button>
                    </Link>
                    ) : (
                      <button onClick={() => handleInstructorArrowClick(session?._id)} className='border border-gray-400 w-6 h-6 rounded-full cursor-pointer hover:border-blue-700 flex items-center justify-center hover:bg-[#3ee1a6] transition duration-300'>
                        <span className="text-gray-400 text-sm hover:text-blue-700">→</span>
                      </button>
                    )
                  }
                  </div>
              ))}
            </div>
          )}

          <div className="flex space-x-3">
            <li className="flex items-center">
              <a href="/profile">
                {userData && userData?.profilePicUrl ? (
                  <img
                  src={userData.profilePicUrl}
                  className="w-10 h-10 object-cover border-2 border-[#3ee1a6] rounded-full cursor-pointer"
                  alt="Student Profile"
                  />
                ) : (
                  <FaUserCircle className="w-8 h-8 text-white cursor-pointer" />
                )}
              </a>
            </li>
            <li className="flex items-center">
              <a href="/profile">
                  <p className='text-white font-serif'>{userData?.firstName} {userData?.lastName}</p>
              </a>
            </li>
            <li className="flex items-center ">
              <a href="#!" className="mt-1 relative group" onClick={handleDropdownToggle}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-gray-400 transition duration-300">
                  <IconParkSolidDownOne className="text-white group-hover:text-red-600 transition duration-300" />
                </div>
              </a>
            </li>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute -right-0 mt-12 mr-36  w-52 bg-white shadow-lg rounded-lg z-50">
              <ul className="py-2">
                {/* Close Button */}
                <div
                  className="position-absolute w-8 h-8  rounded-full p-1 cursor-pointer ml-40 hover:bg-gray-200" onClick={handleDropdownToggle}  >
                  <LetsIconsCloseRound />
                </div>
                
                <li onClick={handleRoleSwitchClick} className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
                  <span className="text-gray-700">👤</span> 
                  <a href="#!" className="text-gray-700">
                    Switch Account
                  </a>
                </li>

                <li 
                  className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer" 
                  onClick={handleLogoutClick}
                >
                  <RiLogoutCircleRLine /> 
                  <a href="#!" className="text-gray-700">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Logout Confirmation Modal */}
          {isModalOpen && (
            <Modal
              title="Confirm Logout"
              onClose={handleCloseModal}
              onConfirm={() => {
                  handleLogout(); 
                  handleCloseModal();
              }}
            >
              <p>Are you sure you want to log out?</p>
            </Modal>
          )}

          {/* switch role Confirmation Modal */}
          {isRoleSwitchModalOpen && (
            <Modal 
              title="Confirm Role Switch" 
              onClose={handleCloseRoleModal} 
              onConfirm={handleRoleSwitch}
            >
              <p>Are you sure you want to switch your role?</p>
            </Modal>
          )}
        </div>

        {/* 2nd section */}
        <div className="sticky top-0 z-40 bg-[#f6f6f6] flex items-center justify-between pl-80 pr-96 py-5 h-12 shadow-md">

          {/* <li className="flex items-center">
            <Link to={`/${userRole}/home`}>
              <div className='w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6]'>
                <p className='text-black font-serif'>Home</p>
              </div>
            </Link>
          </li> */}
          <li className="flex items-center">
            <Link to={`/${userRole}/home`}>
              <div
                className={`w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6] ${
                  location.pathname === `/${userRole}/home` ? "bg-[#3ee1a6] text-white" : ""
                }`}
              >
                <p className="font-serif">Home</p>
              </div>
            </Link>
          </li>

          

          <li className="flex items-center">
            <Link to={`/${userRole}/sessions`}>
              <div
                className={`w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6] ${
                  location.pathname === `/${userRole}/sessions` ? "bg-[#3ee1a6] text-white" : ""
                }`}
              >
                <p className="font-serif">Sessions</p>
              </div>
            </Link>
          </li>


          <li className="flex items-center">
            <Link to={`/${userRole}/profile`}>
              <div
                className={`w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6] ${
                  location.pathname === `/${userRole}/profile` ? "bg-[#3ee1a6] text-white" : ""
                }`}
              >
                <p className="font-serif">Profile</p>
              </div>
            </Link>
          </li>

          
          <li className="flex items-center">
            <Link to={`/user/posts`}>
              <div
                className={`w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6] ${
                  location.pathname === `/user/posts` ? "bg-[#3ee1a6] text-white" : ""
                }`}
              >
                <p className="font-serif">Posts</p>
              </div>
            </Link>
          </li>


          <li className="flex items-center">
            <Link to={`/user/chat`}>
              <div
                className={`w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6] ${
                  location.pathname === `/user/chat` ? "bg-[#3ee1a6] text-white" : ""
                }`}
              >
                <p className="font-serif">Chat</p>
              </div>
            </Link>
          </li>
          

          <li className="flex items-center">
            <Link to={`/user/notifications`}>
              <div
                className={`w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6] ${
                  location.pathname === `/user/notifications` ? "bg-[#3ee1a6] text-white" : ""
                }`}
              >
                <p className="font-serif">Notification</p>
              </div>
            </Link>
          </li>


          <li className="flex items-center">
            <Link to={`/user/ai/dashboard`}>
              <div
                className={`w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6] ${
                  location.pathname.startsWith("/user/ai") ? "bg-[#3ee1a6] text-white" : ""
                }`}
              >
                <p className="font-serif">Connect AI</p>
              </div>
            </Link>
          </li>


          {userRole === 'student'? (
            <li className="flex items-center">
              <Link to='/student/instructors'>
                <div 
                className={`w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6] ${
                  location.pathname === `/student/instructors` ? "bg-[#3ee1a6] text-white" : ""
                }`}
                >
                  <p className='text-black font-serif'>Instructors</p>
                </div>
              </Link>
          </li>
          ): null}




            {userRole === 'instructor'? (
            <li className="flex items-center">
              <Link to='/instructor/wallet'>
                <div 
                // className='w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6]'
                  className={`w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6] ${
                    location.pathname === `/instructor/wallet` ? "bg-[#3ee1a6] text-white" : ""
                  }`}
                >
                  <p className='text-black font-serif'>Wallet</p>
                </div>
              </Link>
            </li>
          ): null}

          {userRole === 'student'? (
            <li className="flex items-center">
              <Link to='/student/wishlist'>
                <div 
                  className={`w-auto h-auto py-1 px-3 rounded-full hover:bg-[#3ee1a6] ${
                    location.pathname === `/student/wishlist` ? "bg-[#3ee1a6] text-white" : ""
                  }`}
                >
                  <p className='text-black font-serif'>Wishlist</p>
                </div>
              </Link>
            </li>
          ): null}
              
        </div>




      </header>
    </div>
  );
};

export default Header;

  
