import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { getSender } from "../../config/ChatLogics"; 
import ChatLoading from "../../components/user/ChatLoading"; 
import GroupChatModal from "../../modal/user/GroupChatModal";  
import { Button } from "@chakra-ui/react";
import { ChatState } from "../../context/ChatProvider"; 
import axiosInstance from "../../utils/user/axiosInstance";
import { FaUserCircle } from 'react-icons/fa';


interface MyChatProps {
  fetchAgain: boolean; 
}

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  role?: string;
  email: string;
  image: {
    url: string;
  };
}

interface LastMessage {
  _id: string;
  content: string;
  createdAt: string; 
  senderId?: User; 
}

// Chat Interface
interface Chat {
  _id: string;
  usersId: User[];
  groupAdminId?: User; // Admin details if it's a group chat
  lastMessageId?: LastMessage; 
  isGroupChat: boolean;
  chatName: string;
  unreadCounts: { userId: string; count: number }[]; // Unread message counts per user
  updatedAt: string; 
  createdAt: string; 
}

// Chat List Response Interface
interface ChatListResponse {
  chatList: Chat[];
}

interface LoggedUser {
  _id: string | null;
  name: string | null;
  role: string | null;
}

const ChatNavbar: React.FC<MyChatProps> = ({ fetchAgain }) => {
  const id = localStorage.getItem("userId");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("userRole");
  const userInfo = {
    _id :id,
    name,
    role
  }

  const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  const toast = useToast();

  const fetchChats = async () => {
    try {
      const response: AxiosResponse<ChatListResponse> = await axiosInstance.get(`/${role}/chat`);
      console.log("---------", response?.data?.chatList);
      
      setChats(response?.data?.chatList);
    } catch (error) {
      console.log("error in chat-list mychats", error);
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    if (userInfo) {
      setLoggedUser(userInfo);
    }
    
    fetchChats();
  }, [fetchAgain]);


  const convertToIST = (utcDate?: string) => {
    if (!utcDate) return "No timestamp available"; // Handle undefined/null cases

    const date = new Date(utcDate);
    if (isNaN(date.getTime())) return "Invalid date"; // Handle invalid date format

    return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  };



  return (
    <>
      <Box
        display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
        flexDir="column"
        alignItems="center"
        p={3}
        bg="white"
        w={{ base: "100%", md: "31%" }}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Box
          pb={3}
          px={3}
          fontSize={{ base: "28px", md: "30px" }}
          fontFamily="Work sans"
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          My Chats
          <GroupChatModal>
            <Button
              display="flex"
              fontSize={{ base: "17px", md: "10px", lg: "17px" }}
              rightIcon={<AddIcon />}
            >
              New Group Chat
            </Button>
          </GroupChatModal>
        </Box>

        <Box
          display="flex"
          flexDir="column"
          p={3}
          bg="#F8F8F8"
          w="100%"
          h="100%"
          borderRadius="lg"
          overflowY="hidden"
        >
          {chats?.length ? ( 
              // <Stack overflowY="scroll" className="pb-2">
                <Stack
                  overflowY="scroll"
                  className="pb-2"
                  sx={{
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                    scrollbarWidth: 'none', // For Firefox
                  }}
                >
                {chats.map((chat: any) => {
                  return (
                    <Box
                      onClick={() => {
                        // console.log("Selected Chat Details:", {
                        //   id: chat?._id,
                        //   name: chat?.isGroupChat ? chat?.chatName : getSender(loggedUser, chat?.users),
                        // }); 

                        localStorage.setItem("selectedChatId", chat?._id);

                        // setSelectedChat({
                        //   _id: chat?._id,
                        //   users: chat?.users?.map((user: any) => user._id),
                        //   latestMessage: chat?.latestMessage?._id,
                        //   isGroupChat: chat?.isGroupChat,
                        //   chatName: chat?.chatName,
                        //   groupAdmin: chat?.groupAdmin?._id
                        // });
                        setSelectedChat(chat);
                      }}
                      
                      className={`cursor-pointer px-3 py-2 rounded-lg ${
                        selectedChat?._id === chat?._id ? 'bg-teal-500 text-white' : 'bg-gray-200 text-black'
                      }`}
                      
                      key={chat._id}
                    >
                      <Text className="flex gap-4">
                        {!chat?.isGroupChat ? (
                          <>
                            
                            {chat?.users[1]?.image?.url ? (
                              <img 
                                src={chat?.users[1]?.image.url} 
                                alt={`${chat?.users[1]?.firstName} ${chat?.users[1]?.lastName}`} 
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            ) : (
                              <FaUserCircle className="w-8 h-8 text-white cursor-pointer" />
                            )}
                                                
                            {getSender(loggedUser, chat?.users)}
                          </>
                        ) : (
                          chat.chatName
                        )}
                      </Text>

                      {chat?.latestMessage && (
                        <>
                          <Text fontSize="xs">
                            <span className="ml-12">
                            
                              {chat.latestMessage.content.length > 50
                                ? chat.latestMessage.content.substring(0, 51) + "..."
                                : chat.latestMessage.content}

                              <p className="text-right">{convertToIST(chat?.latestMessage?.createdAt)}</p>
                            </span>
                          </Text>
                        </>
                      )}
                    </Box>
                  );
                })}
              </Stack>
            ) : (
              <ChatLoading />
            )}
        </Box>
      </Box>
    </>
  );
};

export default ChatNavbar;
