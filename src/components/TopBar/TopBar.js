import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../images/logo.jpg'

const TopBar = () => {
    return (
        <div className="flex justify-between max-h-12 w-full p-2 bg-opacity-25 bg-transparent fixed z-50">
            <img src={Logo} alt="logo" className="object-contain w-28"></img>
            {/* <FontAwesomeIcon icon={faUser} className="mr-16 mt-2" /> */}
            <div className="flex justify-between mr-4">
                <a className="px-6" href="/">Account</a>
                <a className="px-6" href="/">History</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="40" viewBox="0 0 24 24" stroke="currentColor" className="pl-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <FontAwesomeIcon className="mt-2" icon={faAngleDown} />
            </div>
        </div>

    );
}
export default TopBar;