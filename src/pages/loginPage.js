import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';

import Logo from "../images/logo.jpg";

const LoginPage = () => {
    return (
        <div className="flex bg-gray-200">
            <div className="flex max-h-screen min-h-screen flex-col mx-auto w-5/12 rounded-2xl bg-gray-100 py-2">
                <img src={Logo} alt="demo logo" className="w-20 mx-auto" />
                <h1 className="text-4xl tracking-tighter font-serif mx-auto mb-2">Welcome to Invoice Generator</h1>
                <input className="focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 w-1/2 text-xl p-2 mx-auto border-2 border-gray-300 rounded-2xl mb-2" type="email" placeholder="Email" required />
                <input className="focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 w-1/2 text-xl p-2 mx-auto border-2 border-gray-300 rounded-2xl mb-2 " type="password" placeholder="Enter password" required />
                <a className="ml-32 mb-4 font-semibold" href="/">Forgot your password?</a>
                <button className="focus:outline-none rounded-full bg-red-600 w-1/2 m-auto text-white p-2">Log in</button>
                <h4 className="mx-auto my-2">OR</h4>
                <button className="bg-blue-700 text-white focus:outline-none rounded-full w-1/2 m-auto mb-2 p-2"><FontAwesomeIcon size="" className="m-0 p-0" color="green"></FontAwesomeIcon>Continue with Facebook</button>
                <button className="border border-gray-700 focus:outline-none rounded-full w-1/2 m-auto p-2">Continue with Google</button>
                <p className="mx-auto w-1/2 text-xs my-4  text-center border-b border-gray-300 pb-4">By continuing, you agree to Pinterest's <span className="font-bold">Terms of Service, Privacy policy.</span> </p>
                <a className="mx-auto text-sm font-bold" href="/">Not on Pinterest yet? Sign up</a>
            </div>
        </div>
    )
}
export default LoginPage;