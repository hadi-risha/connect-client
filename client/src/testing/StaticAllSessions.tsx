import React, { useState } from 'react'
import './stdAllSessions.css'
import instructor12 from '../assets/userImages/instructor12.jpeg'
import { useNavigate } from 'react-router-dom';

const cardsData = [
  { id: 1, image: 'instructor12', price: '₹1000', brand: 'biology', description: '1st card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-30', duration: '1 week' },
  { id: 2, image: 'instructor12', price: '₹3000', brand: 'science fiction', description: '2nd card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-29', duration: '2 weeks' },
  { id: 3, image: 'instructor12', price: '₹3000', brand: 'will aireplace', description: '3rd card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-28', duration: '3 weeks' },
  { id: 4, image: 'instructor12', price: '₹3000', brand: 'Learn Python', description: '4th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-27', duration: '1 week' },
  { id: 5, image: 'instructor12', price: '₹3000', brand: 'Learn Python', description: '5th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-26', duration: '4 weeks' },
  { id: 6, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '6th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-25', duration: '2 weeks' },
  { id: 7, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '7th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-24', duration: '1 week' },
  { id: 8, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '8th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-23', duration: '3 weeks' },
  { id: 9, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '9th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-22', duration: '2 weeks' },
  { id: 10, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '10th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-21', duration: '1 week' },
  { id: 11, image: 'instructor12', price: '₹2500', brand: 'Learn Python', description: '11th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-20', duration: '1 week' },
  { id: 12, image: 'instructor12', price: '₹2500', brand: 'Learn Python', description: '12th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2024-01-19', duration: '2 weeks' },
  { id: 13, image: 'instructor12', price: '₹2500', brand: 'Learn Python', description: '13st card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-01', duration: '3 weeks' },
  { id: 14, image: 'instructor12', price: '₹2500', brand: 'Learn Python', description: '14th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-01', duration: '4 weeks' },
  { id: 15, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '15th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-01', duration: '1 week' },
  { id: 16, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '16th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-01', duration: '2 weeks' },
  { id: 17, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '17th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-01', duration: '3 weeks' },
  { id: 18, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '18th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-01', duration: '1 week' },
  { id: 19, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '19th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-01', duration: '2 weeks' },
  { id: 20, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '20th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-01', duration: '3 weeks' },
  { id: 21, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '21st card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-01', duration: '4 weeks' },
  { id: 22, image: 'instructor12', price: '₹4000', brand: 'Learn Python', description: '22nd card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-01', duration: '1 week' },
  { id: 23, image: 'instructor12', price: '₹4000', brand: 'Learn Python', description: '23rd card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-01', duration: '2 weeks' },
  { id: 24, image: 'instructor12', price: '₹4000', brand: 'art store', description: '24th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-28', duration: '1 week' },
  { id: 25, image: 'instructor12', price: '₹2000', brand: 'Learn Python', description: '25th card In the middle of every difficulty lies opportunity. Embrace challenges with optimism, for they pave the way to growth and success.', date: '2025-01-29', duration: '3 weeks' }
];



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


