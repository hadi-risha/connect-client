import { Link } from "react-router-dom";
import "./chatList.css";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../../utils/user/axiosInstance";
import { useState } from "react";

const ChatList = () => {
  const userRole = localStorage.getItem("userRole");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0); // Store rating here, initialize as 0

  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`/${userRole}/ai/userchats`);
        return response.data.userChats;
      } catch (err) {
        console.log("error in chatlist :- ", err);
        throw new Error(err.message || "Failed to fetch data");
      }
    },
  });

  const handleRateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating); // Update the local rating state when a star is clicked
  };

  const submitAiRating = async () => {
    try {
      console.log("ratingggg", rating); // Ensure the rating value is logged here
      const response = await axiosInstance.post(`/${userRole}/ai/rating`, {
        rating,
      });
      alert("Rating submitted.");
    } catch (error) {
      console.log("error in chatlist :- ", error);
      throw new Error(error.message || "Failed to submit rating");
    }
  };

  return (
    <div className="pl-10 pr-4 h-[650px] text-white flex flex-col chatList">
      <span className="font-semibold text-xs mb-2.5 title">DASHBOARD</span>
      <Link to="/user/ai/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Connect AI</Link>
      <button onClick={handleRateClick} className="-ml-32">
        How Was Your AI Interaction?
      </button>
      <hr className="border-0 h-0.5 bg-gray-300 opacity-10 rounded-lg my-5" />
      <span className="font-semibold text-xs mb-2.5 title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.map((chat) => (
              <Link to={`/user/ai/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>

      {/* Rating Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 w-96 shadow-lg">
            <h2 className="text-xl font-medium mb-4 text-black font-serif">
              Rate Your AI Interaction
            </h2>
            <div className="mb-4 flex justify-center space-x-2">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <button
                    key={starValue}
                    className={`text-3xl ${
                      starValue <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => handleStarClick(starValue)} // Update rating when star is clicked
                  >
                    ★
                  </button>
                );
              })}
            </div>
            <div className="flex justify-end space-x-3">
              <button
                className="bg-gray-400 px-4 py-2 rounded-3xl hover:bg-gray-500"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-green-400 text-white px-4 py-2 rounded-3xl hover:bg-[#3ee1a6]"
                onClick={() => {
                  submitAiRating(); // Submit the rating when clicked
                  handleCloseModal(); // Close the modal
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatList;
