'use client';

import Link from "next/link"
import { Playfair_Display } from 'next/font/google'
import React from "react";
import LogInModal from "./LogIn";
import SignUpModal from "./SignUp";
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] })


export default function Navbar() {
    const [loginOpen, setLoginOpen] = React.useState(false);
    const [signupOpen, setSignupOpen] = React.useState(false);

    const handleLoginOpen = () => setLoginOpen(true);
    const handleSignupOpen = () => setSignupOpen(true);

    const handleClose = () => {
        setLoginOpen(false);
        setSignupOpen(false);
    };

    const signUpButtonStyle = {
        padding: '8px',
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center' as const,
        lineHeight: '1.5'
      };

    const logInButtonStyle = {
        padding: '8px',
        fontSize: '15px',
        fontWeight: 'bold',
        backgroundColor: 'white',
        color: 'maroon',
        border: '2px solid maroon',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center' as const,
        lineHeight: '1.25'
      };


    return (
        <>
            <nav className="bg-white border-b border-gray-400 p-4 pl-8 pr-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className={playfair.className + " flex items-center"}>
                        <img
                            src="/favicon.ico"
                            alt="Logo"
                            className="w-12 h-12 mr-0.1" // Adjust the width and height as needed
                        />
                        <span className="text-self-center whitespace-nowrap text-3xl font-extrabold text-rose-900 hover:text-rose-950">RateMy</span>
                        <span className="text-self-center whitespace-nowrap text-3xl font-extrabold text-slate-900">Housing</span>
                    </Link>
                    <div>
                        <Link href="/about" className="text-self-center text-1xl font-bold text-rose-900 hover:text-rose-950 underline mr-2">About</Link>
                        <Link href="/rate" className="text-self-center text-1xl font-bold text-rose-900 hover:text-rose-950 underline mr-2">Add Listing</Link>
                        <a onClick={handleLoginOpen} style={logInButtonStyle} className=" border text-rose-900 hover:text-rose-950 border-rose-900 hover:border-rose-950 mr-1">Log In</a>
                        <a onClick={handleSignupOpen} style={signUpButtonStyle} className="bg-rose-900 hover:bg-rose-950">Sign Up</a>
                    </div>
                </div>
            </nav>
            <LogInModal open={loginOpen} handleClose={handleClose} openSignUpModal={handleSignupOpen} />
            <SignUpModal open={signupOpen} handleClose={handleClose} />
        </>
    );
}

