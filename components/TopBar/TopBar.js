import React, { Fragment } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
// import Logo from '../../public/logo.jpg'

const TopBar = () => {
    return (
        <Fragment>
            <div className="absolute w-full">
                <div className="bg-white justify-items-stretch mb-12 h-16">
                    <div className="float-right flex mb-12">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 py-1 mx-2 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 py-1 mx-2 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 py-1 mx-2 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="fixed bg-gray-700 min-h-screen z-20 ml-0 mt-0 ">
                <div class="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0" >
                    <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between bg-gray-900">
                        <div className="w-full p-2 rounded">
                            <a href="/">
                                <img src='/logo.jpg' alt="logo" className="object-contain w-28 rounded"></img>
                            </a>
                        </div>
                        <a href="/" class="text-lg font-semibold tracking-widest text-gray-300 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">PENTAFOX INVOICE</a>
                        <button class="rounded-lg md:hidden  focus:outline-none focus:shadow-outline">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                                <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                                <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <nav class="flex-grow md:block bg-gray-700 pb-8 ">
                        <a href="/" class="block font-medium text-sm text-gray-300 py-4 px-12 hover:bg-gray-800 focus:bg-gray-800 ">
                            Home
                    </a>
                        <a href="/" class="block font-medium text-sm text-gray-300 py-4 px-12 hover:bg-gray-800 focus:bg-gray-800">
                            Invoices
                    </a>
                        <a href="/" class="block font-medium text-sm text-gray-300 py-4 px-12 hover:bg-gray-800 focus:bg-gray-800">
                            Businesses
                    </a>
                        <a href="/" class="block font-medium text-sm text-gray-300 py-4 px-12 hover:bg-gray-800 ">
                            My Clients
                    </a>
                        <a href="/" class="block font-medium text-sm text-gray-300 py-4 px-12 hover:bg-gray-800 ">
                            Payment
                    </a>
                        <a href="/" class="block font-medium text-sm text-gray-300 py-4 px-12 hover:bg-gray-800 ">
                            Logout
                    </a>
                        {/* <a href="/MyInvoice" class="px-4 py-2 mt-2 text-sm font-semibold  bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-100 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-200 focus:text-gray-200 hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:shadow-outline">
                        Invoices
                    </a> */}
                    </nav>
                </div>
            </div>

        </Fragment>

    );
}
export default TopBar;