const StaticAllSessions = () => {
     const navigate = useNavigate();
    const [selectedCategoryValue, setSelectedCategoryValue] = useState("all");

  const [filters, setFilters] = useState({
  fee: "",
  instructor: "",
  duration: "",
  date: ""
});

const [sort, setSort] = useState({
  fee: "none", // "ascending", "descending"
  duration: "none", // "shortest", "longest"
  title: "none" // "asc", "desc"
});





  const [sessions, setSessions] = useState<ISession[]>([]); 
  const [loading, setLoading] = useState(true);
  const [bookings, setBooking] = useState<IBooking[]>([]); 





// Filter and Sort logic
const applyFiltersAndSorting = () => {
 


  let filteredData = [...cardsData];
  
  // Apply Filters
  if (filters.fee) {
    filteredData = filteredData.filter(card => card.price === filters.fee);
  }
 
  if (filters.date) {
    // Assuming each card has a date property (you may need to adjust this)
    filteredData = filteredData.filter(card => {
      const cardDate = new Date(card.date); // Assuming card has a date field
      const now = new Date();
      if (filters.date === "This Week") {
        return cardDate >= new Date(now.setDate(now.getDate() - 7)); // last 7 days
      } else if (filters.date === "This Month") {
        return cardDate >= new Date(now.setMonth(now.getMonth() - 1)); // last month
      } else {
        return true;
      }
    });
  }
  
  // Apply Sorting
  if (sort.fee === "ascending") {
    filteredData = filteredData.sort((a, b) => parseInt(a.price.replace('₹', '')) - parseInt(b.price.replace('₹', '')));
  } else if (sort.fee === "descending") {
    filteredData = filteredData.sort((a, b) => parseInt(b.price.replace('₹', '')) - parseInt(a.price.replace('₹', '')));
  }
  
  // if (sort.duration === "shortest") {
  //   filteredData = filteredData.sort((a, b) => a.description.length - b.description.length); // assuming description is the duration
  // } else if (sort.duration === "longest") {
  //   filteredData = filteredData.sort((a, b) => b.description.length - a.description.length);
  // }
  
  if (sort.title === "asc") {
    filteredData = filteredData.sort((a, b) => a.brand.localeCompare(b.brand)); // Sorting by title (brand)
  } else if (sort.title === "desc") {
    filteredData = filteredData.sort((a, b) => b.brand.localeCompare(a.brand)); // Sorting by title in reverse order
  }

  return filteredData;
};














  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  
  // Calculate the index of the last card to show
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const filteredAndSortedCards = applyFiltersAndSorting();
  
  // Slice the cardsData to get the cards for the current page
  // const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);
  const currentCards = filteredAndSortedCards.slice(indexOfFirstCard, indexOfLastCard);

  
  // Calculate the total number of pages
  // const totalPages = Math.ceil(cardsData.length / cardsPerPage);
  const totalPages = Math.ceil(filteredAndSortedCards.length / cardsPerPage);

  
  // Functions to go to the next and previous pages
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  
  return (
    <div className='mb-32 pt-5 px-36 bg-[rgba(var(--vws-light-rgb),var(--vws-bg-opacity))] w-full min-h-[100vh]'>

        {/* 37th one, no css, for category selection for sessions(fixed, but few problem in selection) */}
        <div className='w-full bg-white'>
          <div className="w-full flex space-x-2 border-[3px] border-purple-400 rounded-xl select-none">
          {[
              { label: "All", value: "all" },
              { label: "HTML", value: "html" },
              { label: "React", value: "react" },
              { label: "Vue", value: "vue" },
              { label: "JavaScript", value: "javascript" },
              { label: "TypeScript", value: "typescript" },
              { label: "Data Structure", value: "datastructure" },
          ].map((option) => (
              <label
                  key={option.value}
                  className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
              >
                  <input
                      type="radio"
                      name="radio"
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
                <option value="₹2000">₹2000</option>
                <option value="₹3000">₹3000</option>
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
              <select className="border border-gray-300 p-2 rounded-lg"  onChange={(e) => setSort({ ...sort, fee: e.target.value })}>
                <option value="none">Sort by Fee</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
              <select className="ml-3 border border-gray-300 p-2 rounded-lg"  onChange={(e) => setSort({ ...sort, title: e.target.value })}>
                <option value="none">Sort by Title</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </div>
          </div>



        </div>

        

      

        {/* Session cards */}
        {/* 24th one, it is perfect for session card, i mean the like one shows card */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28">
          {currentCards.map(card => (
          <div key={card.id} className="p-1 w-[320px] h-[400px] bg-white shadow-2xl border rounded-xl relative card flex flex-col">
            <div className="relative w-full h-[190px] rounded-[0.7rem] rounded-tr-[4rem] mb-4 image-container">
              <img src={instructor12} alt="" />
              <div className="price">{card.price}</div>
            </div>
            <label className="favorite">
              <input type="checkbox" checked={true} />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
              </svg>
            </label>

            <div className="content flex-grow">
              <div className="brand">{card.brand}</div>
              <div className="product-name">{card.description}</div>
            </div>

            <div className="button-container mt-auto">
              <button className="buy-button button">Book Now</button>
            </div>
          </div>

          ))}
        </div>


        {/* Pagination controls */}
        {/* <div className="pagination flex justify-center mt-8">
          <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded-lg">
            Prev
          </button>
          <span className="px-4 py-2">{Page ${currentPage} of ${totalPages}}</span>
          <button onClick={nextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded-lg">
            Next
          </button>
        </div> */}


        {/* imported pagination button */}
        <div className="m-20 button-container">
          {/* Previous Button (3D button style) */}
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

          {/* Pagination Info */}
          <span className="font-serif mt-5 px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>

          {/* Next Button (3D button style) */}
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
      
  )
}

export default StaticAllSessions