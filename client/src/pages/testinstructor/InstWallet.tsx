import { TypcnUserAdd, PrimeStarFill, AntDesignMessageFilled, FluentNotepadEdit16Filled, TeenyiconsUpSolid, SolarMenuDotsBold, MaterialSymbolsAdd } from '../../assets/userIcons/ProfileIcons'
import { useEffect, useState } from 'react'
import axiosInstance from '../../utils/user/axiosInstance'
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Modal from '../../utils/user/userLogout';
import wallet from '../../assets/userImgs/wallet.png'
import wallet2 from '../../assets/userImgs/wallet2.png'
import debit from '../../assets/userImgs/debit.png'
import credit from '../../assets/userImgs/credit.png'



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
        key: string | '';
        url: string | '';
      };
    instructorId: {
        _id: string;
        firstName: string;
        lastName: string;
    };
    
}

interface WalletData {
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  transactionStatus: string; // 'Credit' or 'Credited'
  fee: string;
}

const Wallet: React.FC = () => {
    const navigate = useNavigate();  // Initialize navigate function

    const [loading, setLoading] = useState(true);

    const [walletData, setWalletData] = useState<WalletData[]>([]);
    const [totalCreditedAmount, setTotalCreditedAmount] = useState(0);
    const [debitedAmount, setDebitedAmount] = useState(0);
    const [balance, setBalance] = useState(0);

    const [profileData, setProfileData] = useState({
        role: '',
        firstName: '',
        lastName: '',
        occupation: '',
        currentInstitution: '',
        profilePic: '',
    });

    useEffect(() => {
        async function fetchProfile() {
            try {
                const res = await axiosInstance.get('/student/profile');
                console.log("res profile data in wallet------------",res.data);
                console.log("res profile data in wallet------------",res.data.message);

                const {
                    role,
                    firstName, 
                    lastName,
                    occupation, 
                    currentInstitution, 
                    profilePicUrl } = res.data;

                setProfileData({
                    role: role || '',
                    firstName: firstName || '',
                    lastName: lastName || '',
                    occupation: occupation || '',
                    currentInstitution: currentInstitution || '',
                    profilePic: profilePicUrl || '',
                });
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        }
        fetchProfile();
    }, []);



    useEffect(() => {
    setLoading(true);
    async function fetchWallet() {
        try {
            const response = await axiosInstance.get(`/instructor/wallet`);
            console.log("response.data.walletData", response.data.walletData);

            // Initialize sums
            let totalCreditedAmount = 0;
            let debitedAmount = 0;

            // Transform the data and calculate sums
            const transformedData: WalletData[] = response?.data?.walletData.map((item: any) => {
                const isCredited = item.status === "booked" || item.status === "completed";
                const fee = item.sessionId.fee;

                // Update sums
                totalCreditedAmount += fee;
                // if (isCredited) {
                //     totalCreditedAmount += fee;
                // } 
                 if (item.status === "cancelled") {
                    debitedAmount += fee;
                }

                // Return the transformed object
                return {
                    firstName: item.studentId.firstName,
                    lastName: item.studentId.lastName,
                    date:
                        isCredited
                            ? item.createdAt
                            : item.cancelledDate || item.updatedAt, // Use cancelledDate for cancelled, fallback to updatedAt
                    transactionStatus: isCredited ? "Credited" : "Debited",
                    fee: fee
                };
            });

            // Set the calculated totals and transformed data to state
            setWalletData(transformedData);
            setTotalCreditedAmount(totalCreditedAmount);
            setDebitedAmount(debitedAmount);
            setBalance(totalCreditedAmount - debitedAmount); // Balance is credited - debited

            setLoading(false);
        } catch (error) {
            console.error("Error fetching wallet data:", error);
        }
    }
    fetchWallet();
}, []);


  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white flex justify-center">
        <div className="min-h-screen w-7/12  p-6 font-sans">
            {/* wallet Header */}
            <div className="flex justify-between items-center mb-8">
                <div className="text-2xl font-bold text-blue-900">SkillShare Platform</div>
            </div>

            {/* Balance Card */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-8">
                <div className="flex justify-between items-center">
                <div>
                    <div className="text-sm">Your Balance</div>
                    <div className="text-3xl font-bold">₹ {balance}</div>
                    {/* <div className="text-sm">As of 31 Jan 2025</div> */}
                    <div className="text-sm">As of {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</div>

                </div>
                <div>
                    <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                    </svg>
                </div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="text-xl font-bold text-gray-800 mb-4">Recent Transactions</div>
                <table className="w-full">
                <thead>
                    <tr className="bg-blue-100 text-blue-900">
                    <th className="p-3 text-left">From</th>
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {walletData?.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 text-gray-700">{item.firstName} {item.lastName}</td>
                        <td className="p-3 text-gray-700"> 
                            {item.transactionStatus === 'Debited'
                            ? new Date(item.updatedAt).toLocaleDateString()
                            : new Date(item.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-3">
                        <span
                            className={`px-2 py-1 rounded-full text-sm ${
                            item.transactionStatus === "Credited"
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            }`}
                        >
                            {item.transactionStatus}
                        </span>
                        </td>
                        <td className="p-3 text-gray-700">{item.fee}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            {/* Financial Overview */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="text-xl font-bold text-gray-800 mb-4"> Financial Overview</div>
                <div className="flex space-x-4">
                <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                    Total Credited Amount : <span className="font-bold">₹ {totalCreditedAmount}</span>
                </button>
                <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
                    Total Debited Amount : <span className="font-bold">₹ {debitedAmount}</span>
                </button>
                <button className="flex-1 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300">
                    Current Balance : <span className="font-bold">₹ {balance}</span>
                </button>
                </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-xl font-bold text-gray-800 mb-4">Notifications</div>
                <div className="space-y-2">
                <div className="bg-yellow-50 p-3 rounded-lg flex items-center space-x-2">
                    <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                    </svg>
                    <div className="text-yellow-600">₹ 1,000 credited from "Advanced Python Programming".</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg flex items-center space-x-2">
                    <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                    </svg>
                    <div className="text-yellow-600">Upcoming Payout: Scheduled for 5 Feb 2025.</div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

// Mock data for transactions
const transactions = [
  { from: "Hadiya Khadija", date: "31 Jan 2025", status: "Credited", amount: "₹ 3,000" },
  { from: "Hadiya Khadija", date: "31 Jan 2025", status: "Debited", amount: "₹ 1,500" },
  { from: "Hadiya Khadija", date: "31 Jan 2025", status: "Debited", amount: "₹ 1,500" },
  { from: "Hadiya Khadija", date: "31 Jan 2025", status: "Credited", amount: "₹ 1,500" },
  { from: "Hadiya Khadija", date: "31 Jan 2025", status: "Credited", amount: "₹ 2,000" },
];

export default Wallet;