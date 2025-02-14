import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import axiosInstance from '../../utils/user/axiosInstance';


interface INotifications {
  _id: string;
  title: string;
  message: string;
  isShown: boolean;
}

const Notifications: React.FC = () => {
  const { meetingRoomId } = useParams(); // get the link
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookingId = queryParams.get('bookingId');
  const sessionId = queryParams.get('sessionId');

  // Correct state initialization
  const [notifications, setNotifications] = useState<INotifications[]>([]);

  // Fetch notifications on page mount
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const id = localStorage.getItem('userId');
        const role = localStorage.getItem('userRole');
        
        // Assuming you use the userId and role to fetch the notifications
        const response = await axiosInstance.get(`/${role}/notifications`, {
          params: { userId: id }
        });

        console.log("response.data:", response.data);
        setNotifications(response.data.notifications || []); // Assuming response contains 'notifications'
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white flex justify-center">
      <div className="min-h-screen w-[600px] p-6 font-sans">
        {/* Header */}
        <div className="text-3xl font-bold text-gray-800 mb-8 font-serif">Notifications</div>

        {/* Notifications List */}
        <div className="space-y-4">

          {notifications.length > 0 ? (
            <div>

              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm hover:bg-gray-50 transition duration-300"
                >
                  <div className="flex items-center space-x-4">
                    {/* Image */}
                    <div className="bg-black w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <p className="text-white font-mono font-semibold text-[10px]">
                        C<span className="text-orange-600">o</span>nnect
                      </p>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-lg font-bold text-gray-800">{notification.title}</div>
                      <div className="text-sm  text-gray-600">{notification.message}</div>
                      {/* <div className="text-xs text-gray-500 mt-2">{notification?.time}</div> */}
                    </div>
                  </div>
                </div>
              ))}

            </div>
          ) : (
            <p className="text-center">No notifications found</p>
          )}



        </div>
      </div>
    </div>
    
  );
};

// Mock data for notifications
const notifications = [
  {
    image: "https://via.placeholder.com/150",
    title: "New Course Sale",
    content: "₹ 1,000 credited from 'Advanced Python Programming'.",
    time: "10:30 AM, 31 Jan 2025",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Upcoming Payout",
    content: "Scheduled for 5 Feb 2025.",
    time: "09:15 AM, 31 Jan 2025",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "New Follower",
    content: "John Doe started following you.",
    time: "08:00 AM, 31 Jan 2025",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Course Review",
    content: "You received a 5-star review for 'Web Development Basics'.",
    time: "07:45 AM, 31 Jan 2025",
  },
];

export default Notifications;
