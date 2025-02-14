import { useEffect, useState } from "react";
import personalImg from '../../assets/adminImgs/photo-hadi.jpg'
import axiosInstance from "../../utils/admin/axiosInstance";



interface IRating {
    _id: string;
    rating: number
    userId:{
        firstName: string;
        lastName: string;
        email: string;
        role: string;
        isVerified: boolean;
        image: {
            url: string;
        };
    }
}


const StarRating = ({ rating }: { rating: number }) => {
    const totalStars = 5;
    return (
        <div className="flex">
            {[...Array(totalStars)].map((_, index) => (
                <span
                    key={index}
                    style={{
                        color: index < rating ? 'gold' : 'gray',
                        fontSize: '1.5rem',
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};



const AiRatings = () => {
    
    const [aiRatings, setAiRatings] = useState<IRating[]>([]); // Typed state
    const [loading, setLoading] = useState(true);

 
    

    // Fetch users function
    const fetchRatings = async () => {
        try {
            const response = await axiosInstance.get('/admin/ai-rating'); // Adjust the endpoint if needed
            console.log("response users", response.data.aiRatings);
            setAiRatings(response.data.aiRatings); // Store the users data
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch ratings:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRatings();
    }, []);


    if (loading) {
        return <div>Loading...</div>; // Add a loading state
    }

    
    
    
    if (loading) {
        return <div>Loading...</div>; // Add a loading state
    }

    
    return (
      <>
        <div className='bg-gray-150 h-screen ml-16 mt-7'>


            <div className="flex items-center">
                <h1 className=' text-black text-2xl'>User Ai Ratings</h1>

                <select
                    className="ml-auto mr-6 text-black  bg-blue-100 border w-52 border-gray-300  p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400"
                    // value={selectedSortOption}
                    // onChange={(e) => setSelectedSortOption(e.target.value)}
                >
                    <option value="">Sort by</option>
                    <option value="nameAsc">Name: A to Z</option>
                    <option value="nameDesc">Name: Z to A</option>
                    <option value="dateAsc">Date: Oldest to Newest</option>
                    <option value="dateDesc">Date: Newest to Oldest</option>
                </select>

                <select
                    className="text-black mr-24 border w-60 border-gray-300 rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                    // value={selectedCategory}
                    // onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="All">Filter by</option>
                    <option value="Category A">Category A</option>
                    <option value="Category B">Category B</option>
                    <option value="Category C">Category C</option>
                </select>
            </div>


            <div id="printableTable" className="overflow-x-auto">
                {/* <table className="bg-white w-11/12 h-5/6 mt-5 shadow-md p-7"> */}
                <table className="bg-white w-11/12 h-5/6 mt-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)] p-7">

                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-black text-left">Name</th>
                            {/* <th className="py-2 px-4 border-b text-black text-left">Email</th> */}
                            <th className="py-2 px-4 border-b text-black text-left">Role</th>
                            <th className="py-2 px-4 border-b text-black text-left">Rating</th>
                        </tr>
                    </thead>

                    <tbody>
                        {aiRatings.map((rating) => (
                            <tr key={rating._id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b text-gray-800">
                                    <img
                                        src={rating?.userId?.image?.url || personalImg}
                                        alt={`${rating?.userId?.firstName} ${rating.userId?.lastName}`}
                                        className="w-10 h-10 rounded-lg inline-block mr-2 object-cover"
                                    />
                                    {rating?.userId?.firstName} {rating.userId?.lastName}
                                </td>
                                {/* <td className="py-2 px-4 border-b text-gray-800">{rating?.userId?.email}</td> */}
                                <td className="py-2 px-4 border-b text-gray-800">{rating?.userId?.role || 'User'}</td>

                                {/* <td className="py-2 px-4 border-b text-gray-800">{rating?.rating}</td> */}
                                <td className="py-2 px-4 border-b text-gray-800">
                                    <StarRating rating={rating.rating} />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            








        </div>
      </>
    );
  };
  
  export default AiRatings;
  