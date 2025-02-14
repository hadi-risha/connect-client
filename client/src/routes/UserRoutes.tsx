import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/user/UserHeader";
import ProtectedRoute from './ProtectedRoute';
// *** COMMON PAGES *** 
import Chat from "../pages/common/Chat";


// *** STUDENT PAGES *** 
import StudentHome from "../pages/student/StdHome";
import StdAllSessions from "../pages/student/StdAllSessions";
import StdWishlist from "../pages/student/StdWishlist";



// *** INSTRUCTOR PAGES *** 
import InstructorHome from "../pages/instructor/InstHome";



// *** TESTING PAGES *** 
import Cards from "../testing/Card_1";
import Login from "../testing/Login";
import { SlideTabsExample } from "../testing/CategoryTabs";
import SideNavBar from "../testing/UserNavbar";
import Notifications from "../pages/common/Notifications";
import Wallet from "../pages/testinstructor/InstWallet";
import ReservedSessions from "../pages/student/StdReservedSessions";
import SessionsHistory from "../pages/student/StdSessionHistory";
import PostsWidget from "../pages/common/PostsWidget";
import SingleSessionInfo from "../pages/student/StdSingleSessionInfo";
import StudentBookSession from "../pages/student/StdBookSession";
import SessionPayment from "../pages/student/StdSessionPayment";
import PaymentSuccess from "../pages/student/StdPaymentSuccess";
import PaymentCancel from "../pages/student/StdPaymentCancel";
import ViewInstructors from "../pages/student/ViewInstructors";
import StudentProfile from "../pages/student/stdProfile";
import UpdateProfile from "../pages/student/StdUpdateProfile";
import UpcomingSessions from "../pages/student/StdUpcomingSessions";
import ReservedSessionInfo from "../pages/student/ReservedSessionInfo";
import CancelledSessionInfo from "../pages/student/StdCancelledSessionInfo";
import OldSessionHistory from "../pages/student/OldSessionHistory";
import RecentSessions from "../testing/RecentSessions";
import MeetingRoomPage from "../pages/common/MeetingRoom";
import AiHomepage from "../pages/common/ai/homepage/AiHomepage";
import DashboardLayout from "../layout/aiLayouts/dashboardLayout/DashboardLayout";
import AiDashboardPage from "../pages/common/ai/dashboardPage/AiDashboardPage";
import AiChatPage from "../pages/common/ai/chatPage/AiChatPage";
import ChangePassword from "../pages/common/ChangePassword";
import NewProfile from "../pages/instructor/InstProfile";
import InstructorUpdateProfile from "../pages/instructor/UpdateProfile";
import NewCreateSession from "../pages/instructor/NewCreateSession";
import ISingleSessionDetails from "../pages/instructor/SingleSessionDetails";
import UpdateSession from "../pages/instructor/UpdateSession";
import Sessions from "../pages/instructor/Sessions";
import AllSessions from "../pages/instructor/AllSessions";
import BookedSessions from "../pages/instructor/BookedSessions";
import InstructorSessionHistory from "../pages/instructor/SessionHistory";
import StaticAllSessions from "../testing/StaticAllSessions";
import ViewInstructorProfile from "../pages/student/StdViewInstProfile";
import NotFound from "../pages/common/NotFound";



interface UserRoutesProps {
  token: string | null;
  userRole: string | null; // Include userRole in props
}

