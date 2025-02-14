import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { BellIcon, ChevronDownIcon, space } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/toast";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import ChatLoading from "../user/ChatLoading"; 
import { Spinner } from "@chakra-ui/spinner";
import UserListItem from "../user/ChatUserListItem";  
import { Dispatch, SetStateAction } from "react";
import axiosInstance from "../../utils/user/axiosInstance";
import { getSender } from "../../config/ChatLogics.js"; 
import { ChatState } from "../../context/ChatProvider.js"; 


interface User {
  _id: string;
  name: string;
  image: { url: string };
  email: string;
  role: string;
}

// for the response pattern
interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: { url: string };
  role: string;
}

export interface IChat extends Document {
    _id: string;
    users: string[];
    latestMessage: string; 
    isGroupChat: boolean;
    chatName: string;
    groupAdmin?: string;
    unreadCounts?: { userId: string; count: number }[]; 
}

function ChatHeader() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const id = localStorage.getItem("userId");
  const name = localStorage.getItem("name");
  const userRole = localStorage.getItem("userRole");
  const selectedChatId = localStorage.getItem("selectedChatId");
  console.log("selectedChatId from localstorage", selectedChatId);

  const userInfo = {
    _id: id,
    name,
    userRole,
    selectedChatId,
  };

  const {
    selectedChat,
    setSelectedChat,
    user,
    notification,
    setNotification,
    chats,
    setChats,
  } = ChatState();

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();



  // search for a user
  const handleSearch = async () => {    
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/${userRole}/chat/all-users?search=${search}`);
      const users = response.data.users || [];
      setLoading(false);
      setSearchResult(users);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };


  // in search -> select a specific person to chat
  const accessChat = async (userId: string) => {
    try {
      setLoadingChat(true);
      const response = await axiosInstance.post(`/${userRole}/chat/access`, { userId: userId });
      const userIds = response.data.chat.users.map((user:IUser) => user._id);

      if (!chats?.find((c: any) => c._id === response?.data.chat._id)) setChats([response?.data?.chat, ...chats]);
      
      setSelectedChat(response.data.chat);
      setLoadingChat(false);
      onClose();
    } catch (error: any) {
      console.log(error);
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  // useEffect(() => {
  //   console.log("Updated chats:", chats);
  // }, [chats]);
  
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        
        <Box className="ml-5 border border-black  rounded-lg">
          <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
            <Button variant="ghost" onClick={onOpen}>
              <i className="fas fa-search"></i>
              <Text display={{ base: "none", md: "flex" }} px={4}>
                Search User...
              </Text>
            </Button>
          </Tooltip>
        </Box>

        <div>
          <Menu>
          <MenuButton p={1}>
            <NotificationBadge
                count={notification.length}
                effect={Effect.SCALE}
              />
            <BellIcon fontSize="2xl" m={1} />
          </MenuButton>
          <MenuList pl={2}>
            {/* SHOW NOTIFICATION HERE */}
            {!notification.length && "No New Messages"}
            {notification?.map((notif: any) => (
              <MenuItem
                key={notif._id}
                onClick={() => {
                  setSelectedChat(notif.chat);
                  setNotification(notification.filter((n: any) => n !== notif));
                }}
              >
                {notif?.chat?.isGroupChat
                  ? `New Message in ${notif.chat.chatName}`
                  // : `New Message from ${notif?.chat?.users?.[1]?.firstName} ${notif?.chat?.users?.[1]?.lastName}`}
                  : `New Message from ${getSender(userInfo, notif.chat.users)}`}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        </div>
      </Box>

      {/* start chat  */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button 
              onClick={handleSearch}
              >Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user: IUser) => {
                
                return (
                  <UserListItem
                    key={user._id}
                    user={user}
                    handleFunction={() => accessChat(user._id)}
                  />
                );
              })
            )}
            {loadingChat && <Spinner ml="auto" display="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ChatHeader;
