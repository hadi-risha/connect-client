import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import config from '../../config/config';
import axiosInstance from '../../utils/user/axiosInstance';

const MeetingRoomPage = () => {
    const { meetingRoomId } = useParams(); // get the link
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const bookingId = queryParams.get('bookingId');
    const sessionId = queryParams.get('sessionId');

    console.log("meetingRoomId, --------", meetingRoomId);
    console.log("bookingId, --------", bookingId);
    console.log("sessionId, --------", sessionId);
       
    
    
    localStorage.setItem("isCallEnded", "false");

    const id = localStorage.getItem("userId");
    const name = localStorage.getItem("name");
    const role = localStorage.getItem("userRole");

    console.log("id, name in room", id, name);
    console.log("role", role);

    const myMeeting = async (element: any) => {  // Element where Zego UI will be injected
        console.log("is entering inside");
        
       

        const appID = Number(config.zegeCloudAppId);
        const serverSecret = config.zegeCloudServerSecret;

        console.log("appID, serverSecret", appID, serverSecret);
        

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            meetingRoomId!, 
            id!,   //give here userid, this actually the userId(just give date for random id)
            name!, //current user name
        ) 
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `${config.frontendUrl}/user/meeting-room/${meetingRoomId}`,
                    // url: `http://localhost:3000/user/meeting-room/${meetingRoomId}`,
                }
            ],
            // scenario: {
            //     mode: ZegoUIKitPrebuilt.OneONoneCall
            // },
            // showScreenSharingButton: true,

            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall // Change from OneONoneCall to GroupCall
            },
            showScreenSharingButton: true,
            showTextChat: true,  // Enable chat during the call
            showUserList: true,   // Show participant list
            layout: "Auto", 
                    
            onLeaveRoom() {
                localStorage.setItem("isCallEnded", "true");
            },
        });
    }


    return (
        <div className='w-screen h-auto bg-white overflow-x-hidden'>
            <div className="ml-28 mr-36 mt-2 mb-36 w-auto h-auto py-2 px-5 shadow-2xl ">
                {
                    role === 'instructor'? (
                        <Link to={`/${role}/booked-sessions`}>  {/* instructor */}
                            <div className='border border-gray-400 w-10 h-10 rounded-full cursor-pointer hover:border-blue-700 flex items-center justify-center hover:bg-[#3ee1a6] transition duration-300'>
                                <span className="text-black text-xl">←</span>
                            </div>
                        </Link>
                    ) : (
                        <Link to={`/${role}/reserved-session/${sessionId}`}>{/* student */}
                            <div className='border border-gray-400 w-10 h-10 rounded-full cursor-pointer hover:border-blue-700 flex items-center justify-center hover:bg-[#3ee1a6] transition duration-300'>
                                <span className="text-black text-xl">←</span>
                            </div>
                        </Link>
                    )
                }
                <div className='w-[1240px] h-[600px]' ref={myMeeting} />
            </div>
        </div>
    );
}

export default MeetingRoomPage;
