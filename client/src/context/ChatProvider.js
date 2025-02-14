import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const ChatContext = createContext();

// interface ChatProviderProps {
//   children: React.ReactNode;
// }

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate(); 

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const name = localStorage.getItem("name");
    const role = localStorage.getItem("userRole");
    const userInfo = {
      id,
      name,
      role,
    };

    if (userInfo) {
      setUser(userInfo);
    } else {
      console.log("no user info found");
    }
  }, [navigate]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
        posts,
        setPosts,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("ChatState must be used within a ChatProvider");
  }
  return context;
};

export default ChatProvider;
