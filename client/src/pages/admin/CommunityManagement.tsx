import { useEffect, useState } from "react";
import personalImg from '../../assets/adminImgs/photo-hadi.jpg'
import axiosInstance from "../../utils/admin/axiosInstance";

interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    image: {
        url: string;
        key: string;
    };
}

interface ICommunity {
    _id: string;
    chatName: string;
    groupAdmin: IUser | null;  // Admin can be null
    users: IUser[];  // Array of users
}



const CommunityManagement = () => {
    
    const [communities, setCommunities] = useState<ICommunity[]>([]); // Typed state
    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const [selectedCommunity, setSelectedCommunity] = useState<ICommunity | null>(null);
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
    const [actionType, setActionType] = useState<"deleteCommunity" | "removeUser" | null>(null);


    // Fetch users function
    const fetchCommunities = async () => {
        try {
            const response = await axiosInstance.get('/admin/community-chat'); // Adjust the endpoint if needed
            console.log("response setCommunities", response.data.communityChats);
            setCommunities(response.data.communityChats); // Store the users data
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch community chats:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCommunities();
    }, []);


    if (loading) {
        return <div>Loading...</div>; // Add a loading state
    }

    // const toggleBlockUser = (user: IUser, action: "block" | "unblock") => {
    //     setSelectedUser(user);
    //     setActionType(action);
    //     setShowModal(true); // Show the confirmation modal
    // };
    
    //   const handleConfirmation = async () => {
    //     if (!selectedUser || !actionType) return;
    
    //     // Optimistic UI update: Update state before making the API call
    //     const updatedUsers = users.map(user =>
    //       user._id === selectedUser._id ? { ...user, isBlocked: actionType === "block" } : user
    //     );
    //     setUsers(updatedUsers);
    
    //     try {
    //       const response = await axiosInstance.patch(`/admin/user/block/${selectedUser._id}`, {
    //         isBlocked: actionType === "block",
    //       });
    
    //       // Re-fetch the users after the block/unblock action
    //       await fetchUsers();
    //       setShowModal(false); // Close modal on success
    //     } catch (error) {
    //       console.error(`Failed to ${actionType === 'block' ? 'block' : 'unblock'} user:`, error);
    //       // If the API call fails, revert the UI changes
    //       setUsers(users.map(user =>
    //         user._id === selectedUser._id ? { ...user, isBlocked: !selectedUser.isBlocked } : user
    //       ));
    //       setShowModal(false); // Close modal on failure
    //     }
    //   };

    const handleDeleteCommunity = (community: ICommunity) => {
        setSelectedCommunity(community);
        setActionType("deleteCommunity");
        setShowModal(true);
    };

    const handleRemoveUser = (community: ICommunity, user: IUser) => {
        setSelectedCommunity(community);
        setSelectedUser(user);
        setActionType("removeUser");
        setShowModal(true);
    };


    const handleConfirmation = async () => {
        try {
            if (actionType === "deleteCommunity" && selectedCommunity) {
                await axiosInstance.delete(`/admin/community/${selectedCommunity._id}`);
                setCommunities(communities.filter(c => c._id !== selectedCommunity._id));
            } else if (actionType === "removeUser" && selectedCommunity && selectedUser) {
                await axiosInstance.delete(`/admin/community/${selectedCommunity._id}/user/${selectedUser._id}`, 
                    // { userId: selectedUser._id }
            );
                setCommunities(communities.map(c =>
                    c._id === selectedCommunity._id
                        ? { ...c, users: c.users.filter(u => u._id !== selectedUser._id) }
                        : c
                ));
            }
        } catch (error) {
            alert("Failed to process the action")
            console.error("Failed to process the action:", error);
        } finally {
            setShowModal(false);
            setSelectedCommunity(null);
            setSelectedUser(null);
            setActionType(null);
        }
    };
    
      const handleCancel = () => {
        setShowModal(false); // Close modal without making any changes
      };
    
      if (loading) {
        return <div>Loading...</div>; // Add a loading state
      }

    
    return (
      <>
        <div className='bg-gray-150 h-screen ml-16 mt-7'>


            <div className="flex items-center">
                <h1 className=' text-black text-2xl'>Community Management</h1>

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


            <div id="printableTable" className="h-auto  overflow-x-auto">
                <div className="bg-gray-50 w-11/12 h-5/6 mt-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)] p-7 space-y-10">
                    {communities.map((group) => (
                        <div className="py-10 px-20 h-auto w-full border space-y-6">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-5">
                                    <p>name:</p>
                                    <p className="font-semibold">{group?.chatName}</p>
                                </div>

                                <div>
                                    <button 
                                          onClick={() => handleDeleteCommunity(group)}
                                        className="bg-red-500 text-white px-2 text-sm rounded-md py-1"
                                    >Delete group
                                    </button>
                                </div>
                            </div>

                            <div className="flex space-x-5">
                                <p>Admin:</p>
                                <div className="flex space-x-1">
                                    <img
                                        src={group?.groupAdmin?.image.url || personalImg}
                                        alt={`${group?.groupAdmin?.firstName} ${group?.groupAdmin?.lastName}`}
                                        className="w-10 h-10 rounded-full inline-block mr-2 object-cover"
                                    />
                                    <p className="mt-2 font-semibold">{`${group.groupAdmin?.firstName} ${group.groupAdmin?.lastName}`}</p>
                                </div>
                            </div>

                            <p className="ml-28 text-lg font-medium">Members</p>
                            <div className=" space-y-4 flex flex-col items-center w-full"> 
                                {group?.users.map((user) => (
                                    <div className="bg-white flex justify-between w-full max-w-[600px] px-4 py-2 items-center">
                                        <div className="flex space-x-4">
                                            <p className="font-semibold">{`${user?.firstName} ${user?.lastName}`}</p>
                                            <p>{user?.email}</p>
                                        </div>
                                        
                                        <button 
                                         onClick={() => handleRemoveUser(group, user)}
                                            className="bg-red-500 text-white px-2 text-sm rounded-md py-1"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>




            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-lg font-semibold text-black text-center">
                            {actionType === "deleteCommunity" ? "Delete Community" : "Remove User"}
                        </h3>
                        <p className="text-black text-center mt-2">
                            Are you sure you want to {actionType === "deleteCommunity" ? "delete this community" : "remove this user"}?
                        </p>
                        <div className="mt-4 flex justify-center space-x-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-300 text-black px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmation}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}


            

{/* {showModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold text-black capitalize text-center">
                {actionType} User
            </h3>
            <p className="text-black text-center mt-2">
                Are you sure you want to {actionType} this user?
            </p>
            <div className="mt-4 flex justify-center space-x-4"> 
                <button
                    onClick={handleCancel}
                    className="bg-gray-300 text-black px-4 py-2 rounded-md"
                >
                    Cancel
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Confirm
                </button>
            </div>
        </div>
    </div>
)} */}








        </div>
      </>
    );
  };
  
  export default CommunityManagement;
  