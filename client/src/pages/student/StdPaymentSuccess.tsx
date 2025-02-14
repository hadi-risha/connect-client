import React, { useEffect } from 'react';
import { CharmCircleTick, EpSuccessFilled } from '../../assets/userIcons/SessionIcons';
import axiosInstance from '../../utils/user/axiosInstance';
import { useNavigate } from 'react-router-dom';
import '../../styles/paymentSuccess.css'


const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();

  const handleBooking = async () => {
    navigate('/student/upcoming-sessions');
  };
   
  return (
    <>
      <div className="w-screen h-screen bg-white flex justify-center items-center -mt-16">
        <div className="px-16 py-20 rounded-2xl text-center space-y-3 shadow-lg">
            <EpSuccessFilled className='ml-28' />
            <h1 className="text-black font-bold text-xl font-serif">Payment Successful!</h1>
            <p className="text-black font-light text-sm">Your session has been successfully Reserved.</p>
            <button 
            onClick={handleBooking}
            className="w-20 h-8 text-black bg-[#c291fe] font-semibold text-md rounded-3xl hover:bg-[#f6f6f6] hover:border hover:border-black">Ok</button>
        </div>


        {/* <div className="results-summary-container">
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
                <button 
                className="btn btn__continue"
                onClick={handleBooking}
                >Ok 
                </button>
                
                </div>
            </div>
        </div> */}
      </div>
    </>
  );
}

export default PaymentSuccess;
