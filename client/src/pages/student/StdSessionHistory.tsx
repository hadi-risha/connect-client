import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../../context/userDataProvider';
import axiosInstance from '../../utils/user/axiosInstance';

// // Define the session data type
// interface Session {
//   sessionTitle: string;
//   student: string;
//   date: string;
//   time: string;
//   fee: string,
//   status: 'Cancelled' | 'Completed';
// }

// // Mock session data
// const sessions: Session[] = [
//   {
//     sessionTitle: "Fundamentals of Descriptive Statistics",
//     student: 'John Mathew',
//     date: 'January 10, 2025',
//     time: '1:07 PM',
//     fee: '2000',
//     status: 'Cancelled',
//   },
//   {
//      sessionTitle: "Fundamentals of Descriptive Statistics",
//     student: 'Sarah Thomson',
//     date: 'December 21, 2024',
//     time: '1:07 PM',
//     fee: '2000',
//     status: 'Completed',
//   },
// ];


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

const SessionHistory: React.FC = () => {
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
    <div className="w-full bg-gradient-to-br from-blue-50 to-white flex justify-center">

        <div className="p-6  min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Session History</h1>

            {/* View Mode Toggle */}
            <div className="mb-6">
            <button
                onClick={toggleViewMode}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
                {/* Switch to {viewMode === 'card' ? 'List' : 'Card'} View */}
                Click the Card to View More Details
            </button>
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
    
  );
};

export default SessionHistory;