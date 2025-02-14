import React, { useEffect, useState } from 'react';
import '../../styles/stdAllSessions.css';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/user/axiosInstance';

interface ISession {
  _id: string;
  title: string;
  introduction: string;
  duration: string;
  fee: number;
  descriptionTitle: string;
  description: string;
  timeSlots: string[];
  coverImage: {
    url: string;
    key: string;
  };
  instructorId: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  category: string;
  createdAt: string;
}

interface IBooking {
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

const StdAllSessions = () => {
  const navigate = useNavigate();

  const [sessions, setSessions] = useState<ISession[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookings, setBooking] = useState<IBooking[]>([]);

  const [selectedCategoryValue, setSelectedCategoryValue] = useState("all");

  const [filters, setFilters] = useState({
    fee: "",
    date: ""
  });

  const [sort, setSort] = useState({
    fee: "none", // "ascending", "descending"
    title: "none" // "asc", "desc"
  });

  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const cardsPerPage = 9;

  useEffect(() => {
    async function fetchSessions() {
      try {
        const response = await axiosInstance.get("/student/sessions");
        const sessions = response.data.sessions || [];

        if (!Array.isArray(sessions)) {
          console.error('Unexpected sessions format:', response.data);
          setLoading(false);
          return;
        }

        setSessions(sessions);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch sessions:', error);
        setLoading(false);
      }
    }
    fetchSessions();
  }, []);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await axiosInstance.get("/student/pending-sessions");
        const bookings = Object.values(response.data).filter(
          (item): item is IBooking => typeof item === 'object' && item !== null && '_id' in item
        );
        setBooking(bookings);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch session:', error);
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  const bookedSessionIds = bookings.map((booking) => booking.sessionId._id);
  const nonBookedSessions = sessions.filter(
    (session) => !bookedSessionIds.includes(session._id)
  );

  const handleViewDetails = (sessionId: string) => {
    navigate(`/student/session/${sessionId}`);
  };

  const applyFiltersAndSorting = () => {
    let filteredData = [...nonBookedSessions];

    if (selectedCategoryValue !== "all") {
      filteredData = filteredData.filter(session => session.category === selectedCategoryValue);
    }

    if (filters.fee) {
      filteredData = filteredData.filter(card => card.fee === Number(filters.fee));
    }

    if (filters.date) {
      filteredData = filteredData.filter(card => {
        const cardDate = new Date(card.createdAt);
        const now = new Date();

        if (filters.date === "This Week") {
          const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
          startOfWeek.setHours(0, 0, 0, 0);
          return cardDate >= startOfWeek;
        } else if (filters.date === "This Month") {
          const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
          startOfMonth.setHours(0, 0, 0, 0);
          return cardDate >= startOfMonth;
        } else if (filters.date === "Recently Added") {
          const daysAgo = new Date();
          daysAgo.setDate(daysAgo.getDate() - 3);
          return cardDate >= daysAgo;
        }
        return true;
      });
    }

    if (sort.fee === "ascending") {
      filteredData = filteredData.sort((a, b) => a.fee - b.fee);
    } else if (sort.fee === "descending") {
      filteredData = filteredData.sort((a, b) => b.fee - a.fee);
    }

    if (sort.title === "asc") {
      filteredData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort.title === "desc") {
      filteredData = filteredData.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filteredData;
  };

  const filteredAndSortedCards = applyFiltersAndSorting();
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredAndSortedCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredAndSortedCards.length / cardsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };


  const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
  return (
    <div className='mb-32 pt-5 px-36 bg-[rgba(var(--vws-light-rgb),var(--vws-bg-opacity))] w-full min-h-[100vh]'>
      <div className='w-full bg-white'>
        <div className="w-full flex space-x-2 border-[3px] border-purple-400 rounded-xl select-none">
          {[
            { label: "All", value: "all" },
            { label: "Science", value: "Science" },
            { label: "Technology", value: "Technology" },
            { label: "Mathematics", value: "Mathematics" },
            { label: "History", value: "History" },
            { label: "Languages", value: "Languages" },
            { label: "Finance", value: "Finance" },
          ].map((option) => (
            <label
              key={option.value}
              className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={option.value}
                className="peer hidden"
                checked={selectedCategoryValue === option.value}
                onChange={() => setSelectedCategoryValue(option.value)}
              />
              <span
                className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
              >
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className='flex space-x-10'>
        <div className="mt-5 filters">
          <p className='ml-1 font-sans font-bold'>Filter by</p>
          <div className='mt-3'>
            <select
              className="border border-gray-300 p-2 rounded-lg"
              onChange={(e) => setFilters({ ...filters, fee: e.target.value })}
            >
              <option value="">Fee</option>
              <option value="2000">₹2000</option>
              <option value="3000">₹3000</option>
            </select>

            <select
              className="ml-3 border border-gray-300 p-2 rounded-lg"
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            >
              <option value="">Date</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="Recently Added">Recently Added</option>
            </select>
          </div>
        </div>

        <div className="mt-5 sort">
          <p className='ml-1 font-sans font-bold'>Sort by</p>
          <div className='mt-3'>
            <select
              className="border border-gray-300 p-2 rounded-lg"
              onChange={(e) => setSort({ ...sort, fee: e.target.value })}
            >
              <option value="none">Sort by Fee</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
            <select
              className="ml-3 border border-gray-300 p-2 rounded-lg"
              onChange={(e) => setSort({ ...sort, title: e.target.value })}
            >
              <option value="none">Sort by Title</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28">
        {currentCards.map(card => (
          <div key={card._id} className="p-1 w-[320px] h-[400px] bg-white shadow-2xl border rounded-xl relative card flex flex-col">
            <div className="relative w-full h-[190px] rounded-[0.7rem] rounded-tr-[4rem] mb-4 image-container">
              <img src={card.coverImage.url} alt="" />
              <div className="price">{card.fee}</div>
            </div>

            <div className="content flex-grow">
              <div className="w-72 truncate brand">{card.title}</div>
              {/* <div className="product-name">{card.description}</div> */}
              <div className="product-name">{truncateText(card.description, 200)}</div>
            </div>

            <div className="button-container mt-auto">
              <button onClick={() => handleViewDetails(card._id)} className="buy-button button">Book Now</button>
            </div>
          </div>
        ))}
      </div>

      <div className="m-20 button-container">
        <button
          className="button-3d"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <div className="button-top">
            <span className="material-icons">❮</span>
          </div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>

        <span className="font-serif mt-5 px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>

        <button
          className="button-3d"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <div className="button-top">
            <span className="material-icons">❯</span>
          </div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>
      </div>
    </div>
  );
};

export default StdAllSessions;