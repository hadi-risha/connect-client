import { useEffect, useState } from 'react';
import biology from '../../assets/userImages/biology.png'
import './stdWishlist.css'
import axiosInstance from '../../utils/user/axiosInstance';
import { useNavigate } from 'react-router-dom';


interface ISession {
    _id: string;
    title: string;
    introduction: string;
    fee: number;
    duration: string;
    timeSlots: string[];
    descriptionTitle: string;
    description: string;
    coverImage: {
      url: string;
      key: string;
    };
    instructorId: {
      firstName: string;
      lastName: string;
    };
}


const StdWishlist = () => {
    const [loading, setLoading] = useState(true);
    const [wishlist, setWishlist] = useState<ISession[]>([]);  
      const navigate = useNavigate();
     

    useEffect(() => {
        async function fetchWishlist() {
          try {
            const response = await axiosInstance.get(`/student/wishlist/sessions`);
            console.log("response.data in wislist check", response.data.sessions);            
            
            setWishlist(response.data.sessions);
            setLoading(false);
          } catch (error) {
            console.error('Failed to fetch wishlist status:', error);
            setLoading(false);
          }
        };
        fetchWishlist();
    }, []);


    const removeFromWishlist = async (sessionId: string) => {
        try {
            const response = await axiosInstance.patch(`/student/wishlist`, {sessionId});
            console.log("response?.data?.sessions----", response?.data?.sessions);
            setWishlist(response.data.sessions);
            setLoading(false);
        } catch (error) {
            console.error("Failed to update wishlist:", error);
            setLoading(false);
        }
    };


    if (loading) {
        return <div>Loading...</div>;  // Display loading text while fetching
    }

    const handleViewDetails = (sessionId: string) => {
        navigate(`/student/session/${sessionId}`);
    };


  return (
    <div className='px-72 py-9 min-h-[100vh] w-full'>


        <div className='py-7 min-h-[75vh] bg-white shadow-2xl rounded-lg space-y-10'>
            <div className='ml-8'>
                <p className=' text-black font-serif text-5xl'>Wishlist</p>
                <p className='text-lg font-light'>{wishlist?.length} items</p>      
            </div>
            
            {/* CARDS */}

            {wishlist?.length > 0 ? (
                wishlist.map(card => (
                    <div key={card._id} className='py-4 mx-36 rounded-lg flex space-x-8 border border-gray-300 '>
                    <div className='pt-1 pl-1'>  {/* never ever remove this div */}
                        <div className="p-1 w-44 h-44 rounded-full border-4 border-gray-400 overflow-hidden flex items-center justify-center">
                            <img src={card?.coverImage?.url} alt="Biology" className="w-full h-full rounded-full object-cover" />
                        </div>
                    </div>
                    
                    <div className='space-y-1'>
                        <p className='text-lg font-bold font-serif'>{card?.title}</p>
                        <p className="text-gray-700 line-clamp-3">
                            {card?.description}
                        </p>

                        <div className='pt-2 flex space-x-4'>
                            {/* custome button */}
                            <button 
                            onClick={() => removeFromWishlist(card?._id)}
                            className="relative flex flex-col items-center justify-center py-2 px-4 bg-pink-100 rounded-xl transition-all duration-200 hover:shadow-lg tooltip hover:bg-pink-200"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
                                    <path fill="red" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                            </button>

                            {/* custom button */}
                            <button 
                            onClick={() => handleViewDetails(card?._id)}
                            className="flex items-center px-4 py-1 text-black font-semibold text-sm rounded-full bg-[#cfef00] border border-transparent transition-all hover:bg-[#c4e201] active:scale-95">
                                <span>Book Now</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 74 74"
                                    height="24"
                                    width="24"
                                    className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                                >
                                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                                    <path
                                    fill="black"
                                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                ))
            ) : (
                <p className='text-lg flex justify-center items-center'>No items in wishlist</p>
            )}
            


        </div>


        

      
    </div>
  )
}

export default StdWishlist