function UserRoutes({ token, userRole }: UserRoutesProps) {

  console.log("token ", token);

  if(userRole === null){
    userRole = localStorage.getItem("userRole")
  }
  console.log("userRole in routesss", userRole);
  if (!token || !userRole) {
    console.log("!token");
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
        <div className="flex">

          <Routes>

            {/* common routes */}

            {/* testing */}
            {/* <Route path="/user/card" element={<Cards />} />  */}
            {/* <Route path="/user/recent-sessions" element={<ProtectedRoute><RecentSessions /></ProtectedRoute>} />  */}

            {/* <Route path="/user/testing" element={<Login />} />  */}
            {/* <Route path="/user/category" element={<SlideTabsExample />} /> */}
            <Route path="/user/testing" element={<StaticAllSessions />} /> 

            <Route path="/user/meeting-room/:meetingRoomId" element={<MeetingRoomPage />} /> 
            <Route path="/user/notifications" element={<Notifications />} />

            <Route path="/user/chat" element={<Chat />} /> 

            <Route path="/user/ai/home" element={<AiHomepage />} /> 
            <Route path="/user/ai" element={<DashboardLayout />}>
              <Route path="/user/ai/dashboard" element={<AiDashboardPage />} />
              <Route path="/user/ai/dashboard/chats/:id" element={<AiChatPage />} />
            </Route>
            
            <Route path="/user/reset-password" element={<ChangePassword />} /> 


            <Route path="/user/posts" element={<PostsWidget />} /> 


            
          






            {/* ROUTES FOR STUDENTS */}
            {userRole === "student" ? (
              <>
                <Route path="/student/home" element={<ProtectedRoute><StudentHome /></ProtectedRoute>} /> 
                <Route path="/student/sessions" element={<ProtectedRoute><StdAllSessions /></ProtectedRoute>} /> 
                <Route path="/student/session/:id" element={<ProtectedRoute><SingleSessionInfo /></ProtectedRoute>} />
                <Route path="/student/book-session/:sessionId" element={<ProtectedRoute><StudentBookSession /></ProtectedRoute>} />  
                <Route path="/student/session-payment/:sessionId" element={<ProtectedRoute><SessionPayment /></ProtectedRoute>} />    

                <Route path="/student/payment-success" element={<ProtectedRoute><PaymentSuccess /></ProtectedRoute>} />  
                <Route path="/student/payment-cancel" element={<ProtectedRoute><PaymentCancel /></ProtectedRoute>} />   

                <Route path="/student/instructors" element={<ProtectedRoute><ViewInstructors /></ProtectedRoute>} /> 
                <Route path="/student/instructor/profile/:instId" element={<ProtectedRoute><ViewInstructorProfile /></ProtectedRoute>} />


                <Route path="/student/profile" element={<ProtectedRoute><StudentProfile /></ProtectedRoute>} />
                <Route path="/student/update-profile" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />



                <Route path="/student/upcoming-sessions" element={<ProtectedRoute><UpcomingSessions /></ProtectedRoute>} />   
                <Route path="/student/reserved-session/:id" element={<ProtectedRoute><ReservedSessionInfo /></ProtectedRoute>} /> 

                <Route path="/student/cancelled-session/:id" element={<ProtectedRoute><CancelledSessionInfo /></ProtectedRoute>} /> 

                <Route path="/student/session-history" element={<ProtectedRoute><OldSessionHistory /></ProtectedRoute>} /> 
                






                <Route path="/student/wishlist" element={<ProtectedRoute><StdWishlist /></ProtectedRoute>} /> 

                <Route path="/student/booked-sessions" element={<ProtectedRoute><ReservedSessions /></ProtectedRoute>} /> {/* testing */}
                <Route path="/student/history" element={<ProtectedRoute><SessionsHistory /></ProtectedRoute>} /> {/* testing */}




                {/* <Route path="*" element={<Navigate to="/student/home" replace />} /> */}
                {/* Catch-All Route for Undefined Paths */}
                <Route path="*" element={<NotFound />} />
              </>

            ) : userRole === "instructor" ? (
              // ROUTES FOR INSTRUCTOR
              <>

                <Route path="/instructor/home" element={<ProtectedRoute><InstructorHome /></ProtectedRoute>} /> 


                <Route path="/instructor/profile" element={<ProtectedRoute><NewProfile /></ProtectedRoute>} />
                <Route path="/instructor/update-profile" element={<ProtectedRoute><InstructorUpdateProfile /></ProtectedRoute>} />
                <Route path="/instructor/create-session" element={<ProtectedRoute><NewCreateSession /></ProtectedRoute>} />  
                <Route path="/instructor/session/:id" element={<ProtectedRoute><ISingleSessionDetails /></ProtectedRoute>} /> {/* single session info */}
                <Route path="/instructor/update-session/:sessionId" element={<ProtectedRoute><UpdateSession /></ProtectedRoute>} />  
                <Route path="/instructor/session-actions" element={<ProtectedRoute><Sessions /></ProtectedRoute>} />  {/* get instructor all available sessions for delete& update */}
                <Route path="/instructor/sessions" element={<ProtectedRoute><AllSessions /></ProtectedRoute>} />  {/* get instructor all available sessions for delete& update */}
                <Route path="/instructor/booked-sessions" element={<ProtectedRoute><BookedSessions /></ProtectedRoute>} /> 
                <Route path="/instructor/session-history" element={<ProtectedRoute><InstructorSessionHistory /></ProtectedRoute>} /> 















                <Route path="/instructor/wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} /> 
                
                {/* <Route path="*" element={<Navigate to="/instructor/home" replace />} /> */}
                {/* Catch-All Route for Undefined Paths */}
                <Route path="*" element={<NotFound />} />
              </>
            ) : (
              <>
                {/* {console.error("error in user routes")} */}
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            )}

            
          </Routes>
        </div>
    </>
  );
}

export default UserRoutes;
