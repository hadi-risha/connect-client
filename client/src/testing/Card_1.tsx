import React from 'react'
import './card_1.css'

const Cards = () => {
  return (
    <div className='w-full h-full bg-blue-200 flex gap-x-10'>


        {/* 1st one blue card -> From Uiverse.io by Uncannypotato69  */}
        {/* <div
        className="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
        >
            <div>
                <h1 className="text-[2em] font-medium">Heading</h1>
                <p className="text-[0.85em]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum
                blanditiis pariatur sequi magni.
                </p>
            </div>

            <button
                className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
            >
                <p>Button</p>
                <svg
                className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                stroke="currentColor"
                stroke-width="1"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                ></path>
                </svg>
            </button>
        </div> */}



        {/* 2nd one black options */}
        {/* <div className="card">
        <ul className="list">
            <li className="element">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7e8590"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-pencil"
            >
                <path
                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                ></path>
                <path d="m15 5 4 4"></path>
            </svg>
            <p className="label">Rename</p>
            </li>
            <li className="element">
            <svg
                className="lucide lucide-user-round-plus"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="#7e8590"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 21a8 8 0 0 1 13.292-6"></path>
                <circle r="5" cy="8" cx="10"></circle>
                <path d="M19 16v6"></path>
                <path d="M22 19h-6"></path>
            </svg>
            <p className="label">Add Member</p>
            </li>
        </ul>
        <div className="separator"></div>
        <ul className="list">
            <li className="element">
            <svg
                className="lucide lucide-settings"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="#7e8590"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                ></path>
                <circle r="3" cy="12" cx="12"></circle>
            </svg>
            <p className="label">Settings</p>
            </li>
            <li className="element delete">
            <svg
                className="lucide lucide-trash-2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="#7e8590"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line y2="17" y1="11" x2="10" x1="10"></line>
                <line y2="17" y1="11" x2="14" x1="14"></line>
            </svg>
            <p className="label">Delete</p>
            </li>
        </ul>
        <div className="separator"></div>
        <ul className="list">
            <li className="element">
            <svg
                className="lucide lucide-users-round"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="#7e8590"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M18 21a8 8 0 0 0-16 0"></path>
                <circle r="5" cy="8" cx="10"></circle>
                <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
            </svg>
            <p className="label">Team Access</p>
            </li>
        </ul>
        </div> */}




        {/* 3rd one - success modal */}
        {/* <div className="card">
        <svg className="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
            fill-opacity="1"
            ></path>
        </svg>

        <div className="icon-container">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            stroke-width="0"
            fill="currentColor"
            stroke="currentColor"
            className="icon"
            >
            <path
                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
            ></path>
            </svg>
        </div>
        <div className="message-text-container">
            <p className="message-text">Success message</p>
            <p className="sub-text">Everything seems great</p>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            stroke-width="0"
            fill="none"
            stroke="currentColor"
            className="cross-icon"
        >
            <path
            fill="currentColor"
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
            ></path>
        </svg>
        </div> */}




        {/* 4th one - condition error modal  */}
        {/* <div className="notifications-container">
        <div className="error-alert">
            <div className="flex">
            <div className="flex-shrink-0">
                
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="error-svg">
                <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
                </svg>
            </div>
            <div className="error-prompt-container">
                <p className="error-prompt-heading">Your password isn't strong enough
                </p><div className="error-prompt-wrap">
                <ul className="error-prompt-list" role="list">
                    <li>Password must be at least !8 characters</li>
                    <li>Password must include Elon's baby name</li>
                </ul>
            </div>
            </div>
            </div>
        </div>
        </div> */}


        {/* 5th one - cherish modal (can use for payment success) */}
        <div className="results-summary-container">
            <div className="confetti">
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
            </div>
            <div className="results-summary-container__result">
                {/* <div className="heading-tertiary">Your Result</div> */}
                <div className="result-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="#98dd61" stroke-linecap="round" stroke-width="2" d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"/></svg>
                </div>
                <div className="result-text-box">
                <div className="heading-secondary">Payment Successful!</div>
                <p className="paragraph">
                    Your session has been successfully Reserved.
                </p>

                </div>
                <div className="summary__cta">
                <button className="btn btn__continue">Ok 
                </button>
                </div>
            </div>
        </div>



        {/* 6th one - course options (can use for sessions category ) */}
        {/* <div className="card">
        <span className="title">All tags</span>
        <div className="card__tags">
            <ul className="tag">
            <li className="tag__name">JS</li>
            <li className="tag__name">wordpress</li>
            <li className="tag__name">uiverse</li>
            <li className="tag__name">Css</li>
            <li className="tag__name">html</li>
            <li className="tag__name">go</li>
            <li className="tag__name">java</li>
            <li className="tag__name">ux/ui</li>
            <li className="tag__name">figma</li> 
            </ul>
        </div>
        </div> */}


        {/* 7th one - no css for this, tailwind,  its effect like a torch, can use for link selection */}
        {/* <div className="card m-auto text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
            <div className="px-8 py-10">
                <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
                <div className="uppercase font-bold text-xl">
                CHAMONILLE
                </div>
                <div className="text-gray-300 uppercase tracking-widest">
                NATURAL, OIL
                </div>
                <div className="text-gray-400 mt-8">
                <p className="font-bold">39.00 MLC</p>
                <p>Perfect everywhere</p>
                </div>
            </div>
            

            <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </div> */}


        {/* 8th one - ai animation */}
        {/* <div className="card">
        <img
            className="image"
            alt=""
            src="https://uiverse.io/astronaut.png"
        />
        <div className="heading">We're on Social Media</div>
        <div className="icons">
            <a className="instagram" href="https://www.instagram.com/uiverse.io/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 25"
                height="25"
                width="24"
            >
                <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                d="M17.0459 7.5H17.0559M3.0459 12.5C3.0459 9.986 3.0459 8.73 3.3999 7.72C3.71249 6.82657 4.22237 6.01507 4.89167 5.34577C5.56096 4.67647 6.37247 4.16659 7.2659 3.854C8.2759 3.5 9.5329 3.5 12.0459 3.5C14.5599 3.5 15.8159 3.5 16.8269 3.854C17.7202 4.16648 18.5317 4.67621 19.201 5.34533C19.8702 6.01445 20.3802 6.82576 20.6929 7.719C21.0459 8.729 21.0459 9.986 21.0459 12.5C21.0459 15.014 21.0459 16.27 20.6929 17.28C20.3803 18.1734 19.8704 18.9849 19.2011 19.6542C18.5318 20.3235 17.7203 20.8334 16.8269 21.146C15.8169 21.5 14.5599 21.5 12.0469 21.5C9.5329 21.5 8.2759 21.5 7.2659 21.146C6.37268 20.8336 5.56131 20.324 4.89202 19.6551C4.22274 18.9862 3.71274 18.1751 3.3999 17.282C3.0459 16.272 3.0459 15.015 3.0459 12.501V12.5ZM15.8239 11.94C15.9033 12.4387 15.8829 12.9481 15.7641 13.4389C15.6453 13.9296 15.4304 14.392 15.1317 14.7991C14.833 15.2063 14.4566 15.5501 14.0242 15.8108C13.5917 16.0715 13.1119 16.2439 12.6124 16.318C12.1129 16.392 11.6037 16.3663 11.1142 16.2422C10.6248 16.1182 10.1648 15.8983 9.76082 15.5953C9.35688 15.2923 9.01703 14.9123 8.76095 14.4771C8.50486 14.0419 8.33762 13.5602 8.2689 13.06C8.13201 12.0635 8.39375 11.0533 8.99727 10.2487C9.6008 9.44407 10.4974 8.91002 11.4923 8.76252C12.4873 8.61503 13.5002 8.86599 14.3112 9.46091C15.1222 10.0558 15.6658 10.9467 15.8239 11.94Z"
                ></path>
            </svg>
            </a>
            <a className="x" href="https://twitter.com/uiverse_io">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
            >
                <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                d="M19.8003 3L13.5823 10.105L19.9583 19.106C20.3923 19.719 20.6083 20.025 20.5983 20.28C20.594 20.3896 20.5657 20.4969 20.5154 20.5943C20.4651 20.6917 20.3941 20.777 20.3073 20.844C20.1043 21 19.7293 21 18.9793 21H17.2903C16.8353 21 16.6083 21 16.4003 20.939C16.2168 20.8847 16.0454 20.7957 15.8953 20.677C15.7253 20.544 15.5943 20.358 15.3313 19.987L10.6813 13.421L4.64033 4.894C4.20733 4.281 3.99033 3.975 4.00033 3.72C4.00478 3.61035 4.03323 3.50302 4.08368 3.40557C4.13414 3.30812 4.20536 3.22292 4.29233 3.156C4.49433 3 4.87033 3 5.62033 3H7.30833C7.76333 3 7.99033 3 8.19733 3.061C8.38119 3.1152 8.55295 3.20414 8.70333 3.323C8.87333 3.457 9.00433 3.642 9.26733 4.013L13.5833 10.105M4.05033 21L10.6823 13.421"
                ></path>
            </svg>
            </a>
            <a className="discord" href="https://discord.gg/KD8ba2uUpT">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                height="25"
                width="25"
            >
                <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                d="M11.5989 6.5003H14.2919C14.3851 6.5003 14.4764 6.47427 14.5555 6.42515C14.6347 6.37603 14.6985 6.30577 14.7399 6.2223L15.4179 4.8543C15.4664 4.75358 15.5488 4.67313 15.6506 4.62706C15.7524 4.58098 15.8673 4.57222 15.9749 4.6023C16.6309 4.7903 18.0049 5.2433 19.1029 6.0003C22.9669 8.8973 22.6069 15.3903 22.5779 16.7603C22.5765 16.8444 22.5541 16.9269 22.5129 17.0003C20.5299 20.5003 17.0899 20.5003 17.0899 20.5003L15.9239 18.0743M15.9239 18.0743C16.4479 17.9163 17.0029 17.7253 17.6029 17.5003M15.9239 18.0743C13.4799 18.8093 11.7219 18.8083 9.27791 18.0733M13.5989 6.5003H10.9109C10.8179 6.50039 10.7266 6.47451 10.6475 6.42557C10.5683 6.37664 10.5044 6.30659 10.4629 6.2233L9.77991 4.8533C9.73146 4.75279 9.64925 4.6725 9.54762 4.62644C9.446 4.58038 9.33142 4.57148 9.22391 4.6013C8.56891 4.7893 7.19291 5.2433 6.09391 6.0003C2.23091 8.8973 2.59091 15.3903 2.61991 16.7603C2.62132 16.8445 2.64366 16.9269 2.68491 17.0003C4.66791 20.5003 8.10791 20.5003 8.10791 20.5003L9.27791 18.0733M9.27791 18.0733C8.75491 17.9163 8.19891 17.7253 7.59891 17.5003M10.6009 12.5003C10.6009 12.7655 10.4956 13.0199 10.308 13.2074C10.1205 13.3949 9.86612 13.5003 9.60091 13.5003C9.33569 13.5003 9.08134 13.3949 8.8938 13.2074C8.70626 13.0199 8.60091 12.7655 8.60091 12.5003C8.60091 12.2351 8.70626 11.9807 8.8938 11.7932C9.08134 11.6057 9.33569 11.5003 9.60091 11.5003C9.86612 11.5003 10.1205 11.6057 10.308 11.7932C10.4956 11.9807 10.6009 12.2351 10.6009 12.5003ZM16.6029 12.5003C16.6029 12.7655 16.4976 13.0199 16.31 13.2074C16.1225 13.3949 15.8681 13.5003 15.6029 13.5003C15.3377 13.5003 15.0833 13.3949 14.8958 13.2074C14.7083 13.0199 14.6029 12.7655 14.6029 12.5003C14.6029 12.2351 14.7083 11.9807 14.8958 11.7932C15.0833 11.6057 15.3377 11.5003 15.6029 11.5003C15.8681 11.5003 16.1225 11.6057 16.31 11.7932C16.4976 11.9807 16.6029 12.2351 16.6029 12.5003Z"
                ></path>
            </svg>
            </a>
        </div>
        </div> */}




        {/* 9th one - can use for profile selcetion like options, but a unique one */}
        {/* <div>
            <div className="card">
        <button className="button Explore"><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="svg">
        <g id="Layer_2" data-name="Layer 2">
            <g id="invisible_box" data-name="invisible box">
            <rect width="48" height="48" fill="none"></rect>
            </g>
            <g id="icons_Q2" data-name="icons Q2">
            <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM34.7,14.7,28,28,14.7,34.7a1.1,1.1,0,0,1-1.4-1.4L20,20l13.3-6.7A1.1,1.1,0,0,1,34.7,14.7ZM24,22a2,2,0,1,0,2,2A2,2,0,0,0,24,22Z"></path>
            <path d="M24,22a2,2,0,1,0,2,2A2,2,0,0,0,24,22Zm0,0a2,2,0,1,0,2,2A2,2,0,0,0,24,22Z"></path>
            </g>
        </g>
        </svg>Explore</button>

        <button className="button Post"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
        <path clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8C11 7.44772 11.4477 7 12 7Z"></path>
        </svg>Post</button>
        
        <button className="button Chat"><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" className="svg">
                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -999.000000)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M97.1784026,840.884344 C92.8882915,837.134592 86.2359857,839.256228 84.7592414,844.817545 C84.139128,847.151543 84.7373784,848.235292 84.7373784,849.987037 C84.7373784,851.787636 84,854.395812 84,854.395812 C84,854.714855 84.2832249,855.025921 84.6320386,854.935194 C85.8792217,854.609172 87.8627895,853.964107 90.2349218,854.608175 C98.2119249,856.770688 103.330841,846.261214 97.1784026,840.884344 M103.447113,859 C103.395437,859 103.341773,858.993021 103.287115,858.979063 C96.9806421,857.395812 97.4039887,859.174477 93.8999507,858.237288 C92.8395967,857.954137 91.8746446,857.443669 91.0418642,856.781655 C97.4059763,857.561316 102.710728,852.016948 101.771614,845.487535 C102.732591,846.487535 103.438169,847.72582 103.7363,849.11266 C104.584981,853.048852 102.430484,852.38285 103.983749,858.364905 C104.075176,858.714855 103.765119,859 103.447113,859" id="messages_chat-[#1557]">

        </path>
                    </g>
                </g>
            
        </svg>Chat</button>
        </div>

        </div> */}


        {/* 10th one - perfect for instructor profile from students side */}
        {/* <div className="card">
            <button className="mail">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </button>
            <div className="profile-pic">
                
                <svg version="1.1" id="svg2" width="666.66669" height="666.66669" viewBox="0 0 666.66669 666.66669" xmlns="http://www.w3.org/2000/svg">
                    <defs id="defs6">
                        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath408">
                            <path d="m 699.926,0 h 3600.16 V 4818.31 H 699.926 Z" id="path406"></path>
                        </clipPath>
                    </defs>
                    
                    <g id="g8" transform="matrix(1.3333333,0,0,-1.3333333,0,666.66667)">
                        <g id="g10" transform="scale(0.1)">
                            <path d="M 0,0 H 5000 V 5000 H 0 Z" style={{ fill: "#fff8f6", fillOpacity: 1,fillRule: "nonzero", stroke: "none"}} id="path12"></path>
                            <path d="M 0,1126.2 H 4487.25 V 5000 H 0 Z" style={{fill:"#fef0ef", fillOpacity : 1, fillRule : "nonzero", stroke: "none"}} id="path14"></path>
                            <path d="M 5000,561.691 4487.25,1126.2 V 5000 H 5000 V 561.691" style={{fill:"#fde4e1", fillOpacity: 1, fillRule:"nonzero", stroke: "none"}} id="path16"></path>
                            <path d="M 4487.25,1146.2 5000,590.422 V 530.859 L 4487.25,1106.22 0,1106.2 v 40 h 4487.25" style={{fill:"#fcd0ce", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path18"></path>
                            <path d="m 914.891,2652.86 h 2369.21 V 4428.88 H 914.891 Z" style={{fill:"#fcd0ce", fillOpacity:1, fillRule:"nonzero", stroke:"none" }}id="path20"></path>
                            <path d="m 995.844,2713.15 h 2207.3 v 1655.44 h -2207.3 z" style={{fill:"#fdeae9", fillOpacity: 1, fillRule:"nonzero", stroke:"none"}} id="path22"></path>
                            <path d="M 2914.29,4139.24 H 1284.71 v 127.31 h 1629.58 v -127.31" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path24"></path>
                            <path d="m 1349.04,2921.58 h -126.83 v 318.43 h 126.83 v -318.43" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path26"></path>
                            <path d="m 1634.86,3519.55 h -126.83 v -597.97 h 126.83 v 597.97" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path28"></path>
                            <path d="m 1920.68,3457.72 h -126.84 v -536.14 h 126.84 v 536.14" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path30"></path>
                            <path d="m 2079.66,2921.58 h 126.828 v 838.84 H 2079.66 Z" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path32"></path>
                            <path d="M 2699.39,2833.93 H 1138.44 v 1154 h 17.32 V 2851.25 h 1543.63 v -17.32" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path34"></path>
                            <path d="m 1278.36,3412.46 -11.56,12.89 296.95,266.64 275.05,-59.75 297.83,331.57 12.89,-11.57 -304.57,-339.06 -276.22,60 -290.37,-260.72" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path36"></path>
                            <path d="m 2172.85,3903.25 -83.98,80.53 108.42,29.01 z" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path38"></path>
                            <path d="m 3051.89,3946.91 h -579.93 v 22.73 h 579.93 v -22.73" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path40"></path>
                            <path d="m 3051.89,3891.89 h -658.23 v 22.72 h 658.23 v -22.72" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path42"></path>
                            <path d="m 3051.89,3836.86 h -658.23 v 22.73 h 658.23 v -22.73" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path44"></path>
                            <path d="m 3051.89,3781.84 h -658.23 v 22.72 h 658.23 v -22.72" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path46"></path>
                            <path d="m 3051.89,3726.81 h -658.23 v 22.73 h 658.23 v -22.73" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path48"></path>
                            <path d="m 3051.89,3671.78 h -658.23 v 22.73 h 658.23 v -22.73" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path50"></path>
                            <path d="m 3051.89,3616.76 h -658.23 v 22.72 h 658.23 v -22.72" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path52"></path>
                            <path d="m 3051.89,3561.73 h -658.23 v 22.73 h 658.23 v -22.73" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path54"></path>
                            <path d="m 3051.89,3506.7 h -658.23 v 22.73 h 658.23 v -22.73" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path56"></path>
                            <path d="m 2393.66,3451.68 h 658.23 v 22.7188 h -658.23 z" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path58"></path>
                            <path d="m 2393.66,3396.65 h 658.23 v 22.7227 h -658.23 z" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path60"></path>
                            <path d="m 3051.89,3341.62 h -658.23 v 22.73 h 658.23 v -22.73" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path62"></path>
                            <path d="m 3051.89,3286.6 h -658.23 v 22.72 h 658.23 v -22.72" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path64"></path>
                            <path d="m 3051.89,3231.57 h -658.23 v 22.73 h 658.23 v -22.73" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path66"></path>
                            <path d="m 3051.89,3176.54 h -658.23 v 22.73 h 658.23 v -22.73" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path68"></path>
                            <path d="m 3051.89,3121.52 h -658.23 v 22.72 h 658.23 v -22.72" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path70"></path>
                            <path d="m 3051.89,3066.49 h -658.23 v 22.72 h 658.23 v -22.72" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path72"></path>
                            <path d="m 3051.89,3011.46 h -658.23 v 22.72 h 658.23 v -22.72" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path74"></path>
                            <path d="m 3051.89,2956.44 h -289.96 v 22.72 h 289.96 v -22.72" style={{fill:"#fff8f6",fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path76"></path>
                            <path d="m 3661.18,4380.23 c -149.67,0 -271.42,-121.76 -271.42,-271.42 0,-149.66 121.75,-271.42 271.42,-271.42 149.66,0 271.42,121.76 271.42,271.42 0,149.66 -121.76,271.42 -271.42,271.42 z m 0,-574.43 c -167.08,0 -303.02,135.93 -303.02,303.01 0,167.08 135.94,303.01 303.02,303.01 167.08,0 303.01,-135.93 303.01,-303.01 0,-167.08 -135.93,-303.01 -303.01,-303.01" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path78"></path>
                            <path d="m 3846.4,4108.81 v 0 c 0,8.44 6.9,15.34 15.35,15.34 h 26.3 c 8.43,0 15.34,-6.9 15.34,-15.34 0,-8.44 -6.91,-15.34 -15.34,-15.34 h -26.3 c -8.45,0 -15.35,6.9 -15.35,15.34" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path80"></path>
                            <path d="m 3418.96,4108.81 v 0 c 0,8.44 6.91,15.34 15.36,15.34 h 26.3 c 8.43,0 15.34,-6.9 15.34,-15.34 0,-8.44 -6.91,-15.34 -15.34,-15.34 h -26.3 c -8.45,0 -15.36,6.9 -15.36,15.34" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path82"></path>
                            <path d="m 3661.18,3923.59 v 0 c 8.44,0 15.34,-6.91 15.34,-15.34 v -26.31 c 0,-8.43 -6.9,-15.34 -15.34,-15.34 -8.44,0 -15.34,6.91 -15.34,15.34 v 26.31 c 0,8.43 6.9,15.34 15.34,15.34" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path84"></path>
                            <path d="m 3661.18,4351.02 v 0 c 8.44,0 15.34,-6.9 15.34,-15.34 v -26.3 c 0,-8.45 -6.9,-15.35 -15.34,-15.35 -8.44,0 -15.34,6.9 -15.34,15.35 v 26.3 c 0,8.44 6.9,15.34 15.34,15.34" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path86"></path>
                            <path d="m 3530.21,3977.84 v 0 c 5.97,-5.97 5.97,-15.74 0,-21.7 l -18.6,-18.6 c -5.97,-5.97 -15.73,-5.97 -21.7,0 -5.96,5.97 -5.96,15.73 0,21.7 l 18.61,18.6 c 5.96,5.97 15.72,5.97 21.69,0" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path88"></path>
                            <path d="m 3832.45,4280.08 v 0 c 5.97,-5.97 5.97,-15.73 0,-21.7 l -18.6,-18.6 c -5.97,-5.97 -15.73,-5.97 -21.7,0 -5.97,5.97 -5.97,15.73 0,21.7 l 18.6,18.6 c 5.97,5.97 15.73,5.97 21.7,0" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path90"></path>
                            <path d="m 3530.21,4239.78 v 0 c -5.97,-5.97 -15.73,-5.97 -21.69,0 l -18.61,18.6 c -5.96,5.97 -5.96,15.73 0,21.7 5.97,5.97 15.73,5.97 21.7,0 l 18.6,-18.6 c 5.97,-5.97 5.97,-15.73 0,-21.7" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path92"></path>
                            <path d="m 3832.45,3937.54 v 0 c -5.97,-5.97 -15.73,-5.97 -21.7,0 l -18.6,18.6 c -5.97,5.96 -5.97,15.73 0,21.7 5.97,5.97 15.73,5.97 21.7,0 l 18.6,-18.6 c 5.97,-5.97 5.97,-15.73 0,-21.7" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path94"></path>
                            <path d="m 3686.25,4108.81 c 0,-13.85 -11.22,-25.07 -25.07,-25.07 -13.85,0 -25.07,11.22 -25.07,25.07 0,13.84 11.22,25.07 25.07,25.07 13.85,0 25.07,-11.23 25.07,-25.07" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path96"></path>
                            <path d="m 3661.18,4140.21 v 0 c -2.68,0 -4.87,2.18 -4.87,4.87 v 128.11 c 0,2.69 2.19,4.87 4.87,4.87 2.69,0 4.87,-2.18 4.87,-4.87 v -128.11 c 0,-2.69 -2.18,-4.87 -4.87,-4.87" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path98"></path>
                            <path d="m 3695.75,4108.81 v 0 c 0,2.69 2.18,4.87 4.87,4.87 h 84.62 c 2.69,0 4.87,-2.18 4.87,-4.87 0,-2.69 -2.18,-4.87 -4.87,-4.87 h -84.62 c -2.69,0 -4.87,2.18 -4.87,4.87" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path100"></path>
                            <path d="m 2811.08,1683.91 h -78.68 v 281.2 h 78.68 v -281.2" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path102"></path>
                            <path d="m 2734.9,1686.41 h 73.68 v 276.2 h -73.68 z m 78.68,-5 h -83.68 v 286.2 h 83.68 v -286.2" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path104"></path>
                            <path d="m 2790.73,1756.66 h -37.98 v 178.52 h 37.98 v -178.52" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path106"></path>
                            <path d="m 2757.74,1761.66 h 28 v 168.53 h -28 z m 37.98,-9.99 h -47.97 v 188.51 h 47.97 v -188.51" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path108"></path>
                            <path d="m 2968.46,1683.91 h -78.68 v 281.2 h 78.68 v -281.2" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path110"></path>
                            <path d="m 2892.27,1686.41 h 73.69 v 276.2 h -73.69 z m 78.69,-5 h -83.68 v 286.2 h 83.68 v -286.2" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path112"></path>
                            <path d="m 2948.11,1756.66 h -37.98 v 178.52 h 37.98 v -178.52" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path114"></path>
                            <path d="m 2915.12,1761.66 h 27.99 v 168.53 h -27.99 z m 37.98,-9.99 h -47.96 v 188.51 h 47.96 v -188.51" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path116"></path>
                            <path d="m 2889.78,1683.91 h -78.7 v 281.2 h 78.7 v -281.2" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path118"></path>
                            <path d="m 2869.41,1756.66 h -37.97 v 178.52 h 37.97 v -178.52" style={{fill:"#fcd0ce", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path120"></path>
                            <path d="m 1071.52,2645.58 c 6.16,10.04 33.79,32.89 40.36,42.67 18.94,28.26 52.01,77.18 82.18,97.67 9.51,6.46 40.24,10.88 43.61,5.2 4.02,-6.77 -11.83,-7.71 -26.78,-14 -8.95,-3.76 -11.3,-13.34 -15.68,-19.31 9.07,-2.61 16.3,-6.1 12.79,-14.85 11.28,-1.69 15.53,-7.56 13.48,-18.77 22.62,-5.78 -13.1,-41.1 -21.58,-48.72 -5.52,-4.96 -11.55,-9.71 -18.69,-11.72 -7.15,-2.03 -24.27,-3.38 -29.15,2.21 -16.16,-11.71 -39.82,-43.31 -39.82,-43.31" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path122"></path>
                            <path d="m 692.59,786.012 41.078,0.449 c -0.172,-19.129 67.852,-36.16 97.129,-55.352 8.641,-5.66 24.715,-16.769 14.359,-26.8 -6.176,-5.977 -19.433,-8.028 -28.218,-7.809 -36.223,0.91 -73.047,0.23 -106.372,12.148 -13.382,4.801 -27.679,11.774 -31.25,23.571 -4.714,15.601 13.614,26.902 13.274,53.793" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path124"></path>
                            <path d="m 236.465,771.34 40.199,0.449 c -0.164,-19.117 66.285,-36.168 94.902,-55.348 8.446,-5.671 24.157,-16.781 14.036,-26.812 -6.036,-5.981 -19,-8.02 -27.582,-7.797 -35.418,0.898 -71.403,0.219 -103.977,12.137 -13.082,4.801 -27.063,11.773 -30.547,23.57 -4.613,15.602 13.305,26.902 12.969,53.801" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path126"></path>
                            <path d="m 729.652,2025.12 c 53.004,-269.56 53.004,-393.22 59.426,-591.82 7.797,-241.24 -28.414,-464.909 -42.637,-662.652 0,0 -30.484,-14.789 -57.668,-0.699 -25.941,120.86 -102.625,346.171 -76.082,506.411 4.77,28.79 8.68,57.72 9.028,86.9 0.82,68.39 -193.637,395.15 -154.762,707.41" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path128"></path>
                            <path d="m 551.762,2116.81 c 17.89,-176.45 -66.153,-599.99 -99.133,-763.54 -43.027,-213.38 -153.652,-563.45 -161.09,-597.239 -14.199,-9.531 -56.805,0.711 -56.805,0.711 -2.468,162.406 -44.211,378.558 13.246,533.038 10.321,27.75 21.661,55.54 25.09,84.57 3.258,27.56 -93.257,338.29 -76.437,470.17 8.887,69.68 33.719,153.77 94.676,229.93" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path130"></path>
                            <path d="m 537.809,1839.29 c -7.496,-46.72 -14.192,-93.54 -19.926,-140.51 -0.578,-4.72 -1.211,-9.42 -1.699,-14.15 -0.129,-1.25 -0.383,-2.56 -0.301,-3.81 0.058,-0.94 -0.113,-3.07 0.133,-1.21 -0.364,-2.73 3.933,-2.71 4.293,0 -0.352,-2.65 -0.075,-0.86 0.242,0.24 0.301,1.02 0.488,2.01 0.664,3.06 0.633,3.81 1.144,7.64 1.691,11.46 1.813,12.68 3.731,25.36 5.356,38.07 3.703,28.85 7.422,57.71 10.453,86.63 0.695,6.6 1.387,13.22 2.078,19.82 0.18,1.69 -2.719,2.1 -2.984,0.4" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path132"></path>
                            <path d="m 332.875,2756.77 c 29.961,31.32 84.684,18.2 127.605,24.28 33.36,4.73 66.715,9.46 100.079,14.18 7.953,1.13 16.046,2.26 23.984,1.02 11.52,-1.81 21.645,-8.4 31.363,-14.84 27.848,-18.44 55.696,-36.88 83.547,-55.32 29.75,-19.7 27.008,-62.55 31.027,-94.92 4.723,-38.06 8.247,-76.27 11.004,-114.53 5.434,-75.29 7.93,-150.8 8.532,-226.29 0.574,-72.24 -4.137,-143.8 -9.141,-215.82 -0.34,-4.9 -0.676,-9.88 0.297,-14.7 1.887,-9.29 8.43,-17.03 11.125,-26.13 5.496,-18.54 -6.012,-37.87 -19.52,-51.73 -57.355,-58.85 -159.183,-47.31 -233.832,-46.41 -72.73,0.87 -145.351,14.3 -213.75,39.92 -25.195,9.43 -76.218,22.82 -93.425,45.22 -17.594,22.9 22.671,77.83 23.375,105.68 4.324,171.4 8.324,341.74 12.644,513.14 0.84,33.27 -25.156,67.31 -2.043,90.49" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path134"></path>
                            <path d="m 199.426,1928.11 c 7.676,-1.92 11.082,-10.82 12.453,-18.61 4.32,-24.45 0.484,-49.52 -3.348,-74.06 -1.301,-8.27 -2.593,-16.55 -3.886,-24.83 -0.68,-4.34 -1.36,-8.77 -0.629,-13.11 0.675,-4.06 2.554,-7.8 4.238,-11.56 3.894,-8.71 6.875,-17.88 11.742,-26.09 4.867,-8.21 12.067,-15.59 21.289,-18.04 1.348,-0.36 2.754,-0.62 3.949,-1.33 1.567,-0.94 2.594,-2.54 3.618,-4.04 2.652,-3.88 7.199,-7.91 11.468,-5.95 1.649,9.38 -0.703,18.93 -1.757,28.4 -2.004,18.03 0.792,36.59 8.035,53.23 0.48,1.1 1.035,2.25 2.058,2.88 3.063,1.87 6.203,-2.3 7.395,-5.69 1.488,-4.22 2.976,-8.45 4.469,-12.67 0.929,-2.65 2.543,-5.79 5.343,-5.73 3.125,0.06 4.45,3.94 4.922,7.04 0.781,5.08 1.563,10.16 2.344,15.24 1.805,11.7 3.59,23.75 0.851,35.28 -1.968,8.29 -6.199,15.87 -10.734,23.07 -4.613,7.34 -9.598,14.42 -14.941,21.23 -3.164,4.04 -6.629,8.5 -6.379,13.62" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path136"></path>
                            <path d="m 1194.34,2167.15 c 6.53,-2.79 35.6,-24.1 42.05,-26.27 5.67,-1.92 23.16,0.77 36.32,0.16 4.85,-0.23 21.76,-6.35 28.11,-9.27 2.32,-1.08 9.94,-4.37 12.15,-5.67 2.29,-1.34 4.43,-2.93 6.57,-4.5 4.75,-3.5 9.49,-7.01 14.24,-10.52 1.23,-0.9 2.55,-1.93 2.94,-3.41 0.43,-1.6 -0.39,-3.33 -1.68,-4.37 -1.29,-1.02 -2.97,-1.44 -4.61,-1.62 -7.85,-0.8 -26.54,8.07 -26.53,7.11 0.01,-0.85 16.25,-14.4 22.79,-21.31 4.58,-4.85 21.66,-35.43 18.79,-42.68 -2.84,-7.19 -12.67,-8.2 -19.04,-6.43 -10.15,2.82 -30.06,22.53 -30.06,22.53 0,0 -11.31,3.39 -23.25,4.81 -6.36,0.77 -12.97,0.85 -18.79,3.54 -12.4,5.72 -16.94,20.89 -26.56,30.59 -7.23,7.29 -16.92,11.05 -26.14,15.1 -10.05,4.42 -26.59,11.02 -26.59,11.02" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path138"></path>
                            <path d="m 1252.4,2107.92 c 7.87,-3.1 16.11,-5.08 24.52,-5.92 4.22,-0.42 8.42,-0.52 12.65,-0.25 3.83,0.24 8.5,0.29 11.91,2.17 1.27,0.69 0.53,2.32 -0.66,2.47 -3.9,0.48 -8.19,-0.74 -12.12,-0.95 -3.91,-0.21 -7.86,-0.23 -11.78,-0.01 -8.15,0.46 -16.18,2.09 -23.9,4.75 -1.45,0.48 -2,-1.72 -0.62,-2.26" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path140"></path>
                            <path d="m 358.523,2609.3 c -71.804,-160.82 -123.921,-278.71 -173.578,-370.52 -2.367,-12.42 53.453,-250.68 85.129,-328.76 0,0 -6.074,-18.88 -27.023,-18.88 -20.946,0 -32.637,2.98 -32.637,2.98 0,0 -185.3124,239 -180.5038,371.95 6.9062,190.69 118.9338,405.64 145.5818,439.04 52.824,66.18 174.758,73.85 250.27,95.43" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path142"></path>
                            <path d="m 528.715,2806.1 c 37.398,-3.35 162.394,-22.63 193.973,-34.36 53.906,-20.01 109.539,-209.96 158.296,-301.8 58.032,69.01 221.266,211.92 221.266,211.92 l 38.2,-40.27 c 0,0 -208.38,-365.6 -274.161,-357.09 -65.781,8.51 -184.918,208.44 -229.805,265.78" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path144"></path>
                            <path d="m 425.414,2933.54 c -8.809,-47.72 -15.836,-95.78 -21.051,-144.03 -1.496,-14.09 34.09,-25.88 44.004,-29.63 37.742,-14.26 87.082,-12.11 111.336,25.12 9.727,14.93 0.57,31.9 -3.375,48.39 -5.566,23.3 -10.976,46.64 -16.601,69.93" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path146"></path>
                            <path d="m 582.031,3068.32 c 19.762,-6.66 33.559,-25.35 39.782,-45.26 6.218,-19.9 6.042,-41.16 5.808,-62.02 -0.058,-5.46 -0.141,-11.03 -1.918,-16.19 -2.738,-7.94 -16.683,-28.98 -24.89,-30.71 -8.215,-1.74 -10.375,16.07 -15.504,22.7 -2.844,3.67 -4.426,8.14 -5.957,12.52 -5.387,15.38 -10.774,30.76 -16.161,46.14" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path148"></path>
                            <path d="m 607.34,2932.04 c -3.047,28.24 0.797,56.87 -4.426,85.03 -6.316,34.08 -24.75,61.46 -58.617,72.14 -36.238,11.44 -78.891,4.29 -110.18,-16.98 -50.594,-34.39 -56.445,-108.55 -24.664,-160.83 31.781,-52.27 52.832,-71.39 69.641,-77.93 30.043,-11.69 106.14,-2.72 118.152,14.25 11.074,15.65 11.723,69.22 10.094,84.32" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path150"></path>
                            <path d="m 361.5,3002.41 c 3.41,14.62 9.867,27.75 10.629,42.89 -4.348,42.39 24.891,66.96 33.406,72.41 31.051,19.9 70.551,21.41 107.063,16.19 20.234,-2.89 39.879,-9.13 58.632,-17.15 30.032,-12.85 58.606,-49.55 25.442,-77.6 -5.438,-4.6 -12.461,-6.79 -19.363,-8.48 -32.637,-8.02 -65.532,-5.79 -98.7,-8 -8.027,-0.54 -23.437,-1.62 -29.796,-7.06 -7.997,-6.85 -5.575,-26.05 -3.965,-34.96 2.261,-12.5 7.07,-24.4 11.57,-36.22 1.375,-3.62 6.148,-13.46 -0.789,-14.37 -2.984,-0.38 -15.801,14.79 -18.852,19.73 -2.422,3.92 -6.187,6.51 -10.66,7.64 -1.625,-13.73 4.215,-25.74 3.254,-39.19 -0.758,-10.49 -0.637,-21.16 -1.992,-31.6 -17.027,2.21 -19.641,3 -30.16,8.62 -10.524,5.63 -28.071,22.13 -31.164,33.65 -6.68,24.86 -10.559,47.79 -4.555,73.5" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path152"></path>
                            <path d="m 582.387,2985.42 c -4.422,4.71 -9.907,4.96 -12.657,-6.49 -1.726,-7.21 -0.335,-20.55 9.395,-20.61 14.879,-0.09 10.48,19.43 3.262,27.1" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path154"></path>
                            <path d="m 584.398,2979.4 c -1.96,2.08 -4.394,2.2 -5.613,-2.88 -0.765,-3.2 -0.152,-9.11 4.164,-9.14 6.598,-0.04 4.649,8.62 1.449,12.02" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path156"></path>
                            <path d="m 493.395,2970.91 c -4.903,4.94 -11.032,5.15 -14.215,-7 -2.008,-7.65 -0.582,-21.76 10.3,-21.73 16.633,0.05 11.907,20.68 3.915,28.73" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path158"></path>
                            <path d="m 495.582,2964.56 c -2.18,2.19 -4.894,2.28 -6.305,-3.11 -0.886,-3.39 -0.257,-9.65 4.567,-9.63 7.379,0.02 5.277,9.16 1.738,12.74" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path160"></path>
                            <path d="m 459.516,2997.85 c 5.019,0.58 10.125,0.6 15.132,-0.08 2.457,-0.33 4.864,-0.87 7.266,-1.46 2.133,-0.52 5.547,-2.26 7.578,-0.97 l 0.914,2.24 c -0.941,2.58 -4.488,3.03 -6.883,3.57 -2.718,0.63 -5.515,0.99 -8.296,1.21 -5.422,0.44 -10.856,0.11 -16.207,-0.83 -2.051,-0.36 -1.602,-3.92 0.496,-3.68" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path162"></path>
                            <path d="m 586.43,3028.9 c -4.953,1.94 -10.434,0.44 -14.535,-2.69 -2.188,-1.68 -4.102,-3.67 -5.719,-5.9 -0.742,-1.03 -1.395,-2.2 -1.946,-3.35 l -0.476,-2.06 -0.508,-1.98 c -0.453,-1.77 1.688,-2.95 3,-1.74 l 1.258,1.15 1.285,0.9 2.035,2.61 c 1.516,1.89 2.446,3.38 4.289,5.08 1.266,1.17 2.992,2.26 4.692,3 1.574,0.69 3.679,1.18 5.504,0.92 2.675,-0.38 3.679,3.06 1.121,4.06" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path164"></path>
                            <path d="m 527.465,2892.82 -0.207,1.2 c 15.75,3.25 31.504,6.49 47.254,9.73 l 1.328,-0.22 0.14,-0.87 c -0.222,-3.1 -0.453,-6.2 -0.683,-9.3 -0.258,-3.53 -0.547,-7.17 -2.098,-10.36 -1.379,-2.82 -3.672,-5.11 -6.242,-6.93 -7.113,-5.01 -16.59,-6.48 -24.922,-3.93 -3.472,1.07 -6.816,2.85 -9.187,5.6 -2.375,2.76 -6.407,12.74 -5.59,16.28" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path166"></path>
                            <path d="m 554.543,2950.77 c 3.16,-3.99 6.082,-8.18 8.719,-12.53 2.519,-4.37 5.437,-9.19 4.277,-15.86 -0.449,-1.66 -1.543,-3.32 -3.023,-4.39 -1.426,-0.98 -3.231,-1.49 -4.36,-1.7 -2.551,-0.48 -5.105,-0.92 -7.691,-1.07 -5.152,-0.42 -10.352,-0.01 -15.336,1.19 5.074,0.74 9.965,1.64 14.773,2.67 2.395,0.59 4.793,1.09 7.125,1.81 2.438,0.63 3.278,1.25 3.703,2.81 0.817,3.4 -1.046,8.42 -2.957,12.83 -2.007,4.57 -3.75,9.3 -5.23,14.24" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path168"></path>
                            <path d="m 436.777,2949.79 c -3.203,2.93 -6.484,5.93 -10.461,7.69 -3.972,1.77 -8.839,2.12 -12.539,-0.18 -2.996,-1.86 -4.797,-5.14 -6.136,-8.41 -3.993,-9.77 -4.95,-20.99 -1.403,-30.93 3.551,-9.94 11.926,-18.33 22.215,-20.7 10.285,-2.38 22.098,2 27.406,11.12" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path170"></path>
                            <path d="m 409.633,2833.52 c 30.051,-25.09 82.187,-62.19 119.777,-73.13 -20.394,-9.34 -35.555,-42.52 -36.406,-61.99 -36.207,21.33 -74.344,59.83 -96.395,95.59" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path172"></path>
                            <path d="m 558.688,2824.92 c -2.493,-20.65 -15.434,-49 -29.278,-64.53 26.625,-0.68 41.02,-37.87 38.078,-41.83 0,0 13.293,46.23 4.875,88.5" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path174"></path>
                            <path d="m 536.582,2738.15 c 8.379,-140.98 17.441,-281.92 24.07,-422.99 3.188,-67.72 5.743,-135.48 6.621,-203.27 0.657,-50.23 8.618,-119.27 -20.449,-163.06 -1.047,-1.58 1.399,-2.88 2.496,-1.46 28.274,36.86 23.035,98.41 22.672,142.07 -0.582,69.6 -3.199,139.18 -6.484,208.7 -6.938,146.81 -17.965,293.38 -27.832,440.01 h -1.094" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path176"></path>
                            <path d="m 528.715,2565.06 c 6.976,0 6.988,10.84 0,10.84 -6.977,0 -6.985,-10.84 0,-10.84" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path178"></path>
                            <path d="m 535.172,2428.72 c 6.976,0 6.984,10.84 0,10.84 -6.981,0 -6.988,-10.84 0,-10.84" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path180"></path>
                            <path d="m 541.621,2292.37 c 6.977,0 6.988,10.85 0,10.85 -6.976,0 -6.988,-10.85 0,-10.85" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path182"></path>
                            <path d="m 548.07,2156.04 c 6.981,0 6.993,10.83 0,10.83 -6.972,0 -6.984,-10.83 0,-10.83" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path184"></path>
                            <path d="m 548.07,2019.69 c 6.981,0 6.993,10.85 0,10.85 -6.972,0 -6.984,-10.85 0,-10.85" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path186"></path>
                            <path d="m 522.266,2701.4 c 6.976,0 6.988,10.84 0,10.84 -6.977,0 -6.989,-10.84 0,-10.84" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path188"></path>
                            <path d="m 347.34,2570.76 c -2.274,-12.87 -7.61,-25.36 -12.594,-37.37 -7.676,-18.5 -16.266,-36.64 -25.051,-54.63 -20.707,-42.4 -42.961,-84.05 -65.507,-125.5 -17.516,-32.22 -35.204,-64.34 -52.825,-96.5 -2.129,-3.88 -4.258,-7.76 -6.297,-11.68 -0.867,-1.68 -2.234,-3.68 -2.582,-5.57 -0.589,-3.17 0.918,-7.44 1.481,-10.54 1.527,-8.42 3.18,-16.84 4.851,-25.25 5.508,-27.68 11.61,-55.23 17.981,-82.72 7.926,-34.16 15.906,-68.45 26.234,-101.97 2.512,-8.15 5.051,-16.3 7.824,-24.37 0.649,-1.89 3.5,-1.13 3.012,0.83 -15.855,63.9 -32.359,127.56 -46.035,191.99 -3.492,16.47 -7.195,32.92 -10.062,49.5 l -0.247,1.51 -0.074,-0.18 c 0.27,0.83 0.039,0.24 0.664,1.53 1.559,3.24 3.239,6.41 4.918,9.57 15.93,30.07 32.707,59.69 48.907,89.61 22.414,41.41 44.378,83.1 65.078,125.4 9.144,18.7 18.101,37.51 26.16,56.7 5.707,13.59 11.371,27.42 14.789,41.8 0.57,2.41 1.062,4.83 1.406,7.28 0.184,1.31 -1.793,1.91 -2.031,0.56" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path190"></path>
                            <path d="m 437.094,2880.48 c 12.422,-18.69 27.601,-36.84 48.789,-45.7 10.355,-4.34 21.496,-6.4 32.668,-7 11.715,-0.63 25.328,-0.95 36.488,3.12 1.785,0.66 1.477,3.15 -0.449,3.3 -11.121,0.86 -22.399,-1.39 -33.59,-0.99 -11.258,0.41 -22.594,2.17 -33.113,6.32 -20.93,8.25 -34.582,26.03 -48.949,42.37 -0.875,1 -2.575,-0.3 -1.844,-1.42" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path192"></path>
                            <path d="m 1163.57,2741.26 c 5.05,1.27 10.22,2.39 15.36,3.22 5.07,0.83 10.94,2.13 16.07,1.78 l 4.46,-1.14 -2.01,-1.75 c -2.1,-1.45 -4.41,-2.61 -6.69,-3.76 -4.01,-2.02 -8.88,-3.54 -12.47,-6.28 -2.14,-1.63 -2.86,-4.49 -3.08,-7.05 -0.42,-5.06 0.37,-10.25 0.13,-15.34 -0.54,-11.21 -3.31,-22.32 -12.08,-29.94 -1.92,-1.67 0.63,-5.04 2.74,-3.56 8.4,5.91 12.39,15.53 13.71,25.48 0.81,6.04 0.38,12.23 -0.24,18.28 -0.37,3.71 -1.35,8.09 2.37,10.18 5.2,2.94 10.76,5.22 15.8,8.45 2.91,1.86 7.8,6.07 2.09,7.95 -5.53,1.82 -11.47,0.3 -17.04,-0.52 -6.77,-1 -13.08,-2.73 -19.33,-5.5 l 0.21,-0.5" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path194"></path>
                            <path d="m 4166.23,629.648 -13.17,704.592 h 46.87 l -13.18,-704.592 c -0.16,-7.148 -4.75,-12.937 -10.26,-12.937 -5.51,0 -10.1,5.789 -10.26,12.937" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path196"></path>
                            <path d="m 4550.21,657.09 -272.23,650.01 43.56,17.29 247.73,-659.73 c 2.49,-6.699 0.36,-13.781 -4.76,-15.808 -5.13,-2.032 -11.53,1.66 -14.3,8.238" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path198"></path>
                            <path d="m 3802.77,657.09 272.23,650.01 -43.56,17.29 -247.73,-659.73 c -2.49,-6.699 -0.36,-13.781 4.76,-15.808 5.12,-2.032 11.53,1.66 14.3,8.238" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path200"></path>
                            <path d="m 3994.04,1530.23 c -14.71,197.23 0.38,398.57 57.42,588.75 46.77,155.94 211.19,194.9 347.35,113.83 131.11,-78.05 204.9,-231.16 246.76,-370.42 40.29,-134.05 66.53,-288.32 27.78,-425.78 -42.09,-149.32 -185.25,-203.6 -326.49,-217.84 -186.03,-18.75 -377.93,-12.3 -559.84,33.32 -56.56,14.19 -117.1,62.26 -49.95,112.39 55.52,41.46 144.08,57.04 212.37,58.14" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path202"></path>
                            <path d="m 3856.62,671.789 c -8,-16.168 -24.45,-24.82 -39.36,-33.418 -14.91,-8.609 -30.72,-20.262 -34.59,-37.949 15.45,-8.281 33.7,-9.57 51.22,-6.992 17.51,2.57 34.54,8.781 51.43,14.961 6.98,2.558 14.31,5.347 19.36,11.308 6.18,7.293 7.6,17.75 7.97,27.442 0.75,19.441 -8.44,35.257 -8.44,35.257" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path204"></path>
                            <path d="m 4473.13,1540.55 c 9.06,-29.51 16.25,-59.57 21.56,-89.96 10.44,-59.93 -8.99,-122.31 -62.07,-156.64 -29.13,-18.84 -63.34,-28.15 -97.34,-35.06 -62.08,-12.62 -124.34,12.66 -186.85,14.4 -68.46,1.91 -136.54,2.9 -204.85,9.17 -31.59,2.9 -63.36,8.38 -94.94,9.9 -25.92,1.26 -51.43,7.17 -70.85,26.24 -32.47,31.9 -34.21,88 -33.37,130.56 0.1,4.8 0.71,9.8 3.44,13.74 2.86,4.12 9.55,17.19 14.1,19.3 109.49,50.77 226.68,69.84 347.16,76.67" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path206"></path>
                            <path d="m 3923.73,1262.66 c -4.42,48.05 -10.96,97.05 -31.44,139.74 -20.47,42.71 -57.51,78.54 -101.13,82.99 -14.6,1.49 -30.12,-0.82 -42.02,-10.25 -11.06,-8.77 -17.81,-22.63 -23.22,-36.43 -47.82,-122.06 -16.89,-262.26 14.66,-390.6 29.4,-119.622 85.54,-257.239 114.95,-376.86 l 48.68,11.148 c 26.08,191.922 37.28,387.192 19.52,580.262" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path208"></path>
                            <path d="m 4516.36,1762.07 c -10.18,-49.98 -20.35,-99.96 -30.52,-149.94 -3.71,-18.2 -7.41,-37.05 -3.44,-55.2 0.82,-3.72 1.92,-7.78 0.21,-11.19 -1.28,-2.56 -3.88,-4.15 -6.41,-5.48 -19.35,-10.14 -41.71,-12.55 -63.48,-14.51 -112.31,-10.08 -225.3,-12.67 -337.96,-7.77 -26.63,1.16 -54.29,3.04 -77.58,15.99 -6.64,3.7 -13.36,12.52 -7.95,17.86 2.25,2.22 5.73,2.54 8.51,4.06 6.93,3.77 7.57,13.29 7.34,21.17 -1.76,59.65 -3.52,119.45 -11.95,178.54 -8.63,60.51 -24.23,120.29 -25.93,181.39 -0.73,25.91 1.06,51.93 -1.69,77.7 -2.72,25.35 -9.78,50 -16.82,74.51 -1.39,4.82 -2.77,9.65 -4.16,14.48" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path210"></path>
                            <path d="m 4073.5,646.719 c -7.99,-16.168 -24.46,-24.821 -39.36,-33.418 -14.9,-8.61 -30.72,-20.262 -34.59,-37.949 15.45,-8.282 33.7,-9.563 51.21,-6.993 17.52,2.571 34.55,8.789 51.45,14.961 6.98,2.559 14.3,5.352 19.35,11.309 6.18,7.293 7.6,17.75 7.97,27.441 0.75,19.442 -1.48,38.871 -6.6,57.2" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path212"></path>
                            <path d="m 4240.85,1218.89 c 3.74,47.98 5.54,97.19 -7.53,142.29 -13.07,45.1 -43.68,85.91 -86.1,96.8 -14.2,3.64 -29.95,3.67 -43.33,-3.84 -12.44,-6.98 -21.46,-19.62 -29.14,-32.4 -67.96,-113.06 -60.99,-255.73 -51.43,-386.81 8.92,-122.16 41.27,-266.039 50.18,-388.211 l 55.38,-0.129 c 58.22,185.09 96.98,379.54 111.97,572.3" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path214"></path>
                            <path d="m 4203.52,1662.97 c -63.09,0.71 -187.2,-1.16 -250.13,2.24 -109.24,5.91 -86.29,118.75 -89.02,204.33 -2.15,67.07 1.67,134.24 7.7,201.02 3.11,34.38 6.86,68.71 10.95,102.99 3.68,30.89 5.98,65.58 24.71,91.76 23.17,32.39 64.14,46.55 101.39,54.87 46.76,10.44 93.13,22.55 139.86,33.16 l 176.78,-2.06 c 67.92,-21.76 124.97,-45.16 192.89,-66.92 17.71,-5.68 35.98,-11.67 49.82,-24.11 49.82,-44.77 40.55,-126.31 37.12,-186.09 -1.76,-30.62 -8.17,-60.77 -14.55,-90.78 -18.06,-84.84 -38.09,-165.91 -78.36,-243.53 -8.07,-15.55 -16.93,-31.12 -29.97,-42.82 -19.84,-17.78 -47.46,-24.74 -74.1,-24.89" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path216"></path>
                            <path d="m 4302.06,2498.33 c 9.19,-49.81 16.52,-99.99 21.96,-150.36 -23.4,-17.35 -53.84,-23.3 -82.9,-21.1 -29.04,2.21 -77.03,10.22 -85.49,27.76 4.76,16.78 18.06,74.76 27.09,112.15" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path218"></path>
                            <path d="m 4091.7,2612.95 c -9.11,-6.13 -22.72,-12.86 -26.3,-23.93 -1.86,-5.72 -1.8,-11.86 -1.54,-17.87 1.51,-35.12 9.48,-69.96 23.38,-102.25 2.26,-5.26 4.95,-10.75 9.84,-13.69 6.48,-3.9 14.74,-2.19 22.08,-0.37 6.06,1.52 12.13,3.02 18.18,4.53 4.35,1.09 9.1,2.45 11.53,6.2" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path220"></path>
                            <path d="m 4103.72,2468.74 c -4.71,29.29 -16.45,57.06 -18.94,86.84 -3.02,36.07 8,68.71 39.17,88.79 33.34,21.5 78.27,26.03 115.63,13.21 60.41,-20.71 86.79,-93.88 69.16,-155.28 -11.01,-38.36 -36.54,-72.2 -58.66,-88.1 -18.31,-13.16 -54.84,-13.52 -78.74,-12.07 -19.47,1.17 -34.42,1.17 -46.66,16.36 -9.94,12.34 -18.45,34.6 -20.96,50.25" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path222"></path>
                            <path d="m 4295.39,2517.28 c -1.47,-18.2 3.26,-38 6.06,-56 0.23,-1.54 0.54,-3.21 1.68,-4.29 1.7,-1.61 4.42,-1.22 6.71,-0.71 7.55,1.65 15.1,3.3 22.65,4.95 2.54,0.56 5.16,1.14 7.3,2.62 4.11,2.83 5.55,8.34 5.28,13.32 -0.28,4.99 -1.95,9.78 -2.73,14.72 -2.35,15.08 3.74,29.99 7.89,44.68 10.06,35.52 8.92,74.12 -3.21,108.98 -2.3,6.63 -5.35,13.55 -11.32,17.23 -2.34,1.44 -5.05,2.32 -7.13,4.13 -2.57,2.25 -3.83,5.6 -5.09,8.78 -8.29,20.8 -22.58,40.98 -43.83,48.04 -13.17,4.37 -27.5,3.2 -41.21,1.08 -37.68,-5.84 -74.25,-18.53 -112.26,-21.55 -21.09,-1.68 -45.65,1.39 -57.33,19.03 -5.86,-10 -7.12,-22.58 -3.37,-33.55 -5.29,2.86 -10.6,5.72 -15.9,8.58 0.45,-9.32 2.86,-18.54 7.04,-26.88 -3.05,2.66 -7,4.27 -11.03,4.5 -3.16,0.18 -2.34,-55.33 -1.15,-59.84 9.64,-36.31 66.8,-28.52 93.15,-21.91 6.34,1.6 12.79,3.42 19.3,2.8 6.94,-0.65 13.29,-4 19.79,-6.5 12.05,-4.63 25.18,-6.35 38.02,-5.14 7.02,0.66 13.38,2.76 20.16,4.37 3.03,0.71 11.44,4.05 14,2.86 3.32,-1.54 4.18,-20.23 5.1,-24.28 1.08,-4.78 0.93,-13.34 6.36,-15.54 2.97,-1.19 6.28,0.24 9.14,1.64 2.26,1.11 4.56,2.24 6.27,4.08 1.53,1.64 2.5,3.76 4.17,5.24 1.68,1.48 4.56,2.07 6.02,0.36 l 0.96,-2.06 c 3.78,-12.4 6.32,-25.19 7.54,-38.1" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path224"></path>
                            <path d="m 4269.42,2546.15 c 2.42,3.85 4.9,7.76 8.42,10.63 3.52,2.88 8.31,4.57 12.67,3.28 3.53,-1.05 6.25,-3.86 8.49,-6.79 6.72,-8.73 10.78,-19.77 9.94,-30.77 -0.84,-10.98 -6.98,-21.73 -16.67,-26.95 -9.71,-5.22 -22.82,-4.07 -30.67,3.66" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path226"></path>
                            <path d="m 4449.89,2165.14 c -22.73,-111.29 -45.48,-222.58 -68.22,-333.87 l -41.46,54.17 109.68,279.7" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path228"></path>
                            <path d="m 4030.7,1856.76 c 15.81,11.45 202.57,68.74 230.66,75.98 -30.79,-7.14 -49.31,-7.42 -80.49,-12.59 -36.19,-6.01 -86.06,-19.56 -118.35,-34.04 -0.09,79.96 -9.56,276.68 -19.05,292.09 -0.08,-37.69 2.84,-131.36 1.88,-158.44 -1.92,-54.55 -6.57,-109.01 -14.65,-163" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path230"></path>
                            <path d="m 4245.18,2325.72 c 2.74,-51.87 5.96,-107.08 -0.24,-158.72 -0.42,-3.45 -5.19,-3.57 -5.46,0 -3.88,52.14 -0.16,106.44 1.1,158.72 0.06,2.98 4.44,2.95 4.6,0" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path232"></path>
                            <path d="m 4325.76,2351.28 c -15.4,-26.7 -50.23,-27.88 -77.65,-28.58 -34,-0.86 -67.97,1.33 -92.88,27.06 -4.19,4.32 2.41,10.94 6.63,6.61 22.07,-22.69 52.11,-25.09 82.05,-24.77 29.31,0.32 55.61,1.79 78.61,22.19 1.71,1.51 4.46,-0.4 3.24,-2.51" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path234"></path>
                            <path d="m 4225.44,2287.07 c -0.19,-1.95 -0.43,-3.5 -2.03,-4.77 -1.79,-1.41 -3.66,-1.42 -5.46,0 -1.63,1.29 -1.85,2.83 -2.03,4.77 -0.57,6.12 10.1,6.13 9.52,0" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path236"></path>
                            <path d="m 4224.23,2240.27 0.12,-2.03 c 0.27,-4.72 -7.61,-4.72 -7.34,0 l 0.12,2.03 c 0.26,4.56 6.83,4.57 7.1,0" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path238"></path>
                            <path d="m 4227.37,2192.73 c 1.16,-5.2 -5.97,-8.61 -8.83,-3.73 -3.63,6.21 7.33,10.56 8.83,3.73" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path240"></path>
                            <path d="m 4116.04,2537.81 c 3.03,5.73 8.28,7.42 13.97,-2.94 3.57,-6.52 5.76,-19.8 -3.64,-22.43 -14.38,-4.02 -15.29,16.04 -10.33,25.37" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path242"></path>
                            <path d="m 4115.68,2531.45 c 1.35,2.54 3.68,3.29 6.2,-1.3 1.59,-2.89 2.55,-8.78 -1.62,-9.95 -6.37,-1.78 -6.77,7.11 -4.58,11.25" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path244"></path>
                            <path d="m 4208.87,2540.5 c 3.43,6.08 9.31,7.9 15.61,-3.01 3.97,-6.88 6.32,-20.92 -4.23,-23.77 -16.11,-4.35 -16.99,16.87 -11.38,26.78" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path246"></path>
                            <path d="m 4208.44,2533.77 c 1.52,2.69 4.13,3.51 6.92,-1.34 1.76,-3.05 2.8,-9.27 -1.87,-10.54 -7.15,-1.92 -7.54,7.48 -5.05,11.88" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path248"></path>
                            <path d="m 4231.07,2571.63 c -5.06,-0.77 -10.05,-2.12 -14.77,-4.14 -2.31,-0.99 -4.52,-2.16 -6.72,-3.39 -1.1,-0.62 -2.16,-1.32 -3.26,-1.95 -1.38,-0.78 -2.54,-1.4 -4.08,-0.68 l -0.99,1.72 c -0.17,2.65 4.01,4.37 5.98,5.41 2.42,1.28 4.98,2.34 7.56,3.27 5.08,1.83 10.4,2.94 15.79,3.44 2.08,0.19 2.58,-3.36 0.49,-3.68" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path250"></path>
                            <path d="m 4102.35,2570.25 c 4.2,3.11 9.85,3.21 14.57,1.31 2.62,-1.05 5.04,-2.47 7.24,-4.25 0.97,-0.77 1.86,-1.69 2.69,-2.61 0.96,-1.05 1.45,-2.54 2.16,-3.8 0.91,-1.6 -0.88,-3.27 -2.46,-2.45 l -1.44,0.74 -1.57,0.55 c -0.92,0.53 -1.77,1.37 -2.63,2 -1.87,1.36 -3.58,2.81 -5.66,3.87 -3.04,1.56 -7.44,2.44 -10.77,1.01 -2.49,-1.08 -4.32,2 -2.13,3.63" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path252"></path>
                            <path d="m 4193.7,2462.71 -0.12,1.22 c -16.1,-1.03 -32.21,-2.06 -48.32,-3.09 l -1.22,-0.57 0.09,-0.88 c 1.05,-2.93 2.08,-5.87 3.13,-8.81 1.18,-3.35 2.42,-6.8 4.77,-9.48 2.07,-2.37 4.9,-3.98 7.87,-5.06 8.22,-2.96 17.78,-1.87 25.16,2.8 3.08,1.95 5.85,4.55 7.42,7.85 1.56,3.29 2.83,14.01 1.1,17.24" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path254"></path>
                            <path d="m 4152.16,2511.64 c -2,-4.7 -3.72,-9.54 -5.12,-14.44 -1.28,-4.9 -2.83,-10.33 0.05,-16.48 0.88,-1.48 2.37,-2.8 4.08,-3.43 1.65,-0.59 3.53,-0.6 4.68,-0.5 2.59,0.2 5.19,0.46 7.72,0.99 5.1,0.96 10.02,2.73 14.54,5.21 -5.11,-0.64 -10.08,-1.07 -15.01,-1.34 -2.47,-0.06 -4.93,-0.21 -7.38,-0.14 -2.53,-0.03 -3.5,0.36 -4.33,1.75 -1.69,3.09 -1.22,8.43 -0.54,13.21 0.74,4.96 1.17,9.99 1.31,15.17" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path256"></path>
                            <path d="m 4281.09,2299 c -4.7,5.55 -8.52,11.85 -11.28,18.58 -1.18,2.89 -2.23,5.97 -4.51,8.1 -3.65,3.43 -9.23,3.42 -14.23,3.23 -24.11,-0.91 -43.54,-0.44 -65.6,9.33 -1.02,0.45 -6.77,5.61 -10.57,1.97 -1.2,-1.15 -1.74,-5.56 -1.22,-7.14 2.02,-6.22 14.55,-33.53 20.56,-36.14 3.55,-1.55 6.98,1.36 8.69,4.84 -0.63,-4.16 7.62,-16.47 14.87,-18.38 3.07,-0.81 8.04,0.59 11.1,1.44 l 1.62,0.26 c 1.08,-0.2 1.61,-1.4 2,-2.42 3.25,-8.58 9.68,-15.9 17.75,-20.25" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path258"></path>
                            <path d="m 4471.7,1871.89 c 4.57,8.21 -17.97,97.4 -30.53,141.26 -17.02,59.44 -159.42,292.47 -159.42,292.47 l -59.09,-34.04 c 0,0 -2.58,-213.5 35.76,-388.46 23.46,-107.06 55.44,-199.68 132.61,-220.15 58.09,-15.41 114.21,44.5 114.21,44.5 l 6.2,30.42" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path260"></path>
                            <path d="m 4278.69,2286.47 c -5.86,26.91 -14.82,52.95 -26.63,77.37 -2.1,4.35 -4.32,8.68 -7.18,12.5 -6.77,9.01 -16.69,14.54 -26.32,19.82 -2.96,1.63 -6.02,3.28 -9.35,3.72 -3.1,0.4 -6.24,-0.27 -9.32,-0.94 -10.85,-2.38 -31.63,-9.76 -30.92,-12.24 1.58,-5.44 5.05,-5.08 7.14,-5.18 8.81,-0.41 16.12,1.4 24.92,0.99 -4.43,-1.03 -9.22,-2.28 -12.11,-6.06 -2.89,-3.8 -2.05,-10.87 2.36,-11.73 -3.35,1.61 -7.72,0.44 -10.07,-2.69 -2.35,-3.13 -2.48,-7.94 -0.28,-11.08 1.05,-1.51 2.67,-3.06 2.2,-4.91 -0.37,-1.4 -1.76,-2.13 -2.85,-3 -4.68,-3.78 -3.6,-10.29 -0.99,-14.88 3.16,-5.55 6.33,-11.11 9.49,-16.67 1.11,-1.97 2.04,-5.12 4.21,-5.12 7.05,0 2.1,13.38 2.1,13.38 0,0 10.08,-13.85 15.12,-20.78 3.53,-4.84 7.54,-12.36 14.76,-10.13 1.82,0.55 3.52,2.21 5.32,1.72 1.25,-0.34 2.04,-1.6 2.71,-2.78 4.14,-7.21 8.28,-14.43 12.42,-21.65" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path262"></path>
                            <path d="m 4245.39,2375.17 c -7.59,7.84 -16.48,14.53 -26.45,19.02 -4.89,2.19 -9.98,4.12 -15.4,4.05 -2.86,-0.03 -5.69,-0.45 -8.45,-1.13 -2.37,-0.59 -4.9,-1.75 -7.37,-1.63 l -0.66,1.6 c 3.23,3.6 10.55,4.2 15.08,4.42 5.79,0.29 10.98,-1.41 16.24,-3.66 11.05,-4.73 20.83,-11.92 28.55,-21.13 0.89,-1.07 -0.55,-2.58 -1.54,-1.54" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path264"></path>
                            <path d="m 4224.13,2369.03 c -3.29,2.41 -6.76,4.56 -10.38,6.42 -1.77,0.91 -3.55,1.75 -5.38,2.5 -0.97,0.4 -1.93,0.77 -2.91,1.13 -0.98,0.35 -1.86,0.55 -2.5,1.4 l 0.65,1.6 c 1.02,0.27 1.95,-0.23 2.88,-0.6 0.91,-0.35 1.81,-0.71 2.71,-1.09 1.91,-0.82 3.8,-1.72 5.64,-2.68 3.67,-1.94 7.16,-4.17 10.47,-6.66 1.19,-0.88 0.05,-2.91 -1.18,-2.02" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path266"></path>
                            <path d="m 4198.99,2334.93 c -1.14,0.84 -2.32,1.62 -3.55,2.33 -1.27,0.73 -2.61,1.31 -3.89,2.01 -1.24,0.67 -2.54,1.2 -3.81,1.81 l -1.7,0.79 -1.13,0.44 -0.96,0.71 0.47,1.81 2.29,-0.05 2.24,-0.53 c 1.49,-0.41 2.93,-1.1 4.32,-1.78 2.69,-1.32 5.12,-3.49 7.24,-5.58 0.97,-0.96 -0.34,-2.82 -1.52,-1.96" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path268"></path>
                            <path d="m 4207.67,2353.82 c -2.71,2.29 -5.7,4.01 -8.86,5.57 -3.1,1.54 -6.55,2.32 -9.42,4.3 -0.87,0.62 -0.91,2.25 0.33,2.5 3.99,0.81 7.8,-0.93 11.25,-2.8 3.35,-1.83 6.38,-4.5 8.95,-7.31 1.42,-1.53 -0.69,-3.58 -2.25,-2.26" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path270"></path>
                            <path d="m 4193.19,2320.12 0.03,-0.02 -0.17,0.13 -0.87,0.84 -0.6,0.92 -1.12,1.9 -1.08,1.91 c -0.42,0.85 -0.89,1.71 -0.77,2.7 l 0.64,1.25 1.38,0.29 0.75,-0.27 0.68,-0.56 0.98,-1.2 1.16,-1.95 1.08,-2.36 0.38,-1.08 0.06,-1.46 -0.91,-1.35 -1.62,0.31" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path272"></path>
                            <path d="m 4488.66,1878.58 c -25.52,134.06 -165.63,347.47 -208.41,418.32 -4.34,0.57 -37.94,-10.02 -50.05,-30.17 11.61,-154.22 51.02,-463.19 133.79,-551.03 16.07,-17.04 37.53,-31.8 60.98,-32.78 28.68,-1.19 72.15,31.1 87.71,56.93" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path274"></path>
                            <path d="m 4324.99,1288.59 c 44.8,7.88 91.36,19.01 125.25,49.34 15.53,13.9 27.59,31.17 39.51,48.27 1.95,2.8 3.9,5.61 5.86,8.42 -5.91,-40.21 -26.5,-77.07 -62.99,-100.67 -29.13,-18.84 -63.34,-28.15 -97.34,-35.06 -30.52,-6.2 -61.08,-3.24 -91.71,1.58 0.01,30.78 1.51,89.52 -14.41,113.27 30.98,-7.25 25.51,-77.7 56.2,-86.05 12.86,-3.51 26.51,-1.41 39.63,0.9" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path276"></path>
                            <path d="m 3879.46,1207.91 c -17.56,57.94 -44,114.12 -48.6,174.48 -0.23,3.06 -0.34,6.36 1.35,8.91 1.88,2.85 5.35,4.49 8.75,4.86 101.51,10.96 183.61,16.34 279.88,71.31 l 35.93,10.16 c -51,-22.16 -90.31,-47.18 -113.8,-97.57 -12.27,-26.31 -16.22,-64.12 -18.03,-102.96 -24.41,1.17 -56.91,3.11 -81.36,5.36 -7.36,0.67 -14.74,1.5 -22.12,2.38 0.83,-7.4 1.59,-14.8 2.27,-22.18 17.76,-193.07 6.56,-388.34 -19.52,-580.262 l -14.61,-3.339 c 3.18,96.613 23.97,222.332 17.36,315.183 -5.47,76.758 -5.18,140.008 -27.5,213.668" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path278"></path>
                            <path d="m 4298.17,1845.71 c -88.79,-58.78 -186.1,-125.26 -287.93,-156.44 h 59.2 c 38.91,7.41 180.15,113.83 208.54,135.24 28.4,21.42 20.19,21.2 20.19,21.2" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path280"></path>
                            <path d="m 4459.89,1979.37 c 15.28,-2.58 30.25,-6.99 44.49,-13.07 3.91,-1.68 7.83,-3.52 11.06,-6.28 12,-10.27 21.76,-23.58 27.29,-38.42 3.19,-8.5 4.36,-17.96 1.93,-26.71 -0.89,-3.19 -3.24,-6.85 -6.52,-6.29 -0.34,-3.5 0.17,-7.03 0.25,-10.55 0.07,-3.52 -0.35,-7.22 -2.32,-10.14 -1.97,-2.92 -5.83,-4.79 -9.13,-3.54 -0.03,-3.84 -0.35,-7.76 -1.85,-11.29 -1.51,-3.54 -4.35,-6.67 -8.05,-7.7 -2.92,-0.81 -4.04,2.47 -4.35,4.74 -0.47,3.33 -0.94,6.65 -1.41,9.98 1.23,-11.3 -3.13,-23.07 -11.4,-30.85 l -2.25,-1.22 c -1.77,-0.04 -2.6,2.15 -2.82,3.9 -2.25,17.8 -1.41,36.39 -8.7,53.69 -7.59,17.99 -13.66,42.04 -15.26,61.8" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path282"></path>
                            <path d="m 4497.92,1911.76 c 5.7,-7.29 10.21,-15.3 13.11,-24.11 1.43,-4.39 2.64,-8.91 3.27,-13.49 0.3,-2.24 0.66,-4.55 0.69,-6.81 0.03,-2.45 -0.31,-4.98 -0.42,-7.44 -0.07,-1.57 -2.29,-1.54 -2.41,0 -0.36,4.46 -1.36,8.97 -2.24,13.36 -0.87,4.3 -1.79,8.57 -3.09,12.77 -2.66,8.46 -6.2,16.68 -10.69,24.35 -0.62,1.07 0.97,2.41 1.78,1.37" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path284"></path>
                            <path d="m 4507.42,1926.42 c 7.6,-8.56 13.51,-18.73 16.97,-29.66 1.31,-4.12 2.24,-8.4 3.04,-12.64 0.75,-3.91 1.82,-8.77 0.61,-12.67 -0.48,-1.53 -2.83,-1.66 -3.24,0 -0.92,3.71 -1.31,7.62 -2.03,11.38 -0.78,4.09 -1.72,8.18 -2.9,12.17 -3.12,10.58 -7.84,20.45 -14.81,29.04 -1.34,1.65 0.91,4.02 2.36,2.38" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path286"></path>
                            <path d="m 4517.52,1948.01 c 7.6,-8.57 13.51,-18.74 16.97,-29.66 1.31,-4.12 2.23,-8.4 3.04,-12.64 0.75,-3.91 1.82,-8.78 0.6,-12.67 -0.47,-1.54 -2.82,-1.66 -3.24,0 -0.92,3.71 -1.31,7.61 -2.02,11.38 -0.78,4.1 -1.72,8.17 -2.9,12.17 -3.12,10.58 -7.85,20.44 -14.81,29.04 -1.34,1.65 0.9,4.01 2.36,2.38" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path288"></path>
                            <path d="m 3703.87,1683.91 h 533.97 l -107.63,307.61 c -3.34,9.58 -12.39,16 -22.53,16 h -492.24 c -12.12,0 -20.61,-11.96 -16.6,-23.4 l 105.03,-300.21" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path290"></path>
                            <path d="m 4163.79,1683.91 h 290.6 v 25.55 h -290.6 v -25.55" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path292"></path>
                            <path d="m 1287.71,629.648 13.18,704.592 h -46.87 l 13.18,-704.592 c 0.15,-7.148 4.74,-12.937 10.26,-12.937 5.51,0 10.1,5.789 10.25,12.937" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path294"></path>
                            <path d="m 903.746,657.09 272.214,650.01 -43.56,17.29 -247.72,-659.73 c -2.496,-6.699 -0.364,-13.781 4.758,-15.808 5.125,-2.032 11.531,1.66 14.308,8.238" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path296"></path>
                            <path d="m 1651.17,657.09 -272.22,650.01 43.56,17.29 247.72,-659.73 c 2.49,-6.699 0.37,-13.781 -4.75,-15.808 -5.12,-2.032 -11.53,1.66 -14.31,8.238" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path298"></path>
                            <path d="m 1459.9,1530.23 c 14.72,197.23 -0.38,398.57 -57.42,588.75 -46.77,155.94 -211.18,194.9 -347.34,113.83 -131.117,-78.05 -204.906,-231.16 -246.761,-370.42 -40.293,-134.05 -66.531,-288.32 -27.781,-425.78 42.093,-149.32 185.246,-203.6 326.482,-217.84 186.04,-18.75 377.94,-12.29 559.84,33.32 56.58,14.19 117.1,62.26 49.96,112.39 -55.52,41.46 -144.09,57.04 -212.38,58.14" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path300"></path>
                            <path d="m 2158.76,768.031 c 7.32,-15.461 1.65,-36.152 13.04,-48.902 8.6,-9.649 23.29,-10.34 36.19,-9.348 32.1,2.461 63.72,10.989 92.7,25.02 8.67,4.199 18.18,10.5 18.71,20.121 0.07,1.269 -0.05,2.629 -0.78,3.668 -1.01,1.469 -2.9,1.98 -4.63,2.379 -39.1,9.133 -78.2,18.261 -117.3,27.39" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path302"></path>
                            <path d="m 1625.97,1593.17 c 147.59,-54.99 256.32,-123.65 309.48,-219.54 72.45,-130.68 128.22,-248.98 170.65,-348.01 36.67,-85.569 65.58,-160.979 109.38,-243.132 -8.84,-12.699 -14.54,-21.398 -55.27,-18.199 -151.56,107.43 -319.13,283.551 -370.62,462.041 -6.58,22.82 -13.34,47.71 -32.31,62 -6.52,4.91 -14.08,8.2 -21.57,11.46 -153.34,66.58 -268.78,133.39 -422.12,199.98" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path304"></path>
                            <path d="m 2123.25,791.648 c -5.37,7.704 -11.1,15.172 -16.84,22.403 -68.55,86.32 -145.23,166.898 -202.19,261.259 -38.78,64.24 -80.27,174.93 -97.84,212.92 -16.95,36.63 -79.29,108.84 -134.62,152.45 -16.77,13.23 -37.16,31.85 -29.36,51.73 5.05,12.84 19.66,18.41 31.38,25.71 15.36,9.59 27.05,24.51 33.55,41.38 -25.59,11.8 -52.72,23 -81.36,33.67 l -312.38,-93.4 c 153.34,-66.59 268.78,-133.4 422.12,-199.98 7.49,-3.26 15.05,-6.55 21.57,-11.46 18.97,-14.29 25.73,-39.18 32.31,-62 47.33,-164.08 192.76,-326.119 333.66,-434.682" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path306"></path>
                            <path d="m 1785.57,680.398 c 7.89,-15.179 2.98,-36.039 14.84,-48.378 8.97,-9.309 23.66,-9.461 36.51,-8 31.99,3.66 63.28,13.371 91.71,28.468 8.5,4.524 17.78,11.172 17.95,20.801 0.02,1.27 -0.15,2.621 -0.92,3.641 -1.06,1.422 -2.97,1.859 -4.71,2.199 -39.42,7.672 -78.83,15.332 -118.24,23" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path308"></path>
                            <path d="m 1007.61,1604.23 c -61.579,-129.62 9.61,-250.68 116.3,-298.77 99.55,-44.89 262.94,-30.97 365.69,-66.02 11.47,-3.91 23.15,-8.19 32.37,-16.07 9.61,-8.2 20.19,-38.7 26.09,-49.87 31.95,-148.25 81.84,-292.82 234.92,-495.461 21.67,-8.629 45.3,-3.098 62.67,16.332 -23.23,132.988 -64.6,556.779 -116.98,636.679 -69.48,106 -263.61,238.66 -361.95,248.92" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path310"></path>
                            <path d="m 1766.04,714.102 c -55.43,120.859 -127.75,235.418 -160.87,364.198 -17.97,69.86 -28.83,150.67 -87.81,192.23 -32.96,23.23 -74.64,28.87 -113.85,38.21 -66.57,15.85 -130.35,44.31 -185.26,85.13 -8.83,6.56 -18.2,14.87 -18.63,25.87 -0.7,18.41 21.8,30.98 40.22,30.52 62.42,-1.56 116.93,-11.79 146.51,7.83 39.28,26.03 75.08,54.18 149.58,48.32 l -72.29,65.53 c -24.73,10.15 -77.81,6.04 -96.92,8.03 l -359.11,24.27 c -61.587,-129.63 9.61,-250.69 116.3,-298.78 99.55,-44.89 262.94,-30.97 365.69,-66.02 11.47,-3.91 23.15,-8.19 32.37,-16.07 9.61,-8.2 20.19,-38.7 26.09,-49.87 31.73,-147.18 81.18,-290.781 231.7,-491.148 -4.32,10.699 -8.93,21.269 -13.72,31.75" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path312"></path>
                            <path d="m 1433.69,2318.57 c -0.47,6.71 8.74,9.07 15.45,8.65 45.47,-2.85 88.54,-23.23 124.56,-51.12 36.03,-27.89 65.69,-63.07 93.59,-99.09 63.73,-82.3 119.97,-170.96 160.57,-266.79 10.63,-25.08 20.32,-51.67 18.23,-78.82 -3.06,-39.75 -31.75,-74.18 -66.72,-93.32 -34.98,-19.15 -75.54,-25.23 -115.33,-27.88 -20.5,-1.37 -41.06,-1.93 -61.61,-1.66 -18.28,0.24 -41.48,5.13 -44.77,23.11 -3.26,17.76 16.14,30.53 32.56,38.02 22.03,10.04 44.05,20.07 66.06,30.11 7.28,3.32 15.05,7.08 18.9,14.09 6.7,12.23 -1.64,26.9 -8.96,38.78 -34.5,55.9 -51.12,120.61 -73.18,182.48 -19.32,54.16 -43.08,106.73 -70.98,157 l -88.37,126.44" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path314"></path>
                            <path d="m 1560.43,2154.6 c -12.57,30.56 -16.75,63.64 -27.1,94.89 -9.12,27.56 -60.63,75.11 -57.2,77.46 -59.82,-52.96 -162.83,-10.2 -162.83,-10.2 0,0 -23.09,0.07 -47.63,-3.23 -10.66,-1.44 -21.32,-2.98 -31.93,-4.8 -6.15,-1.04 -17.34,-1.07 -22.66,-4.43 -25.87,-16.4 -35.74,-59.06 -55.5,-82.46 -125.97,-149.17 -93.25,-307.83 -142.33,-496.8 -6.18,-23.78 -11.79,-48.14 -10.26,-72.65 1.52,-24.52 11.14,-49.57 30.53,-64.65 11.44,-8.89 25.45,-13.77 39.35,-17.88 77.17,-22.81 158.56,-26.09 238.97,-29.21 83.11,-3.22 145.66,-5.28 228.11,5.64 89.86,11.88 126.94,55.92 129.7,71.05 23.99,132.05 -14.11,266.61 -51.86,395.41 -9.18,31.31 -18.42,62.8 -32.62,92.18 -8.07,16.65 -17.7,32.57 -24.74,49.68" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path316"></path>
                            <path d="m 1651.63,1591.85 c 6.35,35.15 12.03,70.45 13.72,106.09 1.8,37.93 -0.92,75.91 -3.63,113.78 -1.2,16.75 -2.44,33.61 -3.85,50.51 -11.06,50.71 -25.58,101.03 -40.08,150.51 -9.18,31.31 -18.42,62.8 -32.62,92.18 -8.07,16.65 -17.7,32.57 -24.74,49.68 -8.16,19.86 -12.8,40.79 -17.89,61.59 -5.25,3.2 -10.99,5.07 -17.23,4.48 0.89,-114.19 -0.72,-228.39 -4.81,-342.52 -1.42,-39.51 -4.17,-81.93 -28.78,-112.87 -10.04,-12.61 -23.11,-22.43 -36.23,-31.78 -39.88,-28.44 -81.78,-54.07 -125.26,-76.62 -24.89,-12.91 -50.96,-25.32 -69.74,-46.13 -16.32,-18.07 -25.48,-42.03 -26.67,-66.31 25.99,-1.7 52.05,-2.79 78.02,-3.8 83.11,-3.22 145.66,-5.28 228.11,5.64 56.72,7.5 92.37,27.8 111.68,45.57" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path318"></path>
                            <path d="m 1654.7,1594.84 c 9.21,9.19 14.03,17.45 14.95,22.49 3.23,17.77 5.25,35.59 6.39,53.43 l -21.34,-75.92" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path320"></path>
                            <path d="m 1370.53,1491.37 c 19.16,76.14 25.84,290.55 25.28,351 -0.74,81.71 -8.55,163.35 -23.31,243.71 -7.37,40.19 -16.48,80.05 -27.31,119.44 -2.88,10.44 -30.68,115.01 -36.79,114.3 -36.28,-4.2 -72.57,-9.79 -97.32,-15.53 -25.87,-16.4 -35.74,-59.06 -55.5,-82.46 -41.24,-48.83 -69.61,-105.96 -86.05,-167.58 -17.25,-64.64 -22.79,-131.63 -31.7,-197.74 -4.59,-34.08 -35.1,-163.43 -58.267,-307.85 306.897,-101.4 390.647,-58.49 390.967,-57.29" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path322"></path>
                            <path d="m 1180.98,1811.04 c -25.34,9.98 99.8,302.43 111.86,332.97 5.97,15.13 9.95,28.28 12.94,44.37 6.14,33.02 9.13,77.58 -17.38,103.1 -33.51,32.26 -120.59,7.81 -152.96,-17.13 -44.81,-34.52 -64.18,-66.08 -93.92,-122.93 -61.5,-117.57 -70.989,-241.93 -38.79,-370.65 12.4,-49.54 41.02,-79.35 90.01,-93.79 78.43,-23.1 160.89,95.53 88.24,124.06" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path324"></path>
                            <path d="m 1361.79,2138.51 c -2.56,-0.71 -5.12,-1.32 -7.76,-1.16 -11.78,0.77 -16.97,14.96 -19.33,26.55 -2.41,11.8 -4.8,24.22 -1.22,35.73 1.95,6.28 5.55,11.88 8.47,17.77 -2.23,8.23 -5.38,19.66 -8.87,31.94 -56.18,-56.72 -112.35,-113.45 -168.53,-170.17 -32.57,-32.89 -66.06,-67.19 -82.06,-110.62 -24.44,-66.35 -4.5,-144.65 -36.76,-207.57 l -25.05,7.56 c -6.34,-30.95 -13.8,-67.74 -21.446,-108.07 11.906,-1.06 23.816,-2.11 35.726,-3.17 31.8,-2.82 63.91,-5.62 95.54,-1.36 31.63,4.27 63.2,16.29 85.41,39.21 9.37,9.67 16.83,21 24.24,32.26 30.26,46.02 60.52,92.03 90.79,138.05 12.12,18.43 24.28,36.94 33.44,57.01 8.71,19.12 14.58,39.42 19.46,59.86 0.88,3.71 1.69,7.45 2.51,11.17 -3.61,31 -8.22,61.89 -13.85,92.58 -3.22,17.54 -6.84,35.01 -10.71,52.43" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path326"></path>
                            <path d="m 1510.19,2313.01 c -3.05,3.33 -34.06,13.94 -34.06,13.94 27.6,-74.96 108.48,-425.85 112.55,-811.45 74.48,7.31 96.97,53.72 96.97,53.72 -10.96,114.54 -26.72,260.29 -45.62,373.81 -34.78,208.87 -106.99,344.92 -129.84,369.98" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path328"></path>
                            <path d="m 1827.86,1910.22 c -40.6,95.83 -134.17,232.54 -290.42,380.77 -27.47,-4.95 -50.47,-17 -50.47,-17 0,0 6.99,-32.22 4.05,-35.14 l 15.78,-24.88 c 7.7,-33.66 15.91,-73.12 24.05,-117.22 0.52,-1.83 1.02,-3.65 1.54,-5.47 17.55,-61.47 40.07,-121.51 67.27,-179.36 14.81,-31.5 32.3,-63.5 57.57,-86.67 -2.62,19.95 -5.29,39.69 -8.07,58.82 5.24,-10.69 10.77,-21.24 17.06,-31.42 7.33,-11.88 15.66,-26.55 8.96,-38.78 l -1.18,-1.63 c 2.42,-1.61 4.71,-3.33 7.25,-4.78 15.44,-8.74 33.15,-14.06 50.86,-12.93 14.16,0.92 27.74,5.86 40.8,11.41 14.21,6.04 28.32,13.03 39.56,23.61 11.37,10.7 19.27,24.64 25.03,39.16 1.04,2.66 1.8,5.39 2.72,8.09 -3.38,11.36 -7.75,22.54 -12.36,33.42" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path330"></path>
                            <path d="m 1455.24,2360.69 c -12.9,-1.62 -21.53,-9.58 -30.49,-18.19 -8.45,-8.12 -10.51,-22.52 -11.79,-33.67 -0.41,-3.64 -0.64,-7.39 0.33,-10.93 1.55,-5.68 5.94,-10.1 8.85,-15.21 1.15,-2.03 2.11,-4.21 3.79,-5.82 1.68,-1.61 4.37,-2.46 6.35,-1.23 2.78,1.72 2.22,5.94 0.85,8.9 -1.38,2.97 -3.3,6.22 -2.12,9.28 l 0.59,0.97 c 1.61,1.51 3.88,-0.96 4.77,-2.98 4.85,-11.11 12.47,-20.99 21.98,-28.5 2.36,-1.87 4.91,-3.62 7.8,-4.45 4.2,-1.21 8.74,-0.36 12.8,1.25 1.78,0.7 3.7,1.57 5.55,1.07 1.88,-0.51 3.11,-2.25 4.19,-3.87 8.37,-12.46 17.77,-24.21 28.09,-35.12 l 1.9,-1.31 c 0.91,-0.16 1.79,0.36 2.56,0.86 10.15,6.49 20.28,13 30.43,19.49 -6.6,11.03 -14.98,20.87 -22.24,31.48 -8.97,13.11 -16.17,27.34 -23.34,41.53 -6.48,12.83 -12.96,25.66 -19.45,38.49 -1.15,2.27 -2.42,4.67 -4.65,5.89 -1.3,0.72 -2.79,0.95 -4.26,1.17 -7.45,1.08 -15.02,1.84 -22.49,0.9" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path332"></path>
                            <path d="m 1532.73,2278.56 c 0,0 -45.76,-12.32 -57.56,-36.63 24.76,-35.84 93.38,-206.26 110.57,-249.54 34.44,-86.72 61.67,-178.7 119.88,-251.63 9.04,-11.33 19.43,-22.55 33.19,-27.09 20.55,-6.78 43.86,3.75 57.36,20.65 13.52,16.89 18.91,38.85 21.57,60.33 8.72,70.4 -8.29,142.28 -38.63,206.42 -54.59,115.38 -246.38,277.49 -246.38,277.49" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path334"></path>
                            <path d="m 1334.42,2461.29 c -8.83,-47.9 -15.88,-96.12 -21.12,-144.54 22.5,-16.67 51.77,-22.4 79.7,-20.29 27.92,2.13 74.04,9.83 82.18,26.68 -4.57,16.13 -17.37,71.88 -26.05,107.81" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path336"></path>
                            <path d="m 1475.18,2323.14 c -4.55,16.06 -17.24,71.36 -25.92,107.31 l -0.5,0.59 -114.34,30.25 c -3.5,-18.99 -6.64,-38.03 -9.58,-57.11 6.92,-10.84 15.38,-20.68 25.31,-28.87 5.85,-4.82 12.17,-9.14 17.39,-14.65 5.22,-5.5 9.36,-12.51 9.55,-20.09 0.16,-6.23 -2.33,-12.18 -4.4,-18.07 -2.86,-8.1 -4.8,-17.01 -4.9,-25.64 8.38,-0.86 16.85,-1.03 25.21,-0.4 27.92,2.13 74.04,9.83 82.18,26.68" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path338"></path>
                            <path d="m 1521.56,2570 c 18.26,-10.21 28.44,-31.19 30.91,-51.96 2.48,-20.78 -1.61,-41.72 -5.67,-62.25 -1.07,-5.38 -2.17,-10.86 -4.89,-15.62 -4.15,-7.33 -12.21,-12.36 -20.63,-12.56 -8.42,-0.2 -16.84,4.6 -20.68,12.09 -2.13,4.14 -2.88,8.84 -3.58,13.43 -2.48,16.18 -4.96,32.34 -7.44,48.5" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path340"></path>
                            <path d="m 1521.45,2430.91 c 2.19,28.42 11.26,55.96 11.28,84.69 0.03,34.78 -13.11,65.19 -44.55,81.96 -33.65,17.95 -77.04,18.74 -111.81,3.51 -56.24,-24.61 -84.21,-97.39 -62.48,-154.81 21.74,-57.41 86.33,-104.12 147.11,-95.41 18.56,2.67 38.77,20.76 49.29,36.28 8.56,12.61 9.98,28.58 11.16,43.78" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path342"></path>
                            <path d="m 1552.39,2600.97 c -3.84,7.65 -11.96,12.01 -19.69,15.69 -30.37,14.42 -62.67,25.7 -96.18,28.35 -33.49,2.65 -68.41,-3.88 -96.31,-22.63 -21.32,-14.34 -38.42,-36.8 -41,-62.37 -23.94,-41.62 -17.51,-73.06 -16.36,-87.78 0.93,-11.95 5.85,-23.97 15.21,-31.45 9.33,-7.49 23.43,-9.44 33.49,-2.93 7.25,4.69 11.51,12.84 14.31,21.02 8.81,25.61 6.5,54.46 18.02,78.99 1.16,2.49 2.53,5 4.66,6.73 4.92,4.01 12.1,2.83 18.32,1.54 37.76,-7.83 77.38,-11.7 114.62,-1.69 15.57,4.17 30.87,11 42.03,22.64 8.63,8.99 14.47,22.74 8.88,33.89" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path344"></path>
                            <path d="m 2020.34,1683.91 h -533.96 l 107.61,307.61 c 3.36,9.58 12.4,16 22.55,16 h 492.24 c 12.12,0 20.6,-11.96 16.6,-23.4 l -105.04,-300.21" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path346"></path>
                            <path d="m 1560.43,1683.91 h -290.61 v 25.55 h 290.61 v -25.55" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path348"></path>
                            <path d="m 1357.7,2482.99 c -2.63,3.48 -5.31,7.04 -8.91,9.52 -3.59,2.47 -8.33,3.72 -12.4,2.13 -3.3,-1.28 -5.68,-4.19 -7.6,-7.17 -5.74,-8.91 -8.75,-19.79 -7.08,-30.25 1.67,-10.46 8.39,-20.28 18.1,-24.51 9.71,-4.23 22.17,-2.1 29.09,5.92" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path350"></path>
                            <path d="m 1424.2,2282.13 c 13.01,-62.88 23.15,-126.9 37.43,-189.42 0.66,-2.92 5.47,-2.34 5.28,0.72 -3.76,63.2 -19.84,129.55 -39.03,189.71 -0.75,2.37 -4.18,1.4 -3.68,-1.01" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path352"></path>
                            <path d="m 1451.68,2252.34 c 4.02,0 4.02,6.24 0,6.24 -4.01,0 -4.02,-6.24 0,-6.24" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path354"></path>
                            <path d="m 1467.12,2215.48 c 5.37,0 5.38,8.35 0,8.35 -5.37,0 -5.38,-8.35 0,-8.35" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path356"></path>
                            <path d="m 1477.01,2177.76 -1.39,0.38 c -5.97,1.61 -6,-8.76 0,-7.14 l 1.39,0.37 c 3.16,0.85 3.17,5.54 0,6.39" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path358"></path>
                            <path d="m 1485.64,2127.2 0.75,0.69 v 2.87 l -0.75,0.69 c -1.87,1.76 -5.12,0.54 -5.12,-2.12 0,-2.66 3.25,-3.89 5.12,-2.13" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path360"></path>
                            <path d="m 1511.46,2487.97 c -3.5,5.45 -8.87,6.71 -13.69,-4.08 -3.03,-6.8 -4.12,-20.21 5.47,-22.06 14.66,-2.83 13.92,17.23 8.22,26.14" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path362"></path>
                            <path d="m 1512.32,2481.66 c -1.55,2.41 -3.92,2.97 -6.06,-1.82 -1.35,-3 -1.83,-8.95 2.43,-9.77 6.5,-1.26 6.16,7.64 3.63,11.59" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path364"></path>
                            <path d="m 1420.99,2490.03 c -3.93,5.78 -9.94,7.11 -15.32,-4.29 -3.38,-7.18 -4.57,-21.37 6.18,-23.34 16.41,-3.01 15.54,18.22 9.14,27.63" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path366"></path>
                            <path d="m 1421.97,2483.36 c -1.74,2.56 -4.4,3.15 -6.78,-1.9 -1.51,-3.19 -2.04,-9.48 2.73,-10.35 7.28,-1.33 6.89,8.07 4.05,12.25" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path368"></path>
                            <path d="m 1392.87,2522.81 c 5.07,-0.34 10.05,-1.34 14.86,-2.94 2.34,-0.78 4.59,-1.72 6.83,-2.75 2.17,-0.99 5.01,-3.29 7.4,-2.12 l 0.99,1.72 c -0.25,2.8 -3.8,3.91 -6.06,4.9 -2.56,1.11 -5.21,2.02 -7.92,2.75 -5.24,1.41 -10.67,2.13 -16.1,2.19 -2.43,0.02 -2.38,-3.58 0,-3.75" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path370"></path>
                            <path d="m 1523.57,2530.03 c -4.73,2.94 -10.44,2.39 -15.26,-0.04 -2.29,-1.16 -4.52,-2.77 -6.37,-4.56 -0.89,-0.86 -1.67,-1.88 -2.44,-2.85 -0.87,-1.11 -1.21,-2.56 -1.8,-3.84 -0.71,-1.52 0.81,-3.5 2.46,-2.46 l 1.27,0.8 1.53,0.72 c 1.03,0.62 1.89,1.63 2.81,2.42 1.62,1.39 3.02,2.85 4.81,3.97 3.29,2.08 7.56,3.28 11.37,1.99 2.33,-0.78 3.61,2.62 1.62,3.85" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path372"></path>
                            <path d="m 1440.22,2406.73 0.02,1.22 c 16.14,0.3 32.28,0.59 48.41,0.9 l 1.27,-0.47 -0.02,-0.88 c -0.8,-3.02 -1.59,-6.03 -2.38,-9.04 -0.91,-3.44 -1.87,-6.98 -3.98,-9.84 -1.88,-2.54 -4.57,-4.37 -7.43,-5.68 -7.95,-3.64 -17.57,-3.34 -25.31,0.7 -3.23,1.69 -6.2,4.07 -8.04,7.22 -1.83,3.15 -3.97,13.74 -2.52,17.09" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path374"></path>
                            <path d="m 1477.6,2458.91 c 2.39,-4.53 4.49,-9.19 6.3,-13.98 1.68,-4.76 3.67,-10.06 1.3,-16.41 -0.76,-1.56 -2.13,-2.99 -3.78,-3.77 -1.6,-0.72 -3.47,-0.88 -4.62,-0.87 -2.6,-0.02 -5.21,0.02 -7.79,0.35 -5.15,0.53 -10.21,1.89 -14.9,3.99 5.14,-0.21 10.13,-0.22 15.06,-0.1 2.47,0.14 4.92,0.19 7.36,0.47 2.52,0.18 3.47,0.64 4.17,2.1 1.44,3.22 0.53,8.51 -0.54,13.21 -1.16,4.88 -2,9.86 -2.56,15.01" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path376"></path>
                            <path d="m 1369.53,2271.68 c 11.5,26.19 26.21,50.96 43.7,73.58 3.13,4.04 6.36,8.03 10.21,11.38 9.1,7.94 20.95,11.79 32.46,15.43 3.54,1.13 7.19,2.28 10.91,2.12 3.44,-0.14 6.74,-1.37 9.98,-2.59 11.38,-4.31 32.63,-15.44 31.39,-17.82 -2.74,-5.24 -6.47,-4.25 -8.77,-3.99 -9.67,1.15 -17.3,4.25 -26.98,5.39 4.64,-1.81 9.63,-3.93 12.06,-8.27 2.43,-4.34 0.18,-11.35 -4.8,-11.44 3.95,1.03 8.49,-0.92 10.48,-4.5 1.97,-3.58 1.19,-8.46 -1.8,-11.25 -1.44,-1.35 -3.51,-2.63 -3.33,-4.59 0.14,-1.48 1.51,-2.46 2.53,-3.54 4.4,-4.65 1.98,-11.03 -1.74,-15.21 -4.49,-5.07 -8.99,-10.14 -13.5,-15.21 -1.6,-1.8 -3.2,-4.82 -5.57,-4.44 -7.68,1.24 0.25,13.9 0.25,13.9 0,0 -13.61,-12.23 -20.43,-18.34 -4.76,-4.29 -10.56,-11.19 -18.02,-7.67 -1.87,0.89 -3.41,2.86 -5.47,2.67 -1.43,-0.11 -2.52,-1.25 -3.48,-2.33 -5.89,-6.57 -11.77,-13.14 -17.66,-19.72" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path378"></path>
                            <path d="m 1422.52,2355.52 c 9.98,6.78 21.08,11.98 32.85,14.72 5.91,1.38 11.87,2.4 17.9,1.25 2.77,-0.52 5.49,-1.34 8.11,-2.38 2.58,-1.02 5.18,-2.67 7.95,-3.1 l 1.05,1.37 c -3.21,4.16 -10.22,6.01 -15.14,7.06 -6.27,1.36 -12.23,0.69 -18.44,-0.66 -12.99,-2.81 -25.11,-8.38 -35.6,-16.54 -0.98,-0.76 0.29,-2.42 1.32,-1.72" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path380"></path>
                            <path d="m 1444.82,2345.73 c 3.98,1.82 8.09,3.34 12.3,4.56 2.05,0.59 4.11,1.11 6.19,1.55 1.05,0.21 2.09,0.42 3.14,0.6 1.03,0.18 2.24,0.17 3.12,0.8 0.77,0.56 0.66,1.68 -0.26,1.99 -1.07,0.38 -2.26,-0.02 -3.34,-0.22 -1.05,-0.19 -2.08,-0.4 -3.13,-0.64 -2.21,-0.48 -4.42,-1.07 -6.6,-1.73 -4.32,-1.31 -8.53,-2.96 -12.6,-4.89 -1.36,-0.64 -0.17,-2.64 1.18,-2.02" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path382"></path>
                            <path d="m 1465.78,2306.81 c 2.82,1.31 5.76,2.1 8.72,2.99 1.44,0.44 2.9,0.75 4.35,1.12 1.52,0.4 3.13,0.56 4.55,1.26 l -0.27,2.01 0.78,-0.77 -0.78,0.77 c -1.5,0.48 -3.19,0.25 -4.74,0.1 -1.69,-0.17 -3.37,-0.57 -5.01,-1.02 -3.12,-0.86 -6.15,-2.58 -8.86,-4.31 -1.38,-0.87 -0.18,-2.82 1.26,-2.15" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path384"></path>
                            <path d="m 1459.54,2327.29 c 3.41,1.86 6.94,3.1 10.67,4.12 3.72,1 7.61,1.21 11.18,2.68 1.23,0.52 1.34,2.17 0,2.64 -4.03,1.4 -8.45,0.32 -12.38,-0.95 -3.94,-1.27 -7.71,-3.35 -11.08,-5.73 -1.66,-1.17 -0.22,-3.77 1.61,-2.76" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path386"></path>
                            <path d="m 1468.96,2290.64 1.24,0.77 0.78,0.8 1.6,1.74 1.52,1.73 0.93,1.21 0.42,0.88 0.14,0.85 -1.61,1.6 -0.85,-0.12 -0.82,-0.4 -1.23,-1 -1.61,-1.74 -1.65,-2.17 -0.6,-1 -0.44,-1.48 0.52,-1.56 1.66,-0.11" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path388"></path>
                            <path d="m 1063.23,1895.92 c 53.24,131.14 246.5,322.42 306.57,386.59 4.85,-0.2 39.48,-16.82 48.88,-39.34 -41.9,-153.99 -143.46,-459.65 -250.38,-533.98 -20.75,-14.41 -46.95,-25.58 -72.7,-22.44 -31.51,3.84 -63.17,35.57 -79.85,61.05 -5.1,7.8 -7.31,17.06 -9.44,26.13" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path390"></path>
                            <path d="m 1659.88,1686.41 h 104.26 l 14.29,212.13 H 1645.6 l 14.28,-212.13 m 108.94,-5 h -113.61 l -14.95,222.13 h 143.51 l -14.95,-222.13" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path392"></path>
                            <path d="m 1754.09,1697.17 8.61,128.06 h -70.92 l -3.57,35.89 c -1.38,12.09 -7.68,18.5 -13.24,18.5 -5.65,0 -10.52,-6.6 -8.71,-20.59 l 3.16,-33.8 h -8.09 l 8.61,-128.06 -12.83,190.61 h 109.8 l -12.82,-190.61" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path394"></path>
                            <path d="m 1754.09,1697.17 h -84.15 l -8.61,128.06 h 8.09 l 9.4,-100.48 h 22.96 l -10,100.48 h 70.92 l -8.61,-128.06" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path396"></path>
                            <path d="m 1691.78,1825.23 h -22.36 l -3.16,33.8 c -1.81,13.99 3.06,20.59 8.71,20.59 5.56,0 11.86,-6.41 13.24,-18.5 l 3.57,-35.89" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path398"></path>
                            <path d="m 1701.78,1724.75 h -22.96 l -9.4,100.48 h 22.36 l 10,-100.48" style={{fill:"#fcd0ce", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path400"></path>
                            <g id="g402">
                                <g id="g404" clip-path="url(#clipPath408)">
                                    <path d="m 1727.61,3604.87 c -36.16,-90.96 -16.78,-193.45 -26.43,-290.85 -7.55,-76.25 -33.53,-150.6 -75.13,-214.95 -37.59,-58.16 -87.62,-108.21 -119.25,-169.82 -31.79,-61.92 -43.32,-134.04 -32.42,-202.79 12.7,-80.18 54.91,-158.05 41.56,-238.11 -10.09,-60.47 -50.37,-110.88 -75.57,-166.77 -27.66,-61.34 -36.97,-129.1 -45.99,-195.78 77.44,18.59 151.25,32.74 228.69,51.32 14.35,3.45 29.09,7.06 41.16,15.56 13,9.15 21.69,23.13 29.15,37.16 40.89,76.95 54.46,165.13 64.58,251.67 11.76,100.56 19.69,201.52 27.61,302.45 16.72,213.05 33.27,429.37 -8.98,638.86 -13.09,64.9 -28.08,119.22 -48.98,182.05" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path410"></path>
                                    <path d="m 3008.66,3659.55 c 45.77,-86.52 52.22,-249.81 72.32,-345.6 15.74,-74.99 49.6,-146.11 97.89,-205.59 43.64,-53.77 98.79,-98.13 136.87,-155.96 38.29,-58.13 57.54,-128.59 54.12,-198.11 -3.98,-81.08 -37.54,-163.05 -15.62,-241.2 16.55,-59.03 62.04,-104.8 93.11,-157.64 34.11,-58 50.69,-124.37 66.85,-189.68 -78.99,10.13 -153.9,16.22 -232.89,26.34 -14.64,1.88 -29.69,3.89 -42.6,11.03 -13.91,7.7 -24.06,20.65 -32.99,33.8 -48.95,72.08 -71.96,158.28 -91.35,243.24 -22.54,98.7 -41.32,198.21 -60.08,297.7 -39.62,210 -79.41,423.28 -60.01,636.09 6,65.94 0.39,180.87 14.38,245.58" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path412"></path>
                                    <path d="m 3051.75,3468.19 c -21.48,124.8 -51.38,284.47 -131.26,427.52 -61.74,110.56 -173.2,201.05 -294.35,237.93 -48.89,14.89 -99.94,21.42 -150.86,25.85 -114.11,9.92 -240.96,-0.12 -322.67,-80.4 -117.89,-22.16 -216.4,-83.91 -293.42,-175.88 -95.95,-114.58 -139.55,-272.29 -150.21,-421.36 -15,-210.01 -88.93,-1218.58 -229.63,-1268.96 37.48,-46.78 253.38,-14.76 453.9,17.25 155.14,24.78 301.08,49.55 348.04,37.82 129.26,-32.29 232.88,-18.37 357.96,27.53 23.08,8.47 116.19,8.26 218.61,8.05 143.37,-0.3 304.99,-0.6 318.31,22.92 -70.82,30.89 -43.97,674.2 -124.42,1141.73" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path414"></path>
                                    <path d="m 2157.83,4084.18 c -30.61,5.51 -62.21,3.26 -90.95,-9.08 -2.05,-0.89 -0.58,-4.21 1.52,-3.58 28.41,8.44 58.41,11.62 87.73,6.52 4.01,-0.69 5.75,5.42 1.7,6.14" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path416"></path>
                                    <path d="m 2158.23,4073.7 c -1.68,23.6 10.53,44.67 28.28,59.38 1.53,1.26 -0.42,3.43 -2.02,2.62 -22.09,-11.21 -33.38,-38.07 -31.15,-62 0.29,-3.09 5.12,-3.16 4.89,0" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path418"></path>
                                    <path d="m 2165.11,4083.31 c 2.89,9.59 8.42,17.99 15.61,24.9 7.3,7 16.23,11.33 25.46,15.19 1.43,0.6 1.48,3.1 -0.41,2.99 -10.9,-0.66 -20.95,-6.69 -28.81,-13.97 -8.03,-7.42 -13.89,-17.21 -16.85,-27.73 -0.9,-3.22 4.04,-4.57 5,-1.38" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path420"></path>
                                    <path d="m 2156.7,4074.86 c -137.57,9.4 -252.8,-81.47 -331.87,-185.45 -83.59,-109.94 -118.41,-243.5 -127.7,-379.6 -4.5,-65.94 0.33,-131.64 -0.85,-197.61 -1.15,-64.71 -12.18,-128.81 -48.17,-183.84 -39.78,-60.8 -102.29,-102.23 -147.01,-159.12 -40.74,-51.85 -70.87,-113 -76.96,-179.34 -3.49,-37.95 0.9,-76.82 15.08,-112.35 13.22,-33.12 34.23,-62.29 49.36,-94.47 18.4,-39.12 21.7,-80 10.49,-121.7 -11.22,-41.79 -33.01,-80.2 -54.5,-117.42 -0.81,-1.41 1.34,-2.66 2.18,-1.27 34.66,56.71 72.39,121.92 62.48,191.15 -9.36,65.31 -61.08,114.44 -75.38,178.44 -16.08,71.88 3.37,146.74 40.64,208.86 17.86,29.77 39.64,57.04 63.64,82.08 24.44,25.52 51.46,48.43 75.87,73.99 44.38,46.45 72.88,101.93 82.64,165.56 9.37,61.03 4.29,123.04 3.84,184.47 -1,134.63 19.03,277.22 87.02,395.49 74.83,130.19 208.83,257.31 369.2,248.06 2.63,-0.15 2.61,3.89 0,4.07" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path422"></path>
                                    <path d="m 2158.95,4081.97 c 67.52,47.01 140.15,88.3 224.32,92.11 47.38,2.14 94.34,-6.67 139.95,-18.73 41.31,-10.92 82.5,-23.43 122.26,-39.18 45.07,-17.87 87.79,-41.14 124.86,-72.62 2.08,-1.76 5.11,1.18 3.04,3.04 -64.34,57.57 -148.9,85.34 -230.61,108 -45.8,12.7 -92.84,23.24 -140.56,23.88 -42.05,0.57 -83.58,-7.42 -122.65,-22.91 -44,-17.46 -83.93,-43.22 -122.52,-70.33 -1.97,-1.38 -0.1,-4.65 1.91,-3.26" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path424"></path>
                                    <path d="m 2147.7,3772.6 c -17.49,-32.91 -20.66,-70.62 -18.95,-107.3 1.28,-27.55 0.23,-69.26 25.74,-86.93 1.8,-1.24 3.46,1.38 2.2,2.85 -20.44,23.98 -20.84,59.14 -22.02,89.1 -1.37,34.4 1.88,68.87 15.58,100.78 0.74,1.7 -1.64,3.22 -2.55,1.5" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path426"></path>
                                    <path d="m 2143.94,3767.08 c -7.69,-34.5 -9.29,-69.34 -3.66,-104.3 4.36,-27.06 12.08,-59.76 36.17,-76.13 1.65,-1.12 3.19,1.26 2.02,2.61 -19.15,22.22 -27.95,48.18 -32.45,76.82 -5.19,32.94 -4.84,67.3 1.13,100.11 0.38,2.08 -2.75,3 -3.21,0.89" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path428"></path>
                                    <path d="m 2163.76,4034.82 c -53.9,13.4 -106.16,-17.19 -146.66,-49.73 -42.2,-33.92 -82.41,-72.17 -115.55,-115.09 -19.11,-24.75 -36.05,-51.88 -51.84,-78.89 -17.23,-29.48 -31.79,-60.45 -43.31,-92.59 -18.51,-51.64 -30.97,-107.19 -34.1,-162.02 -0.09,-1.62 2.66,-2.04 2.9,-0.39 6.76,48.8 14.28,96.91 29.39,143.95 10.84,33.74 24.88,66.36 42.04,97.36 12.41,22.42 26.24,44.17 40.39,65.52 30.03,45.33 68.96,83.93 109.7,119.61 44.39,38.87 102.93,83.82 165.98,68.41 2.5,-0.61 3.56,3.24 1.06,3.86" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path430"></path>
                                    <path d="m 2184.42,4041.91 c 36.14,56.74 107.64,81.68 172.09,83.84 69.67,2.33 136.83,-19.62 198.8,-49.78 36.48,-17.74 71.18,-38.69 106.9,-57.84 1.48,-0.8 2.73,1.35 1.32,2.25 -62.65,39.76 -130.29,76.92 -202.21,96.65 -64.02,17.56 -135.07,19.83 -197.11,-6.38 -33.12,-13.99 -63.4,-36.26 -82.42,-67.19 -1.04,-1.68 1.59,-3.19 2.63,-1.55" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path432"></path>
                                    <path d="m 2160.58,4014.36 c -92.04,-57.35 -138.7,-163.08 -143.69,-268.67 -1.56,-33.07 0.7,-66.55 6.82,-99.08 0.25,-1.31 2.52,-1.02 2.35,0.32 -7.19,57.75 -8.14,116.24 5.4,173.2 11.89,50.03 34.64,97.77 68.03,137.06 18.03,21.21 39.09,39.66 62.66,54.49 1.69,1.06 0.14,3.75 -1.57,2.68" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path434"></path>
                                    <path d="m 2172.65,4064.22 c 9.93,17.03 24.83,29.67 42.14,38.8 1.2,0.63 0.37,2.74 -0.94,2.23 -18.65,-7.36 -34.1,-22.14 -44.08,-39.35 -1.08,-1.86 1.79,-3.53 2.88,-1.68" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path436"></path>
                                    <path d="m 2190.75,4006.49 c -7.21,-61.28 -11.34,-123.06 -5.88,-184.67 5.06,-57.26 18.12,-115.86 45.6,-166.79 13.88,-25.7 32.63,-49.73 58.39,-64.28 1.95,-1.1 3.53,1.73 1.74,2.98 -45.91,31.79 -69.55,85.58 -84.2,137.71 -16.07,57.1 -20.72,116.81 -19.41,175.93 0.74,33.13 3.07,66.17 6.59,99.12 0.2,1.81 -2.62,1.79 -2.83,0" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path438"></path>
                                    <path d="m 2214.66,3977.46 c 4.86,-54.71 16.58,-108.42 33.86,-160.54 8.54,-25.78 18.53,-51.08 29.91,-75.74 10.84,-23.47 22.48,-47.05 37.17,-68.4 13.65,-19.84 32.41,-41.15 56.91,-46.83 1.55,-0.36 2.69,1.91 1.13,2.69 -10.44,5.25 -20.29,10.83 -29.05,18.66 -8.57,7.68 -16.05,16.45 -22.69,25.83 -14,19.77 -25.23,41.71 -35.86,63.43 -23.44,47.97 -41.46,98.5 -53.49,150.52 -6.89,29.77 -11.98,60.01 -15.33,90.38 -0.19,1.61 -2.71,1.65 -2.56,0" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path440"></path>
                                    <path d="m 2536.43,3665.45 c 40.19,-68.23 104.96,-121.02 180.81,-144.54 25.3,-7.84 51,-12.79 75.26,-23.82 2.14,-0.97 3.98,1.98 1.88,3.22 -18.81,11.08 -40.88,15.4 -61.71,21.07 -19.83,5.4 -39.13,12.4 -57.63,21.38 -35.54,17.25 -67.79,41.15 -94.91,69.86 -15.68,16.58 -29.36,34.79 -40.97,54.43 -1.03,1.75 -3.77,0.16 -2.73,-1.6" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path442"></path>
                                    <path d="m 2583.62,3580.51 c 27.09,-31.03 59.22,-58.86 98.06,-73.91 19.51,-7.55 40.01,-10.99 60.92,-10.27 25.27,0.87 49.99,4.84 75.19,0.34 1.87,-0.33 2.57,2.18 0.78,2.84 -22.11,8.17 -46.13,3.62 -69.03,2.21 -21.53,-1.32 -42.49,0.98 -62.93,8.1 -39.58,13.8 -73.27,41.9 -101.1,72.57 -1.16,1.28 -3.01,-0.6 -1.89,-1.88" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path444"></path>
                                    <path d="m 2119.16,4004.28 c -55.22,-41.58 -97.34,-99.57 -119.86,-164.94 -13,-37.76 -18.8,-77.55 -21.81,-117.25 -2.96,-39.02 -2.06,-78.22 -4.97,-117.22 -1.3,-17.52 -3.91,-35.2 -10.07,-51.74 -6.4,-17.17 -16.92,-30.57 -31.69,-41.3 -1.44,-1.04 -0.22,-3.18 1.4,-2.4 26.4,12.65 37.42,44.19 42.04,71.06 6.06,35.3 4.74,71.8 6.28,107.47 1.81,41.99 5.39,84.12 15.88,124.93 9.14,35.56 23.76,69.45 43.49,100.41 21.66,33.97 49.22,64.05 81.03,88.75 1.26,0.98 -0.43,3.2 -1.72,2.23" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path446"></path>
                                    <path d="m 1985.14,3641.13 c -0.19,-31.65 2.58,-65.63 -8.31,-95.9 -4.56,-12.67 -11.45,-24.71 -20,-35.11 -8.91,-10.83 -19.67,-18.82 -30.76,-27.22 -1.22,-0.93 -0.21,-2.69 1.22,-2.06 24.11,10.62 42.89,35.8 52.17,59.75 12.29,31.68 8.69,67.29 8.23,100.54 -0.02,1.64 -2.55,1.64 -2.55,0" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path448"></path>
                                    <path d="m 2324.31,4027.26 c 36.53,15.58 77.44,8.13 114,-3.38 31.14,-9.81 61.42,-22.53 90.45,-37.46 57.42,-29.54 110.06,-68.17 155.78,-113.75 45.52,-45.38 84.2,-97.6 113.97,-154.58 32.53,-62.27 51.37,-129.69 70.01,-197.09 18.63,-67.39 37.69,-136.45 73.99,-196.86 4.65,-7.73 9.57,-15.29 14.73,-22.69 1.53,-2.21 5.16,-0.14 3.64,2.13 -41.02,60.98 -63.35,131.28 -83.12,201.41 -19.22,68.19 -37.04,137.11 -68.46,200.97 -28.81,58.51 -67.01,112.37 -112.27,159.29 -45,46.67 -97.11,86.64 -154.12,117.56 -28.13,15.27 -57.48,28.33 -87.7,38.92 -34.04,11.94 -71.06,22.02 -107.32,15.54 -8.62,-1.55 -16.93,-4.16 -24.96,-7.66 -1.6,-0.7 -0.22,-3.03 1.38,-2.35" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path450"></path>
                                    <path d="m 2138.53,2689.43 c 0,0 99,16.86 197.25,11.08 98.25,-5.78 216.15,5.78 216.15,5.78 0,0 40.87,4.06 60.89,-6.64 20.02,-10.7 52.39,-88.14 52.39,-88.14 l 23.11,-120.21 -36.98,-221.93 -549.05,19.65 -17.33,221.93 -3.47,105.18 57.04,73.3" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path452"></path>
                                    <path d="m 2779,2425.81 c -154.82,15.03 -182.13,274.54 -189.18,408.15 -1.05,20.02 5.51,44.57 4.46,64.58 37.41,36.32 87.1,90.85 116.02,134.23 28.12,42.18 48.49,137.68 49.25,186.53 7.29,-11.57 24.09,-13.61 36.79,-8.55 23.54,9.39 35.09,35.62 42.62,59.83 7.13,22.92 12.79,46.29 16.93,69.94 5.23,29.9 7.67,62.29 -6.54,89.1 -14.23,26.82 -50.82,43.58 -76.26,27.04 1.35,0.07 -1.21,-0.41 -3.77,-0.9 -2.56,-0.49 -5.12,-0.97 -3.76,-0.91 -40.34,-10.68 -83.48,0.71 -121.1,18.75 -37.62,18.05 -71.83,42.6 -109.48,60.58 -110.03,52.57 -223.19,36.28 -344.8,27.33 -29.18,56 -54.58,125.29 -42.38,187.24 -16.43,-63.6 -25.17,-130.94 -6.16,-193.82 -61.2,-7.29 -152.83,-55.56 -153.34,-76.85 -22.26,9.2 -52.89,-8.49 -64.64,-29.52 -23.39,-41.9 -17.29,-93.55 -8.04,-140.63 5.46,-27.79 12.11,-56.18 28.2,-79.48 16.08,-23.31 43.77,-40.68 71.81,-36.76 4.68,-39.38 8.09,-81.48 22.97,-118.25 14.73,-36.38 38.71,-68.14 62.42,-99.43 13.8,-18.22 40.7,-52.79 54.51,-71.01 4.19,-65.34 1.98,-254.46 -31.18,-331.84 -26.72,-62.37 -152.16,-175.75 -209.01,-184.46 133.86,-115.62 361.19,-615.35 537.76,-625.74 47.53,-2.8 228.11,292.8 273.76,306.35 45.64,13.56 59.2,202.76 74.96,247.69 9.3,26.53 -37.89,87.08 -22.82,110.81" style={{fill:"#f89f83", fillOpacity:1, fillRule: "nonzero", stroke:"none"}} id="path454"></path>
                                    <path d="m 2202.44,2866.27 c 19.67,-26.17 43.94,-48.08 72.52,-64.15 14.12,-7.94 29.05,-14.41 44.51,-19.26 8.08,-2.53 16.29,-4.64 24.6,-6.27 6.96,-1.36 15.59,-3.7 22.62,-2.36 2.31,0.44 1.74,3.44 0,4.14 -6.88,2.78 -15.7,2.64 -23.02,4.08 -7.67,1.51 -15.27,3.41 -22.74,5.69 -15.37,4.69 -30.28,10.96 -44.4,18.61 -27.83,15.09 -53.1,35.68 -72.69,60.6 l -1.4,-1.08" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path456"></path>
                                    <path d="m 2382.4,2774.93 c 39.92,5.51 78.47,18.7 113.65,38.32 33.87,18.88 67.87,44.16 90.71,75.9 0.95,1.31 -1.12,2.81 -2.21,1.7 -13.95,-14.13 -27.57,-28.48 -42.94,-41.12 -15.17,-12.48 -31.5,-23.56 -48.67,-33.13 -34.53,-19.26 -72.45,-32.09 -111.52,-38.1 -2.36,-0.37 -1.33,-3.89 0.98,-3.57" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path458"></path>
                                    <path d="m 2293.58,3483.84 c 0.38,14.32 -5.2,28.71 -15.14,39.03 0.92,-2.72 1.84,-5.44 2.77,-8.16 -12.81,8.56 -28.82,13.14 -43.64,17.33 3.14,-1.37 5.45,-4.5 5.83,-7.9 -30.66,6.21 -63.64,12.63 -94.63,8.4 -37.64,-5.14 -71.86,-25.56 -99.72,-51.38 18.94,2.86 35.89,5.09 54.83,7.96 18.83,2.84 37.75,5.69 56.8,5.92 45.13,0.54 87.81,-12.99 132.9,-11.2" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path460"></path>
                                    <path d="m 2456.15,3483.84 c -0.37,14.32 5.22,28.71 15.16,39.03 -0.93,-2.72 -1.86,-5.44 -2.77,-8.16 12.8,8.56 28.8,13.14 43.63,17.33 -3.15,-1.37 -5.45,-4.5 -5.83,-7.9 30.65,6.21 63.64,12.63 94.64,8.4 37.63,-5.14 71.85,-25.56 99.7,-51.38 -18.93,2.86 -35.89,5.09 -54.82,7.96 -18.84,2.84 -37.74,5.69 -56.8,5.92 -45.13,0.54 -87.81,-12.99 -132.91,-11.2" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path462"></path>
                                    <path d="m 2310.28,3410.81 c 17.64,-9.54 25.87,-26.16 28.67,-45.35 3.23,-22.18 5.41,-44.92 1.64,-67.18 -0.31,-1.76 2.22,-2.54 2.7,-0.75 6.28,23.31 3.36,47.71 -0.1,71.24 -2.85,19.5 -12.84,36.62 -30.48,46.2 -2.72,1.48 -5.15,-2.68 -2.43,-4.16" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path464"></path>
                                    <path d="m 2342.23,3135.42 c 1.88,0.42 3.78,0.84 5.66,1.26 0.99,-0.6 1.91,-1.26 2.79,-2.01 1.19,-0.91 2.34,-1.86 3.51,-2.79 1.92,-1.53 3.85,-3.05 5.8,-4.55 4.58,-3.51 9.3,-6.86 14.37,-9.65 9.44,-5.19 20.17,-8.49 31.01,-6.94 9.15,1.3 16.62,6.48 24.09,11.55 3.87,2.63 7.83,5.34 12.19,7.07 3.78,1.5 8.45,0.66 11.62,3.13 v 2.83 c -5.33,6.14 -18.77,-2.03 -23.77,-5.31 -10.43,-6.82 -19.45,-14.21 -32.7,-13.4 -13.95,0.86 -25.78,8.53 -36.69,16.63 -4.33,3.21 -19.52,15.77 -21.59,3.2 -0.39,-2.41 2.94,-3.43 3.71,-1.02" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path466"></path>
                                    <path d="m 2326.38,3205.76 c -8.09,-12.67 -12.66,-28.76 -15.64,-43.38 -1.75,-8.56 -2.12,-17.83 1.98,-25.8 3.16,-6.13 9.74,-12.43 17.13,-10.96 1.74,0.35 1.89,2.83 0.48,3.66 -5.86,3.44 -10.99,6.36 -13.44,13.16 -2.84,7.88 -1.26,16.46 0.54,24.37 2.84,12.45 5.87,25.83 12.34,36.97 1.27,2.2 -2.04,4.1 -3.39,1.98" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path468"></path>
                                    <path d="m 2463.62,3200.36 c 5.54,-11.61 11.46,-23.78 12.35,-36.82 0.38,-5.56 -0.12,-11.14 -1.83,-16.46 -0.87,-2.72 -2.06,-5.33 -3.56,-7.75 -1.38,-2.2 -2.86,-3.85 -3.06,-6.52 -0.11,-1.38 1.31,-2.02 2.43,-1.85 5.42,0.79 8.52,8.9 10.02,13.42 1.97,5.94 2.61,12.41 2.15,18.63 -1.06,14.33 -7.49,27.44 -13.76,40.11 -1.57,3.18 -6.24,0.4 -4.74,-2.76" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path470"></path>
                                    <path d="m 2011.63,3224.82 c 0.51,-6.5 1.02,-13 1.53,-19.5 0.5,-6.39 0.86,-12.79 2.11,-19.08 0.29,-1.46 2.39,-1.02 2.47,0.33 0.4,6.38 -0.08,12.75 -0.43,19.12 -0.34,6.38 -0.68,12.75 -1.01,19.13 -0.17,3 -4.9,2.98 -4.67,0" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path472"></path>
                                    <path d="m 2004.57,3400.74 c -7.31,13.81 -25.68,15.34 -37.6,6.75 -15.28,-11.02 -18.07,-30.81 -17.68,-48.32 0.46,-20.85 4.53,-41.67 13.06,-60.74 3.29,-7.34 7.44,-14.63 14.02,-19.51 7.34,-5.47 16.73,-7.16 24.27,-12.4 1.75,-1.21 4.28,1.24 2.99,2.99 -3.76,5.15 -9.04,7.3 -14.75,9.76 -7.55,3.24 -12.98,7.52 -17.13,14.76 -8.22,14.34 -12.62,31.74 -14.9,48.01 -2.26,16.05 -3.93,35.49 4.46,50.12 7.85,13.7 28.77,22.26 39.36,6.3 1.61,-2.42 5.28,-0.31 3.9,2.28" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path474"></path>
                                    <path d="m 1997.05,3400.85 c 7,-5.4 8.16,-16.61 9.86,-24.65 1.05,-4.96 1.91,-9.95 2.77,-14.95 0.43,-2.49 0.82,-4.99 1.18,-7.49 0.35,-2.53 0.39,-5.33 1.57,-7.63 l 1.96,0.26 c 0.79,2.47 0.26,5.3 0.05,7.86 -0.24,2.87 -0.51,5.75 -0.85,8.63 -0.67,5.76 -1.69,11.5 -2.83,17.2 -1.79,8.93 -3.77,18.76 -11.54,24.49 -2.25,1.65 -4.31,-2.06 -2.17,-3.72" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path476"></path>
                                    <path d="m 2012.05,3365.97 c -2.22,5.7 -5.35,10.93 -9.48,15.46 -3.9,4.27 -8.98,8.16 -14.94,8.57 -5.68,0.4 -10.65,-3.15 -13.08,-8.13 -1.28,-2.63 -1.89,-5.43 -2.1,-8.34 -0.23,-3.14 -0.19,-6.94 1.31,-9.79 0.62,-1.17 2.26,-0.76 2.64,0.34 0.88,2.52 0.52,5.53 0.69,8.16 0.15,2.27 0.56,4.6 1.55,6.66 1.8,3.73 5.26,6.43 9.56,5.53 4.51,-0.93 8.14,-4.16 11.13,-7.49 3.23,-3.61 5.85,-7.85 7.65,-12.36 0.53,-1.32 1.76,-2.26 3.23,-1.84 1.26,0.35 2.36,1.9 1.84,3.23" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path478"></path>
                                    <path d="m 1987.91,3478.27 c -0.12,-3.49 -0.07,-7 0.18,-10.49 0.12,-1.78 0.32,-3.53 0.67,-5.29 0.35,-1.75 0.98,-3.39 1.6,-5.06 0.49,-1.28 2.45,-1.16 2.48,0.33 0.03,1.7 0.15,3.4 0.08,5.1 -0.08,1.71 -0.21,3.41 -0.34,5.12 -0.26,3.43 -0.32,6.86 -0.23,10.29 0.08,2.86 -4.35,2.86 -4.44,0" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path480"></path>
                                    <path d="m 2765.74,3455.15 c 0.02,-10.08 0.05,-20.15 0.32,-30.23 0.09,-3.34 5.1,-3.34 5.18,0 0.23,10.08 0.22,20.15 0.21,30.23 -0.01,3.67 -5.72,3.68 -5.71,0" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path482"></path>
                                    <path d="m 2754.29,3260.42 c -1.24,-13.12 -1.65,-26.58 0.91,-39.56 0.34,-1.69 2.99,-1.28 2.98,0.41 -0.07,13.08 -0.64,26.09 0.55,39.15 0.26,2.85 -4.18,2.82 -4.44,0" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path484"></path>
                                    <path d="m 2768.61,3362.27 c 4.89,5.52 10.61,10.16 17.47,12.97 9.89,4.04 16.9,0.02 21.49,-9.05 7.21,-14.24 7.19,-31.38 5.4,-46.87 -1.55,-13.47 -4.53,-27.24 -10.62,-39.44 -2.96,-5.92 -6.65,-11.51 -11.37,-16.17 -2.37,-2.34 -4.95,-4.43 -7.77,-6.19 -4.34,-2.72 -15.55,-7.4 -16.66,1.93 -0.23,2.01 -3.52,2.97 -3.92,0.54 -1.28,-7.91 5.39,-13.09 12.98,-12.2 8.56,1 16.68,7.87 22.21,14.09 12.71,14.32 18.14,33.73 20.78,52.28 2.77,19.47 3.69,44.21 -8.99,60.76 -13.06,17.04 -34.91,4.04 -44.38,-10.05 -1.34,-2.01 1.76,-4.43 3.38,-2.6" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path486"></path>
                                    <path d="m 2766.29,3361.52 c -3.61,-7.44 -5.6,-15.47 -5.49,-23.76 0.02,-2.09 3.23,-2.1 3.25,0 0.07,7.66 1.51,15.38 4.54,22.42 0.67,1.54 -1.54,2.91 -2.3,1.34" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path488"></path>
                                    <path d="m 2764.22,3337.83 c 3.22,5.99 8.39,10.54 14.4,13.62 3.04,1.56 6.73,2.91 10.22,2.44 1.41,-0.19 2.64,-0.77 3.87,-1.49 1.22,-0.71 2.08,-2.07 3.31,-2.66 0.93,-0.44 2.17,-0.13 2.45,1 0.92,3.85 -3.98,7.04 -7.02,8.02 -4.4,1.41 -8.91,0.34 -12.96,-1.56 -7.56,-3.54 -14.24,-9.72 -17.85,-17.28 -1.14,-2.38 2.3,-4.47 3.58,-2.09" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path490"></path>
                                    <path d="m 2285.02,3519.08 c 6.02,-8.28 9.12,-18.47 8.52,-28.7 h 0.99 c 0.87,10.51 -2.19,21.01 -8.66,29.35 l -0.85,-0.65" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path492"></path>
                                    <path d="m 2290.55,3517.48 c 4.86,-10.55 9.63,-22.35 3.04,-33.27 l 0.66,-0.5 c 3.64,4.34 4.5,10.53 3.8,16.01 -0.84,6.52 -3.72,12.46 -6.58,18.3 l -0.92,-0.54" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path494"></path>
                                    <path d="m 2235.22,3529.14 c 3.82,-1.55 6.66,-4.49 8.78,-7.95 l 0.85,0.35 c -1.64,4.07 -5.29,7.14 -9.3,8.74 l -0.74,-0.41 0.41,-0.73" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path496"></path>
                                    <path d="m 2232.14,3527.29 c 1.71,-0.7 3.32,-1.64 4.78,-2.76 1.48,-1.13 2.79,-2.42 4.14,-3.67 l 0.6,0.46 c -0.94,1.73 -2.41,3.2 -3.97,4.37 -1.6,1.2 -3.34,2.16 -5.19,2.91 l -0.83,-0.48 0.47,-0.83" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path498"></path>
                                    <path d="m 2467.54,3521.05 c -4.56,-3.94 -7.83,-9.1 -9.61,-14.86 -1.62,-5.27 -2.5,-12.15 -0.27,-17.37 l 0.96,0.27 c -0.19,2.73 -0.72,5.38 -0.67,8.13 0.05,2.92 0.51,5.81 1.34,8.6 1.64,5.52 4.76,10.59 8.98,14.5 l -0.73,0.73" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path500"></path>
                                    <path d="m 2458.1,3515.5 c -3.05,-4.29 -4.79,-9.32 -5.28,-14.56 -0.46,-4.81 -0.06,-11.13 2.96,-15.12 l 0.76,0.31 c -0.48,2.42 -1.35,4.74 -1.79,7.18 -0.43,2.43 -0.55,4.94 -0.39,7.4 0.3,5.07 1.93,9.99 4.57,14.3 l -0.83,0.49" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path502"></path>
                                    <path d="m 2467.11,3511.45 c 4.9,6.07 11.4,10.87 18.62,13.83 l -0.32,1.15 c -7.55,-2.92 -14.08,-7.84 -19.06,-14.22 l 0.76,-0.76" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path504"></path>
                                    <path d="m 2503.57,3518.79 c 0.8,3.13 3.56,4.91 6.14,6.53 2.57,1.62 5.27,3.06 8.06,4.29 l -0.39,0.93 c -3.09,-1.21 -6.04,-2.73 -8.81,-4.59 -2.61,-1.76 -5.17,-3.66 -5.82,-6.94 l 0.82,-0.22" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path506"></path>
                                    <path d="m 2506.71,3521.93 c 3.11,2.1 6.47,3.79 10.03,4.99 3.49,1.19 7.08,1.77 10.67,2.53 l -0.09,0.66 c -3.74,0.19 -7.58,-0.78 -11.08,-2.07 -3.55,-1.31 -6.92,-3.08 -10.02,-5.28 l 0.49,-0.83" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path508"></path>
                                    <path d="m 2461.96,3485.43 c 1.44,11.77 8,21.88 17.27,29.05 l -0.41,0.52 c -10.26,-6.24 -16.81,-17.79 -18.18,-29.57 h 1.32" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path510"></path>
                                    <path d="m 2467.03,3486.39 c 3.3,13.08 12.61,23.88 24.52,30 l -0.36,0.6 c -12.59,-5.4 -21.78,-17.18 -24.96,-30.38 l 0.8,-0.22" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path512"></path>
                                    <path d="m 2484.45,3487.38 c 10.74,13.33 24.78,23.91 40.57,30.51 l -0.23,0.8 c -16.19,-6.34 -30.36,-16.87 -41.08,-30.56 l 0.74,-0.75" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path514"></path>
                                    <path d="m 2500.23,3494.25 c 6.28,7.68 14.36,13.87 23.38,17.99 l -0.36,0.61 c -9.24,-3.99 -17.28,-10.19 -23.53,-18.08 l 0.51,-0.52" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path516"></path>
                                    <path d="m 2513,3496.61 c 9.64,7.96 20.35,14.26 31.75,19.34 l -0.22,0.53 c -11.82,-4.26 -22.68,-11.03 -32.08,-19.32 l 0.55,-0.55" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path518"></path>
                                    <path d="m 2282.27,3487.26 c 0.32,3.82 -1.78,7.18 -3.67,10.34 -2.06,3.43 -4.3,6.75 -6.91,9.78 -4.89,5.7 -11.18,10.36 -18.67,11.82 l -0.25,-0.87 c 6.97,-1.83 12.9,-6.16 17.54,-11.56 2.4,-2.8 4.48,-5.86 6.37,-9.02 1.89,-3.16 4.3,-6.66 4.01,-10.49 -0.07,-1.02 1.49,-1.01 1.58,0" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path520"></path>
                                    <path d="m 2277.93,3509.26 c 2.62,-2.84 4.8,-6.02 6.6,-9.44 1.82,-3.46 2.9,-7.09 4.14,-10.76 l 0.67,0.09 c -0.34,3.87 -1.85,7.74 -3.6,11.18 -1.82,3.58 -4.23,6.84 -7.01,9.73 l -0.8,-0.8" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path522"></path>
                                    <path d="m 2248.19,3516.76 c 5.12,-2.47 9.79,-5.87 13.74,-9.95 4.01,-4.14 6.96,-8.93 9.6,-14.02 l 0.63,0.27 c -3.62,10.95 -13.02,20.05 -23.28,24.86 l -0.69,-1.16" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path524"></path>
                                    <path d="m 2212.4,3524.29 c 10.03,-7.2 17.27,-17.04 22.36,-28.19 l 0.78,0.33 c -4,11.76 -12.39,21.92 -22.42,29.08 l -0.72,-1.22" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path526"></path>
                                    <path d="m 2206.89,3522.72 c 8.81,-6.82 15.36,-15.6 20.43,-25.44 l 0.83,0.34 c -4.17,10.36 -11.73,19.29 -20.57,25.99 l -0.69,-0.89" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path528"></path>
                                    <path d="m 2196.4,3521.79 c 10.22,-5.23 18.42,-13.99 23.1,-24.48 l 0.86,0.36 c -4.13,11.08 -12.62,20.2 -23.35,25.17 l -0.61,-1.05" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path530"></path>
                                    <path d="m 2257.67,2952.07 c 6.05,0 6.06,9.4 0,9.4 -6.05,0 -6.06,-9.4 0,-9.4" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path532"></path>
                                    <path d="m 2643.54,3410.61 c 7.06,-1.72 14.33,-1.9 21.47,-0.61 6.92,1.25 14.21,3.92 18.72,9.56 0.7,0.87 0.09,2.52 -1.2,2.08 -6.12,-2.09 -11.93,-5.05 -18.28,-6.48 -6.4,-1.44 -13.07,-1.47 -19.48,-0.11 -2.89,0.62 -4.13,-3.73 -1.23,-4.44" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path534"></path>
                                    <path d="m 2661.15,3397.12 c 8.75,-0.28 17.6,0.98 25.91,3.76 8.15,2.73 16.68,6.86 22.08,13.72 1.75,2.23 -0.36,5.1 -3.01,3.9 -7.24,-3.29 -13.99,-7.38 -21.62,-9.84 -7.58,-2.44 -15.41,-3.5 -23.36,-3.2 -5.36,0.2 -5.36,-8.16 0,-8.34" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path536"></path>
                                    <path d="m 2473.88,3352.88 c 0,0 95.61,-36.18 138.7,-15.58 45.39,21.73 72.48,51.79 72.48,51.79 0,0 -47.66,39.6 -83.17,40.73 -35.5,1.14 -71.95,-9.05 -82.23,-19.23 -10.28,-10.19 -45.78,-57.71 -45.78,-57.71" style={{fill:"#ffffff", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path538"></path>
                                    <path d="m 2626.12,3380.38 c 0,-24.82 -19.41,-44.94 -43.35,-44.94 -23.94,0 -43.36,20.12 -43.36,44.94 0,24.82 19.42,44.94 43.36,44.94 23.94,0 43.35,-20.12 43.35,-44.94" style={{fill:"#4a2717", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path540"></path>
                                    <path d="m 2562.27,3388.39 c 0,-4.08 -2.73,-7.38 -6.1,-7.38 -3.37,0 -6.1,3.3 -6.1,7.38 0,4.08 2.73,7.38 6.1,7.38 3.37,0 6.1,-3.3 6.1,-7.38" style={{fill:"#ffffff", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path542"></path>
                                    <path d="m 2474.17,3349.32 c 23.37,43.02 70.03,77.2 120.61,72.33 13.81,-1.34 27.74,-5.46 40.11,-11.72 10.87,-5.5 20.61,-13.04 31.69,-18.13 16.66,-7.66 37.31,-8.51 49.47,7.19 3.28,4.22 -1.84,9.8 -6.01,6.01 -23.74,-21.6 -51.13,6.68 -72.93,16.96 -21.23,10.02 -44.79,13.51 -68.01,10.08 -46.72,-6.89 -79.62,-38.86 -100.35,-79.55 -1.83,-3.59 3.49,-6.75 5.42,-3.17" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path544"></path>
                                    <path d="m 2476.97,3364.49 c 21.58,31.02 50.35,59.82 88.74,67.29 20.78,4.04 40.37,-0.13 58.65,-10.46 16.82,-9.52 32.22,-23.03 49.92,-30.79 3.48,-1.53 7.68,2.67 4.4,5.72 -8.07,7.49 -18.1,13.03 -27.25,19.12 -9.2,6.12 -18.32,12.55 -28.28,17.4 -18.22,8.88 -38.11,11.47 -58.02,7.52 -40.08,-7.94 -70.36,-40.9 -90.29,-74.55 -0.82,-1.39 1.23,-2.53 2.13,-1.25" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path546"></path>
                                    <path d="m 2481.66,3400.54 c -1.7,0 -3.32,1.64 -2.11,3.45 12.8,19.06 30.49,34.4 51.45,43.84 14.43,6.5 30.75,11.15 46.86,11.15 6.64,0 13.24,-0.79 19.66,-2.57 3.05,-0.84 2.33,-5.32 -0.72,-5.39 -21.39,-0.57 -42.23,-2.01 -62.22,-10.36 -19.93,-8.33 -37.98,-21.71 -50.89,-39.09 -0.54,-0.73 -1.29,-1.03 -2.03,-1.03" style={{fill: "#f28564", fillOpacity:1, fillRule: "nonzero", stroke:"none"}} id="path548"></path>
                                    <path d="m 2657.47,3426.49 c -0.33,0 -0.67,0.07 -1,0.23 -6.45,3.06 -12.02,7.77 -18.2,11.37 -6.18,3.6 -12.78,6.33 -19.68,8.23 -3.32,0.91 -2.21,5.54 0.84,5.54 0.21,0 0.44,-0.02 0.67,-0.07 7.55,-1.57 14.85,-4.14 21.75,-7.6 6.77,-3.4 13.74,-7.82 17.54,-14.56 0.91,-1.61 -0.39,-3.14 -1.92,-3.14" style={{fill: "#f28564", fillOpacity:1, fillRule: "nonzero", stroke:"none"}} id="path550"></path>
                                    <path d="m 2597.48,3326.22 c 25.91,5.66 52.31,18.6 70.37,38.38 l -0.47,0.47 c -10.14,-8.97 -20.53,-17.3 -32.47,-23.82 -11.83,-6.46 -24.53,-11.17 -37.68,-14.11 l 0.25,-0.92" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path552"></path>
                                    <path d="m 2568.42,3323.94 c 7,-1.23 14.51,-1.63 21.42,0.21 l -0.07,0.58 c -7.09,-0.61 -14.05,-1.06 -21.12,0.07 l -0.23,-0.86" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path554"></path>
                                    <path d="m 2522.69,3408.28 c 8.61,6.3 17.99,11.52 27.95,15.37 4.83,1.87 9.76,3.42 14.78,4.67 5.15,1.28 10.56,1.78 15.63,3.27 2.1,0.61 1.66,3.71 -0.51,3.78 -5.23,0.17 -10.79,-1.33 -15.81,-2.66 -5.33,-1.41 -10.55,-3.21 -15.63,-5.33 -10.04,-4.18 -19.46,-9.63 -28.08,-16.24 -1.65,-1.27 -0.07,-4.13 1.67,-2.86" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path556"></path>
                                    <path d="m 2601.34,3428.96 c 4.95,-1.05 9.94,-2.53 14.66,-4.36 2.29,-0.89 4.54,-1.91 6.72,-3.03 2.26,-1.15 4.48,-2.98 7.09,-2.95 1.11,0.01 1.65,1.16 1.2,2.08 -1.17,2.35 -3.93,3.38 -6.19,4.48 -2.45,1.19 -4.96,2.27 -7.52,3.22 -2.47,0.91 -4.99,1.7 -7.53,2.36 -2.63,0.68 -5.32,0.99 -8,1.32 -1.78,0.21 -2.16,-2.75 -0.43,-3.12" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path558"></path>
                                    <path d="m 2582.53,3344.31 c 5.86,0.63 11.48,2.45 16.52,5.53 2.41,1.47 4.75,3.2 6.66,5.29 1.95,2.12 4.01,4.58 4.28,7.55 0.11,1.16 -1.26,1.64 -2.13,1.22 -2.25,-1.08 -3.98,-3.18 -5.89,-4.75 -1.86,-1.54 -3.8,-3.01 -5.88,-4.25 -4.12,-2.46 -8.8,-4.09 -13.56,-4.55 -1.62,-0.16 -3.02,-1.28 -3.02,-3.03 0,-1.49 1.39,-3.19 3.02,-3.01" style={{fill: "#623417", fillOpacity: 1, fillRule:"nonzero", stroke:"none"}} id="path560"></path>
                                    <path d="m 2617.83,3372.43 c 0.58,2.17 0.96,4.38 1.22,6.61 0.12,0.97 0.24,1.98 0.25,2.96 l -0.13,1.49 -0.81,2.13 c -0.61,0.96 -2.18,1.38 -3,0.39 l -1.04,-1.44 -0.52,-1.51 -0.65,-2.58 c -0.47,-1.76 -1.08,-3.48 -1.78,-5.16 l 0.35,0.83 -0.42,-0.97 c -0.41,-0.92 -0.59,-1.76 -0.36,-2.75 0.24,-1.08 1.09,-1.91 2.07,-2.32 1.93,-0.81 4.27,0.23 4.82,2.32" style={{fill: "#623417", fillOpacity: 1, fillRule:"nonzero", stroke:"none"}} id="path562"></path>
                                    <path d="m 2290.24,3352.88 c 0,0 -95.62,-36.18 -138.7,-15.58 -45.4,21.73 -72.48,51.79 -72.48,51.79 0,0 47.66,39.6 83.17,40.73 35.5,1.14 71.95,-9.05 82.22,-19.23 10.29,-10.19 45.79,-57.71 45.79,-57.71" style={{fill:"#ffffff", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path564"></path>
                                    <path d="m 2138,3380.38 c 0,-24.82 19.4,-44.94 43.35,-44.94 23.94,0 43.35,20.12 43.35,44.94 0,24.82 -19.41,44.94 -43.35,44.94 -23.95,0 -43.35,-20.12 -43.35,-44.94" style={{fill:"#4a2717", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path566"></path>
                                    <path d="m 2201.85,3388.39 c 0,-4.08 2.73,-7.38 6.1,-7.38 3.37,0 6.09,3.3 6.09,7.38 0,4.08 -2.72,7.38 -6.09,7.38 -3.37,0 -6.1,-3.3 -6.1,-7.38" style={{fill:"#ffffff", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path568"></path>
                                    <path d="m 2295.37,3352.49 c -20.74,40.69 -53.64,72.66 -100.35,79.55 -22.52,3.33 -45.39,0.17 -66.11,-9.22 -22.32,-10.12 -50.67,-39.81 -74.84,-17.82 -4.16,3.79 -9.28,-1.78 -6,-6.01 12,-15.5 32.21,-14.84 48.79,-7.48 10.73,4.76 20.15,11.97 30.51,17.44 12.89,6.81 27.42,11.3 41.97,12.7 50.58,4.87 97.23,-29.3 120.6,-72.33 1.94,-3.58 7.26,-0.42 5.43,3.17" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path570"></path>
                                    <path d="m 2289.27,3365.74 c -19.92,33.65 -50.21,66.61 -90.29,74.55 -19.29,3.83 -38.68,1.56 -56.48,-6.8 -9.99,-4.69 -19.07,-10.98 -28.23,-17.07 -9.66,-6.42 -20.32,-12.27 -28.83,-20.17 -3.26,-3.03 0.88,-7.26 4.4,-5.72 17.7,7.76 33.09,21.27 49.93,30.79 18.26,10.33 37.85,14.5 58.64,10.46 38.39,-7.47 67.15,-36.27 88.73,-67.29 0.9,-1.28 2.95,-0.14 2.13,1.25" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path572"></path>
                                    <path d="m 2282.46,3400.54 c -0.74,0 -1.49,0.3 -2.03,1.03 -12.92,17.38 -30.96,30.76 -50.9,39.09 -19.99,8.35 -40.82,9.79 -62.21,10.36 -3.09,0.07 -3.75,4.56 -0.73,5.39 6.42,1.78 13.03,2.57 19.68,2.57 16.1,0 32.44,-4.64 46.85,-11.15 20.96,-9.47 38.63,-24.77 51.44,-43.84 1.22,-1.82 -0.4,-3.45 -2.1,-3.45" style={{fill: "#f28564", fillOpacity:1, fillRule: "nonzero", stroke:"none"}} id="path574"></path>
                                    <path d="m 2106.64,3426.49 c -1.53,0 -2.82,1.53 -1.91,3.14 3.81,6.74 10.77,11.16 17.54,14.56 6.89,3.46 14.2,6.03 21.74,7.6 0.24,0.05 0.46,0.07 0.67,0.07 3.06,0 4.16,-4.63 0.85,-5.54 -6.91,-1.9 -13.5,-4.63 -19.69,-8.23 -6.18,-3.6 -11.74,-8.31 -18.2,-11.37 -0.33,-0.16 -0.67,-0.23 -1,-0.23" style={{fill: "#f28564", fillOpacity:1, fillRule: "nonzero", stroke:"none"}} id="path576"></path>
                                    <path d="m 2166.89,3327.14 c -13.15,2.94 -25.85,7.65 -37.68,14.11 -11.94,6.52 -22.33,14.85 -32.48,23.82 l -0.47,-0.47 c 18.07,-19.78 44.47,-32.72 70.38,-38.38 l 0.25,0.92" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path578"></path>
                                    <path d="m 2195.46,3324.8 c -7.07,-1.13 -14.02,-0.68 -21.1,-0.07 l -0.08,-0.58 c 6.91,-1.84 14.42,-1.44 21.41,-0.21 l -0.23,0.86" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path580"></path>
                                    <path d="m 2243.1,3411.14 c -8.63,6.61 -18.05,12.06 -28.08,16.24 -4.93,2.05 -9.99,3.81 -15.15,5.2 -5.15,1.4 -10.91,2.96 -16.3,2.79 -2.15,-0.07 -2.62,-3.16 -0.5,-3.78 5.06,-1.49 10.47,-1.99 15.63,-3.27 5.01,-1.25 9.95,-2.8 14.78,-4.67 9.95,-3.85 19.33,-9.07 27.95,-15.37 1.73,-1.27 3.33,1.59 1.67,2.86" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path582"></path>
                                    <path d="m 2162.35,3432.08 c -2.59,-0.31 -5.22,-0.61 -7.76,-1.26 -2.64,-0.67 -5.22,-1.48 -7.77,-2.42 -2.48,-0.92 -4.93,-1.96 -7.31,-3.12 -2.3,-1.11 -5.21,-2.17 -6.4,-4.58 -0.46,-0.92 0.09,-2.07 1.2,-2.08 2.61,-0.03 4.82,1.8 7.09,2.95 2.18,1.12 4.42,2.14 6.72,3.03 4.72,1.83 9.7,3.31 14.65,4.36 1.72,0.37 1.37,3.33 -0.42,3.12" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path584"></path>
                                    <path d="m 2181.58,3350.35 c -4.75,0.46 -9.44,2.09 -13.56,4.55 -2.02,1.2 -3.9,2.63 -5.73,4.12 -1.96,1.6 -3.73,3.77 -6.03,4.88 -0.88,0.42 -2.25,-0.06 -2.14,-1.22 0.27,-2.91 2.26,-5.32 4.14,-7.4 1.95,-2.16 4.33,-3.92 6.81,-5.44 5.03,-3.09 10.66,-4.9 16.51,-5.53 1.62,-0.18 3.02,1.51 3.02,3.01 0,1.77 -1.39,2.87 -3.02,3.03" style={{fill: "#623417", fillOpacity: 1, fillRule:"nonzero", stroke:"none"}} id="path586"></path>
                                    <path d="m 2152.81,3375.18 -0.42,0.97 0.35,-0.83 c -0.7,1.68 -1.3,3.4 -1.78,5.16 l -0.65,2.58 -0.38,1.21 -1.17,1.74 c -0.83,0.99 -2.39,0.57 -3.01,-0.39 l -0.8,-2.03 -0.14,-1.49 c -0.02,-1.01 0.13,-2.06 0.25,-3.06 0.27,-2.23 0.65,-4.44 1.22,-6.61 0.56,-2.08 2.89,-3.14 4.82,-2.32 l 1.9,1.89 c 0.47,1.12 0.3,2.1 -0.19,3.18" style={{fill: "#623417", fillOpacity: 1, fillRule:"nonzero", stroke:"none"}} id="path588"></path>
                                    <path d="m 2123.4,3415.05 c -6.41,-1.36 -13.09,-1.33 -19.47,0.11 -6.35,1.43 -12.17,4.39 -18.29,6.48 -1.29,0.44 -1.9,-1.21 -1.21,-2.08 4.53,-5.65 11.8,-8.31 18.72,-9.56 7.14,-1.29 14.43,-1.11 21.47,0.61 2.9,0.71 1.67,5.06 -1.22,4.44" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path590"></path>
                                    <path d="m 2107.02,3405.46 c -7.96,-0.3 -15.79,0.76 -23.37,3.2 -7.62,2.46 -14.37,6.55 -21.61,9.84 -2.64,1.19 -4.77,-1.66 -3.01,-3.9 5.39,-6.86 13.92,-10.99 22.07,-13.72 8.31,-2.78 17.16,-4.04 25.92,-3.76 5.35,0.18 5.37,8.54 0,8.34" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path592"></path>
                                    <path d="m 2519.2,3021.59 c -30.27,9.03 -49.08,33.31 -76.83,48.42 -8.3,4.53 -17.78,7.86 -27.12,6.33 -9.7,-1.59 -18.12,-8.25 -27.91,-9.22 -15.21,-1.5 -28.64,13.49 -42.79,7.68 -29.34,-12.05 -46.81,-45.17 -77.15,-54.41 -3.26,-1 -7.79,0.97 -8.76,-2.3 13.71,-5.03 19.19,-22.94 27.32,-35.07 9.56,-14.25 28.94,-44.41 50.49,-53.56 29.81,-12.67 64.18,-11.6 93.86,-1.33 26.87,9.3 47.12,31.8 62.26,55.87 7.64,12.17 13.67,31.39 26.63,37.59" style={{fill: "#e3382b", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path594"></path>
                                    <path d="m 2234.74,3039.53 c -1.29,-3.94 -1.95,-8.15 -1.95,-12.3 0,-2.2 0.23,-4.38 0.57,-6.55 0.4,-2.63 1.46,-5 3.63,-6.62 2.08,-1.56 4.73,0.21 5.46,2.22 0.78,2.16 0.15,4.68 -0.23,6.84 -0.04,0.23 -0.21,1.41 -0.07,0.35 l -0.14,1.18 c -0.09,0.93 -0.13,1.85 -0.15,2.78 -0.02,1.72 0.06,3.43 0.28,5.14 -0.13,-1.04 0.08,0.37 0.12,0.57 l 0.26,1.37 c 0.2,0.9 0.44,1.79 0.71,2.68 0.66,2.21 -0.8,4.9 -3.07,5.42 -2.43,0.55 -4.66,-0.73 -5.42,-3.08" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path596"></path>
                                    <path d="m 2240.21,3024.58 c 17.91,-11.86 37.48,-14.04 58.44,-12.16 20.9,1.88 41.56,5.53 62.07,-0.93 5.08,-1.59 7.24,6.35 2.2,7.95 -39.44,12.55 -81.73,-11.06 -119.05,11.4 -4.04,2.42 -7.52,-3.7 -3.66,-6.26" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path598"></path>
                                    <path d="m 2369.16,3009.58 c 6.62,-4.51 13.99,-7.2 22.04,-7.36 3.76,-0.08 7.65,0.4 11.24,1.55 3.87,1.24 7.14,3.7 9.88,6.66 2.51,2.72 -0.78,7.62 -4.14,5.36 -10.99,-7.41 -25.12,-5.94 -36.88,-1.15 -3.07,1.25 -4.56,-3.4 -2.14,-5.06" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path600"></path>
                                    <path d="m 2417.78,3017.09 c 22.5,0.81 45.16,-3.1 67.69,-3.28 12.68,-0.1 25.63,0.39 38.04,3.23 9.52,2.18 20.35,5.75 24.93,15.04 1.8,3.66 -2.4,6.68 -5.47,4.21 -17.28,-13.94 -41.52,-14.51 -62.72,-14.55 -20.81,-0.04 -41.71,3.35 -62.47,2.6 -4.65,-0.17 -4.67,-7.42 0,-7.25" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path602"></path>
                                    <path d="m 2536.97,3042.22 c 0.62,-3.11 1.96,-6.21 3.81,-8.78 1.05,-1.45 2.17,-2.86 3.49,-4.07 1.66,-1.52 3.81,-2.4 5.93,-3.1 l 1.35,-0.18 1.98,0.44 c 0.98,0.42 1.93,1.13 2.44,2.1 0.43,0.8 0.66,1.67 0.7,2.58 0.05,1.14 -0.59,2.87 -1.49,3.61 l -1.43,1.28 -0.63,0.67 -1.75,1.5 1.16,-0.9 c -1.27,1.01 -2.41,2.16 -3.41,3.45 l 0.88,-1.13 c -0.99,1.29 -1.81,2.69 -2.45,4.18 l 0.55,-1.3 -0.84,2.48 c -0.36,1.29 -1.3,2.51 -2.46,3.19 -1.14,0.67 -2.83,0.95 -4.11,0.53 -1.29,-0.42 -2.53,-1.21 -3.18,-2.45 -0.69,-1.32 -0.83,-2.63 -0.54,-4.1" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path604"></path>
                                    <path d="m 2366.34,3077.63 c 6.51,-2.63 13.91,-3.94 20.94,-3.21 3.48,0.37 6.94,1.04 10.27,2.14 3.68,1.22 6.6,2.97 9.52,5.51 1.66,1.44 -0.1,4.56 -2.2,3.77 -3.05,-1.15 -6.2,-2.23 -9.3,-3.23 -2.9,-0.94 -5.89,-1.58 -8.92,-1.88 -6.46,-0.62 -12.73,-0.13 -18.92,1.97 -3.26,1.1 -4.45,-3.84 -1.39,-5.07" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path606"></path>
                                    <path d="m 2371.6,2899.53 c 8.51,4.14 17.96,5.91 27.39,5.4 4.59,-0.24 9.17,-1.07 13.6,-2.31 2.29,-0.65 4.53,-1.47 6.77,-2.29 2.04,-0.74 4.26,-1.97 6.48,-1.69 1.69,0.2 2.5,1.61 1.83,3.17 -1.81,4.2 -8.78,6.28 -12.75,7.57 -5.14,1.67 -10.53,2.51 -15.93,2.69 -10.64,0.35 -21.21,-2.06 -30.68,-6.91 -3.75,-1.93 -0.45,-7.45 3.29,-5.63" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path608"></path>
                                    <path d="m 2388.64,2937.67 c 10.87,-0.92 21.99,0.92 32.04,5.1 5.36,2.23 10.04,5.07 14.6,8.65 2.07,1.62 4.08,3.35 5.91,5.24 2.07,2.12 3.38,4.67 4.67,7.32 1.52,3.16 -1.76,7.4 -5.18,5.18 -1.99,-1.3 -4.18,-2.33 -6.05,-3.79 -1.9,-1.47 -3.82,-2.88 -5.86,-4.15 -3.88,-2.41 -8.13,-4.53 -12.34,-6.14 -9.14,-3.49 -18.07,-4.67 -27.79,-3.64 -3.7,0.4 -6.88,-3.45 -6.88,-6.88 0,-3.99 3.16,-6.58 6.88,-6.89" style={{fill:"#d72e25", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path610"></path>
                                    <path d="m 2465.25,2976.12 c 3.68,4.42 7.34,8.84 11.01,13.25 0.79,0.96 1.34,1.96 1.34,3.25 0,1.13 -0.5,2.47 -1.34,3.24 -0.88,0.81 -2.03,1.41 -3.25,1.35 -1.15,-0.05 -2.48,-0.42 -3.24,-1.35 -3.68,-4.41 -7.34,-8.83 -11.01,-13.24 -0.79,-0.96 -1.34,-1.96 -1.34,-3.25 0,-1.13 0.5,-2.47 1.34,-3.25 0.88,-0.8 2.03,-1.4 3.25,-1.34 1.15,0.05 2.48,0.42 3.24,1.34" style={{fill:"#d72e25", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path612"></path>
                                    <path d="m 2314.68,3034.83 c 5.62,4.32 11.27,8.61 16.87,12.94 4.91,3.79 9.85,8.09 15.89,9.92 6.1,1.83 12.43,0.43 18.53,-0.6 4.92,-0.83 12.26,-2.79 16.66,0.38 1.75,1.26 1.88,4.54 -0.67,5.05 -2.98,0.6 -5.98,-0.17 -9.02,-0.06 -3.32,0.12 -6.58,0.68 -9.87,1.14 -6.11,0.87 -12.3,1.35 -18.2,-0.84 -5.65,-2.1 -10.42,-5.86 -15.03,-9.66 -5.96,-4.91 -11.8,-9.98 -17.7,-14.98 -1.79,-1.52 0.64,-4.74 2.54,-3.29" style={{fill: "#f26276", fillOpacity:1, fillRule: "nonzero", stroke:"none"}} id="path614"></path>
                                    <path d="m 2412.57,3060.78 c 1.98,0.53 3.96,0.81 6.02,0.81 1.05,0 2.09,-0.07 3.14,-0.19 0.84,-0.09 1.69,-0.19 2.81,-0.42 1.02,-0.22 2.03,-0.49 3.03,-0.81 1,-0.34 1.68,-0.61 2.45,-0.98 2.16,-1.05 4.18,-2.53 6.36,-2.85 1.75,-0.27 4.04,1.14 3.24,3.24 -1.02,2.63 -3.41,4.38 -5.93,5.52 -2.36,1.07 -4.8,1.91 -7.37,2.35 -5.1,0.87 -10.33,0.28 -15.11,-1.72 -1.28,-0.54 -2.2,-1.7 -1.8,-3.16 0.38,-1.35 1.82,-2.15 3.16,-1.79" style={{fill: "#f26276", fillOpacity:1, fillRule: "nonzero", stroke:"none"}} id="path616"></path>
                                    <path d="m 2612.82,2699.65 c 29.34,-86.82 50.46,-179.08 37.41,-269.8 -12.93,-89.94 -58.22,-171.34 -93.85,-254.94 -35.64,-83.59 -68.26,-180.06 -41.89,-267.01 -18.13,59.16 -38.77,122.08 -87.41,160.31 -41.31,32.46 -97.04,42.08 -138.33,74.56 -26.96,21.22 -45.97,50.82 -62.55,80.86 -33.93,61.49 -59.82,127.01 -85.61,192.33 -17.71,44.83 -35.6,90.4 -40.25,138.38 -4.65,47.98 5.62,99.55 38.19,135.09 -36.66,-7.26 -80.55,-33.69 -107.13,-59.96 -26.59,-26.27 -47.43,-57.72 -66.9,-89.61 -7.53,-12.34 -15,-24.92 -25.28,-35.07 -22.72,-22.44 -55.75,-30.03 -86.98,-36.67 -45.39,-217.01 2.36,-435.63 -9.57,-657 -4.69,-87.08 -17.93,-173.98 -13.7,-261.08 7.24,-148.83 64.77,-289.78 110.32,-431.64 37.15,-115.71 66.91,-234.4 118.28,-344.529 51.37,-110.133 127.48,-213.301 234.45,-270.973 38.27,-20.617 81.18,-35.238 124.56,-32.406 80.2,5.219 143.92,66.918 198.08,126.309 137.41,150.66 265.66,314.148 341.96,503.249 71.35,176.83 94.5,369.08 108.57,559.25 9.01,121.95 14.57,244.27 11.6,366.53 -1.33,54.24 -4.41,108.94 -18.79,161.25 -34.22,124.45 -129.09,130.89 -164.62,254.97 -17.34,60.57 -73.64,73.65 -155.7,170.44 -11.4,13.44 -36.99,31.43 -50.66,42.56 -7.89,6.44 -13.58,15.14 -20.63,22.5 -13.3,13.88 -34.44,20.19 -53.57,22.1" style={{fill:"#ffffff", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path618"></path>
                                    <path d="m 2514.67,1902.16 c 13.21,-39.99 18.04,-82.13 19.49,-124.06 0.72,-20.88 0.68,-41.8 0.61,-62.69 -0.04,-10.33 -0.1,-20.66 -0.16,-30.99 -0.05,-10.62 -0.81,-21.57 0.88,-32.08 0.4,-2.47 4.55,-2.45 4.97,0 1.82,10.5 1.17,21.46 1.24,32.08 0.07,11.11 0.15,22.2 0.19,33.3 0.1,20.91 -0.02,41.81 -1.01,62.69 -1.96,41.81 -7.42,83.45 -21.56,123.03 -1.03,2.89 -5.64,1.69 -4.65,-1.28" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path620"></path>
                                    <path d="m 2535.84,1611.22 c -12.28,-92.15 -18.84,-184.72 -22.08,-277.6 -3.22,-92.29 -3.35,-184.81 1.15,-277.06 2.56,-52.21 4.41,-104.869 10.4,-156.818 0.3,-2.594 4.28,-2.742 4.16,0 -2.08,46.117 -6.18,92.117 -7.74,138.278 -1.57,46.56 -2.6,93.16 -2.84,139.74 -0.5,92.38 2.1,184.77 8.15,276.95 3.42,52.18 7.08,104.38 11.38,156.51 0.13,1.68 -2.37,1.59 -2.58,0" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path622"></path>
                                    <path d="m 2343.91,2019.77 c 21.52,-100.97 25.14,-204.23 26.52,-307.09 1.42,-105.36 2.06,-210.72 3.69,-316.07 0.46,-29.85 0.92,-59.71 1.39,-89.56 0.46,-29.75 -0.46,-59.91 1.9,-89.57 0.23,-2.81 4.25,-2.86 4.41,0 1.44,26.41 0.01,53.16 -0.24,79.62 -0.25,26.53 -0.51,53.08 -0.76,79.61 -0.52,53.5 -1.24,106.98 -1.99,160.48 -1.47,104.21 -0.66,208.78 -7.88,312.8 -4,57.41 -11.49,114.31 -25.68,170.15 l -1.36,-0.37" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path624"></path>
                                    <path d="m 2371.31,1179.65 c 1.44,-52.93 2.28,-105.92 2.18,-158.87 -0.06,-26.479 -0.36,-52.971 -0.8,-79.448 -0.44,-26.383 -2.37,-53.09 -0.44,-79.434 0.13,-1.808 3.14,-2.527 3.42,-0.449 2.72,19.852 2.7,40.012 3.07,60.02 0.38,20.691 0.64,41.383 0.7,62.07 0.13,41.791 -0.1,83.591 -1.08,125.381 -0.55,23.57 -1.37,47.15 -2.32,70.73 -0.11,3.04 -4.82,3.06 -4.73,0" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path626"></path>
                                    <path d="m 2441.03,1666.87 c -4.46,-7.17 -6.13,-16.6 -2.93,-24.59 2.94,-7.37 9.92,-12.6 17.84,-13.26 8.83,-0.72 15.9,5.61 19.89,12.91 4.02,7.35 5.76,17.57 0.45,24.78 -2.49,3.39 -6.17,5.94 -10.29,6.87 -2.18,0.5 -4.35,0.6 -6.53,0.13 -2.17,-0.48 -4.68,-2.23 -5.08,-4.56 1.23,0.5 2.45,1 3.68,1.49 -1.57,0.91 -3.47,1.01 -4.83,-0.34 -1.3,-1.3 -1.39,-3.38 -0.28,-4.8 2.66,-3.45 7.44,-0.18 6.25,3.65 -1.03,-1.03 -2.04,-2.05 -3.07,-3.08 0.93,-0.23 1.6,-0.13 2.57,-0.08 l 1.52,0.05 0.67,0.12 0.8,0.05 2.04,-0.01 0.41,-0.09 1.02,-0.24 1.26,-0.45 c 1.27,-0.59 2.24,-1.26 3.08,-2.07 4.2,-4.11 3.54,-11.31 1.25,-16.52 -2.4,-5.48 -6.95,-11.42 -13.46,-11.59 -5.43,-0.14 -10.89,2.94 -13.65,7.62 -4,6.78 -2.75,15.31 1.05,21.88 1.37,2.37 -2.23,4.45 -3.66,2.13" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path628"></path>
                                    <path d="m 2445.49,1235.25 c -5.47,-7.13 -7.63,-17.32 -3.5,-25.6 3.8,-7.64 12.83,-12.62 21.25,-9.87 8.1,2.63 13.68,10.82 13.79,19.25 0.12,8.98 -5.39,17.09 -12.59,22.04 -3.45,2.38 -7.84,3.86 -12.07,3.45 -4.61,-0.45 -9.93,-3.45 -8.68,-8.88 0.42,-1.82 3.02,-3.09 4.64,-1.88 l 1.68,1.31 0.16,0.26 0.6,0.42 2.22,0.82 c 2.51,0.14 4.48,-0.42 6.59,-1.7 4.97,-3 9.23,-8.3 9.87,-14.23 0.59,-5.4 -2.24,-11.07 -7.18,-13.52 -4.98,-2.47 -10.93,0.19 -14.04,4.39 -4.81,6.51 -2.77,15.09 1.71,21.15 0.84,1.12 0.18,2.86 -0.92,3.52 -1.31,0.79 -2.68,0.18 -3.53,-0.93" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path630"></path>
                                    <path d="m 2518.39,1998.27 c 10.41,27.87 21.79,55.41 34.19,82.46 11.28,24.6 22.56,50.73 38.14,72.97 7.23,10.32 16.7,19.85 29.13,23.41 12.62,3.61 26.28,0.67 37.67,-5.37 23.86,-12.67 39.2,-38.35 53.67,-60.2 8.14,-12.28 15.91,-24.82 22.3,-38.12 6.84,-14.28 11.3,-29.14 14.59,-44.6 0.55,-2.63 4.94,-2.09 4.73,0.64 -2.15,28.91 -16.58,56.23 -31.67,80.39 -14.31,22.93 -30.16,48.75 -53,64.11 -22.01,14.8 -50.27,16.31 -70.6,-2.04 -9.06,-8.18 -15.75,-18.79 -21.63,-29.39 -7.72,-13.91 -14.81,-28.19 -21.67,-42.54 -15.62,-32.63 -29.23,-66.07 -40.67,-100.39 -1.02,-3.08 3.72,-4.3 4.82,-1.33" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path632"></path>
                                    <path d="m 2808.17,2476.82 c 40.48,-113.48 38.9,-241.39 -3.14,-354.18 -11.98,-32.14 -26.78,-62.94 -45.07,-91.98 -1.81,-2.87 2.7,-5.45 4.53,-2.64 66.88,102.64 93.32,229.17 74.36,350.14 -5.36,34.22 -14.47,67.4 -27.07,99.65 -0.86,2.21 -4.43,1.3 -3.61,-0.99" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path634"></path>
                                    <path d="m 2671,2602.49 c 38.75,-95.87 39.68,-206.29 2.49,-302.76 -10.62,-27.53 -24.51,-53.69 -41.03,-78.11 -2.44,-3.61 3.37,-6.94 5.81,-3.41 59.98,86.68 82.66,198.77 62.55,302.12 -5.61,28.82 -14.72,56.69 -26.93,83.38 -0.75,1.6 -3.57,0.45 -2.89,-1.22" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path636"></path>
                                    <path d="m 2471.7,1995.96 c -21.55,16.29 -36.85,38.89 -56.5,57.16 -9.4,8.74 -19.78,16.55 -31.44,21.99 -14.07,6.56 -28.62,7.75 -43.59,10.92 -17.78,3.76 -35.11,9.95 -51.36,18.04 -15.54,7.76 -29.28,20.15 -45.86,25.58 -32.88,10.76 -64.21,-15.11 -84.34,-38.2 -24.35,-27.96 -43.38,-63.74 -48.44,-100.78 -0.42,-3.07 3.99,-4.54 4.81,-1.32 8.29,32.62 20.62,63.2 41.56,89.88 19.25,24.52 51.52,56.25 85.82,44.24 8.02,-2.81 15.08,-7.68 22.12,-12.3 7.45,-4.89 15.19,-9.3 23.22,-13.19 14.3,-6.94 29.35,-12.5 44.81,-16.28 14.57,-3.57 29.67,-4.16 43.73,-9.71 12.33,-4.86 23.31,-12.56 33.1,-21.4 20.76,-18.77 37.42,-41.72 60.26,-58.22 2.19,-1.58 4.2,2 2.1,3.59" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path638"></path>
                                    <path d="m 1970.5,2481.55 c 11.03,-72.97 22.08,-145.94 33.88,-218.8 5.9,-36.4 11.8,-72.8 17.7,-109.2 5.16,-31.81 9.01,-64.24 17.03,-95.5 7.3,-28.43 19.59,-56.64 44.36,-73.96 2.91,-2.04 6.62,2.7 3.82,4.96 -21.6,17.57 -33.09,42.87 -39.99,69.31 -7.78,29.83 -11.46,60.82 -16.49,91.19 -11.75,71.09 -23.52,142.17 -35.67,213.18 -6.86,39.98 -13.92,79.91 -20.96,119.84 -0.43,2.44 -4.05,1.38 -3.68,-1.02" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path640"></path>
                                    <path d="m 2062.7,2585.02 c 3.24,-45.28 11.68,-90.1 25.44,-133.38 6.8,-21.38 14.87,-42.35 24.04,-62.84 4.53,-10.14 9.36,-20.14 14.48,-29.99 5.1,-9.82 10.03,-20.59 17.69,-28.68 1,-1.07 2.97,0.03 2.5,1.45 -3.31,9.93 -9.37,18.91 -14.27,28.12 -5.23,9.79 -10.16,19.74 -14.8,29.82 -9.49,20.65 -17.67,41.88 -24.59,63.52 -13.7,42.82 -22.44,87.17 -25.92,131.98 -0.23,2.92 -4.79,2.95 -4.57,0" style={{fill:"#d8d5d3", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path642"></path>
                                    <path d="M 3426.69,-27.6211 C 3287.36,-106.5 3196.8,-53.9609 3037.68,-71.8008 2482.56,-134 2025.97,-107.148 1477.02,-3.82031 c 10.09,42.58201 20.19,85.16011 30.27,127.74231 4.81,20.269 11.34,37.387 15.57,57.789 -32.97,15.437 -172.21,14.43 -199.83,38.129 -11.29,9.691 -17.99,23.539 -24.23,37.039 -53.95,116.851 -96.12,238.723 -138.21,360.34 -23.87,68.961 -47.81,138.211 -61.73,209.863 -32.95,169.648 -6.04,344.278 18.54,515.338 -19.49,43.92 -27.6,92.84 -23.3,140.7 2.33,25.93 8.22,51.95 4.59,77.72 -5.72,40.53 -34.41,75.92 -35.76,116.83 -1.1,33.66 16.58,65.1 20.67,98.53 4.13,33.69 -5.68,67.32 -10.07,100.98 -4.96,37.99 -2.97,76.86 5.84,114.15 9.45,39.96 26.54,77.71 37.58,117.26 11.64,41.71 16.49,85.16 29.45,126.47 17.17,54.77 48.71,104.97 90.59,144.22 19.02,17.81 40.48,33.6 64.99,42.43 44.75,16.12 94,7.59 141.55,6.38 41.15,-1.06 82.21,3.55 123.12,8.15 91.55,10.29 183.12,20.59 274.67,30.88 28.66,3.22 44.7,16.18 69.31,31.22 22.18,-94.05 28.91,-189.5 40.75,-285.4 53,-429.28 178.41,-856.36 236.13,-1285.03 0.73,-5.398 101.96,5.531 148.3,9.399 115.41,9.671 231.07,19.339 346.85,16.75 0,0 87.23,594.941 109.04,794.291 21.81,199.35 87.22,669.68 77.87,738.2 74.08,-16.9 137.21,-73.37 209.36,-97.2 33.69,-11.13 69.2,-15.47 104.52,-18.81 103.31,-9.78 207.38,-11.46 310.95,-5.01 18.07,1.12 36.9,2.37 53.6,-4.59 14.17,-5.91 25.38,-17.2 35.14,-29.05 27.44,-33.28 46.56,-73.35 55.17,-115.61 5.64,-27.66 6.98,-56.64 18.62,-82.35 8.5,-18.78 22.26,-35.21 27.88,-55.04 8.04,-28.36 -1.68,-59.89 8.32,-87.62 5.18,-14.42 15.29,-26.52 21.93,-40.34 32.75,-68.19 -26.05,-153.61 3.81,-223.12 10.76,-25.07 32.9,-48.48 27.55,-75.22 -3.81,-19.04 -21.4,-34.72 -19.71,-54.05 0.85,-9.84 6.65,-18.41 10.62,-27.45 9.48,-21.52 8.34,-47.42 -2.96,-68.03 9.67,-88.85 116.53,-153.02 124.44,-242.04 3.98,-44.77 -15.79,-92.18 1.71,-133.58 8.64,-20.47 25.31,-36.25 38.37,-54.22 32.56,-44.77 42.13,-103.111 36.87,-158.22 -5.25,-55.109 -24.1,-107.93 -44.01,-159.59 -45.2,-117.262 -99.28,-235.719 -192.51,-319.98 -15.83,-14.309 -33.2,-27.778 -53.6,-34 -15.7,-4.801 -32.37,-5.039 -48.77,-5.25 -61.78,-0.789 -186.35,-0.059 -248.13,-0.84 4.59,-88.879 79.57,-391.48844 77.95,-422.9611" style={{fill:"#cd3e37", fillOpacity:1, fillRule: "nonzero", stroke: "none"}} id="path644"></path>
                                    <path d="m 2176.92,678.941 c -73.85,31.551 -151.4,83.43 -227.56,57.93 -57.58,-19.289 -125.67,-2.172 -167.27,42.07 -62.93,66.911 -55.82,175.75 -116.97,244.299 -35.33,4.14 -66.98,-20.53 -93.17,-44.599 -35.8,-32.903 -70.37,-68.02 -95.07,-109.903 -13.34,-22.578 -24.28,-47.687 -44.75,-64.058 -20.48,-16.379 -54.87,-19.469 -70.25,1.761 -1.99,2.731 -3.63,6.008 -3.2,9.36 0.48,3.808 3.45,6.75 6.16,9.469 12.8,12.859 23.38,27.859 31.61,44.039 9.92,19.543 16.35,40.64 24.77,60.89 19.49,46.883 53.19,93.611 82.79,134.871 -59.57,-17.09 -112.6,-56.01 -146.79,-107.699 -21.62,-32.68 -49.46,-65.512 -76.88,-93.512 -27.43,-28 -61.64,-47.8 -92.34,-23.418 -3.75,2.969 -7.38,7.168 -6.8,11.911 0.39,3.269 2.68,5.918 4.86,8.359 54.68,61.34 103.93,127.488 147.02,197.439 10.78,17.52 21.33,35.47 35.91,49.97 15.02,14.94 33.7,25.58 52.31,35.7 21.15,11.5 45.91,21.8 67.53,32.4 -31.17,8.3 -64.05,16.64 -95.26,8.43 -16.55,-4.36 -31.54,-13.14 -46.29,-21.83 -32.28,-18.99 -65.33,-38.66 -88.51,-68.07 -12.27,-15.58 -21.37,-33.42 -33.29,-49.27 -11.92,-15.85 -27.66,-30.16 -47.07,-34.23 -19.4,-4.08 -43.03,3.28 -49.22,22.12 40.76,45.36 56.44,109.46 99.01,153.12 24.93,25.56 57.47,42.38 83.91,66.37 20.17,18.31 38.25,41.65 64.67,48.32 13.83,3.49 28.36,1.88 42.53,0.24 37.42,-4.32 74.53,-6.24 111.95,-10.56 -4.99,27.07 -14.08,53.38 -26.86,77.76 -27.35,52.2 -70.56,94.09 -105.02,141.91 -14.7,20.4 -28.07,42.51 -33.16,67.14 -5.1,24.62 3.22,46.43 20.38,64.82 51.7,-60.15 103.41,-120.29 155.11,-180.45 16.41,-19.08 32.84,-38.2 47.33,-58.78 28.56,-40.52 49.17,-86.07 66.88,-132.37 31.2,0.1 57.99,-15.11 79.21,-37.98 21.22,-22.87 36.51,-50.47 54.15,-76.21 43.3,-63.21 100.72,-115.22 157.58,-166.579 17.47,-15.781 35.08,-31.68 55.34,-43.691 42.31,-25.098 93.03,-31.5 142.2,-32.961 15.15,-82.828 19.64,-151.328 32.52,-234.528" style={{fill:"#f89f83", fillOpacity:1, fillRule: "nonzero", stroke:"none"}} id="path646"></path>
                                    <path d="m 3158.31,984.82 c -4.42,7.84 2.27,16.94 6.99,24.58 10.5,16.99 11.91,37.87 18.18,56.82 9.23,27.93 28.79,51.06 47.9,73.42 35.56,41.61 15.35,104.34 33,156.17 22.05,64.77 77.61,111.08 122.12,163.05 29.75,34.72 55.23,73.1 75.7,113.99 23.99,-3.47 38.07,-33.85 34.28,-57.8 -3.78,-23.96 -19.26,-44.11 -33.21,-63.95 -30.25,-43.02 -55.44,-89.62 -74.88,-138.49 17.28,10.96 28.49,16.82 45.77,27.79 -1.57,-0.87 -3.14,-1.73 -4.73,-2.6 69.33,6.64 143.51,7.38 212.62,-1.18 16.37,-2.03 32.28,-3.2 47.8,-8.75 29.29,-10.45 59.22,-19.07 89.58,-25.8 -9.37,-29.84 -40.36,-44.14 -71.57,-46.12 -31.21,-1.99 -61.71,8.52 -91.21,18.88 -51.53,-5.62 -100.94,-10.48 -151.04,-23.75 -16.34,-4.31 -21.22,-19.01 -29.31,-33.85 21.8,4.41 38.55,10.7 59.61,17.86 55.2,18.76 118.46,-8.73 176.46,-14.64 41.44,-4.22 83.38,-2.83 124.51,3.72 6.89,-22.84 -5.83,-46.37 -25.89,-59.26 -20.08,-12.89 -45.03,-15.58 -68.88,-14.95 -23.85,0.64 -47.68,4.24 -71.48,2.54 -6.2,1.99 -9.91,-1.51 -16.33,-2.61 -41.27,-7.01 -82.4,-14.92 -123.31,-23.74 -28.41,-6.12 -50.28,-29.27 -72.29,-48.23 21.45,8.64 37.89,14.19 59.34,22.83 17.08,6.88 34.37,13.82 52.62,16.31 17.09,2.33 34.47,0.68 51.62,-1.2 51.45,-5.65 102.67,-13.33 153.51,-23.04 0.9,-28.03 -26.66,-44.42 -54.59,-46.9 -27.93,-2.47 -55.82,6.03 -83.84,5.04 -37.33,-1.32 -71.8,-19.19 -107.88,-28.87 -38.12,-10.23 -78.01,-11.29 -117.38,-14.17 -77.32,-5.65 -138.89,-3.06 -213.79,-23.1" style={{fill:"#f89f83", fillOpacity:1, fillRule: "nonzero", stroke:"none"}} id="path648"></path>
                                    <path d="m 1507.32,1174.4 c 10.19,5.37 20.62,10.25 31.3,14.53 5.18,2.08 10.4,4.02 15.68,5.84 2.55,0.87 5.11,1.68 7.65,2.59 2.44,0.88 5.09,1.6 7.03,3.37 0.81,0.73 0.46,2.39 -0.68,2.57 -4.96,0.79 -10.74,-1.97 -15.37,-3.57 -5.64,-1.95 -11.21,-4.05 -16.74,-6.29 -10.71,-4.36 -21.2,-9.25 -31.42,-14.65 -2.89,-1.52 -0.34,-5.91 2.55,-4.39" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path650"></path>
                                    <path d="m 1512.92,1074.3 c 21.53,16.07 43.02,32.22 64.76,48.02 10.54,7.67 21.12,15.3 31.73,22.88 5.51,3.93 10.98,7.97 16.62,11.73 6.27,4.18 11.88,5.93 19.34,6.6 1.64,0.13 2.81,2.64 0.95,3.48 -10.37,4.64 -21.56,-4.6 -29.57,-10.24 -12.32,-8.7 -24.57,-17.48 -36.73,-26.4 -23.49,-17.23 -46.81,-34.7 -69.62,-52.81 -1.83,-1.46 0.63,-4.68 2.52,-3.26" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path652"></path>
                                    <path d="m 1660.1,1178.69 c 7.21,-1.75 13.68,0.93 20.47,3.15 7.95,2.58 15.82,2.53 23.78,-0.04 7.64,-2.47 14.51,-6.9 20.61,-12.05 5.79,-4.91 10.63,-11.21 17.09,-15.22 1.6,-0.99 3.37,0.95 2.51,2.51 -3.75,6.78 -10.23,12.28 -16.14,17.17 -6.04,4.99 -12.61,9.26 -19.97,11.97 -6.93,2.55 -14.43,3.62 -21.75,2.51 -8.39,-1.29 -16.64,-7.32 -25.32,-5.35 -3.02,0.69 -4.31,-3.92 -1.28,-4.65" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path654"></path>
                                    <path d="m 1632.55,1223.13 c 10.26,6.78 22.07,11.01 34.33,12.2 6.05,0.58 12.18,0.47 18.22,-0.36 5.67,-0.79 11.16,-3.1 16.81,-3.62 2.14,-0.2 2.48,2.71 1.01,3.72 -4.83,3.32 -12.03,4.13 -17.72,4.75 -6.47,0.72 -12.99,0.55 -19.43,-0.33 -12.52,-1.71 -24.49,-6.36 -34.81,-13.62 -1.64,-1.15 -0.13,-3.87 1.59,-2.74" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path656"></path>
                                    <path d="m 1528.94,1285.7 c 17.55,-5.37 35.09,-10.83 52.64,-16.23 8.62,-2.65 17.27,-5.17 25.9,-7.77 5.92,-1.78 19.37,-3.33 21.25,-10.49 0.7,-2.66 4.37,-1.45 4.01,1.11 -0.89,6.42 -6.88,9.04 -12.41,10.8 -9.85,3.13 -19.83,5.92 -29.74,8.86 -20.16,5.98 -40.46,11.48 -60.73,17.09 -2.17,0.61 -3.07,-2.71 -0.92,-3.37" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path658"></path>
                                    <path d="m 1655.5,1040.05 c 7.99,8.07 15.21,16.85 21.63,26.21 1.28,1.86 -1.76,3.62 -3.01,1.77 -6.17,-9.19 -13.15,-17.8 -20.85,-25.74 -1.41,-1.47 0.8,-3.7 2.23,-2.24" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path660"></path>
                                    <path d="m 1672.51,1037.48 c 6.32,2.73 12.45,5.85 18.35,9.38 5.86,3.5 11.66,7.41 16.24,12.49 1.22,1.34 -0.31,3.46 -1.96,2.54 -5.89,-3.28 -11.35,-7.28 -17.1,-10.83 -5.76,-3.54 -11.75,-6.7 -17.92,-9.49 -2.8,-1.26 -0.36,-5.28 2.39,-4.09" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path662"></path>
                                    <path d="m 1376.96,1106.55 c 1.47,-3.25 3.46,-6.25 5.82,-8.91 1.23,-1.39 2.55,-2.63 4.09,-3.68 1.4,-0.97 2.9,-1.83 4.44,-2.57 2.05,-1 3.55,1.69 1.76,3.01 -1.25,0.92 -2.42,1.96 -3.5,3.06 -1.15,1.16 -2.34,2.31 -3.44,3.53 l -0.76,0.89 -0.36,0.45 -0.14,0.17 -1.41,2.02 c -0.91,1.41 -1.71,2.89 -2.41,4.43 -0.51,1.13 -2.24,1.49 -3.24,0.84 -1.17,-0.76 -1.39,-2.03 -0.85,-3.24" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path664"></path>
                                    <path d="m 1296.66,987.852 c 1.51,-2.422 3.36,-4.672 5.5,-6.571 1.13,-1.011 2.32,-1.941 3.62,-2.722 1.28,-0.75 2.78,-1.18 4.22,-1.547 0.91,-0.231 2.03,0.148 2.48,1.019 l -0.34,2.66 -1.46,1.219 -0.63,0.602 -0.54,0.48 -0.43,0.328 0.3,-0.23 c -0.96,0.84 -2.01,1.59 -2.94,2.469 -0.92,0.863 -1.78,1.773 -2.57,2.75 l -0.29,0.351 0.05,-0.051 -0.52,0.731 -1.07,1.66 c -0.83,1.398 -2.84,2.039 -4.27,1.121 -1.38,-0.891 -2.04,-2.789 -1.11,-4.269" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path666"></path>
                                    <path d="m 1363.1,1287.48 c 1.03,-3.3 2.07,-6.6 3.1,-9.9 1.06,-3.37 2.29,-6.91 4.38,-9.79 1.32,-1.82 4.25,-1.26 4.34,1.17 0.13,3.55 -0.79,7.15 -1.79,10.52 -0.99,3.32 -1.99,6.63 -2.97,9.95 -0.55,1.83 -2.6,3.18 -4.51,2.55 -1.83,-0.58 -3.17,-2.54 -2.55,-4.5" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path668"></path>
                                    <path d="m 1232.71,1179.42 c 2.14,-3.57 4.29,-7.15 6.44,-10.74 0.8,-1.32 2.69,-1.92 4.04,-1.05 1.33,0.86 1.91,2.61 1.06,4.03 -2.15,3.58 -4.3,7.17 -6.45,10.75 -0.79,1.32 -2.69,1.93 -4.04,1.06 -1.33,-0.86 -1.91,-2.62 -1.05,-4.05" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path670"></path>
                                    <path d="m 1495.32,1503.24 c -1.43,-1.83 -2.88,-3.67 -4.31,-5.51 -0.8,-1.02 -1.54,-2.09 -2.25,-3.17 l -0.93,-1.52 -0.71,-1.65 0.31,-2.42 2.42,-0.31 c 1.03,0.75 2.04,1.47 2.93,2.39 l 2.36,2.55 c 1.47,1.81 2.95,3.61 4.41,5.41 l 0.88,2.12 -0.88,2.11 -2.11,0.88 -2.12,-0.88" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path672"></path>
                                    <path d="m 1580.76,1395.86 -1.02,-1.22 -0.72,-0.32 -0.72,-0.5 1.81,0.23 c -1.02,0.43 -2.38,-0.01 -3.31,-0.54 -0.99,-0.59 -1.58,-1.62 -2.23,-2.51 -0.83,-1.18 -1.67,-2.34 -2.5,-3.5 -0.85,-1.18 -1.61,-2.33 -2.27,-3.63 -0.71,-1.44 -1.27,-2.87 -1.78,-4.39 -0.58,-1.72 1.69,-3.65 3.23,-2.49 1.26,0.95 2.46,1.89 3.58,2.99 1.21,1.19 2.2,2.49 3.2,3.85 0.88,1.2 1.76,2.4 2.63,3.6 0.72,0.98 1.24,1.8 1.37,3.07 0.11,1.13 -0.08,2.08 -0.89,2.95 l 0.61,-2.29 0.29,1.13 0.1,1.05 -0.21,-0.77 0.99,1.62 c 0.78,1.31 -1.12,2.87 -2.16,1.67" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path674"></path>
                                    <path d="m 1424.74,930.781 c 3.4,-2.351 7.25,-4.121 11.26,-5.199 4,-1.094 8.55,-1.34 12.48,0.117 1.53,0.582 1.85,3.02 0,3.461 -3.62,0.84 -7.26,1.379 -10.85,2.352 -3.58,0.968 -6.69,2.449 -9.79,4.59 -1.38,0.937 -3.42,0.257 -4.22,-1.114 -0.89,-1.519 -0.26,-3.258 1.12,-4.207" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path676"></path>
                                    <path d="m 1494.15,1022.44 c 0.63,0.09 1.62,0.2 2.54,0.27 l 2.66,0.16 c 2,0.07 4,0.03 5.99,-0.11 1.98,-0.14 3.22,-0.3 5.17,-0.66 2.14,-0.39 4.21,-0.62 6.38,-0.65 3.01,-0.04 4.03,4.08 1.52,5.58 -1.96,1.17 -3.88,1.93 -6.13,2.33 -2.3,0.41 -4.62,0.7 -6.94,0.85 -4.41,0.31 -8.79,0.01 -13.16,-0.63 -1.92,-0.29 -3.15,-2.81 -2.58,-4.56 0.68,-2.1 2.49,-2.88 4.55,-2.58" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path678"></path>
                                    <path d="m 3368.1,1298.15 c -19.75,-14.46 -38.98,-29.82 -54.53,-48.88 -15.78,-19.34 -25.3,-42.62 -40.67,-62.28 -1.17,-1.5 0.62,-3.39 2.12,-2.12 8.88,7.5 14.66,18.13 20.22,28.15 6.13,11.03 12.24,21.94 20.13,31.83 15.45,19.4 34.92,35.29 54.45,50.36 1.7,1.31 0.07,4.26 -1.72,2.94" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path680"></path>
                                    <path d="m 3424.67,1213.38 c -23.17,-11.42 -44.66,-25.67 -64.3,-42.44 -18.84,-16.1 -34.41,-38.32 -57.22,-49.07 -2.99,-1.41 -0.38,-5.86 2.61,-4.46 22.06,10.4 37.15,31.21 55.05,47.08 20,17.74 42.32,32.84 65.92,45.37 2.32,1.24 0.27,4.67 -2.06,3.52" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path682"></path>
                                    <path d="m 3279.77,1100.8 c -41.55,-6.34 -70.92,-43.74 -90.83,-77.74 -1.65,-2.8 2.39,-4.94 4.23,-2.47 12.41,16.52 23.67,34.06 38.69,48.42 13.8,13.22 30.25,23.47 49.02,27.78 2.66,0.61 1.47,4.4 -1.11,4.01" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path684"></path>
                                    <path d="m 3381.63,1060.9 c -15.69,-4.95 -31.49,-10.1 -46.19,-17.62 -13.84,-7.08 -27.88,-16.82 -35.86,-30.51 -1.12,-1.93 1.71,-4.31 3.2,-2.47 9.97,12.34 21.29,22.11 35.33,29.63 14.1,7.57 29.24,12.81 44.39,17.84 1.96,0.66 1.14,3.76 -0.87,3.13" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path686"></path>
                                    <path d="m 3381.86,1443.01 c 2.5,-1.39 5,-2.77 7.51,-4.14 1.32,-0.74 2.61,-1.46 4.02,-2.03 1.34,-0.55 2.63,-0.97 4.03,-1.32 1.35,-0.33 2.4,1.35 1.38,2.36 -1.09,1.08 -2.2,2.01 -3.43,2.92 -1.14,0.83 -2.36,1.49 -3.59,2.2 -2.48,1.41 -4.96,2.83 -7.45,4.25 -1.12,0.63 -2.74,0.29 -3.35,-0.89 -0.62,-1.15 -0.33,-2.7 0.88,-3.35" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path688"></path>
                                    <path d="m 3288.56,1333.39 c 4.26,-2.23 8.52,-4.46 12.78,-6.69 1.17,-0.62 2.81,-0.34 3.47,0.91 0.63,1.19 0.33,2.78 -0.91,3.47 -4.2,2.33 -8.4,4.65 -12.61,6.98 -1.24,0.68 -3.01,0.34 -3.7,-0.98 -0.66,-1.24 -0.36,-3 0.97,-3.69" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path690"></path>
                                    <path d="m 3429.34,1329.48 c 1.39,-3.24 3.16,-6.31 5.29,-9.13 1.12,-1.49 2.28,-2.96 3.65,-4.24 1.4,-1.3 2.84,-2.38 4.51,-3.31 l 2.32,0.46 -0.15,2.36 -1.47,2.01 -1.61,1.88 c -0.92,1.15 -1.99,2.45 -2.89,3.71 -0.95,1.35 -1.83,2.75 -2.62,4.19 l -1.14,2.2 -0.51,1.12 -0.23,0.51 -0.14,0.35 c -0.61,1.53 -2.06,2.48 -3.71,1.79 -1.64,-0.69 -1.96,-2.38 -1.3,-3.9" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path692"></path>
                                    <path d="m 3631.54,1331.73 c 0.77,1.15 0.62,2.66 -0.19,3.75 l -1.19,1.09 -0.48,0.21 -0.92,0.42 -1.05,0.17 0.49,-0.08 h -1.6 l -2.07,-1.47 c -0.85,-1.1 -1.11,-2.38 -1.24,-3.74 -0.09,-1.03 -0.04,-2.07 -0.04,-3.11 -0.01,-1.26 -0.07,-2.52 0.01,-3.78 0.06,-1.17 0.17,-2.32 0.26,-3.48 0.1,-1.41 0.44,-2.7 0.82,-4.04 0.55,-2.05 3.62,-2.07 4.17,0 l 0.58,2.19 c 0.21,0.91 0.21,1.87 0.28,2.8 0.09,1.48 0.18,2.94 0.16,4.42 -0.02,1.44 -0.06,2.88 -0.06,4.33 l 0.04,0.9 v -0.16 l 0.06,0.21 -0.07,-0.14 -0.09,-0.13 0.92,1.63 -0.74,-1.27 -0.67,-0.39 c -1.31,0.32 -1.7,0.34 -1.18,0.06 l -0.51,2.13 c -0.69,-1.12 -0.28,-2.8 0.9,-3.42 1.25,-0.66 2.63,-0.26 3.41,0.9" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path694"></path>
                                    <path d="m 3539.68,1235.97 c 0.05,-4.34 -0.14,-8.77 0.9,-13.01 0.43,-1.75 3.1,-1.75 3.53,0 1.04,4.24 0.85,8.67 0.89,13.01 0.02,1.38 -1.23,2.72 -2.66,2.65 -1.42,-0.06 -2.67,-1.17 -2.66,-2.65" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path696"></path>
                                    <path d="m 3644.83,1215.49 c 0.41,-2.41 0.82,-4.83 1.23,-7.24 0.22,-1.21 0.43,-2.39 0.79,-3.57 0.36,-1.24 0.9,-2.38 1.46,-3.54 0.6,-1.25 2.92,-1.03 3.12,0.4 0.17,1.28 0.38,2.52 0.36,3.81 -0.02,1.43 -0.23,2.81 -0.41,4.22 -0.34,2.48 -0.68,4.96 -1.02,7.44 -0.19,1.5 -2.19,2.43 -3.52,2 -1.61,-0.51 -2.28,-1.94 -2.01,-3.52" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path698"></path>
                                    <path d="m 3503.54,1103.6 c -0.22,-5.52 1.36,-10.97 4.59,-15.48 0.73,-1.03 2.13,-1.62 3.3,-0.86 1.11,0.71 1.52,2.11 0.86,3.3 l -0.89,1.74 -0.14,0.3 -0.35,0.91 c -0.4,1.12 -0.7,2.26 -0.96,3.42 l -0.34,1.81 -0.03,0.21 -0.09,0.97 c -0.09,1.23 -0.07,2.46 0.03,3.68 0.14,1.58 -1.46,3.07 -2.99,3 -1.68,-0.08 -2.93,-1.32 -2.99,-3" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path700"></path>
                                    <path d="m 3602.34,1105.65 c 3.05,-6.58 5.7,-13.71 10.41,-19.32 l 2.06,-0.27 0.79,1.93 c -0.58,3.71 -1.92,7.3 -3.45,10.72 -1.5,3.35 -2.99,6.7 -4.49,10.05 -0.66,1.47 -2.92,1.93 -4.21,1.1 -1.51,-0.97 -1.83,-2.64 -1.11,-4.21" style={{fill: "#de5d3e", fillOpacity: 1, fillRule: "nonzero", stroke:"none"}} id="path702"></path>
                                    <path d="m 2145.43,908.879 c -1,-22.688 3.01,-46.027 5.92,-68.469 4.81,-37.012 10.24,-73.941 15.91,-110.828 12.25,-79.801 25.58,-159.523 41.23,-238.742 3.13,-15.879 6.37,-31.738 9.97,-47.508 1.36,-5.992 2.6,-12.07 4.43,-17.934 1.34,-4.296 3.43,-8.359 4.81,-12.566 0.89,-2.73 5.23,-1.562 4.32,1.188 -1.14,3.492 -1.45,7.71 -2.21,11.332 -1.05,5.058 -2.35,10.058 -3.52,15.097 -3.15,13.391 -5.97,26.852 -8.7,40.332 -7.39,36.461 -14.05,73.059 -20.46,109.688 -13.87,79.16 -26.88,158.531 -37.88,238.152 -3.69,26.711 -7.12,53.469 -10.16,80.258 -0.26,2.293 -3.55,2.41 -3.66,0" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path704"></path>
                                    <path d="m 2225.64,406.141 c 76.3,18 153.77,30.32 231.46,40.531 76.41,10.047 153.13,19.719 229.92,26.269 77.14,6.579 154.65,6.981 230.54,-10.101 37.51,-8.442 74.32,-19.699 111.81,-28.18 35,-7.91 70.41,-14.308 105.84,-19.89 79.39,-12.5 160.06,-20.54 240.5,-17.7 4.69,0.172 4.72,7.43 0,7.321 -72.9,-1.672 -145.92,4.418 -218.01,14.91 -35.59,5.168 -71.01,11.449 -106.24,18.711 -37.3,7.679 -73.87,18.117 -110.83,27.238 -37.14,9.172 -74.64,15.609 -112.85,18.039 -38.78,2.461 -77.71,1.481 -116.45,-1.219 -76.89,-5.351 -153.64,-15.531 -230.08,-25.238 -86.38,-10.98 -172.55,-24.301 -257.29,-44.59 -3.95,-0.953 -2.28,-7.031 1.68,-6.101" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path706"></path>
                                    <path d="m 1552.54,192.969 c 67.72,-1.879 134.68,5.742 200.6,21.121 58.06,13.562 114.99,31.672 173.44,43.59 73.53,14.98 148.07,18.691 222.88,13.75 85.33,-5.649 170.32,-18.129 255.2,-28.282 85.54,-10.226 171.08,-20.398 256.64,-30.468 10.74,-1.258 21.49,-2.528 32.24,-3.77 4.78,-0.558 4.71,6.899 0,7.481 -85.52,10.531 -171.09,20.75 -256.65,30.968 -85.06,10.172 -170.13,21.95 -255.49,29.34 -76.73,6.641 -153.48,6.16 -229.51,-7.008 -59.44,-10.312 -117.06,-28.011 -175.37,-43.101 -63.81,-16.5 -128.51,-27.371 -194.56,-28.219 -9.81,-0.129 -19.62,-0.051 -29.42,0.168 -3.59,0.09 -3.58,-5.457 0,-5.57" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path708"></path>
                                    <path d="m 2696.18,215.332 c 24.61,36.789 40.8,78.629 47.05,122.449 3.37,23.539 4.34,47.328 7.36,70.899 3.15,24.761 9.46,48.629 16.96,72.39 1.35,4.239 -5.07,5.86 -6.57,1.821 -8.18,-22.012 -13.25,-45.262 -16.41,-68.5 -3.22,-23.551 -4.07,-47.352 -7.02,-70.942 -5.61,-44.711 -21.36,-87.679 -45.96,-125.429 -1.88,-2.879 2.7,-5.52 4.59,-2.688" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path710"></path>
                                    <path d="m 2279.23,527.629 c -9.93,-6.789 -14.92,-19.289 -13.43,-31.141 1.52,-12.148 10.05,-22.468 22.46,-24.418 11.57,-1.832 24.04,2.52 30.81,12.352 7.56,10.969 3.82,25.668 -5.56,34.258 -5.23,4.789 -12.28,8.082 -19.49,7.582 -4.09,-0.293 -7.94,-1.34 -10.31,-4.93 -2.03,-3.082 -1.68,-8.34 2.74,-9.023 2.77,-0.418 5.07,2.652 2.87,4.953 l 0.22,-1.692 0.23,0.25 0.57,0.7 c 0.43,0.371 1.49,0.628 2.39,0.812 1.79,0.367 3.96,0.27 5.76,-0.152 4.22,-0.989 7.82,-3.442 10.73,-6.739 2.76,-3.14 4.76,-7.449 5.06,-11.339 0.17,-2.372 -0.02,-4.223 -0.76,-6.43 -0.47,-1.442 -1.58,-3.442 -2.46,-4.551 -4.85,-6.199 -13.44,-8.949 -20.84,-8 -8.5,1.078 -14.89,7.098 -16.95,15.508 -2.32,9.543 1.02,20.73 9.15,26.543 3.26,2.328 0.2,7.769 -3.19,5.457" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path712"></path>
                                    <path d="m 2407.41,531.102 c -11.19,0.808 -17.27,-11.793 -15.82,-21.43 1.91,-12.621 16.08,-18.281 27.15,-19.75 6.68,-0.891 14.29,-1.25 20.29,2.328 4.97,2.961 8.23,8.32 9.13,13.969 2.16,13.461 -6.56,24.383 -17.89,30.5 -5.71,3.09 -12.23,5.922 -18.88,5.34 -3.26,-0.278 -6.36,-1.129 -8.8,-3.411 -2.36,-2.187 -3.61,-5.847 -1.5,-8.609 1.12,-1.469 2.93,-1.891 4.38,-0.57 1.1,1 -1.31,-1.5 0.91,0.722 l 0.76,0.938 0.99,1.031 c 1.04,0.699 2.77,0.988 4.31,1.031 3.84,0.09 7.51,-1.339 11.17,-3.14 7.77,-3.813 15.67,-10.18 15.8,-19.211 0.06,-3.539 -0.83,-7.231 -3.38,-9.77 -3.26,-3.23 -8.52,-3.191 -12.91,-2.98 -8.09,0.371 -18.69,2.512 -22.85,10.39 -2.83,5.372 -0.57,16.122 7.14,15.891 4.38,-0.129 4.29,6.418 0,6.731" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path714"></path>
                                    <path d="m 2540.97,555.93 c -10.35,-5 -16.35,-17.219 -15.22,-28.481 1.23,-12.25 10.03,-21.949 22.3,-23.949 12,-1.969 25.16,2.859 30.84,14.172 5.9,11.769 3.16,26.976 -6.18,36.207 -5.54,5.48 -13.02,8.41 -20.7,9.121 -3.78,0.34 -8,0.172 -11.66,-0.891 -3.75,-1.089 -7.01,-3.418 -9.67,-6.25 -1.53,-1.617 -0.02,-4.328 2.18,-3.75 2.73,0.7 5.49,1.11 8.25,1.551 2.64,0.422 5.2,0.891 7.88,0.879 5.2,-0.019 10.27,-1.418 14.6,-4.32 8.04,-5.348 11.43,-16.18 8.89,-25.059 -5.04,-17.609 -33.59,-18.371 -38.35,0.172 -2.33,9.109 1.43,20.207 10.2,24.859 3.8,2.02 0.46,7.579 -3.36,5.739" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path716"></path>
                                    <path d="m 2637.65,276.32 c -7.33,-6.429 -9.39,-17.07 -6.99,-26.238 2.62,-10.031 10.55,-17.684 20.98,-18.801 10.43,-1.109 21.14,5.18 26.36,14.051 5.65,9.629 3.74,21.328 -3.86,29.289 -3.97,4.16 -9.41,7.25 -15.06,8.379 -5.03,1.012 -15.31,1.582 -17.04,-4.73 -0.35,-1.27 0.21,-3.059 1.49,-3.661 1.36,-0.629 2.63,-1.05 4.15,-0.699 0.96,0.219 1.88,0.559 2.86,0.75 1.2,0.238 3.92,0.27 5,0.121 3.72,-0.531 7.13,-2.09 9.73,-4.109 6.19,-4.762 9,-11.883 6.01,-19.024 -2.54,-6.058 -9.69,-11.007 -16.17,-11.679 -7.37,-0.758 -13.46,3.281 -16.4,10.23 -2.88,6.821 -2.21,15.84 3.64,21.422 3.13,2.981 -1.51,7.5 -4.7,4.699" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path718"></path>
                                    <path d="m 2543.64,302.27 c -8.07,-6.36 -13.86,-16.149 -14.96,-26.411 -1.09,-10.269 4.73,-20.418 14.95,-23.25 10.1,-2.8 21.98,1.762 27.02,11.071 5.44,10.05 3.31,22.902 -4.06,31.39 -4.13,4.75 -10.06,8.051 -16.14,9.559 -3.16,0.781 -6.49,1.16 -9.76,1.07 -1.76,-0.051 -3.56,-0.187 -5.28,-0.66 -2.01,-0.559 -3.23,-1.41 -4.49,-3.047 -0.94,-1.222 -0.29,-3.601 1.1,-4.211 2.57,-1.14 4.76,-0.812 7.47,-0.59 2.22,0.168 4.49,0.149 6.69,-0.179 4.17,-0.633 8.36,-2.211 11.68,-4.84 6.35,-5.043 9.19,-13.961 6.74,-21.703 -2.28,-7.168 -9.64,-11.297 -16.89,-10.52 -7.36,0.781 -11.67,7.352 -11.47,14.403 0.27,8.859 5.79,17.347 12.52,22.796 1.52,1.231 1.28,3.844 0,5.122 -1.51,1.511 -3.57,1.21 -5.12,0" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path720"></path>
                                    <path d="m 2404.14,309.641 c -9.28,-1.082 -14.97,-9.489 -15.29,-18.403 -0.39,-10.769 7.81,-18.867 17.66,-21.789 10.14,-2.988 23.09,-1.449 31.24,5.633 4.61,4 6.57,10.117 5.28,16.047 -1.24,5.691 -5.39,10.543 -9.57,14.383 -5.07,4.64 -11.1,9.726 -18.21,10.379 -6.51,0.578 -12.63,-3.442 -13.04,-10.211 -0.21,-3.239 4.85,-4.711 6.27,-1.7 1.2,2.551 4.63,3.5 6.85,3.079 4.22,-0.809 7.99,-4.36 11.09,-7.137 4.79,-4.293 11.92,-12.113 5.39,-18.051 -5.23,-4.75 -14.27,-5.902 -20.97,-4.57 -6.63,1.328 -12.41,5.289 -13.84,11.847 -1.23,5.653 1.2,13.641 7.86,15.102 2.97,0.641 2.39,5.75 -0.72,5.391" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path722"></path>
                                    <path d="m 2712.71,952.91 c 114.38,6.75 228.81,12.91 343.32,17.559 15.76,0.633 31.53,1.25 47.29,1.832 15.68,0.578 32.56,-0.52 47.95,2.679 2.23,0.461 2.38,4.321 0,4.649 -13.59,1.859 -28.03,0.062 -41.72,-0.438 -14.11,-0.519 -28.21,-1.062 -42.32,-1.621 -28.64,-1.129 -57.26,-2.359 -85.88,-3.679 -57.25,-2.641 -114.47,-5.719 -171.67,-9.2 -32.34,-1.98 -64.66,-4.191 -96.97,-6.543 -3.34,-0.238 -3.39,-5.437 0,-5.238" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path724"></path>
                                    <path d="m 1661.49,1012.37 c -13.98,-38.069 -9.28,-82.261 12.78,-116.39 5.73,-8.871 13.23,-16.582 18.36,-25.839 6.06,-10.95 4.99,-23.149 7.25,-35.059 3.84,-20.203 20.5,-33.141 37.83,-41.934 2.06,-1.039 4.65,1.782 2.63,3.391 -7.41,5.922 -15.44,11.512 -22.1,18.27 -8.38,8.523 -11.75,18.171 -12.93,29.933 -0.94,9.309 -1.75,18.43 -6.03,26.918 -4.65,9.211 -12.09,16.641 -17.96,25.031 -23.11,33.028 -28.58,76.508 -15.17,114.399 1.04,2.94 -3.59,4.17 -4.66,1.28" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path726"></path>
                                    <path d="m 1750.01,789.582 c 5.42,-3.922 10.53,-8.23 15.7,-12.473 5,-4.089 9.9,-8.39 15.31,-11.937 0.94,-0.633 2.02,0.789 1.21,1.57 -4.74,4.547 -10.12,8.43 -15.31,12.449 -5.2,4.039 -10.45,8.008 -15.4,12.348 -1.34,1.18 -2.98,-0.891 -1.51,-1.957" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path728"></path>
                                    <path d="m 1737.83,787.781 c -58.73,-16.902 -108.54,-56.742 -138.72,-109.82 -1.9,-3.352 3.24,-6.371 5.17,-3.02 29.53,51.2 78.5,90.629 134.53,109.321 2.22,0.738 1.31,4.187 -0.98,3.519" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path730"></path>
                                    <path d="m 1691.08,814.02 c -73.43,-12.329 -141.78,-51 -190.39,-107.379 -2.25,-2.61 1.46,-6.422 3.82,-3.821 49.62,54.442 115.75,91.739 187.92,106.321 3.22,0.648 1.82,5.418 -1.35,4.879" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path732"></path>
                                    <path d="m 1678.39,847.051 c -58.89,-8.602 -116.05,-30.832 -164.62,-65.379 -2.17,-1.543 -1.48,-5.043 1.39,-5.121 31.19,-0.903 65.54,8.769 88.11,31.219 1.4,1.39 -0.46,4.019 -2.17,2.82 -25.82,-18.238 -53.78,-30.129 -85.94,-28.551 0.46,-1.707 0.91,-3.41 1.38,-5.117 49.09,33.449 104.42,56.039 163.2,65.238 3.23,0.512 1.84,5.36 -1.35,4.891" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path734"></path>
                                    <path d="m 1477.31,1977.87 c 2.07,-75.29 18.95,-148.3 39.07,-220.56 20.36,-73.09 43.85,-145.53 58.12,-220.18 4.02,-20.97 7.21,-42.1 9.51,-63.33 2.32,-21.31 2.38,-42.64 3.96,-63.97 0.16,-2.16 3.09,-2.11 3.33,0 2.08,18.55 0.85,37.84 -0.4,56.42 -1.23,18.31 -3.4,36.52 -6.24,54.65 -5.79,36.98 -14.22,73.46 -23.88,109.6 -19.64,73.5 -43.97,145.78 -60.54,220.11 -9.34,41.95 -16.87,84.28 -19.19,127.26 -0.12,2.39 -3.8,2.42 -3.74,0" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path736"></path>
                                    <path d="m 1313.05,2294.68 c 27.9,-77.76 61.77,-153.09 101.65,-225.44 11.29,-20.48 22.42,-41.85 36.17,-60.78 1.77,-2.44 5.5,-0.37 4.09,2.39 -9.28,18.2 -20.57,35.49 -30.59,53.3 -10.05,17.84 -19.81,35.85 -29.2,54.06 -18.77,36.43 -35.99,73.56 -52.2,111.19 -9.42,21.85 -18.33,43.9 -26.71,66.17 -0.75,1.97 -3.94,1.14 -3.21,-0.89" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path738"></path>
                                    <path d="m 1274.87,2140.59 c 26.3,-32.26 54.71,-62.73 85.12,-91.14 15.06,-14.06 30.58,-27.64 46.58,-40.63 7.61,-6.18 15.33,-12.24 23.14,-18.19 8.18,-6.23 16.77,-14.06 26.17,-18.35 2.22,-1.02 4.6,1.59 2.71,3.52 -6.69,6.9 -15.68,12.03 -23.36,17.77 -8.65,6.47 -17.18,13.09 -25.6,19.87 -16.07,12.93 -31.73,26.34 -46.92,40.28 -30.37,27.88 -58.83,57.8 -85.25,89.45 -1.52,1.82 -4.06,-0.79 -2.59,-2.58" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path740"></path>
                                    <path d="m 1439.34,1945.81 c -41.49,6.41 -82.99,12.72 -124.45,19.3 -3.29,0.51 -5.46,-3.64 -2.35,-5.58 34.57,-21.61 72.96,-40.56 112.77,-50.12 3.73,-0.89 5.14,4.45 1.57,5.7 -38.75,13.51 -76.07,28.28 -111.26,49.69 -0.79,-1.86 -1.57,-3.72 -2.35,-5.58 41.55,-6.09 83.08,-12.44 124.61,-18.7 3.45,-0.52 4.95,4.75 1.46,5.29" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path742"></path>
                                    <path d="m 1459.72,1872.09 c -52.67,-10.11 -106.2,-15.6 -159.73,-18.55 -2.55,-0.14 -2.59,-3.96 0,-4 54.31,-0.71 108.15,5.8 161.19,17.26 3.47,0.75 1.98,5.95 -1.46,5.29" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path744"></path>
                                    <path d="m 3461.93,2273.28 c -49.98,-70.5 -84.72,-150.66 -107.7,-233.73 -24.82,-89.74 -36.07,-182.46 -42.32,-275.16 -1.81,-26.88 -3.22,-53.78 -4.41,-80.7 -1.23,-27.65 -3.12,-55.53 -2.66,-83.21 0.05,-3.2 4.63,-3.11 4.91,0 2.17,23.95 2.42,48.16 3.48,72.2 1.07,24.06 2.27,48.12 3.79,72.16 3.03,48.14 7.22,96.22 13.82,144.01 12.02,87.06 31.9,173.22 65.26,254.72 18.39,44.93 41.31,87.96 68.92,127.9 1.32,1.91 -1.77,3.67 -3.09,1.81" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path746"></path>
                                    <path d="m 3344.71,1801.89 c 2.16,25.59 13.44,48.84 26.17,70.74 11.74,20.19 24.16,40.14 37.62,59.24 13.67,19.38 28.82,37.83 46.84,53.34 18.3,15.77 39.48,27.07 61.27,37.22 24.02,11.2 49.06,21 70.14,37.36 2.17,1.68 -0.6,5.04 -2.87,3.73 -21.57,-12.53 -44.05,-23.09 -66.6,-33.67 -21.97,-10.29 -43.47,-21.47 -62.23,-37.03 -36.97,-30.65 -62.17,-72.96 -86.07,-113.93 -13.9,-23.86 -26.4,-49.05 -28.6,-77 -0.21,-2.77 4.09,-2.75 4.33,0" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path748"></path>
                                    <path d="m 3705.85,1974.16 c -14.39,0.98 -27.48,-5.07 -39.38,-12.63 -12.27,-7.8 -23.96,-16.67 -35.17,-25.91 -22.8,-18.82 -43.56,-40.05 -60.33,-64.45 -1.15,-1.66 1.47,-3.7 2.8,-2.17 17.95,20.82 36.78,41.02 57.71,58.87 10.7,9.11 21.89,17.64 33.52,25.51 12.31,8.33 25.5,16.39 40.85,16.37 2.86,0 2.8,4.21 0,4.41" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path750"></path>
                                    <path d="m 3714.83,1722.04 c -37.99,-33.29 -71.45,-73 -97.36,-116.39 -1.43,-2.37 2.12,-4.34 3.66,-2.13 28.9,41.45 60.99,79.77 97.11,115.11 2.24,2.2 -1.09,5.44 -3.41,3.41" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path752"></path>
                                    <path d="m 3733.6,1601.15 c -21.49,-1.02 -38.47,-13.54 -54.83,-26.34 -17.62,-13.78 -34.58,-28.37 -50.84,-43.74 -32.44,-30.64 -62.12,-64.19 -88.66,-100.06 -15.18,-20.51 -29.69,-41.74 -41.04,-64.63 -1,-2.03 1.73,-3.61 3.02,-1.77 25.07,36.02 48.8,72.49 77.39,105.93 27.91,32.63 58.64,62.82 91.63,90.31 18.48,15.39 38.97,34.03 63.73,37.36 1.67,0.23 1.27,3.03 -0.4,2.94" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path754"></path>
                                    <path d="m 3723.71,1511.01 c -34.19,-12.6 -66.64,-29.43 -96.47,-50.36 -14.58,-10.24 -28.58,-21.35 -41.82,-33.28 -13.29,-11.97 -27.17,-24.63 -37.26,-39.46 -1.48,-2.19 1.72,-4.37 3.53,-2.72 12.93,11.83 24.36,25.26 37.36,37.1 13.31,12.1 27.38,23.37 42.1,33.72 29.13,20.45 60.68,37.47 93.8,50.5 2.75,1.09 1.6,5.54 -1.24,4.5" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path756"></path>
                                    <path d="m 3266.57,1409.16 c 18.59,85.45 38.04,175.33 97.57,242.8 14.91,16.91 32.26,30.67 49.93,44.5 1.74,1.36 -0.48,3.7 -2.21,2.88 -35.83,-16.9 -63.73,-51.6 -83.74,-84.83 -23.17,-38.47 -37.86,-81.33 -48.92,-124.66 -6.7,-26.26 -12,-52.83 -17.28,-79.41 -0.6,-3.02 3.99,-4.33 4.65,-1.28" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path758"></path>
                                    <path d="m 3287.72,1489.59 c 21.13,31.12 45.74,59.78 73.36,85.32 27.75,25.64 58.33,47 89.99,67.47 2.16,1.4 0.28,4.62 -2.02,3.45 -33.66,-17.23 -64.4,-41.16 -91.78,-67.1 -27.58,-26.13 -52.06,-55.43 -72.99,-87.13 -1.43,-2.16 2.01,-4.13 3.44,-2.01" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path760"></path>
                                    <path d="m 3253.39,1395.33 c -4.91,-23.76 -9.02,-47.65 -12.32,-71.7 -1.57,-11.44 -2.89,-22.93 -4.03,-34.43 -1.17,-11.77 -3.6,-24.49 -2.33,-36.27 0.21,-1.92 3.04,-2.64 3.59,-0.49 2.78,10.95 2.53,23.11 3.66,34.35 1.17,11.67 2.55,23.32 4,34.97 3.01,24.27 6.83,48.45 11.28,72.52 0.46,2.5 -3.33,3.59 -3.85,1.05" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path762"></path>
                                    <path d="m 2148.1,910.25 c -0.25,3.238 -0.13,6.512 0.05,9.738 0.18,3.012 0.3,6.981 1.67,9.492 l 0.15,0.282 0.3,0.297 0.23,0.05 c 1.28,0.321 2.49,0.473 3.81,0.52 3.18,0.172 6.36,0.172 9.55,0.031 6.37,-0.281 12.95,-1.961 19.28,-1.019 1.35,0.199 1.27,2.039 0.36,2.66 -5.85,3.961 -14.2,4.078 -21.06,4.187 -3.45,0.071 -7.03,0.102 -10.46,-0.398 -2.43,-0.36 -5.01,-1.219 -6.36,-3.418 -1.99,-3.242 -2.15,-7.711 -2.32,-11.383 -0.17,-3.66 -0.08,-7.398 0.38,-11.039 0.35,-2.738 4.63,-2.891 4.42,0" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path764"></path>
                                    <path d="m 1127.38,1336.82 c 31.48,11.34 64.5,17.37 97.94,18.28 33.78,0.93 66.27,-4.92 99.07,-12.28 2.09,-0.47 2.77,2.37 0.87,3.13 -31.22,12.64 -66.48,16.43 -99.94,15.72 -33.94,-0.72 -67.68,-7.47 -99.47,-19.33 -3.42,-1.27 -1.97,-6.79 1.53,-5.52" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path766"></path>
                                    <path d="m 1116.5,1547.2 c 16.73,4.55 34.27,5.63 51.41,2.99 7.96,-1.23 15.82,-3.25 23.4,-5.99 3.74,-1.36 7.88,-2.69 11.3,-4.79 7.23,-4.46 -0.21,-8.97 -4.5,-11.55 -13.9,-8.33 -30.81,-11.35 -46.73,-8.3 -11.41,2.19 -27.95,8.71 -37.52,-1.33 -1.26,-1.33 0.34,-3.47 1.97,-2.55 12.77,7.27 26.14,0.43 39.48,-1.24 13.3,-1.67 26.93,0.57 39.08,6.2 5.31,2.47 12.01,5.67 15.11,10.91 2.82,4.78 0.69,9.16 -3.87,11.65 -12.47,6.82 -27.05,10.62 -41.06,12.4 -16.54,2.1 -33.33,0.87 -49.43,-3.42 -3.21,-0.86 -1.84,-5.85 1.36,-4.98" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path768"></path>
                                    <path d="m 1112.95,1790.18 c 10.52,8.64 21.03,17.3 31.68,25.8 5.52,4.4 11.04,8.81 16.56,13.21 4.02,3.2 10.2,6.62 12.61,11.34 4.91,9.58 -9.11,14.21 -15.86,15 -11.41,1.34 -23.18,-2.53 -32.84,-8.43 -5.5,-3.36 -10.54,-7.43 -15.29,-11.78 -4.46,-4.1 -10.69,-8.86 -13.06,-14.56 -0.55,-1.35 1.17,-2.17 2.2,-1.7 5.33,2.46 9.47,8.5 13.76,12.44 4.92,4.53 10.15,8.73 15.93,12.09 5.62,3.28 11.78,5.68 18.2,6.74 6.08,1.02 13.81,1.08 19.43,-1.8 3.12,-1.6 5.23,-4.25 2.76,-7.46 -2.02,-2.62 -5.27,-4.67 -7.77,-6.82 -5.53,-4.74 -11.04,-9.49 -16.56,-14.24 -11.04,-9.5 -22.22,-18.85 -33.4,-28.18 -1.15,-0.97 0.5,-2.59 1.65,-1.65" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path770"></path>
                                    <path d="m 1109.27,1583.84 c 43.23,18.74 88.61,27.9 135.39,31.82 1.79,0.16 1.85,2.84 0,2.84 -47.21,0.05 -94.61,-11.96 -137.82,-30.49 -2.84,-1.22 -0.39,-5.39 2.43,-4.17" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path772"></path>
                                    <path d="m 1135.71,1308 c 18.28,-2.62 36.55,-5.25 54.86,-7.61 2.67,-0.34 3.33,4.31 0.65,4.74 -18,2.86 -36.03,5.46 -54.07,8.08 -3.4,0.49 -4.87,-4.72 -1.44,-5.21" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path774"></path>
                                    <path d="m 1842,2436.26 c -3.38,-37.32 -2.95,-74.81 -1.78,-112.24 1.17,-37.18 2.5,-74.35 3.58,-111.54 2.16,-74.73 4.03,-149.46 5.32,-224.21 2.6,-150.34 2.89,-300.7 1.69,-451.05 -0.67,-84.74 -2.53,-169.45 -3.46,-254.16 -0.05,-4.62 6.98,-4.59 7.16,0 3,75.51 3.92,151.18 5,226.73 1.08,74.76 1.26,149.54 0.94,224.3 -0.65,150.34 -3.3,300.74 -8.71,451 -1.53,42.24 -3.28,84.48 -5.06,126.72 -1.75,41.47 -3.03,83.03 0.39,124.45 0.27,3.26 -4.78,3.23 -5.07,0" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path776"></path>
                                    <path d="m 1854.89,1251.99 c 24.89,-26.27 50.45,-51.89 76.72,-76.78 25.85,-24.5 52.03,-49.07 80.37,-70.68 2.93,-2.24 6.6,2.63 3.93,5.1 -26.29,24.26 -53.87,47.1 -80.19,71.36 -26.32,24.26 -51.96,49.24 -76.94,74.89 -2.47,2.53 -6.31,-1.32 -3.89,-3.89" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path778"></path>
                                    <path d="m 2119.6,1218.26 c -44.68,-63.73 -89.99,-127.06 -137.76,-188.5 -3.63,-4.67 2.97,-9.87 6.46,-4.99 45.41,63.5 91.17,126.75 135.39,191.1 1.74,2.53 -2.35,4.87 -4.09,2.39" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path780"></path>
                                    <path d="m 1984.09,1022.06 c 18.08,-13.8 34.89,-29.22 50.21,-46.029 7.65,-8.422 14.96,-17.179 21.81,-26.261 3.33,-4.418 6.57,-8.899 9.7,-13.45 1.65,-2.39 3.25,-4.82 4.86,-7.25 0.71,-1.07 4.53,-5.351 4.31,-6.25 -0.8,-3.379 2.81,-6.371 5.93,-4.55 2.91,1.691 2.47,6.57 -0.97,7.371 -1.24,0.289 -3.45,5.441 -4.11,6.449 -1.58,2.441 -3.22,4.84 -4.87,7.242 -3.31,4.777 -6.73,9.488 -10.27,14.117 -7.02,9.231 -14.44,18.141 -22.27,26.699 -15.7,17.141 -32.97,32.742 -51.48,46.792 -2.9,2.21 -5.7,-2.7 -2.85,-4.88" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path782"></path>
                                    <path d="m 2969.49,2412.49 c 6.4,-68.19 13.11,-136.35 19.68,-204.52 6.51,-67.47 12.44,-134.9 14.15,-202.7 3.39,-134.5 -5.17,-268.92 -4.46,-403.42 0.19,-38.03 1.11,-76.06 3.22,-114.04 2.08,-37.47 4.74,-75.16 10.7,-112.24 0.73,-4.5 8.45,-3.5 8.01,1.08 -3.21,33.38 -6.83,66.67 -8.88,100.15 -2.05,33.46 -3.13,66.98 -3.58,100.49 -0.91,67.63 0.79,135.26 2.27,202.87 1.46,67.23 2.87,134.51 1.6,201.77 -1.28,67.35 -6,134.51 -13.06,201.5 -8.06,76.38 -16.67,152.73 -25.32,229.06 -0.31,2.72 -4.59,2.79 -4.33,0" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path784"></path>
                                    <path d="m 3014.9,1377.78 c -17.5,-13.84 -33.47,-29.56 -49.77,-44.76 -16.33,-15.23 -32.67,-30.44 -49,-45.67 -33.26,-31 -66.28,-62.26 -99.37,-93.45 -3.51,-3.31 1.79,-8.61 5.29,-5.3 33.07,31.21 66.19,62.36 99.08,93.75 16.15,15.41 32.29,30.82 48.43,46.23 16.12,15.38 31.9,31.28 49.22,45.33 2.76,2.23 -1.14,6.04 -3.88,3.87" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path786"></path>
                                    <path d="m 2744.63,1223.92 c 20.64,-21.35 41.62,-42.37 62.92,-63.07 10.35,-10.07 20.7,-20.14 31.05,-30.2 5.33,-5.17 10.67,-10.33 16.03,-15.46 4.94,-4.74 10.18,-11.56 16.48,-14.37 2.83,-1.27 5.61,1.31 4.21,4.21 -2.86,5.94 -9.28,10.6 -13.92,15.18 -5.3,5.2 -10.59,10.41 -15.92,15.57 -10.67,10.33 -21.32,20.68 -31.98,31.02 -21.33,20.68 -42.96,41.04 -64.93,61.06 -2.64,2.4 -6.44,-1.35 -3.94,-3.94" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path788"></path>
                                    <path d="m 2868.01,1096.61 c -22.02,-39.71 -42.58,-81.17 -57.29,-124.122 l 2.19,2.184 -1.34,-0.352 c -4.55,-1.199 -4.82,-7.672 -0.6,-9.461 4.13,-1.738 8.99,3.071 6.29,7.141 l 3.4,7.422 c 0.87,2.187 1.74,4.367 2.61,6.547 2.02,5.07 4.07,10.14 6.17,15.191 4.54,10.9 9.3,21.7 14.24,32.42 9.34,20.23 19.39,40.12 30.08,59.67 2.05,3.75 -3.67,7.11 -5.75,3.36" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path790"></path>
                                    <path d="m 2870.4,2478.34 c -6.18,-123.71 -17.28,-247.31 -34.39,-370 -4.68,-33.58 -10.48,-67.06 -14.43,-100.74 -0.24,-2.09 3.22,-2.54 3.67,-0.5 6.68,30.46 10.99,61.48 15.44,92.33 4.27,29.57 8.19,59.18 11.77,88.84 7.44,61.65 13.33,123.45 17.55,185.4 2.37,34.86 4.03,69.76 5.3,104.67 0.11,3.16 -4.75,3.14 -4.91,0" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path792"></path>
                                    <path d="m 2817.98,1980.91 c -16.38,-121.5 -30.3,-243.22 -44.39,-365 -14.04,-121.38 -28.59,-242.75 -46.41,-363.64 -9.22,-62.58 -20.37,-124.7 -31.72,-186.91 -0.53,-2.91 3.84,-4.2 4.49,-1.24 11.94,54.34 20.52,109.59 29.11,164.53 9.3,59.45 17.62,119.05 25.3,178.71 15.37,119.47 28.65,239.17 42.5,358.82 8.26,71.42 16.54,142.82 24.15,214.33 0.17,1.7 -2.8,2.12 -3.03,0.4" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path794"></path>
                                    <path d="m 1910.5,2448.82 c 4.7,-27.52 7.65,-55.34 12.27,-82.9 4.62,-27.48 9.25,-54.97 14.01,-82.43 9.52,-54.9 19.18,-109.77 28.91,-164.62 19.41,-109.28 39.26,-218.47 59.19,-327.65 11.26,-61.69 21.25,-123.74 34.53,-185.04 0.58,-2.66 4.39,-1.46 4.01,1.11 -8.09,55.13 -18.91,109.89 -28.72,164.73 -9.83,54.85 -19.48,109.73 -29.16,164.6 -19.3,109.31 -38.65,218.61 -58.32,327.85 -5.52,30.68 -11.09,61.33 -16.74,91.99 -5.72,31 -13.1,61.7 -18.7,92.72 l -1.28,-0.36" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path796"></path>
                                    <path d="m 2061.46,1578.08 c 18.95,-82.5 35.01,-165.6 49.89,-248.93 15.15,-84.94 29.9,-169.95 45.35,-254.83 4.3,-23.61 8.65,-47.19 13.09,-70.77 4.44,-23.55 7.37,-48.339 14.77,-71.171 0.59,-1.809 3.66,-1.629 3.51,0.48 -1.51,20.692 -6.8,41.313 -10.54,61.7 -3.9,21.221 -7.72,42.461 -11.49,63.711 -7.49,42.3 -14.77,84.62 -22.08,126.94 -14.62,84.75 -30.34,169.31 -47.27,253.62 -9.45,47 -19.48,93.89 -30.42,140.57 -0.74,3.13 -5.54,1.81 -4.81,-1.32" style={{fill:"#a92b28", fillOpacity:1, fillRule:"nonzero", stroke: "none"}} id="path798"></path>
                                    <path d="m 2037.54,2831.19 c 28.42,-64.79 12.28,-140.36 -13.56,-206.23 -25.84,-65.87 -61.24,-129.18 -71.67,-199.16 -9.64,-64.72 3.46,-132.59 36.5,-189.07 33.84,-57.83 86.58,-102.22 124.73,-157.31 57.83,-83.52 79.19,-191.4 57.54,-290.67 -16.51,-75.73 -56.09,-144.12 -84.31,-216.32 -28.23,-72.2 -44.71,-154.91 -14.14,-226.15 -36.15,5.41 -57.89,42.94 -78.49,73.12 -55.25,80.98 -70.62,163.94 -66.91,261.9 2.2,58.38 40.28,164.97 37.66,223.32 -7.43,165.6 -194.69,274.37 -263.67,425.12 -52.98,115.76 -70.28,247.55 -48.98,373.07 2.24,13.23 34.33,20.27 46.54,25.83 33.93,15.48 67.87,30.94 101.81,46.42 71.82,32.74 158.87,44.52 236.95,56.13" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path800"></path>
                                    <path d="m 2913.83,3871.1 c 61.77,-112.17 107.56,-232.59 136.5,-357.31 25.11,-108.21 39.82,-221.35 89.71,-321.92 25.05,-50.47 59.45,-92.81 100.73,-130.88 43.3,-39.95 90.85,-77.13 121.78,-128.21 30.82,-50.91 44.75,-111.63 39.59,-170.89 -5.34,-61.28 -36.24,-116.43 -43.8,-177.29 -13.6,-109.61 35.12,-232.33 128.26,-294.66 3.18,-2.12 7.19,2.94 4.13,5.35 -83.51,66.08 -134,167.08 -126.25,274.76 4.43,61.35 34.78,116.18 43.23,176.63 7.44,53.11 -0.48,107.94 -22.04,157.01 -23.29,53.04 -63.37,93.39 -105.86,131.53 -43.77,39.31 -86.31,78.12 -116.8,129.12 -57.9,96.84 -75.38,211.2 -99.02,319.74 -29.73,136.56 -78.02,267.15 -147.41,388.63 -1.01,1.78 -3.74,0.19 -2.75,-1.61" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path802"></path>
                                    <path d="m 1630.01,2464.88 c 10.89,-63.16 32.77,-124.14 64.72,-179.72 16.05,-27.92 34.64,-54.31 55.47,-78.87 22.39,-26.41 48.02,-49.6 72.3,-74.2 48.34,-48.98 83.69,-107.71 100.82,-174.63 8.47,-33.06 12.36,-67.21 11.38,-101.33 -1.09,-37.23 -7.79,-73.97 -11.83,-110.93 -6.83,-62.64 -5.89,-144.4 49.12,-186.94 2.13,-1.65 4.94,0.94 3.04,3.04 -45.96,50.61 -51.66,116.23 -44.68,181.48 4.04,37.79 11.04,75.31 12.17,113.35 0.92,30.65 -2.1,61.43 -8.72,91.36 -13.25,59.88 -41,116.51 -80.7,163.3 -23.03,27.14 -50.07,50.43 -74.79,75.95 -23.05,23.8 -43.74,49.72 -62.07,77.3 -40.59,61.09 -68.26,130.03 -81.52,202.14 -0.57,3.1 -5.24,1.77 -4.71,-1.3" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path804"></path>
                                    <path d="m 2019.05,2645.38 c -49.82,-88.71 -79.69,-194.61 -62.84,-296.53 8.45,-51.07 30.27,-97.15 58.51,-140.13 29.69,-45.19 64.77,-86.84 92.01,-133.64 31.49,-54.15 52.72,-116.47 39.33,-179.41 -0.79,-3.75 4.81,-5.35 5.8,-1.59 26.98,103.5 -44,197.97 -101.01,276.7 -31.24,43.15 -61.84,87.91 -77.92,139.22 -16.23,51.79 -18.11,107.05 -9.91,160.48 9.3,60.75 31.08,118.65 59.1,173.1 1.04,2.03 -1.93,3.81 -3.07,1.8" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path806"></path>
                                    <path d="m 2110.67,2042.81 c 45.24,-68.73 70.05,-149.66 73.19,-231.77 1.58,-41.6 -2.54,-83.41 -12.68,-123.81 -10.58,-42.18 -28.42,-81.88 -45.55,-121.68 -17.94,-41.63 -37.29,-85.21 -41.17,-130.86 -0.2,-2.49 3.83,-3.02 4.37,-0.59 9.83,44.52 24.47,86.27 42.48,128.13 16.82,39.07 34.41,78.03 45.18,119.32 20.33,77.9 18.55,161 -3.79,238.25 -12.86,44.41 -32.98,86.59 -58.82,124.88 -1.33,1.96 -4.52,0.13 -3.21,-1.87" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path808"></path>
                                    <path d="m 2161.28,1795 c -16.69,-145.45 -109.6,-279.35 -83.13,-429.75 6.2,-35.11 19.4,-69.15 42.38,-96.72 1.83,-2.21 5.66,0.71 4,3.09 -114.02,164.35 22.87,352.16 38.67,523.38 0.12,1.24 -1.78,1.21 -1.92,0" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path810"></path>
                                    <path d="m 1937.79,1717.67 c -20.86,-50.5 -26.69,-105.75 -16.97,-159.5 9.36,-51.74 33.08,-107.05 72.78,-142.8 2.35,-2.12 5.32,1.02 3.4,3.4 -34.09,42.4 -59.76,87 -70.04,141.1 -9.95,52.35 -5.66,107.37 14.61,156.75 0.97,2.34 -2.83,3.34 -3.78,1.05" style={{fill: "#5b3318", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path812"></path>
                                    <path d="m 2775.33,3180.04 c 9.93,-76 -4.89,-151.69 -23.95,-225.06 -9.76,-37.56 -20.7,-74.79 -30.44,-112.35 -9.16,-35.27 -18.02,-71.12 -21.95,-107.42 -3.68,-34.07 -3.38,-77.51 20.17,-105.16 1.43,-1.67 3.86,0.46 2.93,2.25 -7.99,15.41 -14.59,30.37 -17.36,47.66 -2.77,17.21 -2.44,34.86 -0.77,52.17 3.52,36.49 12.5,72.6 21.63,108.03 18.63,72.38 42,143.89 52.07,218.19 5.48,40.55 6.52,81.53 0.73,122.1 -0.25,1.72 -3.28,1.33 -3.06,-0.41" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path814"></path>
                                    <path d="m 2704.09,2957.73 c -16.27,-39.07 -30.49,-78.87 -41.84,-119.66 -5.67,-20.36 -10.52,-40.93 -14.75,-61.63 -3.21,-15.77 -8.32,-34.48 2.47,-48.47 1.2,-1.55 3.82,-0.2 2.74,1.6 -9.85,16.39 -2.33,38.78 1.3,56.01 4.12,19.52 8.82,38.94 14,58.21 10.34,38.5 22.81,76.52 37.8,113.47 0.43,1.07 -1.29,1.51 -1.72,0.47" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path816"></path>
                                    <path d="m 1985.28,3140.48 c 24.57,-63.86 37.57,-132.24 39.94,-200.57 1.19,-33.92 -0.37,-67.97 -4.59,-101.65 -4.2,-33.45 -12.5,-65.77 -19.64,-98.64 -7.16,-32.95 -14.08,-73.26 3.73,-104.11 0.83,-1.44 3.28,-0.49 2.74,1.16 -5.36,16.29 -8.87,32.47 -8.63,49.71 0.23,16.76 3.03,33.35 6.52,49.7 6.93,32.47 15.3,64.37 19.7,97.35 8.81,66.15 6.65,133.63 -6.09,199.11 -7.19,37.05 -18.04,73.3 -31.59,108.51 -0.49,1.29 -2.58,0.73 -2.09,-0.57" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path818"></path>
                                    <path d="m 2089,2941.87 c -4.83,-37.46 -6.72,-75.26 -4.65,-112.99 0.99,-18.08 2.81,-36.1 5.51,-54 2.83,-18.63 5.66,-38.07 11.95,-55.89 0.9,-2.53 4.36,-1.49 3.96,1.1 -2.8,18.04 -7.58,35.77 -10.48,53.83 -3.04,19 -5.26,38.14 -6.55,57.33 -2.5,36.87 -1.86,73.93 2.59,110.62 0.18,1.49 -2.14,1.46 -2.33,0" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path820"></path>
                                    <path d="m 1769.35,3495.61 c 2.35,-8.27 2.58,-17.7 3.5,-26.23 0.94,-8.76 1.82,-17.52 2.61,-26.29 1.49,-16.68 2.81,-33.39 3.65,-50.11 1.67,-33.23 1.71,-66.59 -0.25,-99.8 -3.83,-65.02 -14.36,-131.78 -36.51,-193.24 -40.88,-113.39 -129.38,-202.52 -166.46,-317.71 -19.07,-59.23 -26.83,-130.25 3.57,-187.23 1.15,-2.15 4.94,-0.65 4.01,1.68 -10.96,27.5 -17.71,55.65 -18.08,85.36 -0.36,29.21 4.51,58.25 12.52,86.29 16.62,58.12 46.94,110.16 78.72,161.09 31.46,50.4 64.27,100.51 86.15,156.02 23.35,59.25 34.37,124.36 39.23,187.63 2.82,36.72 3.17,73.6 1.17,110.37 -0.98,18.33 -2.4,36.65 -4.63,54.87 -1.08,8.85 -2.25,17.69 -3.62,26.5 -1.56,10.1 -4.53,20.69 -4.88,30.89 l -0.7,-0.09" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path822"></path>
                                    <path d="m 1670.8,2771.51 c -8.02,-65.51 -13.31,-132.01 -7.48,-197.94 5.63,-63.57 22.52,-125.24 54.69,-180.63 62.49,-107.62 165.78,-183.04 235.35,-285.38 19.71,-29 36.93,-59.94 48.91,-92.96 11.93,-32.9 17.03,-66.48 18.3,-101.34 0.06,-1.96 2.81,-1.89 2.99,0 5.71,59.55 -18.65,120.26 -48.51,170.51 -31.71,53.38 -73.23,99.59 -115.54,144.68 -42.48,45.27 -85.91,90.22 -120.68,141.9 -36.11,53.66 -58.49,113.62 -67.97,177.55 -11,74.11 -6.23,149.58 2.83,223.61 0.23,1.84 -2.66,1.82 -2.89,0" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path824"></path>
                                    <path d="m 2014.73,1865.46 c 20.56,-103.25 -26.67,-204.43 -20.46,-307.78 1.54,-25.73 5.75,-52.69 17.35,-75.93 0.75,-1.52 3.25,-0.46 2.75,1.15 -7.53,23.87 -13.34,47.48 -14.89,72.56 -1.5,24.22 -0.22,48.5 2.45,72.61 5.69,51.06 17.85,101.29 21.22,152.63 1.89,28.68 0.89,57.5 -5.05,85.69 -0.47,2.2 -3.81,1.27 -3.37,-0.93" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path826"></path>
                                    <path d="m 2012.41,2109.24 c 32.18,-54.92 52.67,-115.97 62.33,-178.79 9.9,-64.41 6.37,-128.74 -6.89,-192.35 -7.82,-37.51 -16.71,-75.3 -14.06,-113.87 0.14,-1.97 3.12,-2.02 3.1,0 -0.26,36.15 7.37,71.5 14.71,106.7 6.65,31.91 11.95,63.86 13.46,96.47 2.92,63.43 -6.39,127.22 -27,187.26 -11.41,33.22 -26.31,65.2 -44.07,95.51 -0.59,1.01 -2.17,0.09 -1.58,-0.93" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path828"></path>
                                    <path d="m 3009.82,3238.36 c 30.02,-79.1 82.04,-148.33 150.39,-198.39 37.84,-27.71 80.63,-48.23 108.25,-87.64 24.97,-35.63 37.56,-78.95 41.18,-121.98 5.01,-59.66 -6.16,-118.78 -15.76,-177.39 -0.38,-2.36 3.15,-3.42 3.64,-1.01 18.72,92.53 34.75,195.67 -12.36,282.72 -10.02,18.51 -22.88,35.57 -38.41,49.83 -17.05,15.68 -36.8,27.99 -56.23,40.46 -37.81,24.26 -72.02,52.55 -101.52,86.55 -32.61,37.6 -59.25,80.98 -77.41,127.34 -0.42,1.09 -2.19,0.63 -1.77,-0.49" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path830"></path>
                                    <path d="m 3297.11,2588.71 c -7.94,-42.8 -13.56,-86.24 -14.82,-129.79 -0.57,-19.25 0.53,-39.21 7.5,-57.37 5.62,-14.67 15.52,-29.92 30.26,-36.64 1.44,-0.66 3.28,1.18 1.84,2.39 -13.18,11.11 -23.03,23.69 -28.61,40.19 -6.2,18.35 -6.56,38 -6.15,57.17 0.89,41.35 4.93,82.71 12.33,123.4 0.29,1.54 -2.06,2.2 -2.35,0.65" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path832"></path>
                                    <path d="m 3184.74,2918.96 c 28.51,-65.29 0.48,-136.94 -31.8,-195.01 -31.74,-57.09 -70.98,-112.29 -79.75,-178.65 -4.3,-32.51 -1.84,-69.2 17.15,-97.05 1.04,-1.52 3.19,-0.22 2.44,1.43 -13.38,29.8 -18.49,60.7 -14.48,93.22 4.07,33.02 16.12,64.3 31.13,93.78 30.35,59.64 72.29,114.52 85.95,181.31 7,34.25 6.14,70.11 -8.19,102.4 -0.74,1.67 -3.18,0.22 -2.45,-1.43" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path834"></path>
                                    <path d="m 2733.12,3973.71 c 80.8,-60.17 137.13,-151.01 157.38,-249.52 5.78,-28.12 8.01,-56.31 9.36,-84.93 0.07,-1.43 2.12,-1.42 2.22,0 3.39,50.56 -8.15,103.07 -26.15,150.08 -18.11,47.3 -44.76,91.33 -78.4,129.2 -18.95,21.33 -40.1,40.56 -63.1,57.42 -1.35,1 -2.64,-1.26 -1.31,-2.25" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path836"></path>
                                    <path d="m 2825.05,3207.12 c 25.08,-63.97 32.41,-133.2 23.88,-201.23 -0.19,-1.5 2.43,-1.87 2.67,-0.36 11.03,68.06 1.89,138.54 -23.88,202.33 -0.66,1.63 -3.33,0.93 -2.67,-0.74" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path838"></path>
                                    <path d="m 1938.84,3185.44 c 16.71,-42.68 10.51,-89.73 -2.69,-132.48 -13.58,-43.99 -35.44,-85.38 -46.05,-130.28 -0.31,-1.3 1.57,-1.81 1.98,-0.55 14.66,45.29 35.48,88.43 48.98,134.08 12.46,42.07 17.26,88.38 0.56,130.01 -0.68,1.7 -3.47,0.97 -2.78,-0.78" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path840"></path>
                                    <path d="m 1882.23,2861.5 c -30.81,-82.52 -55.18,-167.81 -60.65,-256.12 -4.85,-78.32 5.71,-157.74 36.63,-230.19 16.86,-39.49 39.74,-76.48 69.48,-107.57 1.27,-1.33 3.17,0.63 2,2 -49.66,58.12 -81.41,128.58 -95.34,203.56 -15.27,82.12 -9.27,166.51 8.51,247.72 10.41,47.58 24.51,94.37 41.24,140.09 0.43,1.18 -1.44,1.68 -1.87,0.51" style={{fill: "#753d19", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} id="path842"></path>
                                    <path d="m 1904.52,3358.23 c -2.64,-1.1 -4.52,-2.96 -5.39,-5.73 -0.69,-2.21 -0.57,-4.81 0.17,-6.99 0.87,-2.58 2.36,-4.76 4.56,-6.38 2.6,-1.92 6.04,-2.6 9.21,-2.38 1.89,0.13 3.78,0.47 5.59,1.01 l 2.21,0.76 1.83,0.8 1.6,1.25 c 1.23,0.98 1.4,3.24 0.58,4.51 -0.95,1.48 -2.51,2.02 -4.21,1.71 l -1.7,-0.4 -1.79,-0.67 c -1.17,-0.39 -2.37,-0.68 -3.58,-0.91 v -0.01 l -0.92,-0.07 -1.85,0.01 -0.39,0.03 0.41,-0.06 -0.9,0.15 -1.76,0.48 -0.06,0.03 -0.48,0.25 -0.52,0.34 0.39,-0.3 -0.27,0.23 -0.81,0.86 0.28,-0.37 -0.21,0.3 -0.31,0.56 -0.27,0.57 0.18,-0.42 -0.09,0.26 -0.34,1.23 -0.04,0.27 0.06,-0.49 -0.05,0.62 0.04,1.22 -0.06,-0.5 0.06,0.34 0.18,0.65 0.09,0.23 -0.16,-0.37 0.32,0.58 -0.09,-0.11 0.46,0.47 -0.08,-0.06 0.07,0.03 0.63,0.32 c 1.52,0.7 1.97,2.8 1.38,4.2 -0.59,1.39 -2.42,2.59 -3.97,1.95" style={{fill:"#ffffff", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path844"></path>
                                    <path d="m 1973.52,3217.52 c -9.2,-13.14 -18.36,-29.45 -9.85,-45.33 3.61,-6.71 10.24,-11.57 17.83,-12.4 7.59,-0.82 14.84,3.26 19.06,9.42 2.28,3.32 3.9,7.49 4.19,11.53 0.3,4.17 -0.43,9.6 -4.32,11.9 -2.17,1.29 -4.96,0.46 -6.25,-1.64 -1.18,-1.9 -1.1,-3.82 -1.35,-5.95 0.12,0.98 -0.29,-1.2 -0.35,-1.42 l -0.53,-1.78 -0.78,-2.36 c 0.51,1.17 -0.58,-0.99 -0.7,-1.19 -0.15,-0.24 -1.58,-2.19 -0.71,-1.14 l -1.21,-1.35 c -0.2,-0.21 -2.04,-1.76 -0.85,-0.9 l -2.01,-1.22 v 0 l -1.13,-0.34 c -1.35,-0.49 0.79,-0.12 -0.56,-0.11 -0.33,0 -2.78,0.22 -1.31,-0.05 l -2.36,0.65 c 1.34,-0.5 -0.86,0.55 -1.1,0.68 l -0.14,0.02 -0.7,0.6 -1.55,1.56 -0.14,0.13 -0.72,1.06 -1.3,2.24 -0.58,1.16 0.04,-0.07 c -1.3,3.46 -1.58,5.18 -1.07,9.13 1.02,7.88 5.6,15.09 9.65,21.79 1.5,2.46 0.55,5.86 -1.91,7.3 -2.66,1.56 -5.63,0.45 -7.29,-1.92" style={{fill: "#cd3e37", fillOpacity:1, fillRule: "nonzero", stroke:"none"}} id="path846"></path>
                                    <path d="m 2794.14,3231.13 c 4,-6.6 8.46,-13.66 9.62,-21.39 0.28,-1.9 0.34,-3.97 0.06,-5.88 0.17,1.17 -0.32,-1.25 -0.38,-1.48 l -0.6,-1.87 -0.07,-0.23 -0.57,-1.17 -1.31,-2.24 -0.72,-1.06 -0.14,-0.13 -1.54,-1.55 -0.72,-0.61 -0.12,-0.02 c -0.26,-0.13 -2.44,-1.18 -1.12,-0.68 l -2.35,-0.65 c 1.45,0.27 -0.67,0.05 -1.01,0.04 l -0.9,0.06 0.03,0.06 -1.12,0.34 -2,1.23 c 1.15,-0.85 -0.44,0.46 -0.65,0.68 -1.83,1.85 -2.74,3.37 -3.53,5.95 l -0.62,2.08 c -0.05,0.22 -0.45,2.4 -0.35,1.42 -0.24,2.13 -0.16,4.06 -1.33,5.96 -1.29,2.09 -4.09,2.93 -6.25,1.64 -3.67,-2.17 -4.31,-6.77 -4.36,-10.68 -0.04,-3.71 1.26,-7.41 2.96,-10.67 3.49,-6.68 10.28,-11.21 17.82,-11.61 7.78,-0.41 14.58,4.24 18.95,10.33 4.54,6.36 5.52,14.46 4.22,21.99 -1.64,9.48 -7.28,17.79 -12.69,25.52 -1.65,2.35 -4.66,3.45 -7.3,1.91 -2.46,-1.44 -3.4,-4.82 -1.91,-7.29" style={{fill: "#cd3e37", fillOpacity:1, fillRule: "nonzero", stroke:"none"}} id="path848"></path>
                                    <path d="m 2846.43,3353.32 c 8.45,0 8.46,13.13 0,13.13 -8.45,0 -8.47,-13.13 0,-13.13" style={{fill:"#ffffff", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path850"></path>
                                    <path d="m 2838.82,3304.81 c 8.45,0 8.47,13.13 0,13.13 -8.45,0 -8.47,-13.13 0,-13.13" style={{fill:"#ffffff", fillOpacity:1, fillRule:"nonzero", stroke:"none"}} id="path852"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="bottom">
                <div className="content">
                    <span className="name">My Name</span>
                    <span className="about-me">Lorem ipsum dolor sit amet consectetur adipisicinFcls </span>
                </div>
            <div className="bottom-bottom">
                <div className="social-links-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.999" viewBox="0 0 16 15.999">
                        <path id="Subtraction_4" data-name="Subtraction 4" d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z" transform="translate(6 598)"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>

                </div>
                <button className="button">Contact Me</button>
            </div>
            </div>
        </div> */}



        {/* 11th one - no css, tailwind , download pdf or excel, interesting one  */}
        {/* <div>
            <div className="group overflow-hidden bg-neutral-50 rounded-xl bg-gradient-to-tr from-cyan-800 via-cyan-700 to-cyan-500 text-gray-50">
                <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48  flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                    <div className="text p-3 flex flex-col justify-evenly h-full">
                        <span className="font-bold text-2xl">Get Your Document</span>
                        <p className="subtitle">Access your document instantly, simply click the download link.</p>
                    </div>
                    <div className="w-full flex flex-row justify-between z-10">
                        <a className="hover:opacity-90 py-3 bg-cyan-50 w-full flex justify-center" href="#">
                            <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-6 h-6  stroke-cyan-800">
                                <path stroke-width="8" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M18.3,65.8v4A11.9,11.9,0,0,0,30.2,81.7H69.8A11.9,11.9,0,0,0,81.7,69.8v-4M65.8,50,50,65.8m0,0L34.2,50M50,65.8V18.3" className="">
                                </path>
                            </svg>
                        </a>
                        <a className="hover:opacity-90 py-3 bg-cyan-50 w-full flex justify-center" href="#">
                            <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-6 h-6  stroke-cyan-800">
                                <path stroke-width="8" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M21.9,50h0M50,50h0m28.1,0h0M25.9,50a4,4,0,1,1-4-4A4,4,0,0,1,25.9,50ZM54,50a4,4,0,1,1-4-4A4,4,0,0,1,54,50Zm28.1,0a4,4,0,1,1-4-4A4,4,0,0,1,82.1,50Z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div> */}




        {/* 12th one- can use for category, like options */}
        {/* <div>
            <div className="card">
                <span className="title">All tags</span>
                <div className="card__tags">
                    <ul className="tag">
                    <li className="tag__name">JS</li>
                    <li className="tag__name">wordpress</li>
                    <li className="tag__name">uiverse</li>
                    <li className="tag__name">Css</li>
                    <li className="tag__name">html</li>
                    <li className="tag__name">go</li>
                    <li className="tag__name">java</li>
                    <li className="tag__name">ux/ui</li>
                    <li className="tag__name">figma</li>
                    </ul>
                </div>
                </div>
        </div> */}


        {/* 13th one - session card */}
        {/* <div>
            <div className="card">
                <div className="card__img"><svg viewBox="0 0 128 128" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect className="st1" height="78.6" transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)" width="101.2" x="13.1" y="24.7"></rect><rect className="st53" height="78.6" transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)" width="101.2" x="13.1" y="24.7"></rect><polygon className="st16" points="116,62 116,35.4 38.1,18 22.1,18 5.8,91.3 76.2,107 106,107"></polygon><polygon className="st1" points="97.2,23 10,23 10,102 111,102 111,36.8"></polygon><polygon className="st53" points="97.2,23 10,23 10,102 111,102 111,36.8"></polygon><g><rect className="st7" height="58" width="80" x="20" y="34"></rect><g><polygon className="st9" points="100.2,92 73.1,44.2 51.2,75.5 40,58.7 20.2,92 39.7,92"></polygon><circle className="st18" cx="57" cy="52" r="11"></circle><polygon className="st1" points="40,58.5 31.6,72.6 34.6,78.2 37.9,75.2 43.5,79.9 47,78.2 51,75.2"></polygon><path className="st1" d="M57.7,66c0,0,4.1,7.2,4.3,6.6c0.2-0.6,6.1-5.6,6.1-5.6l6.9,3.6l1.5-10.3L88.9,72L73.1,44.1L57.7,66z"></path><polygon className="st15" points="73.1,44.2 83.6,92 100.2,92"></polygon><polyline className="st2" points="100.2,91.9 73.1,44.1 39.7,91.9"></polyline><polyline className="st2" points="51.2,75.4 40,58.5 20.2,91.9"></polyline><polygon className="st15" points="51.2,75.4 40,58.5 47,81.3"></polygon><polyline className="st2" points="51.5,91.9 67.1,70.5 80.4,91.9"></polyline><polygon className="st15" points="72.3,92 67.1,70.7 80.4,92"></polygon></g><rect className="st53" height="58" width="80" x="20" y="34"></rect></g><polygon className="st18" points="111,37 97,37 97,23"></polygon><polygon className="st53" points="111,37 97,37 97,23"></polygon></svg></div>
                <div className="card__subtitle">Type of work</div>
                <div className="card__wrapper">
                    <div className="card__title">Project name</div>
                    <div className="card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{userSelect: "none", width: "100%", height: "100%", display: "inline-block", fill: "rgb(224, 223, 220)", flexShrink: 0, cursor: "auto"}} color="rgb(224, 223, 220)"><g color="rgb(224, 223, 220)"><circle cx="128" cy="128" r="96" opacity="0.2"></circle><circle cx="128" cy="128" r="96" fill="none" stroke="rgb(224, 223, 220)" stroke-miterlimit="10" stroke-width="16"></circle><polyline points="134.1 161.9 168 128 134.1 94.1" fill="none" stroke="rgb(224, 223, 220)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="rgb(224, 223, 220)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></g></svg></div>

                </div>
            </div>
        </div> */}


        {/* 14th one, no css,  its a small black card, can  use for history session part may be */}
        {/* <div>
            <div className="flex flex-col bg-black rounded-3xl">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                <h2 className="text-lg font-medium tracking-tighter text-white lg:text-3xl">
                    Corporate
                </h2>
                <p className="mt-2 text-sm text-gray-100">Grow steadily and pizza.</p>
                </div>
                <div className="mt-6">
                <p>
                    <span className="text-5xl font-light tracking-tight text-white">
                    $35
                    </span>
                    <span className="text-base font-medium text-white"> /mo </span>
                </p>
                </div>
            </div>
            </div>
            <div className="flex px-6 pb-8 sm:px-8">
            <a aria-describedby="tier-starter" className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
                Get started
            </a>
            </div>
        </div>
        </div> */}





        {/* 15th one -> this shows som design for link for video call -use it*/}
        {/* <div>
            <div className="card">
            <div className="corner">
                <i data-corner="tl"></i>
                <i data-corner="br"></i>
                <div data-action="notif" className="action">
                <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    ></path>
                    <path
                    d="M16 8m-3 0a3 3 0 1 0 8 0a3 3 0 1 0 -8 0"
                    className="dot"
                    fill="red"
                    ></path>
                </svg>
                </div>
                <div data-action="more" className="action">
                <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17 7l-11 11"></path>
                    <path d="M8 7l9 0l0 9"></path>
                </svg>
                </div>
            </div>

            <figure className="boxes">
                <span className="img">
                <svg
                    viewBox="0 0 61.7998 61.7998"
                    height="800px"
                    width="800px"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g>
                    <g>
                        <path
                        fill-rule="evenodd"
                        fill="#ffe8be"
                        d="M31.129 8.432c21.281 0 12.988 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                        ></path>
                        <circle
                        r="30.8999"
                        fill="#e9573e"
                        cy="30.8999"
                        cx="30.8999"
                        ></circle>
                        <path fill="#302e33" d="M19.012 21.716h24.504V48.29H19.013z"></path>
                        <path
                        fill-rule="evenodd"
                        fill="#f9dca4"
                        d="M24.744 38.68l12.931.121v12.918l-12.931-.121V38.68z"
                        ></path>
                        <path
                        opacity="0.11"
                        fill-rule="evenodd"
                        d="M37.677 38.778v3.58c0 .297-.002.113-.002.513a1.602 1.602 0 0 1-.112.838c-4.369 4.164-11.618 1.982-12.73-5.131z"
                        ></path>
                        <path
                        fill-rule="evenodd"
                        fill="#498bd9"
                        d="M52.797 52.701c-2.716-6.287-8.913-6.893-15.122-9.83 0 5.414-12.932 4.979-12.932-.264-5.568 2.52-13.63 3.72-16.026 9.801a30.896 30.896 0 0 0 44.08.293z"
                        ></path>
                        <path
                        fill-rule="evenodd"
                        fill="#f9dca4"
                        d="M43.391 25.54c2.96 1.29.125 6.535-1.303 6.026-2.302-.822 1.164-3.584 1.303-6.027z"
                        ></path>
                        <path
                        fill-rule="evenodd"
                        fill="#ffe8be"
                        d="M31.114 8.666c8.722 0 12.377 6.2 12.601 13.367.307 9.81-5.675 21.43-12.6 21.43-6.56 0-12.706-12.018-12.333-21.928.26-6.953 3.814-12.869 12.332-12.869z"
                        ></path>
                        <path
                        fill-rule="evenodd"
                        fill="#464449"
                        d="M39.736 20.216s-5.163 17.76-25.4 11.838c5.053-2.753 4.488-6.772 4.131-11.838z"
                        ></path>
                        <path
                        fill-rule="evenodd"
                        fill="#464449"
                        d="M33.665 20.548s2.932 9.395 13.035 10.118a11.655 11.655 0 0 1-2.868-3.36 4.54 4.54 0 0 0 2.838.308c-2.456-1.842-3.068-3.339-2.655-6.89s-10.35-.176-10.35-.176z"
                        ></path>
                        <ellipse
                        ry="3.6071"
                        rx="15.57635"
                        fill="#58b0e0"
                        cy="23.7702"
                        cx="31.26417"
                        ></ellipse>
                        <path
                        fill-rule="evenodd"
                        fill="#2881bb"
                        d="M26.971 6.623h8.586a8.529 8.529 0 0 1 8.504 8.503v6.59H18.467v-6.59a8.529 8.529 0 0 1 8.504-8.503z"
                        ></path>
                        <path
                        fill-rule="evenodd"
                        fill="#ffffff"
                        d="M26.405 13.19h2.025l1.468 2.923v-1.79a.937.937 0 0 0-.026-.288.222.222 0 0 0-.097-.12.53.53 0 0 0-.236-.034h-.244v-.691h2.066v.691h-.228a.563.563 0 0 0-.245.04.222.222 0 0 0-.102.107.974.974 0 0 0-.028.294v3.876h-1.035l-1.855-3.692v2.584a.89.89 0 0 0 .027.284.202.202 0 0 0 .096.097.587.587 0 0 0 .241.035h.24v.692h-2.067v-.691h.214a.645.645 0 0 0 .244-.031.224.224 0 0 0 .106-.106.517.517 0 0 0 .039-.226v-2.875a.623.623 0 0 0-.035-.243.238.238 0 0 0-.097-.112.435.435 0 0 0-.204-.034h-.267v-.69zm5.153 0h2.485v.691h-.186a.58.58 0 0 0-.247.03.102.102 0 0 0-.05.098.615.615 0 0 0 .116.28l.659 1.091.733-1.131a7.27 7.27 0 0 0 .108-.164.239.239 0 0 0 .014-.082.105.105 0 0 0-.041-.093.395.395 0 0 0-.194-.029h-.257v-.691h1.992v.691a.568.568 0 0 0-.617.338l-1.331 1.947v.894a.945.945 0 0 0 .03.308.202.202 0 0 0 .105.104.806.806 0 0 0 .291.034h.177v.692h-2.442v-.691h.131a.926.926 0 0 0 .326-.035.228.228 0 0 0 .11-.115.918.918 0 0 0 .036-.325v-.783l-1.33-2.03a.886.886 0 0 0-.278-.299.967.967 0 0 0-.34-.039z"
                        ></path>
                        <path
                        fill-rule="evenodd"
                        fill="#e6e6e6"
                        d="M30.41 46.686l1.261.012v3.45H30.41v-3.462z"
                        ></path>
                        <path
                        transform="translate(-25.06876 86.76377) rotate(-89.74558)"
                        opacity="0.33"
                        fill="#ffffff"
                        d="M25.22 55.341h11.642v1.262H25.22z"
                        ></path>
                        <path
                        fill-rule="evenodd"
                        fill="#e6e6e6"
                        d="M9.086 52.785a12.8 12.8 0 0 1 6.118-5.923c4.156-1.787 9.588-3.585 9.604-3.59l.32.804c-.015.005-5.457 1.79-9.588 3.566a12.647 12.647 0 0 0-5.848 5.728z"
                        ></path>
                        <path
                        fill-rule="evenodd"
                        fill="#e6e6e6"
                        d="M52.43 53.064a12.792 12.792 0 0 0-6.116-5.919c-4.156-1.787-8.773-3.31-8.788-3.314l-.392.777c.015.005 4.714 1.542 8.844 3.318a12.62 12.62 0 0 1 5.842 5.714l.375-.35z"
                        ></path>
                    </g>
                    </g>
                </svg>
                </span>
                <figcaption className="caption">
                <p className="name">Jane Doe</p>
                <span className="as" title="CEO of media Ink">CEO of media Ink</span>
                </figcaption>
            </figure>

            <div className="box-body">
                <div className="box-content">
                <span className="img">
                    <svg
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 -22.5 256 256"
                    height="800px"
                    width="800px"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g>
                        <polygon
                        points="144.822496 105.321856 169.778926 133.848796 203.341343 155.294133 209.178931 105.50196 203.341343 56.8331137 169.136495 75.6715889"
                        fill="#00832D"
                        ></polygon>
                        <path
                        fill="#0066DA"
                        d="M0.000557021739,150.659712 L0.000557021739,193.089915 C0.000557021739,202.77838 7.86384724,210.643527 17.5541688,210.643527 L59.9843714,210.643527 L68.7704609,178.585069 L59.9843714,150.659712 L30.8744153,141.873623 L0.000557021739,150.659712 Z"
                        ></path>
                        <polygon
                        points="59.9838143 9.9475983e-14 0 59.9838143 30.875715 68.7494798 59.9838143 59.9838143 68.6102243 32.4390893"
                        fill="#E94235"
                        ></polygon>
                        <polygon
                        points="0.000557021739 150.679394 59.9843714 150.679394 59.9843714 59.9832573 0.000557021739 59.9832573"
                        fill="#2684FC"
                        ></polygon>
                        <path
                        fill="#00AC47"
                        d="M241.658683,25.3977775 L203.341157,56.8342278 L203.341157,155.29339 L241.818362,186.852385 C247.577967,191.364261 256.003849,187.251584 256.003849,179.930462 L256.003849,32.1785888 C256.003849,24.7757699 247.377439,20.6835169 241.658683,25.3977775"
                        ></path>
                        <path
                        fill="#00AC47"
                        d="M144.822496,105.321856 L144.822496,150.659712 L59.9843714,150.659712 L59.9843714,210.643527 L185.787731,210.643527 C195.478053,210.643527 203.341343,202.77838 203.341343,193.089915 L203.341343,155.294133 L144.822496,105.321856 Z"
                        ></path>
                        <path
                        fill="#FFBA00"
                        d="M185.787731,0 L59.9843714,0 L59.9843714,59.9838143 L144.822496,59.9838143 L144.822496,105.32167 L203.341343,56.832928 L203.341343,17.5536117 C203.341343,7.86329022 195.478053,0 185.787731,0"
                        ></path>
                    </g>
                    </svg>
                </span>
                <div className="caption">
                    <p>Google Meet Call</p>
                    <div>
                    <p className="text-sm">
                        <time className="font-semibold">28 03 2024</time> at
                        <time className="font-semibold">2 pm</time>
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div data-title="Last seen" className="box-foot">
                <figure className="box-foot-figure">
                <span className="img">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="0 0 61.7998 61.7998"
                    >
                    <g data-name="Layer 2" id="Layer_2">
                        <g data-name="—ÎÓÈ 1" id="_ÎÓÈ_1">
                        <circle
                            cx="30.8999"
                            cy="30.8999"
                            fill="#58b0e0"
                            r="30.8999"
                        ></circle>
                        <path
                            d="M23.255 38.68l15.907.146v15.602l-15.907-.147V38.68z"
                            fill="#302e33"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M53.478 51.993A30.813 30.813 0 0 1 30.9 61.8a31.225 31.225 0 0 1-3.837-.237A34.072 34.072 0 0 1 15.9 57.919a31.036 31.036 0 0 1-7.857-6.225l1.284-3.1 13.925-6.212c0 4.535 1.31 10.02 7.439 10.113 7.57.113 8.47-5.475 8.47-10.15l12.79 6.282z"
                            fill="#857a6e"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M31.462 52.495c-3.342-5.472-9.388-6.287-11.359-6.6-5.42-.86-14.56-4.28-8.564-9.72 10.765-9.764 6.898-22.032 19.513-22.032 13.47 0 8.873 12.268 19.638 22.032 5.997 5.44-3.143 8.86-8.565 9.72a14.292 14.292 0 0 0-10.663 6.6z"
                            fill="#302e33"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M39.964 42.252c-1.125 4.01-4.008 6.397-8.598 6.207-3.94-.163-7.297-2.397-8.11-6.204z"
                            fill-rule="evenodd"
                            opacity="0.18"
                        ></path>
                        <path
                            d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z"
                            fill="#ffe8be"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.973 31.973 0 0 1-1.472-7.658z"
                            fill="#f9dca4"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 0 0 1.471-7.658z"
                            fill="#f9dca4"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M19.113 25.706c-2.83-4.958-2.783-9.375-1.362-11.817 2.048-3.52 4.922-3.688 5.315-4.517 4.025-8.479 24.839-2.048 23.97 11.09a14.798 14.798 0 0 0-1.522-2.486s-.075 4.991-1.437 6.957c-1.64.464-15.061.239-20.053-9.948-4.006 2.268-5.06 7.015-4.91 10.72z"
                            fill="#969696"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M31.15 46.543c-2.66.022-15.617-4.022-12.61-26.045 0 0 .65 9.916 2.775 12.788 1.382 1.868 2.625 2.57 3.82.746 1.248-1.9 3.946-3.473 6.038-1.677 1.737-1.85 4.848-.212 6.084 1.677 1.195 1.823 2.44 1.123 3.822-.746 2.125-2.872 2.586-12.456 2.586-12.456 3.456 23.6-9.855 25.735-12.515 25.713z"
                            fill="#969696"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M26.527 36.802a7.118 7.118 0 0 1 4.568-2.096 7.29 7.29 0 0 1 4.503 2.099c-.788.525-5.874 1.737-9.071-.003z"
                            fill="#ffe8be"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M26.611 51.297a29.35 29.35 0 0 0-8.171-3.501c-4.778-.758-13.423-1.518-11.271-10.086C12.023 18.38 18.85 3.688 31.457 3.87c12.836.184 19.09 15.8 23.84 33.865 1.904 7.238-6.79 9.313-11.508 10.06A21.129 21.129 0 0 0 36 51.14c-6.963 4.765-1.812 4.7-9.389.158zm4.851 1.198a14.292 14.292 0 0 1 10.663-6.6c5.422-.86 14.562-4.28 8.565-9.72-10.765-9.764-6.167-22.032-19.638-22.032-12.615 0-8.748 12.268-19.513 22.032-5.997 5.44 3.143 8.86 8.564 9.72 1.97.313 8.017 1.127 11.36 6.6z"
                            fill="#7d7062"
                            fill-rule="evenodd"
                        ></path>
                        <path
                            d="M24.202 50.213s5.988 3.256 7.588 7.992c1.61-5.121 7.627-8.327 7.627-8.327S33.07 52.33 31.7 55.534c-.973-1.722-2.707-3.4-7.497-5.321z"
                            fill="#302e33"
                            fill-rule="evenodd"
                        ></path>
                        </g>
                    </g>
                    </svg>
                </span>
                <figcaption className="font-medium">Waiting</figcaption>
                <button type="button">
                    <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                    </svg>
                </button>
                </figure>
                <div className="box-foot-actions">
                <button type="button" aria-label="email" className="box-foot-action">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    >
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path
                        d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"
                    ></path>
                    </svg>
                </button>
                <button type="button" aria-label="meets" className="box-foot-action">
                    <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div> */}




        {/* 16th one -> cards , can use for session, its a plain yelllow card i mean no image given */}
        {/* <div>
            <div className="card">
            <div className="card__wrapper">
                <div className="card_icon">
                <svg
                    height="24"
                    width="24"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"
                    ></path>
                </svg>
                </div>

                <div className="card__menu">
                <svg
                    fill="none"
                    height="20"
                    viewBox="0 0 4 20"
                    width="4"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g fill="#000">
                    <path
                        d="m2 4c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2z"
                    ></path>
                    <path
                        d="m2 12c1.10457 0 2-.8954 2-2 0-1.10457-.89543-2-2-2s-2 .89543-2 2c0 1.1046.89543 2 2 2z"
                    ></path>
                    <path
                        d="m2 20c1.10457 0 2-.8954 2-2s-.89543-2-2-2-2 .8954-2 2 .89543 2 2 2z"
                    ></path>
                    </g>
                </svg>
                </div>
            </div>
            <div className="card__title">Web Design Templates Selection</div>
            <div className="card__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.
            </div>
            <div className="card__indicator">
                <span className="card__indicator-amount">135</span> Works /
                <span className="card__indicator-percentage">45%</span>
            </div>
            <div className="card__progress"><progress value="40" max="100"></progress></div>
            </div>

        </div> */}





        {/* 17th one, no css, success modal - its a good one, but now the green but this one also good, */}
        {/* <div>
            <div
            className="absolute z-50 flex w-3/4 max-w-96 h-24 bg-white rounded-xl overflow-hidden shadow-lg"
            >
            <svg width="16" height="96" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M 8 0 
                        Q 4 4.8, 8 9.6 
                        T 8 19.2 
                        Q 4 24, 8 28.8 
                        T 8 38.4 
                        Q 4 43.2, 8 48 
                        T 8 57.6 
                        Q 4 62.4, 8 67.2 
                        T 8 76.8 
                        Q 4 81.6, 8 86.4 
                        T 8 96 
                        L 0 96 
                        L 0 0 
                        Z"
                fill="#66cdaa"
                stroke="#66cdaa"
                stroke-width="2"
                stroke-linecap="round"
                ></path>
            </svg>
            <div className="mx-2.5 overflow-hidden w-full">
                <p
                className="mt-1.5 text-xl font-bold text-[#66cdaa] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                Success !
                </p>
                <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
                So good!<br />
                The post has been published.
                </p>
            </div>
            <button className="w-16 cursor-pointer focus:outline-none">
                <svg
                className="w-7 h-7"
                fill="none"
                stroke="mediumseagreen"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                ></path>
                </svg>
            </button>
            </div>

        </div> */}



        {/* 18th one - no css, a creative yes or no modal, looks so good */}
        {/* <div>
            <div
            className="card relative flex h-[10em] w-[15em] items-start justify-center overflow-clip rounded-[1.5em] bg-[#B7DFFB] px-[1em] py-[1.5em] shadow-[0px_2px_2px_0px_#1a4766,0px_2px_8px_0px_#3083bb]"
            >
            <span
                className="max-w-[20ch] text-center font-Poppin text-[1em] font-bold text-[#085991]"
            >
                Do you agree with the terms and conditions of our website?
            </span>
            <div
                className="group absolute bottom-[-1em] left-[2.5em] flex max-h-[6em] w-[10em] items-center justify-center gap-[11rem]"
            >
                <label htmlFor="yes" className="yes peer relative cursor-pointer">
                <input type="checkbox" name="yes" id="yes" className="peer appearance-none" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="90"
                    fill="none"
                    viewBox="0 0 43 90"
                    className="absolute bottom-0 left-1/2 h-[6rem] w-[6rem] origin-bottom -translate-x-1/2 rotate-[45deg] hover:rotate-[40deg] duration-300 peer-checked:rotate-[0deg]"
                >
                    <path
                    fill="#1269EF"
                    d="M24.87 4.21a3.52 3.52 0 0 0-7.04 0v80.96a3.52 3.52 0 1 0 7.04 0V4.21Z"
                    ></path>
                    <path
                    fill="#231F20"
                    d="M21.35 89.34a4.17 4.17 0 0 1-4.17-4.17v-81a4.17 4.17 0 1 1 8.34 0v81a4.17 4.17 0 0 1-4.17 4.17Zm0-88a2.88 2.88 0 0 0-2.87 2.87v81a2.87 2.87 0 0 0 5.74 0v-81a2.88 2.88 0 0 0-2.87-2.87Z"
                    ></path>
                    <path
                    fill="#000"
                    d="M21.35 44.69c11.427 0 20.69-8.117 20.69-18.13 0-10.013-9.263-18.13-20.69-18.13C9.923 8.43.66 16.547.66 26.56c0 10.013 9.263 18.13 20.69 18.13Z"
                    ></path>
                    <path
                    fill="#231F20"
                    d="M21.35 45.34C9.58 45.34 0 36.92 0 26.56 0 16.2 9.58 7.78 21.35 7.78c11.77 0 21.34 8.42 21.34 18.78 0 10.36-9.57 18.78-21.34 18.78Zm0-36.26c-11 0-20 7.84-20 17.48s9 17.48 20 17.48 20-7.84 20-17.48-8.95-17.48-20-17.48Z"
                    ></path>
                    <path fill="#ED487E" d="M.66 26.56v-4.99h41.38v3.92L.66 26.56Z"></path>
                    <path
                    fill="#231F20"
                    d="M0 27.23v-6.31h42.69v5.21L0 27.23Zm1.31-5v3.66l40.08-1v-2.67l-40.08.01Z"
                    ></path>
                    <path
                    fill="#ED487E"
                    d="M21.35 40.6c11.427 0 20.69-8.117 20.69-18.13 0-10.013-9.263-18.13-20.69-18.13C9.923 4.34.66 12.457.66 22.47c0 10.013 9.263 18.13 20.69 18.13Z"
                    ></path>
                    <path
                    fill="#231F20"
                    d="M21.35 41.26C9.58 41.26 0 32.83 0 22.47S9.58 3.69 21.35 3.69c11.77 0 21.34 8.43 21.34 18.78 0 10.35-9.57 18.79-21.34 18.79Zm0-36.26c-11 0-20 7.84-20 17.47 0 9.63 9 17.48 20 17.48s20-7.84 20-17.48S32.4 5 21.35 5Z"
                    ></path>
                    <path
                    fill="#fff"
                    d="M9.76 27.76v-4.28l-3.73-5.9h2.41l2.4 4 2.34-4h2.37l-3.74 5.91v4.27H9.76Zm7.59 0V17.58h7.55v1.72h-5.5v2.26h5.11v1.71H19.4v2.78h5.69v1.71h-7.74Zm9.941-3.31 2-.2a2.44 2.44 0 0 0 .73 1.44 2.21 2.21 0 0 0 1.49.48 2.28 2.28 0 0 0 1.5-.42 1.25 1.25 0 0 0 .51-1 .93.93 0 0 0-.17-.56 1.59 1.59 0 0 0-.74-.44c-.24-.09-.79-.23-1.64-.45a5.64 5.64 0 0 1-2.32-1 2.68 2.68 0 0 1-.5-3.51 2.79 2.79 0 0 1 1.27-1 5.061 5.061 0 0 1 2-.35 4.29 4.29 0 0 1 2.88.84 2.929 2.929 0 0 1 1 2.24l-2.06.09a1.72 1.72 0 0 0-.56-1.13 2.08 2.08 0 0 0-1.3-.34 2.34 2.34 0 0 0-1.41.37.71.71 0 0 0-.32.63.8.8 0 0 0 .3.62 5.679 5.679 0 0 0 1.89.68c.766.154 1.512.4 2.22.73a3 3 0 0 1 1.13 1 3.06 3.06 0 0 1-1.46 4.4 5.719 5.719 0 0 1-2.22.37 4.38 4.38 0 0 1-3-.89 3.89 3.89 0 0 1-1.22-2.6Z"
                    ></path>
                </svg>
                </label>

                <label
                htmlFor="no"
                className="no relative cursor-pointer origin-bottom duration-300 peer-has-[:checked]:rotate-[-160deg]"
                >
                <input type="checkbox" name="no" id="no" className="peer appearance-none" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="89"
                    fill="none"
                    viewBox="0 0 42 89"
                    className="absolute bottom-0 right-1/2 h-[6rem] w-[6rem] origin-bottom translate-x-1/2 rotate-[-45deg] duration-300 hover:rotate-[-40deg] peer-checked:rotate-0"
                >
                    <path
                    fill="#ED487E"
                    d="M21.481.49h-.48a3.35 3.35 0 0 0-3.35 3.35V85.1c0 1.85 1.5 3.35 3.35 3.35h.48c1.85 0 3.35-1.5 3.35-3.35V3.84c0-1.85-1.5-3.35-3.35-3.35Z"
                    ></path>
                    <path
                    fill="#FC932D"
                    d="M23.131 45.03c10.118 0 18.32-8.202 18.32-18.32S33.25 8.39 23.132 8.39c-10.117 0-18.32 8.202-18.32 18.32s8.203 18.32 18.32 18.32Z"
                    ></path>
                    <path
                    fill="#FDD259"
                    d="M18.801 45.03c10.118 0 18.32-8.202 18.32-18.32S28.92 8.39 18.801 8.39C8.684 8.39.481 16.592.481 26.71s8.203 18.32 18.32 18.32Z"
                    ></path>
                    <path
                    fill="#000"
                    d="M16.431 33.05a1.4 1.4 0 0 1-1.1-.52l-4.34-5.29v4.38a1.44 1.44 0 0 1-2.87 0v-8.37a1.44 1.44 0 0 1 1-1.35 1.42 1.42 0 0 1 1.59.44l4.28 5.28v-4.66a1.44 1.44 0 1 1 2.87 0v8.66a1.44 1.44 0 0 1-1 1.35 1.62 1.62 0 0 1-.43.08Zm8.221-.39a5.3 5.3 0 1 1 5.3-5.3 5.31 5.31 0 0 1-5.3 5.3Zm0-7.73a2.43 2.43 0 1 0 .019 4.859 2.43 2.43 0 0 0-.02-4.859Z"
                    ></path>
                    <path
                    fill="#231F20"
                    d="M21.541 89h-.49a3.86 3.86 0 0 1-3.86-3.86v-40a.519.519 0 0 1 1 0v40a2.84 2.84 0 0 0 2.83 2.84h.49a2.84 2.84 0 0 0 2.83-2.84V45a.52.52 0 1 1 1 0v40.14a3.86 3.86 0 0 1-3.8 3.86Zm3.34-78.97a.51.51 0 0 1-.51-.51V3.87a.52.52 0 0 1 1 0v5.62a.51.51 0 0 1-.49.54Zm-7.18-1.21a.51.51 0 0 1-.51-.51V3.87a3.84 3.84 0 0 1 3.85-3.86h.5a.51.51 0 1 1 0 1h-.49a2.83 2.83 0 0 0-2 .84 2.78 2.78 0 0 0-.82 2v4.44a.511.511 0 0 1-.53.53Z"
                    ></path>
                    <path
                    fill="#231F20"
                    d="M23.171 45.59a.52.52 0 0 1 0-1 17.81 17.81 0 0 0 14.89-27.6.51.51 0 1 1 .85-.56 18.83 18.83 0 0 1-15.74 29.16Zm10.25-33.52a.52.52 0 0 1-.29-.09 17.64 17.64 0 0 0-9.93-3 .51.51 0 0 1-.51-.51.54.54 0 0 1 .54-.51 18.75 18.75 0 0 1 10.51 3.21.53.53 0 0 1 .14.72.541.541 0 0 1-.46.18Z"
                    ></path>
                    <path
                    fill="#231F20"
                    d="M18.861 45.61a18.84 18.84 0 0 1-16.87-27.27 18.85 18.85 0 0 1 31-4.09.51.51 0 0 1-.05.73.5.5 0 0 1-.72 0 17.82 17.82 0 1 0 3.57 6.18.526.526 0 1 1 1-.33 18.87 18.87 0 0 1-17.93 24.78Z"
                    ></path>
                    <path
                    fill="#231F20"
                    d="M16.48 32.17a.51.51 0 0 1-.39-.19l-6-7.26v6.94a.52.52 0 0 1-1 0v-8.37a.51.51 0 0 1 .34-.48.5.5 0 0 1 .57.15l6 7.27V23a.52.52 0 1 1 1 0v8.66a.52.52 0 0 1-.52.51Zm8.221-.39a4.38 4.38 0 1 1 4.38-4.38 4.39 4.39 0 0 1-4.38 4.38Zm0-7.73a3.35 3.35 0 1 0 .02 6.7 3.35 3.35 0 0 0-.02-6.7Z"
                    ></path>
                </svg>
                </label>
            </div>
            </div>
        </div> */}



        {/* 19th one, its a rating modal, but make some changes and use it */}
        {/* <div>
            <div className="card">
                <div className="card-top">
                    <p className="card__title">Rick And Morty</p>
                    <div className="rating">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M8.51948 1.625C9.1214 1.625 10.0427 4.16625 10.4636 5.43013C10.6014 5.8437 10.9837 6.13054 11.4192 6.14904C12.7373 6.20505 15.375 6.39722 15.375 7.0384C15.375 7.66696 13.5161 9.17543 12.5322 9.92976C12.1816 10.1986 12.0365 10.6604 12.1687 11.082C12.5631 12.34 13.2755 14.8755 12.7573 15.3009C12.2506 15.717 10.2147 14.2326 9.15246 13.4009C8.77021 13.1016 8.22949 13.1012 7.84719 13.4004C6.78473 14.2321 4.75246 15.717 4.28166 15.3009C3.79912 14.8745 4.47615 12.3275 4.84741 11.0727C4.97086 10.6555 4.82425 10.2029 4.47885 9.93826C3.49798 9.18681 1.625 7.66933 1.625 7.0384C1.625 6.3962 4.2711 6.20444 5.5871 6.14878C6.0197 6.13048 6.3998 5.84769 6.53973 5.43793C6.97041 4.17673 7.91633 1.625 8.51948 1.625Z" fill="#00B9AE" stroke="#00B9AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
                <div className="card__info">
                    <p className="episode__num">46Ep</p>
                    <p className="episode__type">Fantasy</p>
                </div>
                <div className="card__btns">
                    <button className="add-btn">+</button>
                    <button className="watch-btn">watch</button>
                </div>
            </div>
        </div> */}



        {/* 20th one, forgot password modal, really good one */}
        {/* <div>
            <div className="card">
            <div className="BG">
                <svg
                viewBox="0 0 512 512"
                className="ionicon"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z"
                ></path>
                </svg>
            </div>
            <div className="content">
                <p className="heading">Oops!</p>
                <p className="sub-heading">forgot password?</p>
                <p className="sub-sub-heading">Type your email to recover</p>
                <input className="email" placeholder="Email" type="text" />
                <button className="card-btn">Reset Password</button>
            </div>
            </div>
        </div> */}



        {/* 21st one, a really nice one, used for book session section, the price and detail section */}
        {/* <div>
            <div className="plan-card">
                <h2>Business<span>For business services</span></h2>
                <div className="etiquet-price">
                    <p>254.99</p>
                    <div></div>
                </div>
                <div className="benefits-list">
                    <ul>
                        <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                            </svg><span>Analysis</span></li>
                        <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                            </svg><span>Consulting</span></li>
                        <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                            </svg><span>Facilitate</span></li>
                    </ul>
                </div>
                <div className="button-get-plan">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-rocket">
                            <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path>
                        </svg>
                        <span>START PROJECT</span>
                    </a>
                </div>
            </div>
        </div> */}



        {/* 22nd one, it can really use for the session card, with violet border */}
        {/* <div>
            <article className="card">
                <div className="card-int">
                    <span className="card__span">Category</span>
                    <div className="img"></div>
                    <div className="card-data">
                    <p className="title">This is a test title
                    </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="button">More info</button>
                    </div>
                </div>
            </article>
        </div> */}




        {/* 23rd one, it can be used for category in sessions */}
        {/* <div>
            <div className="navigation-card">
            <a href="#" className="tab">
                <svg
                className="svgIcon"
                viewBox="0 0 104 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M100.5 40.75V96.5H66V68.5V65H62.5H43H39.5V68.5V96.5H3.5V40.75L52 4.375L100.5 40.75Z"
                    stroke="black"
                    stroke-width="7"
                ></path>
                </svg>
            </a>

            <a href="#" className="tab">
                <svg
                width="104"
                height="100"
                viewBox="0 0 104 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <rect
                    x="21.5"
                    y="3.5"
                    width="60"
                    height="60"
                    rx="30"
                    stroke="black"
                    stroke-width="7"
                ></rect>
                <g clip-path="url(#clip0_41_27)">
                    <mask
                    id="mask0_41_27"
                    style={{maskType:"luminance"}}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="61"
                    width="104"
                    height="52"
                    >
                    <path
                        d="M0 113C0 84.2812 23.4071 61 52.1259 61C80.706 61 104 84.4199 104 113H0Z"
                        fill="white"
                    ></path>
                    </mask>
                    <g mask="url(#mask0_41_27)">
                    <path
                        d="M-7 113C-7 80.4152 19.4152 54 52 54H52.2512C84.6973 54 111 80.3027 111 112.749H97C97 88.0347 76.9653 68 52.2512 68H52C27.1472 68 7 88.1472 7 113H-7ZM-7 113C-7 80.4152 19.4152 54 52 54V68C27.1472 68 7 88.1472 7 113H-7ZM52.2512 54C84.6973 54 111 80.3027 111 112.749V113H97V112.749C97 88.0347 76.9653 68 52.2512 68V54Z"
                        fill="black"
                    ></path>
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_41_27">
                    <rect
                        width="104"
                        height="39"
                        fill="white"
                        transform="translate(0 61)"
                    ></rect>
                    </clipPath>
                </defs>
                </svg>
            </a>

            <a href="#" className="tab">
                <svg
                width="101"
                height="114"
                viewBox="0 0 101 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle
                    cx="46.1726"
                    cy="46.1727"
                    r="29.5497"
                    transform="rotate(36.0692 46.1726 46.1727)"
                    stroke="black"
                    stroke-width="7"
                ></circle>
                <line
                    x1="61.7089"
                    y1="67.7837"
                    x2="97.7088"
                    y2="111.784"
                    stroke="black"
                    stroke-width="7"
                ></line>
                </svg>
            </a>
            </div>
        </div> */}



        {/* 24th one, it is perfect for session card, i mean the like one shows card */}
        {/* <div>
            <div className="card">
                <div className="image-container">
                        <svg viewBox="0 0 1921 1081" xlinkHref="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="svg">
                            <defs>
                                <radialGradient gradientUnits="objectBoundingBox" gradientTransform="translate(0.219) scale(0.563 1)" r="1.204" cy="0.5" cx="0.5" id="radial-gradient">
                                    <stop stop-color="#fff" offset="0"></stop>
                                    <stop stop-color="#bcbcbc" offset="1"></stop>
                                </radialGradient>
                                </defs>
                                <g transform="translate(-121.5 -92.5)" id="hoodie">
                                <rect fill="url(#radial-gradient)" stroke-width="1" stroke-miterlimit="10" stroke="#fff" transform="translate(122 93)" height="1080" width="1920" data-name="Rectangle 83" id="Rectangle_83"></rect>
                                <g transform="translate(679.338 886.938)" data-name="Group 67" id="Group_67">
                                    <path fill="#dbdbdb" transform="translate(-679.026 -701.302)" d="M689.907,702.85s-7.253,22.231-9.689,34.844a8.084,8.084,0,0,0,2.15,7.3c5.49,5.5,19.551,16.583,46.956,20.927a15.4,15.4,0,0,0,14.4-5.733l14.95-18.791Z" data-name="Path 27" id="Path_27"></path>
                                    <path transform="translate(-679.338 -701.77)" d="M731.958,767.6a14.468,14.468,0,0,1-2.48-.2c-27.247-4.329-41.466-15.15-47.529-21.228a9.162,9.162,0,0,1-2.437-8.227c2.422-12.527,9.646-34.744,9.718-34.973l.387-1.2,1.089.616,69.846,39.13-15.709,19.737A16.4,16.4,0,0,1,731.958,767.6Zm-41.136-62.765c-1.534,4.787-7.2,22.79-9.274,33.526a7.031,7.031,0,0,0,1.878,6.364c5.877,5.891,19.723,16.412,46.382,20.64a14.4,14.4,0,0,0,13.445-5.361l14.19-17.845Z" data-name="Path 28" id="Path_28"></path>
                                </g>
                                <g transform="translate(1403.771 886.981)" data-name="Group 68" id="Group_68">
                                    <path fill="#dbdbdb" transform="translate(-1184.283 -701.345)" d="M1254.631,702.85s7.253,22.231,9.689,34.844a8.084,8.084,0,0,1-2.15,7.3c-5.49,5.5-19.551,16.583-46.956,20.927a15.4,15.4,0,0,1-14.4-5.733l-14.95-18.791Z" data-name="Path 29" id="Path_29"></path>
                                    <path transform="translate(-1184.76 -701.8)" d="M1213.369,767.59a16.533,16.533,0,0,1-12.9-6.307l-15.709-19.737L1255.7,701.8l.387,1.2c.072.215,7.31,22.432,9.718,34.973a9.161,9.161,0,0,1-2.437,8.227c-6.049,6.063-20.282,16.9-47.529,21.228A20.362,20.362,0,0,1,1213.369,767.59Zm-25.485-25.427,14.19,17.845a14.42,14.42,0,0,0,13.445,5.361c26.674-4.243,40.506-14.749,46.4-20.64a7.093,7.093,0,0,0,1.878-6.364c-2.078-10.75-7.74-28.738-9.273-33.525Z" data-name="Path 30" id="Path_30"></path>
                                </g>
                                <g transform="translate(868.454 973.453)" data-name="Group 69" id="Group_69">
                                    <path fill="#dbdbdb" transform="translate(-810.972 -761.818)" d="M1024.839,822.233c-118.149.186-175.51-12.7-199.06-20.324a20,20,0,0,1-13.789-19.049V762.85h425.668v19.78a19.992,19.992,0,0,1-14,19.12C1199.7,809.232,1141.655,822.061,1024.839,822.233Z" data-name="Path 31" id="Path_31"></path>
                                    <path transform="translate(-811.28 -762.13)" d="M1022.681,823.577c-116.458,0-173.317-12.742-196.91-20.368a20.954,20.954,0,0,1-14.491-20.038V762.13h427.733v20.812a20.941,20.941,0,0,1-14.72,20.109c-24.295,7.6-82.488,20.353-199.146,20.525h-2.465ZM813.344,764.194v18.977a18.9,18.9,0,0,0,13.072,18.074c23.478,7.6,80.123,20.267,196.279,20.267h2.465c116.386-.172,174.349-12.886,198.53-20.439a18.894,18.894,0,0,0,13.273-18.146V764.18H813.344Z" data-name="Path 32" id="Path_32"></path>
                                </g>
                                <g transform="translate(687.323 338.147)" data-name="Group 70" id="Group_70">
                                    <path fill="#144076" transform="translate(-684.595 -318.574)" d="M1276.044,391.057c-80.022-65.732-179.954-70.978-195.391-71.394v-.043s-.4,0-1.061.014c-.659-.014-1.061-.014-1.061-.014v.043c-15.451.416-115.368,5.662-195.391,71.394-86.974,71.437-202.07,442.41-197.369,470.474s25.857,48.475,70.52,45.924c39.961-2.279,108.173-164.761,122.062-198.888a.853.853,0,0,1,1.62.487c-18.16,136.8-25.943,234.162-13.2,245.858,39.99,36.736,385.679,36.736,425.669,0,12.728-11.7,4.959-109.062-13.2-245.858a.853.853,0,0,1,1.62-.487c13.889,34.127,82.1,196.609,122.062,198.888,44.662,2.551,65.818-17.859,70.52-45.924C1478.114,833.467,1363.018,462.494,1276.044,391.057Z" data-name="Path 33" id="Path_33"></path>
                                    <path transform="translate(-684.909 -318.89)" d="M1079.906,983.809c-91.217,0-192.61-8.6-213.536-27.821-11.9-10.922-7.74-91.188,12.7-245.385-14.62,35.776-82.287,195.907-122.42,198.2-55,3.053-68.441-27.964-71.594-46.784-2.422-14.419,25.757-115.54,64.356-219.5,28.423-76.511,83.534-211,133.371-251.95,78.13-64.184,173.977-70.907,195.018-71.595v-.043l1.046-.029,1.075.014,2.078-.029v.086c21.041.688,116.873,7.41,195.018,71.595,49.851,40.95,104.962,175.425,133.371,251.95,38.614,103.959,66.778,205.08,64.356,219.5-3.153,18.82-16.641,49.851-71.594,46.784-40.319-2.308-108.388-163.858-122.607-198.673,20.611,154.441,24.8,234.907,12.885,245.858C1272.516,975.195,1171.108,983.809,1079.906,983.809ZM879.384,707.335a2.023,2.023,0,0,1,.5.072,1.888,1.888,0,0,1,1.4,2.107c-20.21,152.219-24.768,234.635-13.531,244.955,39.66,36.421,384.618,36.421,424.278,0,11.237-10.32,6.679-92.736-13.531-244.955a1.888,1.888,0,0,1,1.4-2.107,1.791,1.791,0,0,1,2.179,1.1c13.316,32.708,81.743,195.993,121.159,198.243,39.5,2.265,64.184-13.746,69.444-45.064,2.379-14.176-25.757-114.781-64.256-218.453-28.337-76.325-83.276-210.426-132.754-251.061-78.947-64.844-176.1-70.663-194.774-71.165l-1.577-.029-.473.029c-18.676.5-115.827,6.321-194.76,71.165C834.621,432.81,779.7,566.927,751.345,643.237c-38.5,103.672-66.635,204.277-64.256,218.453,5.246,31.318,29.914,47.343,69.445,45.064C795.95,904.5,864.377,741.219,877.693,708.5A1.816,1.816,0,0,1,879.384,707.335Z" data-name="Path 34" id="Path_34"></path>
                                </g>
                                <g transform="translate(894.605 274.45)" data-name="Group 71" id="Group_71">
                                    <path fill="#dbdbdb" transform="translate(-829.219 -274.134)" d="M1202.879,371.815c-3.2-13.559-12.112-18.275-17.931-19.923a4.091,4.091,0,0,1-2.695-5.633c3.354-7.482,7.009-22.489-8.743-35.6-22.016-18.347-90.529-35.475-156.591-35.475-61.174,0-134.575,17.128-156.591,35.475-15.752,13.129-12.1,28.136-8.743,35.6a4.091,4.091,0,0,1-2.695,5.633c-5.819,1.634-14.735,6.364-17.931,19.923-4.888,20.8,14.677,30.587,63.611,41.6s105.206,74.619,122.334,78.288c17.128-3.669,73.4-67.28,122.334-78.288C1188.2,402.4,1207.781,392.612,1202.879,371.815Z" data-name="Path 35" id="Path_35"></path>
                                    <path transform="translate(-829.525 -274.45)" d="M1017.24,493.075l-.215-.043c-6.651-1.419-18.547-11.194-33.626-23.578-24.61-20.21-58.322-47.887-88.723-54.724-38.255-8.614-55.713-16.025-62.249-26.474-2.938-4.687-3.626-10.033-2.15-16.369,3.383-14.362,13.129-19.12,18.648-20.683a3.189,3.189,0,0,0,2.021-1.691,3.038,3.038,0,0,0,.014-2.523c-3.569-7.969-7.152-23.349,9.016-36.822,22.432-18.691,97.38-35.719,157.25-35.719,63.081,0,133.615,16.025,157.25,35.719,16.182,13.488,12.6,28.867,9.016,36.822a2.935,2.935,0,0,0,.014,2.523,3.189,3.189,0,0,0,2.021,1.691c5.518,1.548,15.265,6.307,18.647,20.683h0c1.491,6.335.788,11.682-2.15,16.369-6.536,10.449-23.994,17.859-62.249,26.474-30.4,6.837-64.113,34.514-88.723,54.724-15.079,12.384-26.975,22.159-33.626,23.578Zm0-216.561c-59.483,0-133.8,16.8-155.931,35.245-15.136,12.613-11.8,26.961-8.457,34.4a5.045,5.045,0,0,1-.029,4.243,5.243,5.243,0,0,1-3.34,2.809c-6.206,1.749-14.219,6.493-17.2,19.164-1.362,5.762-.745,10.607,1.892,14.792,7.167,11.438,29.541,18.49,60.945,25.556,30.888,6.952,64.8,34.8,89.583,55.14,14.692,12.054,26.316,21.615,32.536,23.105,6.206-1.491,17.845-11.051,32.536-23.105,24.768-20.339,58.695-48.188,89.583-55.14,31.4-7.066,53.793-14.118,60.959-25.556,2.623-4.185,3.239-9.03,1.892-14.792-2.981-12.671-10.994-17.415-17.2-19.164a5.236,5.236,0,0,1-3.339-2.809,5.1,5.1,0,0,1-.029-4.243c3.34-7.425,6.665-21.787-8.457-34.4C1152.833,294.818,1087.43,276.514,1017.24,276.514Z" data-name="Path 36" id="Path_36"></path>
                                </g>
                                <g transform="translate(975.916 293.6)" data-name="Group 72" id="Group_72">
                                    <path fill="#144076" transform="translate(-885.945 -287.5)" d="M1096.279,325.555c-14.677-39.144-107.284-37.008-103.945-37.008s-89.253-2.136-103.945,37.008c-13.6,36.277,74.4,60.286,99.286,98.455a5.519,5.519,0,0,0,9.288,0C1021.889,385.855,1109.881,361.832,1096.279,325.555Z" data-name="Path 37" id="Path_37"></path>
                                    <path fill="#144076" transform="translate(-886.255 -287.81)" d="M992.658,427.889a6.591,6.591,0,0,1-5.518-3c-10.177-15.609-31.117-28.867-51.356-41.7-28.953-18.332-56.3-35.647-48.031-57.691,14.147-37.739,98.455-37.854,104.862-37.668h.043c6.049-.215,90.715-.158,104.9,37.668,8.27,22.045-19.078,39.359-48.031,57.691-20.239,12.828-41.179,26.086-51.356,41.7A6.59,6.59,0,0,1,992.658,427.889Zm-1.018-138c-9.962,0-88.837,1.347-101.967,36.349-7.668,20.468,18.977,37.352,47.2,55.226,20.439,12.943,41.566,26.316,51.987,42.3a4.5,4.5,0,0,0,7.568,0c10.42-15.982,31.562-29.369,51.987-42.3,28.222-17.874,54.882-34.758,47.2-55.226-13.129-35-91.976-36.349-101.952-36.349h-.014v.014l-1.921-.014Z" data-name="Path 38" id="Path_38"></path>
                                </g>
                                <g transform="translate(1048.135 448.054)" data-name="Group 75" id="Group_75">
                                    <g transform="translate(0 0)" data-name="Group 73" id="Group_73">
                                    <path fill="#47474c" transform="translate(-936.484 -395.41)" d="M947.836,401.358a5.418,5.418,0,1,1-5.418-5.418A5.414,5.414,0,0,1,947.836,401.358Z" data-name="Path 39" id="Path_39"></path>
                                    <path transform="translate(-936.64 -395.57)" d="M942.574,407.438a5.934,5.934,0,1,1,5.934-5.934A5.946,5.946,0,0,1,942.574,407.438Zm0-10.822a4.9,4.9,0,1,0,4.9,4.9A4.909,4.909,0,0,0,942.574,396.616Z" data-name="Path 40" id="Path_40"></path>
                                    </g>
                                    <g transform="translate(56.487 0)" data-name="Group 74" id="Group_74">
                                    <path fill="#47474c" transform="translate(-975.894 -395.41)" d="M987.246,401.358a5.418,5.418,0,1,1-5.418-5.418A5.414,5.414,0,0,1,987.246,401.358Z" data-name="Path 41" id="Path_41"></path>
                                    <path transform="translate(-976.05 -395.57)" d="M981.984,407.438a5.934,5.934,0,1,1,5.934-5.934A5.946,5.946,0,0,1,981.984,407.438Zm0-10.822a4.9,4.9,0,1,0,4.9,4.9A4.909,4.909,0,0,0,981.984,396.616Z" data-name="Path 42" id="Path_42"></path>
                                    </g>
                                </g>
                                <path transform="translate(136.632 21.684)" d="M1110.076,324.49c-1.089,6.163,3.626,6.034,3.626,6.034-4.071,4.8-19.966,19.909-25.14,23.464a98.7,98.7,0,0,1-16.526,9c-5.719,2.494-11.395,4.73-17.013,7.281A249.431,249.431,0,0,0,1022.356,387a118.945,118.945,0,0,0-27.706,23.965,94.137,94.137,0,0,1,11.61-14.563,113.846,113.846,0,0,1,14.333-12.04c10.191-7.281,21.442-12.814,32.766-17.874,11.409-5.06,23.12-8.786,33.468-15.15C1098.81,343.811,1108.1,330.352,1110.076,324.49Z" data-name="Path 43" id="Path_43"></path>
                                <path transform="translate(71.035 21.35)" d="M952.36,396.791a122.341,122.341,0,0,0-14.376-11.567,193.593,193.593,0,0,0-32.006-18.046c-47.371-21.013-56.014-34.514-59.483-43.458,0,0,.86,5.576-3.225,7.124a84.15,84.15,0,0,0,28.193,23.564c10.664,6.178,21.815,11.137,32.723,16.469,10.951,5.246,21.772,10.707,32.092,16.956,10.22,6.35,20.081,13.588,27.348,23.449A62.461,62.461,0,0,0,952.36,396.791Z" data-name="Path 44" id="Path_44"></path>
                                <g transform="translate(949.178 540.102)" data-name="Group 76" id="Group_76">
                                    <path fill="#dbdbdb" transform="translate(-799.273 -418.369)" d="M1065.571,570.358h-11.682a7.9,7.9,0,0,0-1.691-4.071c-1.247-1.247-3.383-1.892-6.321-1.892-2.9,0-4.916.487-6.034,1.448a3.767,3.767,0,0,0-1.29,2.981c0,1.763,2.465,3.182,7.324,4.271a114.856,114.856,0,0,1,12,3.1c.645.244,1.2.444,1.605.645,4.959,2.336,7.41,5.891,7.41,10.635,0,5.8-2.422,10.033-7.21,12.685-.6.33-1.175.6-1.82.889a27.2,27.2,0,0,1-10.793,2.007c-6.077,0-10.994-1.089-14.735-3.225a14.084,14.084,0,0,1-5.289-5.16,14.53,14.53,0,0,1-1.763-7.281h12.241a5.831,5.831,0,0,0,2.25,4.873c1.491,1.175,4.028,1.777,7.611,1.777,2.695,0,4.716-.573,6.049-1.691a3.78,3.78,0,0,0,1.534-2.981c0-1.892-2.408-3.383-7.21-4.429-7.167-1.534-11.682-2.781-13.531-3.669-4.916-2.293-7.324-5.834-7.324-10.75a14.031,14.031,0,0,1,3.827-10.019c3.225-3.426,8.055-5.117,14.462-5.117,5.275,0,9.5.774,12.685,2.25a4.393,4.393,0,0,1,.774.4,12.756,12.756,0,0,1,5.189,4.959A14.855,14.855,0,0,1,1065.571,570.358Z" data-name="Path 45" id="Path_45"></path>
                                    <path fill="#dbdbdb" transform="translate(-830.846 -459.79)" d="M1027.956,520.592l33.067,55.1H1007.9l-31.576-52.632L952.42,483.225l23.908-14.376,15.064-9.059Z" data-name="Path 46" id="Path_46"></path>
                                    <path fill="#dbdbdb" transform="translate(-815.203 -418.213)" d="M1036.321,579.662v22.589h-10.994v-2.494a23.509,23.509,0,0,1-12.886,3.827h-.129a23.923,23.923,0,0,1,0-47.844h.129a23.627,23.627,0,0,1,12.886,3.827v-2.623h10.994Zm-10.994,2.494v-4.988a13.186,13.186,0,0,0-12.886-10.635h-.129a13.151,13.151,0,0,0,0,26.3h.129A13.25,13.25,0,0,0,1025.328,582.156Z" data-name="Path 47" id="Path_47"></path>
                                    <path fill="#dbdbdb" transform="translate(-830.807 -422.546)" d="M1000.3,584v22.589H989.3v-2.494a23.58,23.58,0,0,1-12.885,3.827H976.3a23.923,23.923,0,0,1,0-47.844h.115A23.663,23.663,0,0,1,989.3,563.9V545.74H1000.3ZM989.3,586.489V581.5a13.186,13.186,0,0,0-12.885-10.635H976.3a13.151,13.151,0,0,0,0,26.3h.115A13.238,13.238,0,0,0,989.3,586.489Z" data-name="Path 48" id="Path_48"></path>
                                    <path fill="#dbdbdb" transform="translate(-845.041 -447.323)" d="M990.524,541.55l12.972,21.672H950.419L920.95,514.173l-1.29-2.136,1.29-.76,37.725-22.718Z" data-name="Path 49" id="Path_49"></path>
                                    <rect fill="#dbdbdb" transform="translate(105.421 137.527)" height="46.511" width="11.954" data-name="Rectangle 84" id="Rectangle_84"></rect>
                                    <rect fill="#dbdbdb" transform="translate(105.421 123.438)" height="10.506" width="11.954" data-name="Rectangle 85" id="Rectangle_85"></rect>
                                    <path fill="#dbdbdb" transform="translate(-851.844 -422.546)" d="M951.79,584v22.589H940.8v-2.494a23.688,23.688,0,0,1-12.929,3.827h-.115a23.923,23.923,0,0,1,0-47.844h.115A23.808,23.808,0,0,1,940.8,563.9V545.74H951.79ZM940.8,586.489V581.5a13.185,13.185,0,0,0-12.929-10.635h-.115a13.151,13.151,0,0,0,0,26.3h.115A13.237,13.237,0,0,0,940.8,586.489Z" data-name="Path 50" id="Path_50"></path>
                                    <path fill="#dbdbdb" transform="translate(-859.224 -434.844)" d="M935.133,532.611,946,550.742h-53.1l-5.963-9.947,39.015-23.435Z" data-name="Path 51" id="Path_51"></path>
                                    <path fill="#dbdbdb" transform="translate(-867.6 -418.213)" d="M915.4,579.662v22.589H904.408v-2.494a23.724,23.724,0,0,1-12.929,3.827h-.129a23.923,23.923,0,0,1,0-47.844h.129a23.881,23.881,0,0,1,12.929,3.827v-2.623H915.4Zm-10.994,2.494v-4.988a13.186,13.186,0,0,0-12.929-10.635h-.129a13.152,13.152,0,0,0,0,26.3h.129A13.25,13.25,0,0,0,904.408,582.156Z" data-name="Path 52" id="Path_52"></path>
                                </g>
                                <path transform="translate(111.117 53.658)" d="M942.952,521.374a2.056,2.056,0,0,1-2.021-1.691c-11.567-63.439-.1-119.21.014-119.769a2.065,2.065,0,0,1,4.042.846c-.115.545-11.4,55.57.014,118.178a2.086,2.086,0,0,1-1.663,2.408A3.533,3.533,0,0,1,942.952,521.374Z" data-name="Path 53" id="Path_53"></path>
                                <path transform="translate(128.257 53.656)" d="M977.4,540.182a1.749,1.749,0,0,1-.53-.072,2.068,2.068,0,0,1-1.476-2.523c12.212-46.368,4.916-136.18,4.845-137.083a2.063,2.063,0,0,1,4.114-.33c.072.9,7.425,91.417-4.959,138.473A2.065,2.065,0,0,1,977.4,540.182Z" data-name="Path 54" id="Path_54"></path>
                                <path transform="translate(111.144 85.257)" d="M946.666,476.618a5.418,5.418,0,1,1-5.418-5.418A5.414,5.414,0,0,1,946.666,476.618Z" data-name="Path 55" id="Path_55"></path>
                                <path transform="translate(127.991 91.15)" d="M985.546,490.218a5.418,5.418,0,1,1-5.418-5.418A5.414,5.414,0,0,1,985.546,490.218Z" data-name="Path 56" id="Path_56"></path>
                                <path transform="translate(57.485 54.278)" d="M812,399.71c4.2,19.694,6.436,39.818,8.887,59.813,2.322,20.038,4.142,40.133,5.69,60.243,1.39,20.124,2.523,40.276,2.981,60.443.487,20.167.358,40.362-.731,60.5.315-20.167-.1-40.319-.86-60.443q-1.182-30.207-3.454-60.343c-1.39-20.1-3.225-40.176-5.217-60.228q-1.484-15.05-3.225-30.057C814.867,419.648,814.007,409.557,812,399.71Z" data-name="Path 57" id="Path_57"></path>
                                <path transform="translate(180.783 54.278)" d="M1114.371,399.71c-2.021,9.833-2.881,19.938-4.085,29.928q-1.741,15.007-3.225,30.057c-1.978,20.052-3.827,40.119-5.217,60.228q-2.322,30.143-3.454,60.343c-.76,20.138-1.175,40.291-.86,60.443-1.075-20.138-1.2-40.334-.731-60.5s1.591-40.319,2.981-60.443c1.562-20.11,3.368-40.2,5.69-60.243C1107.936,439.528,1110.172,419.418,1114.371,399.71Z" data-name="Path 58" id="Path_58"></path>
                                </g>
                            </svg>
                            
                    <div className="price">$49.9</div>
                </div>
                <label className="favorite">
                    <input type="checkbox" checked={true}  />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                        <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"></path>
                    </svg>
                </label>

                <div className="content">
                    <div className="brand">ADIDAS</div>
                    <div className="product-name">Classic oversized hoodie</div>
                    <div className="color-size-container">
                        <div className="colors">
                            Color
                            <ul className="colors-container">
                                <li className="color"><a href="#"></a> <span className="color-name">Collegiate Gold</span></li>
                                <li className="color active"><a href="#"></a><span className="color-name">Team Navy</span></li>
                                <li className="color"><a href="#"></a><span className="color-name">Pulse Blue</span></li>
                                <li className="color"><a href="#"></a><span className="color-name">Pink Fusion</span></li>
                                +2
                            </ul>
                        </div>
                        <div className="sizes">
                            Size
                            <ul className="size-container">
                                <li className="size">
                                    <label className="size-radio">
                                        <input name="size" value="xs" type="radio" />
                                        <span className="name">XS</span>
                                    </label>
                                </li>
                                <li className="size">
                                    <label className="size-radio">
                                        <input type="radio" checked={true} name="size" value="s"  />
                                        <span className="name">S</span>
                                    </label>
                                </li>
                                <li className="size">
                                    <label className="size-radio">
                                        <input name="size" value="m" type="radio" />
                                        <span className="name">M</span>
                                    </label>
                                </li>
                                <li className="size">
                                    <label className="size-radio">
                                        <input name="size" value="l" type="radio" />
                                        <span className="name">L</span>
                                    </label>
                                </li>
                                <li className="size">
                                    <label className="size-radio">
                                        <input name="size" value="xl" type="radio" />
                                        <span className="name">XL</span>
                                    </label>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="rating">
                        <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" className="svg four-star-svg">
                            <path fill="#fc0" transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com"></path>
                            <path fill="#fc0" transform="translate(20.607 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-2"></path>
                            <path fill="#fc0" transform="translate(41.215 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-3"></path>
                            <path fill="#fc0" transform="translate(61.823 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-4"></path>
                            <path fill="#e9e9e9" transform="translate(82.431 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-5"></path>
                        </svg>
                        (29,062)
                    </div>
                </div>

                <div className="button-container">
                    <button className="buy-button button">Buy Now</button>
                    <button className="cart-button button">
                        <svg viewBox="0 0 27.97 25.074" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z" id="cart-shopping-solid"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div> */}






        {/* 25th one, card for session, special 4 corners */}
        {/* <div>
            <div className="card">
            <div className="img"></div>
            <span>About Me</span>
            <p className="info">
                I’m Walter, a multidisciplinary designer who focuses on telling my clients’
                stories visually, through enjoyable and meaningful experiences. I specialize
                in responsive websites and functional user interfaces.
            </p>
            <div className="share">
                <a href=""
                ><svg
                    viewBox="0 0 16 16"
                    className="bi bi-github"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    ></path></svg></a>
                <a href=""
                ><svg
                    viewBox="0 0 16 16"
                    className="bi bi-twitter"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    ></path></svg></a>
                <a href=""
                ><svg
                    viewBox="0 0 16 16"
                    className="bi bi-instagram"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    ></path></svg></a>
                <a href=""
                ><svg
                    viewBox="0 0 16 16"
                    className="bi bi-youtube"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                    ></path></svg></a>
            </div>
            <button>Resume</button>
            </div>
        </div> */}



        {/* 26th one, confirmation modal for admin side */}
        {/* <div>
            <div
            className="group select-none w-[250px] flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl"
            >
            <div className="">
                <div className="text-center p-3 flex-auto justify-center">
                <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="group-hover:animate-bounce w-12 h-12 flex items-center text-gray-600 fill-red-500 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    clip-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    fill-rule="evenodd"
                    ></path>
                </svg>
                <h2 className="text-xl font-bold py-4 text-gray-200">Are you sure?</h2>
                <p className="font-bold text-sm text-gray-500 px-2">
                    Do you really want to continue ? This process cannot be undone
                </p>
                </div>
                <div className="p-2 mt-2 text-center space-x-1 md:block">
                <button
                    className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300"
                >
                    Cancel
                </button>
                <button
                    className="bg-red-500 hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 hover:border-red-500 text-white hover:text-red-500 rounded-full transition ease-in duration-300"
                >
                    Confirm
                </button>
                </div>
            </div>
            </div>
        </div> */}



        {/* 27th one, user side notification, coming from admin notifications */}
        {/* <div>
            <div className="dropdown">
            <input
                hidden
                className="sr-only"
                name="state-dropdown"
                id="state-dropdown"
                type="checkbox"
            />
            <label
                aria-label="dropdown scrollbar"
                htmlFor="state-dropdown"
                className="trigger"
            ></label>

            <ul className="list webkit-scrollbar" role="list" dir="auto">
                <li className="listitem" role="listitem">
                <article className="article">Hover to view scrollbar.</article>
                </li>

                <li className="listitem" role="listitem">
                <article className="article">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
                    sunt tempora recusandae dolorum.
                </article>
                </li>

                <li className="listitem" role="listitem">
                <article className="article">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
                    sunt tempora recusandae dolorum.
                </article>
                </li>
            </ul>
            </div>
        </div> */}




        {/* 28th one, a sinple loader from uiverse */}
        {/* <div>
            <div className="loader">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div> */}



        {/* 29th one, no css, nice dropdown */}
        {/* <div>
            <div
            className="relative group rounded-lg w-64 bg-neutral-700 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]"
            >
            <svg
                y="0"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                width="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                height="100"
                className="w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300"
            >
                <path
                stroke-width="4"
                stroke-linejoin="round"
                stroke-linecap="round"
                fill="none"
                d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                className="svg-stroke-primary"
                ></path>
            </svg>
            <select
                className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            >
                <option className="bg-neutral-700">HTML</option>
                <option className="bg-neutral-700">React</option>
                <option className="bg-neutral-700">Vue</option>
                <option className="bg-neutral-700">Angular</option>
                <option className="bg-neutral-700">Svelte</option>
            </select>
            </div>
        </div> */}





        {/* 30th one, no css, search bar, can use in home, also in admin side */}
        {/* <div>
            <div
                className="p-5 overflow-hidden w-[60px] h-[60px] hover:w-[270px] bg-[#4070f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300"
                >
                <div className="flex items-center justify-center fill-white">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Isolation_Mode"
                    data-name="Isolation Mode"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    >
                    <path
                        d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
                    ></path>
                    </svg>
                </div>
                <input
                    type="text"
                    className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
                />
            </div>
        </div> */}



        {/* 31st one, search bar */}
        {/* <div>
            <input type="text" name="text" placeholder="Search 'UIverse'" className="input"></input>
        </div> */}





        {/* 32nd one, search bar */}
        {/* <div>
            <div className="search-panels">
                <div className="search-group">
                    <input required type="text" name="text" autoComplete="on" className="input" />
                    <label className="enter-label">Search</label>
                    <div className="btn-box">
                        <button className="btn-search">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path><circle id="svg-circle" cx="208" cy="208" r="144"></circle></svg>
                        </button>
                    </div>
                    <div className="btn-box-x">
                        <button className="btn-cleare">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" id="cleare-line"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div> */}






        {/* 33rd one, a nice choice for search bar */}
        {/* <div>
            <div className="container">
                <input type="text" name="text" className="input" required placeholder="Type to search..." />
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                        <title>Search</title>
                        <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path>
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></path>
                    </svg>
                </div>
            </div>
        </div> */}





        {/* 34th one, good choice for rating like poor, good,exc options, radobutton(test in another file, somewhere small issuue) */}
        {/* <div>
            <div className="wrapper">
            <div className="option">
                <input className="input" type="radio" name="btn" value="option1" checked />
                <div className="btn">
                <span className="span">Option</span>
                </div>
            </div>
            <div className="option">
                <input className="input" type="radio" name="btn" value="option2" />
                <div className="btn">
                <span className="span">Option</span>
                </div>  </div>
            <div className="option">
                <input className="input" type="radio" name="btn" value="option3" />
                <div className="btn">
                <span className="span">Option</span>
                </div>  
            </div>
            </div>

        </div> */}




        {/* 35th one , really amazing rating option with star */}
        {/* <div>
            <div className="radio">
            <input id="rating-5" type="radio" name="rating" value="5" />
            <label htmlFor="rating-5" title="5 stars">
                <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
                </svg>
            </label>

            <input id="rating-4" type="radio" name="rating" value="4" />
            <label htmlFor="rating-4" title="4 stars">
                <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
                </svg>
            </label>

            <input id="rating-3" type="radio" name="rating" value="3" />
            <label htmlFor="rating-3" title="3 stars">
                <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
                </svg>
            </label>

            <input id="rating-2" type="radio" name="rating" value="2" />
            <label htmlFor="rating-2" title="2 stars">
                <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
                </svg>
            </label>

            <input id="rating-1" type="radio" name="rating" value="1" />
            <label htmlFor="rating-1" title="1 star">
                <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                ></path>
                </svg>
            </label>
            </div>
        </div> */}



        {/* 36th one, good for category selection for sessions(few problems in selection) */}
        {/* <div>
            <div className="radio-inputs">
                <label className="radio">
                    <input type="radio" name="radio" checked />
                    <span className="name">HTML</span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio" />
                    <span className="name">React</span>
                </label>

                <label className="radio">
                    <input type="radio" name="radio" />
                    <span className="name">Vue</span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio" checked />
                    <span className="name">HTML</span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio" />
                    <span className="name">React</span>
                </label>

                <label className="radio">
                    <input type="radio" name="radio" />
                    <span className="name">Vue</span>
                </label>
            </div>

        </div> */}


        {/* 37th one, no css, for category selection for sessions(fixed, but few problem in selection) */}
        <div>
            <div className="flex space-x-2 border-[3px] border-purple-400 rounded-xl select-none">
                <label
                    className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
                >
                    <input
                    type="radio"
                    name="radio"
                    value="html"
                    className="peer hidden"
                    checked
                    />
                    <span
                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
                        HTML
                    </span>
                </label>

                <label
                    className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
                >
                    <input type="radio" name="radio" value="react" className="peer hidden" />
                    <span
                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
                        React
                    </span>
                </label>

                <label
                    className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
                >
                    <input type="radio" name="radio" value="vue" className="peer hidden" />
                    <span
                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
                        Vue
                    </span>
                </label>

                <label
                    className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
                >
                    <input
                    type="radio"
                    name="radio"
                    value="html"
                    className="peer hidden"
                    checked
                    />
                    <span
                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
                        HTML
                    </span>
                </label>

                <label
                    className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
                >
                    <input type="radio" name="radio" value="react" className="peer hidden" />
                    <span
                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
                        React
                    </span>
                </label>

                <label
                    className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
                >
                    <input type="radio" name="radio" value="vue" className="peer hidden" />
                    <span
                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
                        Vue
                    </span>
                </label>
            </div>
        </div>






        




	
        





        

      
    </div>
  )
}

export default Cards
