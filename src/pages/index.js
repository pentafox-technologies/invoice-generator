import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import TopBar from '../components/TopBar/TopBar';
import Logo from '../images/logo.jpg';
import CompanyDetails from '../components/CompanyDetails/CompanyDetails';
import ItemsList from '../components/ItemList/ItemsList';
// import Pdf from "react-to-pdf";

const ref = React.createRef();
const HomePage = () => {
  const [value, setValue] = useState({
    title: "Invoice",
    name: "Pentafox Texhnologies Private Limited",
    address: "59, Journalist Colony, Thiruvanmiyur",
    city: "Chennai - 600041",
    gst: "GSTIN - 33AAICP5142K1ZC",
    state: "STATE - 33 - Tamil Nadu",
    pan: "PAN - AAICP5142K"
  })
  const [currency, setCurrency] = useState("₹")
  const [imgPreview, setImgPreview] = useState({ file: null });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleClick = (e) => {
    setCurrency(e.target.value)
  }
  const onChange = (event) => {
    const selected = event.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview({ file: URL.createObjectURL(selected) });
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }

  }
  return (
    <>
      <div className="bg-gray-200 min-h-screen min-w-screen" >
        <div className="">
          <TopBar />
        </div>
        <div className="lg:flex lg:justify-center lg:w-8/12   lg:mx-auto">
          <div className="lg:block hidden " >
            {/* <Pdf targetRef={ref} filename="invoice.pdf" size="A4">
              {({ toPdf }) => <div className="mt-20 w-8 mr-12"><FontAwesomeIcon onClick={toPdf} className=" fixed cursor-pointer" icon={faFileAlt} size="3x" color="gray" /></div>}
            </Pdf> */}
          </div>
          <div className=" bg-white lg:mt-20 lg:p-12 p-4 min-h-screen" >
            <div className="text-center mb-4 lg:mt-0 mt-8" ref={ref}>
              <input className="focus:outline-none mx-auto text-xl font-semibold text-center text-gray-700  hover:bg-yellow-100 focus:bg-yellow-100" value={value.title} type="text" placeholder={value.title} onChange={(e) => handleChange(e)} />
            </div>
            <div className="flex mb-8" ref={ref}>
              <div className="">
                <input className="font-semibold w-full focus:outline-none text-gray-600 lg:text-xl text-sm hover:bg-yellow-100 focus:bg-yellow-100" value={value.name} type="text" onChange={(e) => handleChange(e)} />
                <input className="font-medium w-full text-xs focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" type="address" value={value.address} placeholder="address line 1" onChange={(e) => handleChange(e)} />
                <input className="font-medium w-full text-xs focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" type="address" value={value.city} placeholder="address line 2" onChange={(e) => handleChange(e)} />
                <input className="font-medium w-full text-xs focus:outline-none leading-none hover:bg-yellow-100 focus:bg-yellow-100" type="text" value={value.gst} onChange={(e) => handleChange(e)} />
                <input className="font-medium text-xs w-full focus:outline-none leading-none hover:bg-yellow-100 focus:bg-yellow-100" type="text" value={value.state} onChange={(e) => handleChange(e)} />
                <input className="font-medium text-xs w-full focus:outline-none leading-none hover:bg-yellow-100 focus:bg-yellow-100" type="text" value={value.pan} onChange={(e) => handleChange(e)} />
              </div>
              <div>
                <div className="lg:w-24 mt-8 w-20 m-auto cursor-pointer">
                  {error && <p className="text-red-500 text-xs">File not supported</p>}
                  <div>
                    {
                      <>
                        <label htmlFor="fileUpload" className="">
                          {imgPreview.file ? <img src={imgPreview.file} alt="could not be stored" /> : <img src={Logo} alt="alter" className="" />} </label>
                        <input type="file" id="fileUpload" onChange={onChange} className="hidden" />
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>
            <CompanyDetails />
            <ItemsList currency={currency} />
          </div>
          <div className="w-8 ml-6 mt-20 lg:block hidden ">
            <select className="fixed p-1 text-2xl focus:outline-none w-12" onBlur={(e) => handleClick(e)}>
              <option>₹</option>
              <option>$</option>
              <option>£</option>
              <option>€</option>
              <option>¥</option>
            </select>
          </div>
        </div>

      </div>

    </>
  );
}

export default HomePage;
