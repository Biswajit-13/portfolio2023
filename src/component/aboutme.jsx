import { Typography, Avatar } from '@material-tailwind/react';
import React from 'react';
import Profile from "../assets/profile.jpg"

const Aboutme = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-white overflow-hidden">
            <Typography variant="h1" className="text-4xl font-extrabold mb-2">
                Full Stack, MERN Developer
            </Typography>
            <Typography variant="h2" className="text-xl animate-bounce text-gray-300 mb-4 animate-fade-in-up">
                I design and code
            </Typography>
            <div className="flex flex-col items-center gap-4 animate-fade-in-up">
                <Avatar size='xxl' className='h-40 w-40 transform hover:scale-110 transition-transform duration-300'
                    src={Profile}
                    alt="avatar"
                />
                <Typography variant="h6" className="text-lg font-medium animate-pulse">
                    Biswajit Paul
                </Typography>
                <div className="text-gray-400 text-sm text-center">
                    <p className="mb-1">
                        📞 Phone: <span className="text-gray-200">+91 6289282147</span>
                    </p>
                    <p>
                        ✉️ Email: <span className="text-gray-200">biswajit.paul2020@uem.edu.in</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;
