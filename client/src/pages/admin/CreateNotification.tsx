import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/admin/axiosInstance";

const CreateNotification = () => {
  const [title, setTitle] = useState(""); // Title state
  const [message, setMessage] = useState(""); // Message state
  const [loading, setLoading] = useState(false); // Loading state

  const handleCreateNotification = async () => {

    if (title.trim().length < 2) {
        alert("Title must contain at least 2 characters!");
        return;
      }
  
      // Ensure message has at least 3 valid characters after trimming
      if (message.trim().length < 3) {
        alert("Message must contain at least 3 characters!");
        return;
      }

    // Trimmed validation for title
    if (title.trim().length === 0) {
      alert("Title is required and cannot be empty or whitespace!");
      return;
    }

    // Trimmed validation for message
    if (message.trim().length === 0) {
      alert("Message is required and cannot be empty or whitespace!");
      return;
    }

    try {
      setLoading(true); // Start loading state
      const notificationData = {
        title: title.trim(),
        message: message.trim(),
      };

      const response = await axiosInstance.post(
        "/admin/create-notification",
        notificationData
      );

      console.log("Notification created successfully:", response.data);

      // Reset fields after successful creation
      setTitle("");
      setMessage("");
      alert("Notification created successfully!");
    } catch (error) {
      console.error("Error creating notification:", error);
      alert("Failed to create notification. Please try again.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-gray-150 h-screen ml-16 mt-7">
        <div className="ml-28 mt-10 mb-20 pl-10 pt-10 pb-10 bg-white w-8/12 h-auto rounded-2xl shadow-2xl shadow-[#c3e3d7] flex flex-col">
          <div className="flex items-center space-x-56">
            <Link to={"/admin/notification-management"}>
              <div className="bg-navy-blue border border-black w-10 h-10 rounded-full cursor-pointer hover:border-blue-700 flex items-center justify-center hover:bg-[#3ee1a6] transition duration-300">
                <span className="text-white text-xl">←</span>
              </div>
            </Link>
            <div className="text-black">
              <h1 className="font-semibold text-xl font-serif">
                Create Notification
              </h1>
            </div>
          </div>

          <div className="mt-20 flex w-full ml-40 h-10 space-x-10">
            <p className="w-1/12 text-black font-semibold text-sm font-serif">
              Title
            </p>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md w-5/12 text-black text-sm placeholder:text-xs px-2"
            />
          </div>

          <div className="mt-10 flex w-full ml-40 h-10 space-x-10 mb-10">
            <p className="w-1/12 text-black font-semibold text-sm font-serif">
              Message
            </p>
            <input
              type="text"
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 h-20 rounded-md w-5/12 text-black text-sm placeholder:text-xs px-2"
            />
          </div>

          <button
            onClick={handleCreateNotification}
            disabled={loading}
            className="mt-14 ml-72 w-32 text-white border border-black bg-navy-blue hover:bg-primary-orange h-8 px-4 rounded-full mr-10"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateNotification;
